import asyncio
from typing import List

async def fetch_latest_filings() -> List[str]:
    """
    Mocks scraping SEC 8-K filings and PR Newswire RSS feeds.
    In production, this utilizes BeautifulSoup and Playwright.
    """
    await asyncio.sleep(1.5) # Simulate network latency
    return [
        "FORM 8-K: Acme Corp announces the appointment of Sarah Jenkins as Chief Technology Officer, effective immediately.",
        "PR NEWSWIRE: GlobalData Inc. is thrilled to welcome Marcus Vance to the leadership team as the new Vice President of Sales.",
        "SEC FILING: BetaTech appoints David Lee to the board of directors and transitioning to CFO role."
    ]