const express = require("express");
const UserRegister = require("../model/user");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const router = express.Router();

dotenv.config();
app.use(express.json());
app.use(cors());

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  UserRegister.findOne({ username, password })
    .then((user) => {
      if (user) {
        if (user.password === password) {
          res.status(200).json({ message: "Login successful", user });
        } else {
          res.json({ message: "Invalid password" });
        }
      } else {
        res.json({ message: "User not found" });
      }
    })
    .catch((err) => res.json(err));
});

router.post("/register", (req, res) => {
  const { name, email, username, password } = req.body;
  UserRegister.create({ name, email, username, password })
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

module.exports = UserRouter;
