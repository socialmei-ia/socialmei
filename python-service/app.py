from fastapi import FastAPI
from pydantic import BaseModel, Field

app = FastAPI(title="SocialME Python Service")


class TextInput(BaseModel):
    # Mantém o contrato usado pelo workflow n8n.
    text: str = Field(alias="texto")


@app.get("/")
def root():
    return {"status": "ok", "service": "socialmei-python"}


@app.get("/health")
def health():
    return {"status": "healthy"}


@app.post("/processar")
def process_text(payload: TextInput):
    text = payload.text
    return {
        "original": text,
        "maiusculo": text.upper(),
        "quantidade_caracteres": len(text),
    }
