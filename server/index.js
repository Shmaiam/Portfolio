const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const contactRoutes = require('./routes/contact');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }));
app.use(express.json());

// Routes
app.use('/api/contact', contactRoutes);

app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running!', time: new Date() });
});

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio')
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err.message);
    // Still start server even without DB (for demo)
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT} (no DB)`));
  });
