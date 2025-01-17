const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String },
});


// Avoid recompiling the model
const Destination = mongoose.models.Destination || mongoose.model('Destination', destinationSchema);

module.exports = Destination;