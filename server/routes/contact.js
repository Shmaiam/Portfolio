const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST /api/contact - Save contact message
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: 'All fields are required.' });
    }

    const contact = new Contact({ name, email, message });
    await contact.save();

    res.status(201).json({ success: true, message: 'Message received! I will get back to you soon.' });
  } catch (err) {
    console.error('Contact error:', err.message);
    res.status(500).json({ success: false, error: 'Server error. Please try again.' });
  }
});

// GET /api/contact - Get all messages (admin)
router.get('/', async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, data: messages });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Server error.' });
  }
});

module.exports = router;
