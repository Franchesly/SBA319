const express = require("express");
const router = express.Router();
const Activity = require("../models/activity.js");

// deleting all
router.delete("/activity", async (req, res) => {
  try {
    const deleteActivity = await Activity.deleteMany();
    res.json(deleteActivity);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//Get all activity
router.get("/activity/", async (req, res) => {
  try {
    const allActivity = await Activity.find({});
    res.json(allActivity);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//create a new activity
router.post("/activity/", async (req, res) => {
  console.log(req.body);
  try {
    const createdActivity = await Activity.create(req.body);
    res.json(createdActivity);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
//Get activity by id
router.get("/activity/:id", async (req, res) => {
  try {
    const singleActivity = await Activity.findById(req.params.id);
    res.json(singleActivity);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// updating by id
router.put("/activity/:id", async (req, res) => {
  try {
    const updatedActivity = await Activity.findByIdAndUpdate(req.params.id, req.body);
    res.json(updatedActivity);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// deleting by id
router.delete("/activity/:id", async (req, res) => {
  try {
    const deleteActivity = await Activity.findByIdAndDelete(req.params.id);
    res.json(deleteActivity);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;