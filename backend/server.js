import express from 'express';
import dotenv from 'dotenv';
import AuthRoutes from './routes/AuthRoutes.js';
import cookieParser from 'cookie-parser';
import connectDB from './database/connectDB.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('Hello World');
});

// Connect to MongoDB
// const run = async () => {
//   await connectDB();
// }


// Use auth routes
app.use('/api', AuthRoutes);

// Start the server
app.listen(port, () => {
  connectDB();
    console.log(`Server is running on port ${port}`);
});
