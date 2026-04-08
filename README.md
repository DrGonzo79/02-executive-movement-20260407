# Executive Movement Arbitrage Engine

A public-safe prototype repo showing a B2B executive movement detection engine.

## Structure
- `backend/` FastAPI service + mock scraper/parser engine
- `frontend/` React/TypeScript interactive demo
- `site/` polished static opportunity page from the canonical arbitrage-opportunities catalog
- `docs/` product and architecture documents

## Security posture
- No `.env` files committed
- No API keys or credentials committed
- `.gitignore` blocks secret-bearing files and generated dependency trees
- `node_modules/` removed from version control expectations
