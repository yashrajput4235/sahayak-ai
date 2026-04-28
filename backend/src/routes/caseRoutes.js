import express from "express";
import { generateCase, getCaseStatus } from "../controller/caseController.js";
import { verifyAuth } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post('/generate', verifyAuth, generateCase);
router.get('/status/:caseId', verifyAuth, getCaseStatus);

export default router;