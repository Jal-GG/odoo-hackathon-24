import express from "express";
import connectDB from "./database/connectDB";
import User from "./database/userSchema";
import bodyParser from "body-parser";

const app = express();
const port = 1000;

app.use(bodyParser.json());

app.get("/users", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get("/", async (req, res) => {
  try {
    await connectDB();
    res.send("Connected to MongoDB");
  } catch (err) {
    res.status(500).send("Failed to connect to MongoDB");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`Connected to MongoDB`);
});
