const express = require("express");
const router = express.Router();
const User = require("../models/user.js");


router.delete("/user", async (req, res) => {
  try {
    const deleteUser = await User.deleteMany();
    res.json(deleteUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//Get all users
router.get("/user/", async (req, res) => {
  try {
    const allUser = await User.find({});
    res.json(allUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//create a new user
router.post("/user/", async (req, res) => {
  console.log(req.body);
  try {
    const createdUser = await User.create(req.body);

    res.json(createdUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
//Get user by id
router.get("/user/:id", async (req, res) => {
  try {
    const singleUser = await User.findById(req.params.id);
    res.json(singleUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/user/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body);
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/user/:id", async (req, res) => {
  try {
    const deleteUser = await User.findByIdAndDelete(req.params.id);
    res.json(deleteUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;