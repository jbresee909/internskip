const express = require("express");
const router = express.Router();
const ProjectCategory = require("../models/ProjectCategory.model");

// GET all users
router.get("/", (req, res) => {
  ProjectCategory.find()
    .then(projectCategories => res.json(projectCategories))
    .catch(err => res.status(400).json(err));
});

// GET all users
router.get("/home-page", (req, res) => {
  ProjectCategory.find()
    .limit(8)
    .then(projectCategories => res.json(projectCategories))
    .catch(err => res.status(400).json(err));
});

// POST new user
router.post("/add", (req, res) => {
  const name = req.body.name;
  const imageURL = req.body.imageURL;

  const newProjectCategory = new ProjectCategory({ name, imageURL });

  newProjectCategory
    .save()
    .then(() => {
      res.json("project category created!");
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// DELETE a project
router.delete("/delete/:id", (req, res) => {
  ProjectCategory.deleteOne({ _id: req.params.id })
    .then(() => {
      res.json("project category deleted!");
    })
    .catch(err => err.status(400).json(err));
});

// UPDATE a user
router.patch("/update/:id", (req, res) => {
  ProjectCategory.updateOne(
    { _id: req.params.id },
    { name: req.body.name, imageURL: req.body.imageURL }
  )
    .then(() => res.json("project category updated"))
    .catch(err => err.status(400).json(err));
});

module.exports = router;
