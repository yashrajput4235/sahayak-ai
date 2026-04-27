import axios from 'axios';

async function getEmbedding(text) {
  const res = await axios.post(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-embedding-001:embedContent?key=${process.env.GEMINI_API_KEY}`,
    {
      content: { parts: [{ text }] },
      outputDimensionality: 1536
    }
  );
  return res.data.embedding.values;
}

export const getRelevantSchemes = async (notes) => {
    try {
        const query_embedding = await getEmbedding(notes);

        const res = await axios.post(
            `${process.env.SUPABASE_URL}/rest/v1/rpc/match_schemes`,
            {
                query_embedding,
                match_count: 5
            },
            {
                headers: {
                    apikey: process.env.SUPABASE_SERVICE_KEY,
                    Authorization: `Bearer ${process.env.SUPABASE_SERVICE_KEY}`,
                    "Content-Type": "application/json"
                }
            }
        );
        return res.data;
    } catch (error) {
        console.error("Error fetching schemes:", error.response?.data || error.message);
        return [];
    }
};