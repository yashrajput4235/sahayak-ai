import { createCase } from "../services/dbService.js";
import { addToQueue } from "../services/queueService.js";
import logger from "../utils/logger.js";

export const generateCase = async (req, res) => {
    try {
        const { notes } = req.body;
        if (!notes) {
            return res.status(400).json({ error: "Notes required" });
        }

        const userId = req.user.user_id;
        logger.info("Queuing case generation", { user_id: userId });

        // Create case immediately with 'pending' status
        const newCase = await createCase({ notes, user_id: userId, status: 'pending' });

        // Push to queue with retry counter
        await addToQueue({ notes, userId, caseId: newCase.id, retry: 0 });

        logger.info("Case queued", { caseId: newCase.id, user_id: userId });
        res.status(202).json({ caseId: newCase.id, status: 'pending' });

    } catch (error) {
        logger.error("Error queuing case", { message: error.message });
        res.status(500).json({ error: "Failed to queue case" });
    }
};