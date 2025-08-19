const express = require("express");
const router = express.Router();
const data = require("../data/SocialData.json");

router.use(express.json());

router.get("/dashboard", (req, res) => {
  // const users = data.users.find();
  res.json(data.users);
});

// Get single user by ID
router.get("/users/:id", (req, res) => {
  const user = data.users.find((u) => u.id == req.params.id);
  if (user) res.json(user);
  else res.status(404).json({ message: "User not found" });
});

// Get posts (all)
router.get("/posts", (req, res) => {
  res.json(data.posts);
});

// Get posts by userId
router.get("/posts/user/:id", (req, res) => {
  const posts = data.posts.filter((p) => p.userId == req.params.id);
  res.json(posts);
});

// Get stats of a user
router.get("/stats/", (req, res) => {
  res.json(data.stats);
});

router.get("/stats/:id", (req, res) => {
  const stats = data.stats[req.params.id];
  if (stats) res.json(stats);
  else res.status(404).json({ message: "Stats not found" });
});

// Get notifications
router.get("/notifications", (req, res) => {
  res.json(data.notifications);
});

// Get messages
router.get("/messages", (req, res) => {
  res.json(data.messages);
});

module.exports = router;
