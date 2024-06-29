const express = require("express");
const connectDB = require("./database/connectDB");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

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
  console.log(`Connected to MongoDB`)
});
