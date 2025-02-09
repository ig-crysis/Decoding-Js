const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./server/config/db'); // Adjust the path based on your structure
const authRoutes = require('./server/routes/auth'); // Adjust the path based on your structure
const path = require('path');
const courseRoutes = require('./server/routes/courses');

dotenv.config();
const app = express();

app.use(express.static(path.join(__dirname, 'pages')));
app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));
app.use('/public', express.static(process.cwd() + '/public'));

// Connect to MongoDB
connectDB();

// Use Auth Routes
app.use('/api/auth', authRoutes);
app.use('/api', courseRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
