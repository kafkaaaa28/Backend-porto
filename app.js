const express = require('express');
const app = express();
const cors = require('cors');
const authRoutes = require('./routes/authRoutes.js');
const pesanRoutes = require('./routes/messageRoutes.js');
app.use(express.json());
// buat frontend
app.use(
  cors({
    origin: ['http://192.168.100.230:3000', 'http://localhost:3000', 'http://192.168.100.230:5000', 'https://kafkaaaa.my.id'],
    methods: ['GET', 'POST', 'DELETE', 'PUT', 'OPTIONS'],
    credentials: true,
  })
);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/pesan', pesanRoutes);
module.exports = app;
