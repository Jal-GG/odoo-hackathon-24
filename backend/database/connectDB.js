const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://kalp:kalp@chatapp.jwuw7sf.mongodb.net/?appName=chatapp";
const client = new MongoClient(uri);

async function connectDB() {
  try {
    await client.connect();
    console.log("Connected successfully to MongoDB");
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
  } finally {
    await client.close();
  }
}

module.exports = connectDB;
