#!/usr/bin/env bash

set -euo pipefail
umask 077

PROJECT_DIR="${SOCIALMEI_PROJECT_DIR:-$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)}"
BACKUP_DIR="${SOCIALMEI_BACKUP_DIR:-$PROJECT_DIR/backups}"
BACKUP_TIMESTAMP="$(date +'%Y-%m-%d_%H-%M-%S')"
POSTGRES_CONTAINER="${SOCIALMEI_POSTGRES_CONTAINER:-socialmei-postgres}"
N8N_CONTAINER="${SOCIALMEI_N8N_CONTAINER:-socialmei-n8n}"

cd "$PROJECT_DIR"
mkdir -p "$BACKUP_DIR"
BACKUP_DIR="$(cd -- "$BACKUP_DIR" && pwd)"

# O prefixo do volume depende do nome do projeto Compose.
N8N_VOLUME="$(docker inspect --format '{{range .Mounts}}{{if eq .Destination "/home/node/.n8n"}}{{.Name}}{{end}}{{end}}' "$N8N_CONTAINER")"
if [[ -z "$N8N_VOLUME" ]]; then
  echo "Volume do n8n não encontrado; nenhum serviço foi interrompido." >&2
  exit 1
fi

echo "Iniciando backup SocialMEI"
DATABASE_BACKUP="$BACKUP_DIR/postgres_$BACKUP_TIMESTAMP.dump"
CONFIG_BACKUP="$BACKUP_DIR/config_$BACKUP_TIMESTAMP.tar.gz"
N8N_BACKUP="$BACKUP_DIR/n8n_data_$BACKUP_TIMESTAMP.tar.gz"

cleanup() {
  local exit_status=$?
  rm -f -- "$DATABASE_BACKUP.partial" "$CONFIG_BACKUP.partial" "$N8N_BACKUP.partial"
  return "$exit_status"
}
trap cleanup EXIT

docker exec "$POSTGRES_CONTAINER" \
  sh -c 'pg_dump -U "$POSTGRES_USER" -d "$POSTGRES_DB" -Fc' \
  > "$DATABASE_BACKUP.partial"
mv -- "$DATABASE_BACKUP.partial" "$DATABASE_BACKUP"

# O arquivo contém .env; armazene-o somente em local privado.
tar -czf "$CONFIG_BACKUP.partial" \
  compose.yaml compose.override.yaml Caddyfile .env \
  python-service database n8n-workflows
mv -- "$CONFIG_BACKUP.partial" "$CONFIG_BACKUP"

restart_n8n() {
  local exit_status=$?
  if ! docker compose start n8n; then
    echo "Não foi possível reiniciar n8n; intervenção necessária." >&2
    exit_status=1
  fi
  cleanup || true
  return "$exit_status"
}

docker compose stop n8n
trap restart_n8n EXIT
docker run --rm \
  -v "$N8N_VOLUME":/data:ro \
  -v "$BACKUP_DIR":/backup \
  alpine \
  tar -czf "/backup/$(basename -- "$N8N_BACKUP").partial" -C /data .
mv -- "$N8N_BACKUP.partial" "$N8N_BACKUP"
docker compose start n8n
trap cleanup EXIT

# Só aplica retenção após concluir as três etapas.
find "$BACKUP_DIR" -type f \
  \( -name "*.dump" -o -name "*.tar.gz" \) \
  -mtime +14 -delete

echo "Backup concluído"
