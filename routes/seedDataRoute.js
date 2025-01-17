const express = require('express'); // Import express using require
const router = express.Router();
const {
  userSeed,
  activitySeed,
  destinationSeed,
  itinerarySeed,
} = require('../config/seedUtil.js'); // Import seed utility using require

router.get('/seed/user', async (req, res) => {
  try {
    await userSeed();
    res.status(200).send('user seeding completed!');
  } catch (error) {
    res.status(500).send(`Error seeding user: ${error.message}`);
  }
});

router.get('/seed/activity', async (req, res) => {
  try {
    await activitySeed();
    res.status(200).send("activity seeding completed!");
  } catch (error) {
    res.status(500).send(`Error seeding activity: ${error.message}`);
  }
});

router.get('/seed/destination', async (req, res) => {
  try {
    await destinationSeed();
    res.status(200).send('destination seeding completed!');
  } catch (error) {
    res.status(500).send(`Error seeding destination: ${error.message}`);
  }
});

router.get('/seed/itinerary', async (req, res) => {
  try {
    await itinerarySeed();
    res.status(200).send('itinerary seeding completed!');
  } catch (error) {
    res.status(500).send(`Error seeding itinerary: ${error.message}`);
  }
});

router.get('/seed/all', async (req, res) => {
  try {
    const promises = [userSeed(), acitivitySeed(), destinationSeed(), itinerarySeed()];
    await Promise.all(promises);
    res.status(200).send('Seeding for all models completed!');
  } catch (error) {
    res.status(500).send(`Error seeding all models: ${error.message}`);
  }
});

// Export the router using module.exports
module.exports = router;