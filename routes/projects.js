const express = require("express");
const router = express.Router();
const Project = require("../models/Project.model");

// GET all projects
router.get("/", (req, res) => {
  Project.find()
    .then(projects => res.json(projects))
    .catch(err => res.status(400).json(err));
});

// GET a few projects for dropdown menu
router.get("/header-menu", (req, res) => {
  Project.find()
    .limit(8)
    .then(projects => res.json(projects))
    .catch(err => res.status(400).json(err));
});

// GET a specidifc project by Title
router.get("/find-by-title/:title", (req, res) => {
  Project.find({ title: { $regex: req.params.title, $options: "i" } })
    .limit(8)
    .then(projects => res.json(projects))
    .catch(err => res.status(400).json(err));
});

// GET a specidifc project by Id
router.get("/project/:id", (req, res) => {
  Project.find({ _id: req.params.id })
    .then(project => res.json(project))
    .catch(err => res.status(400).json(err));
});

// GET projects that belong to a specific category
router.get("/:projectCategory", (req, res) => {
  if (req.params.projectCategory === "default") {
    Project.find()
      .then(projects => res.json(projects))
      .catch(err => res.status(400).json(err));
  } else {
    Project.find({ projectCategory: req.params.projectCategory })
      .then(projects => res.json(projects))
      .catch(err => res.status(400).json(err));
  }
});

// POST new user
router.post("/add", (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const organization = req.body.organization;
  const projectCategory = req.body.projectCategory;

  const newProject = new Project({
    title,
    description,
    organization,
    projectCategory
  });

  newProject
    .save()
    .then(() => {
      res.json("project created!");
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// DELETE a project
router.delete("/delete/:id", (req, res) => {
  Project.deleteOne({ _id: req.params.id })
    .then(() => {
      res.json("project deleted!");
    })
    .catch(err => err.status(400).json(err));
});

// UPDATE a user
router.patch("/update/:id", (req, res) => {
  Project.updateOne({ _id: req.params.id }, { name: req.body.name })
    .then(() => res.json("project updated"))
    .catch(err => err.status(400).json(err));
});

module.exports = router;
