import express from 'express';
import cors from 'cors';
import caseRoutes from './routes/caseRoutes.js';

const app=express();

app.use(cors());
app.use(express.json());

app.use('/api/cases', caseRoutes);
export default app;