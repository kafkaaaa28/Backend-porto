const express = require('express');
const app = express();
const cors = require('cors');
const authRoutes = require('./routes/authRoutes.js');
const comentRoutes = require('./routes/comentRoutes.js');
const pesanRoutes = require('./routes/messageRoutes.js');
app.use(express.json());
// tes
const corsOptions = {
  origin: ['http://localhost:3000', 'https://www.kafkaaaa.my.id', 'https://kafkaaaa.my.id', 'https://portofolio-puce-delta.vercel.app', 'http://192.168.100.230:3000'],
  methods: ['GET', 'POST', 'DELETE', 'PUT', 'OPTIONS'],
  credentials: true,
};

app.use(cors(corsOptions));

// Routes
app.use('/api/coment', comentRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/pesan', pesanRoutes);
module.exports = app;
