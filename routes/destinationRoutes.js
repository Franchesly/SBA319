const express = require("express");
const router = express.Router();
const Destination = require("../models/destination.js");

//Delete all
router.delete("/destination", async (req, res) => {
  try {
    const deleteDestination = await Destination.deleteMany();
    res.json(deleteDestination);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//Get all users
router.get("/destination/", async (req, res) => {
  try {
    const allDestination = await Destination.find({});
    res.json(allDestination);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//create a new user
router.post("/destination/", async (req, res) => {
  console.log(req.body);
  try {
    const createdDestination = await Destination.create(req.body);
    res.json(createdDestination);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
//Get user by id
router.get("/destination/:id", async (req, res) => {
  try {
    const singleDestination = await Destination.findById(req.params.id);
    res.json(singleDestination);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/destination/:id", async (req, res) => {
  try {
    const updatedDestination = await Destination.findByIdAndUpdate(req.params.id, req.body);
    res.json(updatedDestination);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/destination/:id", async (req, res) => {
  try {
    const deleteDestination = await Destination.findByIdAndDelete(req.params.id);
    res.json(deleteDestination);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;