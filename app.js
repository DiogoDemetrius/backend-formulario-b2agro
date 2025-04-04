const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const cors =  require('./config/cors');
require('dotenv').config();

const app = express();
app.use(express.json());

connectDB();

app.use(cors);

app.use('/api/users', userRoutes);

module.exports = app;
