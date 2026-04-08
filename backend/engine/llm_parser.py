import asyncio
from typing import List

async def extract_executives(raw_texts: List[str]) -> List[dict]:
    """
    Mocks an Anthropic/OpenAI call with Pydantic structured output.
    Extracts name, role, company, and guesses email formats.
    """
    await asyncio.sleep(2) # Simulate LLM inference latency
    
    # Mocking the JSON output an LLM would return
    return [
        {
            "name": "Sarah Jenkins",
            "new_role": "Chief Technology Officer",
            "company": "Acme Corp",
            "inferred_email": "sarah.jenkins@acmecorp.com",
            "confidence_score": 0.94
        },
        {
            "name": "Marcus Vance",
            "new_role": "Vice President of Sales",
            "company": "GlobalData Inc",
            "inferred_email": "mvance@globaldata.com",
            "confidence_score": 0.88
        },
        {
            "name": "David Lee",
            "new_role": "Chief Financial Officer",
            "company": "BetaTech",
            "inferred_email": "david.lee@betatech.com",
            "confidence_score": 0.91
        }
    ]