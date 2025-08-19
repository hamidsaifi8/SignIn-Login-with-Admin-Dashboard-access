const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const UserRegister = require("./model/user");
const SocialRouter = require("./routes/SocialDataRoute");
const data = require("./data/SocialData.json");

dotenv.config();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/login", (req, res) => {
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

app.post("/register", (req, res) => {
  const { name, email, username, password } = req.body;
  UserRegister.create({ name, email, username, password })
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

app.use("/dashboard", SocialRouter);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB successfully");

    const PORT = process.env.PORT || 3006;

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })

  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });
