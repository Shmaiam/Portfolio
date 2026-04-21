# Muhammad Shmaiam — MERN Portfolio

A full-stack portfolio website built with the MERN stack.

## Project Structure

```
portfolio/
├── client/          # React + Vite frontend
│   ├── src/
│   │   ├── App.jsx
│   │   └── index.css
│   ├── index.html
│   └── vite.config.js
├── server/          # Node.js + Express backend
│   ├── models/
│   │   └── Contact.js
│   ├── routes/
│   │   └── contact.js
│   ├── index.js
│   └── .env.example
└── package.json
```

## Quick Start

### 1. Install all dependencies
```bash
npm run install-all
```

### 2. Setup server environment
```bash
cd server
cp .env.example .env
# Edit .env with your MongoDB URI
```

### 3. Run development (both client + server)
```bash
npm run dev
```

- Frontend: http://localhost:5173
- Backend:  http://localhost:5000

## Environment Variables (server/.env)

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/portfolio
CLIENT_URL=http://localhost:5173
```

## API Endpoints

| Method | Route           | Description              |
|--------|-----------------|--------------------------|
| POST   | /api/contact    | Save contact message     |
| GET    | /api/contact    | Get all messages (admin) |
| GET    | /api/health     | Health check             |

## Deployment

- **Frontend**: Deploy `client/` to Vercel
- **Backend**: Deploy `server/` to Render
- **Database**: Use MongoDB Atlas (free tier)

## Customization

Edit `client/src/App.jsx` to update:
- Your name, bio, links
- Projects list
- Experience timeline
- Skills grid
