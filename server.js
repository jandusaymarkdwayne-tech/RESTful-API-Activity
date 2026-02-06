// server.js
require('dotenv').config();
const express = require('express');
const connectDB = require('./src/config/db');
const app = express();
connectDB();

const PORT = process.env.PORT || 3000;
const BASE_URI = process.env.BASE_URI || '/api/v1';

const apiRoutes = require('./src/routes/apiRoutes');
const { connect } = require('mongoose');

app.use(BASE_URI, apiRoutes);

app.use(express.json);
app.use(process.env.BASE_URI, apiRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`BASE_URI: http://localhost:${PORT}${BASE_URI}`);
});