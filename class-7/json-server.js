const express = require('express');
const cors = require('cors'); // Import CORS
const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors({
  origin: 'http://localhost:5173', // Allow requests from your React app
  methods: ['GET', 'POST'],        // Allowed HTTP methods
  credentials: true                // Allow cookies/credentials
}));

// Your existing /data endpoint
app.get('/data', (req, res) => {
  res.json({
    network: Math.floor(Math.random() * 200),
    jobs: Math.floor(Math.random() * 10),
    notifications: Math.floor(Math.random() * 50),
    messaging: Math.floor(Math.random() * 20)
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/data`);
});