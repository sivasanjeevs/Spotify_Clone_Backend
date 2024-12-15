import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import songRouter from './src/routes/songRoute.js';
import connectDB from './src/config/mongodb.js';
import connectCloudinary from './src/config/cloudinary.js';
import albumRouter from './src/routes/albumRoute.js';

// App config
const app = express(); // Instance of our express app
const port = process.env.PORT || 4000;

// Connect to MongoDB and Cloudinary
connectDB();
connectCloudinary();

// Middleware
app.use(express.json()); // Requests will be passed in JSON format
//app.use(express.urlencoded({ extended: true }));
app.use(cors()); // Enable CORS for frontend to connect with backend

// Initialize routes
app.use('/api/song', songRouter);
app.use('/api/album', albumRouter);
app.get('/', (req, res) => res.send("API is working!"));

// Start the express server
app.listen(port, () => console.log(`Listening on port ${port}`));
