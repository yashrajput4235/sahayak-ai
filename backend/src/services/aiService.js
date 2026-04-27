import axios from "axios";

function cleanJSON(text) {
  return text.replace(/```json|```/g, "").trim();
}

function validatePlan(plan) {
  if (!Array.isArray(plan) || plan.length !== 30) return false;
  for (let i = 0; i < 30; i++) {
    if (plan[i].day !== i + 1) return false;
  }
  return true;
}

function validateRisk(data) {
  const { risk, risk_score } = data;
  if (typeof risk_score !== "number") return false;
  if (risk_score < 0 || risk_score > 100) return false;
  if (risk === "High" && risk_score < 70) return false;
  if (risk === "Medium" && (risk_score < 40 || risk_score > 70)) return false;
  if (risk === "Low" && risk_score > 40) return false;
  return true;
}

const MODELS = [
  "gemini-2.5-flash",
  "gemini-2.5-pro",
  "gemini-2.0-flash",
  "gemini-2.0-flash-lite",
];

async function callGemini(prompt, retries = 2) {
  for (const model of MODELS) {
    for (let attempt = 0; attempt <= retries; attempt++) {
      try {
        const res = await axios.post(
          `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${process.env.GEMINI_API_KEY}`,
          { contents: [{ parts: [{ text: prompt }] }] }
        );
        console.log(`[AI] Used model: ${model}`);
        return res.data.candidates[0].content.parts[0].text;
      } catch (err) {
        const status = err.response?.data?.error?.status;
        console.warn(`[AI] ${model} attempt ${attempt + 1} failed: ${status}`);
        if (status === 'RESOURCE_EXHAUSTED') break;
        if (status === 'UNAVAILABLE' && attempt < retries) {
          await new Promise(r => setTimeout(r, (attempt + 1) * 3000));
          continue;
        }
        break;
      }
    }
  }
  throw new Error("All AI models failed or quota exceeded");
}

export const callAI = async (notes, schemes) => {
  const prompt = `
You are an expert NGO case management assistant.

Analyze the case and STRICTLY return JSON in this format:

{
  "risk": "Low | Medium | High",
  "risk_score": number (0-100),
  "plan": [
    {"day": 1, "task": "", "priority": "High/Medium/Low"}
  ],
  "schemes": [
    {
      "name": "",
      "reason": "",
      "steps": ""
    }
  ]
}

RULES:
- risk_score must be between 0 and 100
- If risk is High → score > 70
- If Medium → 40–70
- If Low → < 40
- Plan MUST contain EXACTLY 30 items
- Days must be sequential from 1 to 30
- DO NOT use "..." or skip any day
- Each day must have one real actionable task
- Use ONLY relevant schemes from provided list
- Output ONLY valid JSON (no extra text)

Case:
${notes}

Relevant Schemes:
${JSON.stringify(schemes)}
`;

  try {
    let raw = await callGemini(prompt);
    raw = cleanJSON(raw);
    const parsed = JSON.parse(raw);

    if (!validatePlan(parsed.plan)) {
      return { status: "needs_review", reason: "Invalid 30-day plan", raw_output: raw };
    }
    if (!validateRisk(parsed)) {
      return { status: "needs_review", reason: "Invalid risk score", raw_output: raw };
    }
    return parsed;
  } catch (err) {
    console.error("[AI] Fatal error:", err.message);
    return { status: "needs_review", error: err.message };
  }
};
