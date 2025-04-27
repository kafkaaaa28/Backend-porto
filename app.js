const express = require('express');
const app = express();
const cors = require('cors');
const authRoutes = require('./routes/authRoutes.js');
const pesanRoutes = require('./routes/messageRoutes.js');
app.use(express.json());
// tes
const corsOptions = {
  origin: ['http://localhost:3000', 'https://www.kafkaaaa.my.id', 'https://kafkaaaa.my.id', 'https://portofolio-puce-delta.vercel.app'],
  methods: ['GET', 'POST', 'DELETE', 'PUT', 'OPTIONS'],
  credentials: true,
};

// 🔥 Middleware untuk semua request
app.use(cors(corsOptions));
const bcrypt = require('bcryptjs');

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/pesan', pesanRoutes);
module.exports = app;
