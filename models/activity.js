const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  date: { type: Date, required: true },
  time: { type: String },
  destinationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Destination', required: true },
});

module.exports = mongoose.model('Activity', activitySchema);
