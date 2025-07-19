# 📒 NoteBook

🧱 A Full-Stack Note-Taking Application Built with the **MERN Stack**  
Take notes, edit them, delete them — all from a clean and responsive UI. Perfect for learning full-stack development from backend APIs to frontend components.

---

## ✨ Features

- ✅ **Create, Update, and Delete Notes** — with a title and description
- ✅ **REST API** — Fully functional and beginner-friendly
- ✅ **Rate Limiting** — Using Upstash Redis for enhanced API security
- ✅ **Responsive UI** — Works on mobile, tablet, and desktop
- ✅ **MERN Stack** — MongoDB, Express.js, React, Node.js
- ✅ **Educational Focus** — HTTP methods, status codes, SQL vs NoSQL explained
- ✅ **Deployment Guide** — Easily host your own version

---

## 🧰 Tech Stack

| Layer                   | Tech                                  |
| ----------------------- | ------------------------------------- |
| Frontend                | React, Tailwind CSS                   |
| Backend                 | Node.js, Express.js                   |
| Database                | MongoDB (NoSQL)                       |
| Caching & Rate Limiting | Upstash Redis                         |
| Hosting                 | Render, Vercel, or Netlify (Frontend) |

## 🚀 Getting Started

### Backend Setup

1. Clone the repository and navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `bash.env` file with your MongoDB connection string and Redis URL:
   ```bash
   MONGO_URI=your_mongodb_connection_string
   UPSTASH_REDIS_REST_URL="your_upstash_redis_url"
   UPSTASH_REDIS_REST_TOKEN="your_upstash_redis_rest_token"
   PORT=5000
   ```
4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm run dev
   ```
