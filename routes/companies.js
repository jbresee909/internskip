const express = require("express");
const router = express.Router();
const Company = require("../models/Company.model");

// GET all users
router.get("/", (req, res) => {
  Company.find()
    .then(companies => res.json(companies))
    .catch(err => res.status(400).json(err));
});

// POST new user
router.post("/add", (req, res) => {
  const name = req.body.name;

  const newCompany = new Company({ name });

  newCompany
    .save()
    .then(() => {
      res.json("company created!");
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// DELETE a company
router.delete("/delete/:id", (req, res) => {
  Company.deleteOne({ _id: req.params.id })
    .then(() => {
      res.json("company deleted!");
    })
    .catch(err => err.status(400).json(err));
});

// UPDATE a user
router.patch("/update/:id", (req, res) => {
  Company.updateOne({ _id: req.params.id }, { name: req.body.name })
    .then(() => res.json("company updated"))
    .catch(err => err.status(400).json(err));
});

module.exports = router;
