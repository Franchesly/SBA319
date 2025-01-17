const express = require('express'); // Import Express
const router = express.Router();

// Import database models
const User = require('../models/User');
const Activity = require('../models/Activity');
const Destination = require('../models/Destination');

// Import seed data
const activitySeedData = require('../data/activitySeed.json');
const destinationSeedData = require('../data/destinationSeed.json');
const userSeedData = require('../data/userSeed.json');

// Seeding Users
router.get('/seed/user', async (req, res) => {
  try {
    await User.deleteMany();
    console.log('Deleted all existing activities.');
    console.log('Seed Data:', userSeedData);
    await User.insertMany(userSeedData);
    res.status(200).send('User seeding completed!');
  }
  catch (error) {
    res.status(500).send(`Error seeding users: ${error.message}`);
  }
});

router.get('/seed/activity', async (req, res) => {
  try {
    await Activity.deleteMany({});
    console.log('Deleted all existing activities.');
    console.log('Seed Data:', activitySeedData);
    const result = await Activity.insertMany(activitySeedData);
    console.log(`Inserted ${result.length} activities successfully.`);
    res.status(200).send('Activity seeding completed!');
  } catch (error) {
    console.error('Error seeding activities:', error.message);
    res.status(500).send(`Error seeding activities: ${error.message}`);
  }
});

// Seeding Destinations
    router.get('/seed/destination', async (req, res) => {
      try {
        await Destination.deleteMany();
        console.log('Deleted all existing activities.');
        console.log('Seed Data:', destinationSeedData);
        await Destination.insertMany(destinationSeedData);
        res.status(200).send('Destination seeding completed!');
      }
      catch (error) {
        res.status(500).send(`Error seeding destinations: ${error.message}`);
      }
    });

// Seeding All
    router.get('/seed/all', async (req, res) => {
      try {
        // Run all seeding operations in parallel
        const promises = [
          User.deleteMany().then(() => User.insertMany(userSeedData)),
          Activity.deleteMany().
                   then(() => Activity.insertMany(activitySeedData)),
          Destination.deleteMany().
                      then(() => Destination.insertMany(destinationSeedData)),
        ];
        await Promise.all(promises);
        res.status(200).send('Seeding for all models completed!');
      }
      catch (error) {
        res.status(500).send(`Error seeding all models: ${error.message}`);
      }
    });

// Export the router
    module.exports = router;