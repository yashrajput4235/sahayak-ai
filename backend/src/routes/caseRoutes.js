import express from "express";
import {genrateCase} from "../controllers/caseController.js";

const router=express.Router();

router.post('/generate',genrateCase);

export default router;