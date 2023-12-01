import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import { config } from 'dotenv';

config();

const app = express();
app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
)

const port = 8080;
// endpoint to make request
app.get('/api/places', async (req, res) => {
  try {
    const apiKey = process.env.MY_API_KEY;
    const apiUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${req.query.location}&radius=5000&type=hospital&key=${apiKey}`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'An error occurred while fetching data' });
  }
});

app.listen(process.env.PORT || port, () => {
  console.log(`Server is running on port ${port} and awaiting requests from frontend`);
});
