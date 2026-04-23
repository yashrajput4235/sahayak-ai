import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

import schemes from "./schemesData.js";

async function getEmbedding(text) {
  const res = await axios.post(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-embedding-001:embedContent?key=${GEMINI_API_KEY}`,
    {
      content: {
        parts: [{ text }]
      },
      outputDimensionality: 1536
    }
  );

  return res.data.embedding.values;
}

async function insertSchemes() {
  for (const scheme of schemes) {
    const text = `
    ${scheme.name}
    ${scheme.category}
    ${scheme.eligibility}
    ${scheme.benefits}
    ${scheme.keywords.join(" ")}
    `;

    const embedding = await getEmbedding(text);

    await axios.post(
      `${SUPABASE_URL}/rest/v1/schemes`,
      {
        ...scheme,
        embedding
      },
      {
        headers: {
          apikey: SUPABASE_SERVICE_KEY,
          Authorization: `Bearer ${SUPABASE_SERVICE_KEY}`,
          "Content-Type": "application/json",
          "Prefer": "resolution=merge-duplicates"
        }
      }
    );

    console.log(`Inserted: ${scheme.name}`);
  }
}

insertSchemes();