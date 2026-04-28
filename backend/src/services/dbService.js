import axios from 'axios';

const URL = process.env.SUPABASE_URL;
const KEY = process.env.SUPABASE_SERVICE_KEY;

export const saveCase = async (notes, output, userId) => {
    await axios.post(
        `${URL}/rest/v1/cases`,
        {
            notes,
            ai_output: output,
            user_id: userId,
            status: 'completed'
        },
        {
            headers: {
                apikey: KEY,
                Authorization: `Bearer ${KEY}`,
                "Content-Type": "application/json"
            }
        }
    );
};

export const getCaseById = async (caseId) => {
    const res = await axios.get(
        `${URL}/rest/v1/cases?id=eq.${caseId}`,
        {
            headers: {
                apikey: KEY,
                Authorization: `Bearer ${KEY}`,
            }
        }
    );
    return res.data[0] ?? null;
};

export const fetchUserCases = async (userId) => {
    const res = await axios.get(
        `${URL}/rest/v1/cases?user_id=eq.${userId}&order=created_at.desc`,
        {
            headers: {
                apikey: KEY,
                Authorization: `Bearer ${KEY}`,
            }
        }
    );
    return res.data;
};

export const createUser = async (userData) => {
    const res = await axios.post(
        `${URL}/rest/v1/users`,
        userData,
        {
            headers: {
                apikey: KEY,
                Authorization: `Bearer ${KEY}`,
                "Content-Type": "application/json",
                Prefer: "return=representation"
            }
        }
    );
    return res.data[0];
};

export const findUserByEmail = async (email) => {
    const res = await axios.get(
        `${URL}/rest/v1/users?email=eq.${email}`,
        {
            headers: {
                apikey: KEY,
                Authorization: `Bearer ${KEY}`,
            }
        }
    );
    return res.data[0];
};

export const createCase = async (data) => {
    const res = await axios.post(
        `${URL}/rest/v1/cases`,
        data,
        {
            headers: {
                apikey: KEY,
                Authorization: `Bearer ${KEY}`,
                Prefer: "return=representation"
            }
        }
    );
    return res.data[0];
};

export const markCaseProcessing = async (caseId) => {
    await axios.patch(
        `${URL}/rest/v1/cases?id=eq.${caseId}`,
        { status: 'processing' },
        {
            headers: {
                apikey: KEY,
                Authorization: `Bearer ${KEY}`,
                "Content-Type": "application/json"
            }
        }
    );
};

export const updateCase = async (caseId, output) => {
    const isFailed = output.status === 'failed';
    await axios.patch(
        `${URL}/rest/v1/cases?id=eq.${caseId}`,
        {
            ai_output: isFailed ? null : output,
            status: isFailed ? 'failed' : 'completed',
            error: output.error || null
        },
        {
            headers: {
                apikey: KEY,
                Authorization: `Bearer ${KEY}`,
                "Content-Type": "application/json"
            }
        }
    );
};
