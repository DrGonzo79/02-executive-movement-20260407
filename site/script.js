const demoData = {
  "title": "B2B Executive Movement Arbitrage",
  "views": [
    {
      "id": "mechanism",
      "label": "AI Arbitrage Mechanism",
      "teaser": "How the edge is captured and executed.",
      "summary": "System continuously monitors SEC filings (8-K), press release wires (PR Newswire), and niche industry blogs. It uses AI to extract executive movement instantly, triggering highly personalized, automated cold email outreach congratulating them on the new role and pitching a relevant B2B SaaS tool, completely bypassing the crowded LinkedIn/ZoomInfo inbox.",
      "secondary": "Automation-first opportunity capture",
      "score": 92,
      "bullets": [
        "System continuously monitors SEC filings (8-K), press release wires (PR Newswire), and niche industry blogs. It uses AI to extract executive movement instantly, triggering highly personalized, automated cold email outreach congratulating them on the new role and pitching a relevant B2B SaaS tool, completely bypassing the crowded LinkedIn/ZoomInfo inbox."
      ]
    },
    {
      "id": "architecture",
      "label": "Architecture & Components",
      "teaser": "Monitoring, decisioning, and execution stack.",
      "summary": "Core automated components required to run the workflow.",
      "secondary": "Operational system design",
      "score": 88,
      "bullets": [
        "**Monitoring:** RSS feeds of SEC filings, PR wires, and Google News alerts.",
        "**Decision Engine:** LLM extracts [Executive Name], [Old Role], [New Role], [Company].",
        "**Execution:** API integration with Hunter.io/Apollo to guess their new email (first.last@newcompany.com), pushing directly to Instantly/Lemlist for automated outreach."
      ]
    },
    {
      "id": "speed-gap",
      "label": "Speed Gap",
      "teaser": "Where incumbents are too slow.",
      "summary": "B2B lead generation relies almost entirely on LinkedIn and ZoomInfo. However, executives often wait weeks or months to update their profiles after taking a new role. A new VP of Sales or CTO makes 80% of their new software purchasing decisions in their first 90 days. The lag is between the actual hire and the LinkedIn update.",
      "secondary": "Underlying market lag thesis",
      "score": 90,
      "bullets": [
        "B2B lead generation relies almost entirely on LinkedIn and ZoomInfo. However, executives often wait weeks or months to update their profiles after taking a new role. A new VP of Sales or CTO makes 80% of their new software purchasing decisions in their first 90 days. The lag is between the actual hire and the LinkedIn update."
      ]
    },
    {
      "id": "risk",
      "label": "Risk Profile",
      "teaser": "Compression horizon and operational constraints.",
      "summary": "Email deliverability (guessing new emails that haven't warmed up). Compression: 1-2 years until ZoomInfo integrates this real-time news extraction natively.",
      "secondary": "Timing and execution risk",
      "score": 74,
      "bullets": [
        "Email deliverability (guessing new emails that haven't warmed up). Compression: 1-2 years until ZoomInfo integrates this real-time news extraction natively."
      ]
    },
    {
      "id": "prototype",
      "label": "Prototype Build",
      "teaser": "Immediate Day 1 execution plan.",
      "summary": "Fastest path to a working proof of concept.",
      "secondary": "Launch sequence",
      "score": 86,
      "bullets": [
        "Ingest PR Newswire RSS.",
        "Prompt Claude to detect 'hired', 'appointed', 'joins as'.",
        "Output a structured JSON of Name, Role, Company to a Google Sheet."
      ]
    }
  ]
};


const navList = document.getElementById("navList");
const panelTitle = document.getElementById("panelTitle");
const panelSummary = document.getElementById("panelSummary");
const panelSecondary = document.getElementById("panelSecondary");
const panelScore = document.getElementById("panelScore");
const panelBullets = document.getElementById("panelBullets");
const scoreValue = document.getElementById("scoreValue");
const scoreLabel = document.getElementById("scoreLabel");

function render(selectedId = demoData.views[0].id) {
  navList.innerHTML = "";
  demoData.views.forEach((view) => {
    const button = document.createElement("button");
    button.className = `nav-item${view.id === selectedId ? " active" : ""}`;
    button.type = "button";
    button.innerHTML = `<strong>${view.label}</strong><span>${view.teaser}</span>`;
    button.addEventListener("click", () => update(view.id));
    navList.appendChild(button);
  });
  update(selectedId, false);
}

function update(selectedId, rerender = true) {
  const selected = demoData.views.find((item) => item.id === selectedId) || demoData.views[0];
  panelTitle.textContent = selected.label;
  panelSummary.textContent = selected.summary;
  panelSecondary.textContent = selected.secondary;
  panelScore.textContent = selected.score;
  scoreValue.textContent = selected.score;
  scoreLabel.textContent = selected.teaser;
  panelBullets.innerHTML = "";
  selected.bullets.forEach((bullet) => {
    const li = document.createElement("li");
    li.textContent = bullet;
    panelBullets.appendChild(li);
  });
  if (rerender) render(selected.id);
}

render();
