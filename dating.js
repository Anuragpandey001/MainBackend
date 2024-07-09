// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Create Express app
const app = express();

// Middleware
app.use(bodyParser.json());

// MongoDB connection
// mongoose.connect('mongodb://localhost:27017/datingApp', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
//     .then(() => console.log('MongoDB connected'))
//     .catch(err => console.log(err));

// Define a simple route for the /api endpoint
app.get('/', (req, res) => {
    res.json({ message: 'API is working' });
});

// Start the server
const PORT = process.env.PORT || 7630;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
