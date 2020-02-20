const express = require("express");
const router = express.Router();
const User = require("../models/User.model");
const bcrypt = require("bcryptjs");
const jwt_secret =
  require("../config/config").JWT_Secret || process.env.JWT_SECRET;
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");

// GET all users
// Public
// /api/users/
router.get("/", (req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json(err));
});

// GET authentication info for user
// Private
// /api/users/auth/user
router.get("/auth/user", auth, (req, res) => {
  User.findById(req.user.id)
    .select("-password")
    .then(user => res.json(user));
});

// GET one user (for login authentication)
// Public
// /api/users/auth
router.post("/auth", (req, res) => {
  const { username, password } = req.body;

  // verify that all fields were filled
  if (!username || !password) {
    return res.status(400).json({ msg: "please fill in all required fields" });
  }

  // check to see if the user exists
  User.findOne({ username })
    .then(user => {
      if (!user) {
        return res.status(400).json({ msg: "that user does not exist" });
      }

      // Validate password
      bcrypt.compare(password, user.password).then(isMatch => {
        if (!isMatch)
          return res.status(400).json({ msg: "invalid credentials" });

        jwt.sign(
          { id: user.id },
          jwt_secret,
          {
            expiresIn: 3600
          },
          (err, token) => {
            if (err) throw err;

            res.json({
              token,
              user: {
                id: user.id,
                username: user.username
              }
            });
          }
        );
      });
    })
    .catch(err => res.status(400).json(err));
});

// POST new user
// Public
// /api/users/add
router.post("/add", (req, res) => {
  const { first_name, last_name, username, password, phone } = req.body;

  // verify that all fields were filled
  if (!username || !password || !first_name || !last_name || !phone) {
    return res.status(400).json({ msg: "please fill in all required fields" });
  }

  // check to see if the user already exists
  User.findOne({ username })
    .then(user => {
      if (user) {
        return res.status(400).json({ msg: "that email is already taken" });
      }

      // create new user object and save to database
      const newUser = new User({
        first_name,
        last_name,
        username,
        password,
        phone
      });

      // Create salt and hash
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => {
              jwt.sign(
                { id: user.id },
                jwt_secret,
                {
                  expiresIn: 3600
                },
                (err, token) => {
                  if (err) throw err;

                  res.json({
                    token,
                    user: {
                      id: user.id,
                      username: user.username
                    }
                  });
                }
              );
            })
            .catch(err => {
              res.status(400).json(err);
            });
        });
      });
    })
    .catch(err => res.status(400).json(err));
});

// DELETE a user
// Public
// /api/users/delete/:id
router.delete("/delete/:id", (req, res) => {
  User.deleteOne({ _id: req.params.id })
    .then(() => {
      res.json("user deleted!");
    })
    .catch(err => err.status(400).json(err));
});

// UPDATE a user
// Public
// /api/users/update/:id
router.patch("/update/:id", (req, res) => {
  User.updateOne({ _id: req.params.id }, { username: req.body.username })
    .then(() => res.json("user updated"))
    .catch(err => err.status(400).json(err));
});

module.exports = router;
