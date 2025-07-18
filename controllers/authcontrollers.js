const jwt = require('jsonwebtoken');
const Admin = require('../models/admin.js');
const bcrypt = require('bcryptjs');

const Authcontrollers = {
  // login
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const admin = await Admin.findByEmail(email);
      if (!admin) {
        return res.status(400).json({ msg: 'email salah' });
      }

      const isMatch = await bcrypt.compare(password, admin.password);
      if (!isMatch) return res.status(400).json({ msg: 'password salah' });
      const token = jwt.sign({ id: admin.id, email: admin.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.json({ succes: true, token, admin: { id: admin.id, email: admin.email } });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  },
  getME: async (req, res) => {
    try {
      const admin = await Admin.findByEmail(req.admin.email);
      if (!admin) {
        return res.status(404).json({ msg: 'admin tidak ditemukan' });
      }
      res.json({ id: admin.id, email: admin.email });
    } catch (err) {
      console.error('❌ Error getMe:', err);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },
};
module.exports = Authcontrollers;
