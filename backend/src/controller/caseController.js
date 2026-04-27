import { getRelevantSchemes } from "../services/ragService.js";
import { callAI } from "../services/aiService.js";
import { saveCase } from "../services/dbService.js";

export const generateCase = async (req, res) => {
    try {
        const { notes } = req.body;
        if (!notes) {
            return res.status(400).json({ error: "Notes required" });
        }

        const schemes = await getRelevantSchemes(notes);
        const aiResponse = await callAI(notes, schemes);
        await saveCase(notes, aiResponse, req.user.user_id);
        res.json(aiResponse);
    } catch (error) {
        console.error("Error generating case:", error);
        res.status(500).json({ error: "Failed to generate case" });
    }
};