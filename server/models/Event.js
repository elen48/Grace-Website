// server/models/Event.js
const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    title: { type: String, required: true },
    date: { type: Date, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true } // URL for event image
});

module.exports = mongoose.model('Event', EventSchema)
