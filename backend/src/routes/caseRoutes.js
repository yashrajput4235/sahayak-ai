import express from "express";
import { generateCase } from "../controller/caseController.js";
import { verifyAuth } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post('/generate', verifyAuth, generateCase);

export default router;