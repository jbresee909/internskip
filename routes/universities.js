const express = require("express");
const router = express.Router();
const University = require("../models/University.model");

// GET all users
router.get("/", (req, res) => {
  University.find()
    .then(universities => res.json(universities))
    .catch(err => res.status(400).json(err));
});

// POST new user
router.post("/add", (req, res) => {
  const name = req.body.name;

  const newUniversity = new University({ name });

  newUniversity
    .save()
    .then(() => {
      res.json("university created!");
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// DELETE a university
router.delete("/delete/:id", (req, res) => {
  University.deleteOne({ _id: req.params.id })
    .then(() => {
      res.json("university deleted!");
    })
    .catch(err => err.status(400).json(err));
});

// UPDATE a user
router.patch("/update/:id", (req, res) => {
  University.updateOne({ _id: req.params.id }, { name: req.body.name })
    .then(() => res.json("university updated"))
    .catch(err => err.status(400).json(err));
});

module.exports = router;
