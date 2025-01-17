const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true }, // Ensure name is non-empty and trimmed
  description: { type: String, trim: true },
  date: {
    type: Date,
    required: true,
    validate: {
      validator: (value) => !isNaN(value), // Ensure it's a valid date
      message: 'Invalid date provided.',
    },
  },
  time: {
    type: String,
    trim: true,
    validate: {
      validator: (value) => /^([1-9]|1[0-2]):[0-5][0-9] (AM|PM)$/.test(value), // Must match "hh:mm AM/PM"
      message: 'Invalid time format. Use "hh:mm AM/PM".',
    },
  },
});

// Avoid recompiling the model
const Activity = mongoose.models.Activity || mongoose.model('Activity', activitySchema);

module.exports = Activity;