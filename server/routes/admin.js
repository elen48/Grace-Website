// server/routes/admin.js
const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

// Create a new event
router.post('/events', async (req, res) => {
    const newEvent = new Event(req.body);
    try {
        const savedEvent = await newEvent.save();
        res.status(201).json(savedEvent);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get all events
router.get('/events', async (req, res) => {
    try {
        const events = await Event.find();
        res.status(200).json(events);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router
