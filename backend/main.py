from fastapi import FastAPI, BackgroundTasks
from pydantic import BaseModel
from typing import List, Optional
import asyncio
from .engine.scraper import fetch_latest_filings
from .engine.llm_parser import extract_executives

app = FastAPI(title="B2B Executive Movement AI API")

class ExecMovement(BaseModel):
    name: str
    new_role: str
    company: str
    inferred_email: str
    confidence_score: float

class PipelineResponse(BaseModel):
    status: str
    data: List[ExecMovement]

mock_db = []

@app.get("/api/health")
def health_check():
    return {"status": "healthy", "service": "Executive Movement Arbitrage Engine"}

@app.post("/api/pipeline/run", response_model=PipelineResponse)
async def trigger_pipeline(background_tasks: BackgroundTasks):
    """
    Simulates fetching RSS/SEC filings, passing them to the LLM for entity extraction,
    and generating inferred emails.
    """
    # 1. Scrape
    raw_texts = await fetch_latest_filings()
    
    # 2. Extract (Mocking LLM latency)
    extracted = await extract_executives(raw_texts)
    
    mock_db.extend(extracted)
    
    return {"status": "success", "data": extracted}

@app.get("/api/pipeline/results", response_model=PipelineResponse)
def get_results():
    """Fetch previously processed executive movements."""
    return {"status": "success", "data": mock_db}
