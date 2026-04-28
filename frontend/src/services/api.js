import logoImg from '../assets/logo.png';

const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const LOGO_URL = logoImg;

const getHeaders = () => {
  const token = localStorage.getItem('sahayak_token');
  return {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
};

const request = async (method, path, body) => {
  const res = await fetch(`${BASE_URL}${path}`, {
    method,
    headers: getHeaders(),
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Request failed');
  return data;
};

export const apiPost = (path, body) => request('POST', path, body);
export const apiGet = (path) => request('GET', path);
