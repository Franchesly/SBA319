//
const fs = require("fs");
const path = require("path");
const { fileURLToPath } = require("url");

// Import data models
const Activity = require("../models/activity.js");
const Destination = require("../models/destination.js");
const User = require("../models/user.js");
const Itinerary = require("../models/itinerary.js");

// Get __dirname and __filename
const __filename = fileURLToPath(new URL(import.meta.url)); // Use with file-based paths
const __dirname = path.dirname(__filename);

// Read JSON data
const readJsonData = async (filePath) => {
  try {
    const absolutePath = path.join(__dirname, filePath);
    const data = await fs.readFile(absolutePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error.message);
    throw error;
  }
};

const userSeed = async () => {
  try {
    const exists = await User.findOne(); // Check if data already exists
    if (exists) {
      console.log("Data for user already seeded.");
      return;
    }
    // Read seed data from file
    const data = await readJsonData("../data/userSeed.json");
    await User.insertMany(data);
    console.log("user seeding completed.");
  } catch (error) {
    console.error("Error seeding user:", error.message);
  }
};

const activitySeed = async () => {
  try {
    const exists = await Activity.findOne();
    if (exists) {
      console.log("Data for activity already seeded.");
      return;
    }
    const data = await readJsonData("../data/activitySeed.json");
    await Activity.insertMany(data);
    console.log("activty seeding completed.");
  } catch (error) {
    console.error("Error seeding activity:", error.message);
  }
};

const destinationSeed = async () => {
  try {
    const exists = await Destination.findOne();
    if (exists) {
      console.log("Data for Destination already seeded.");
      return;
    }
    const data = await readJsonData("../data/destinationSeed.json");
    await Destination.insertMany(data);
    console.log("destination seeding completed.");
  } catch (error) {
    console.error("Error seeding destination:", error.message);
  }
};

const itinerarySeed = async () => {
  try {
    const exists = await Itinerary.findOne();
    if (exists) {
      console.log("Data for itinerary already seeded.");
      return;
    }
    const data = await readJsonData("../data/itinerarySeed.json");
    await Itinerary.insertMany(data);
    console.log("itinerary seeding completed.");
  } catch (error) {
    console.error("Error seeding itinerary:", error.message);
  }
};

module.exports = { userSeed, destinationSeed, activitySeed, itinerarySeed };
