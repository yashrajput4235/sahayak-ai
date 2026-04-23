import {getRelevantSchemes} from "../services/ragService.js";
import {callAI} from "../services/aiService.js";

export const generateCase=async(req,res)=>{
    try{
        const {notes}=req.body;
        if(!notes){
            return res.status(400).json({error:"Notes required"});
        }
        // rag logic
        const schemes=await getRelevantSchemes(notes);

        // ai logic
        const aiResponse=await callAI(notes,schemes);
        // save
        await saveCase(notes,aiResponse);
        res.json(aiResponse);
    }
    catch(error){
        console.error("Error generating case:",error);
        res.status(500).json({error:"Failed to generate case"});
    }       
}