import express from 'express';
import dotenv from 'dotenv';
import AuthRoutes from "./routes/AuthRoutes.js"
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/api/auth', AuthRoutes);

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
