# 🧠 SAHAYAK AI

> AI-powered case management platform for NGOs and community workers to assess risk, generate 30-day action plans, and match beneficiaries to government schemes.

---

## 📌 Features

- 🔐 **Auth** — Register & login with JWT-based authentication
- 🛡️ **Risk Assessment** — AI rates each case as Low / Medium / High with a 0–100 score
- 📅 **30-Day Action Plan** — Personalized day-by-day intervention plan
- 🏛️ **Scheme Matching** — RAG-powered matching to 140+ Indian government schemes
- 💾 **Case Storage** — All cases saved to Supabase
- ⚙️ **Background Worker** — Queue-based async AI processing

---

## 🗂️ Project Structure

```
sahayak-ai/
├── backend/
│   ├── src/
│   │   ├── controller/
│   │   │   ├── authController.js     # register, login
│   │   │   └── caseController.js     # generate AI case
│   │   ├── middleware/
│   │   │   └── authMiddleware.js     # JWT Bearer token verification
│   │   ├── routes/
│   │   │   ├── authRoutes.js         # POST /api/auth/register, /login
│   │   │   └── caseRoutes.js         # POST /api/cases/generate
│   │   ├── services/
│   │   │   ├── aiService.js          # Gemini AI with multi-model fallback
│   │   │   ├── dbService.js          # Supabase REST API calls
│   │   │   ├── queueService.js       # Upstash Redis queue
│   │   │   └── ragService.js         # Embedding + scheme matching
│   │   ├── app.js                    # Express app + CORS
│   │   └── worker.js                 # Background queue processor
│   ├── scripts/
│   │   ├── schemesData.js            # 140+ government schemes data
│   │   └── seedSchemes.js            # Seed schemes with embeddings to Supabase
│   └── server.js                     # Entry point — starts server + worker
│
└── frontend/
    └── src/
        ├── pages/
        │   ├── Login.jsx             # Login page (calls /api/auth/login)
        │   ├── Register.jsx          # Register page (calls /api/auth/register)
        │   ├── Dashboard.jsx         # Case input (calls /api/cases/generate)
        │   └── Results.jsx           # AI results display
        ├── components/
        │   └── Navbar.jsx            # Top nav with dark mode + logout
        └── services/
            └── api.js                # Centralized fetch helper with auth token
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19, React Router v7 |
| Backend | Node.js, Express 5 |
| Database | Supabase (PostgreSQL + pgvector) |
| AI | Google Gemini 2.5 Flash (multi-model fallback) |
| Embeddings | Gemini Embedding 001 (1536-dim) |
| Queue | Upstash Redis |
| Auth | JWT (jsonwebtoken) + bcrypt |

---

## ⚙️ Setup

### Prerequisites
- Node.js v18+
- Supabase project with `users`, `cases`, `schemes` tables
- Google Gemini API key
- Upstash Redis database

### 1. Clone & Install

```bash
git clone https://github.com/yashrajput4235/sahayak-ai.git
cd sahayak-ai

# Backend
cd backend && npm install

# Frontend
cd ../frontend && npm install
```

### 2. Backend `.env`

```env
PORT=8000
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_anon_key
SUPABASE_SERVICE_KEY=your_supabase_service_key
GEMINI_API_KEY=your_gemini_api_key
JWT_SECRET=your_jwt_secret
UPSTASH_REDIS_REST_URL=your_upstash_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_token
```

### 3. Frontend `.env`

```env
REACT_APP_API_URL=http://localhost:8000
```

### 4. Seed Government Schemes

```bash
cd backend
node scripts/seedSchemes.js
```

### 5. Run

```bash
# Backend (starts server + background worker automatically)
cd backend && node server.js

# Frontend (separate terminal)
cd frontend && npm start
```

App runs at → **http://localhost:3000**

---

## 🗄️ Supabase Schema

```sql
-- Users table
create table users (
  id uuid primary key default gen_random_uuid(),
  fullname text,
  email text unique,
  password text,
  created_at timestamp default now()
);

-- Cases table
create table cases (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id),
  notes text,
  ai_output jsonb,
  status text default 'pending',
  created_at timestamp default now()
);

-- Schemes table (with vector embeddings)
create extension if not exists vector;
create table schemes (
  id uuid primary key default gen_random_uuid(),
  name text,
  category text,
  eligibility text,
  benefits text,
  documents jsonb,
  apply_steps jsonb,
  keywords _text,
  embedding vector(1536)
);

-- Match schemes function
create or replace function match_schemes(query_embedding vector(1536), match_count int)
returns table (id uuid, name text, category text, eligibility text, benefits text, apply_steps jsonb, similarity float)
language sql stable as $$
  select id, name, category, eligibility, benefits, apply_steps,
    1 - (embedding <=> query_embedding) as similarity
  from schemes
  order by embedding <=> query_embedding
  limit match_count;
$$;
```

---

## 🔌 API Endpoints

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| POST | `/api/auth/register` | ❌ | Register new user |
| POST | `/api/auth/login` | ❌ | Login, get JWT token |
| POST | `/api/cases/generate` | ✅ Bearer | Generate AI case plan |

---

## 🤖 AI Models (Fallback Chain)

If a model is unavailable or quota exceeded, automatically tries the next:

1. `gemini-2.5-flash`
2. `gemini-2.5-pro`
3. `gemini-2.0-flash`
4. `gemini-2.0-flash-lite`

---

## 📜 License

MIT
