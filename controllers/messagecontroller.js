const Message = require('../models/message.js');
const db = require('../config/db.js');

const messagecontroller = {
  createMessage: async (req, res) => {
    try {
      // Data pesan dari request body
      const messagedata = {
        email: req.body.email,
        nama: req.body.nama,
        massage: req.body.massage, // Kolom massage
      };

      // Periksa apakah sudah ada lebih dari 2 pesan untuk email yang sama pada hari yang sama
      const [rows] = await db.query(`SELECT COUNT(*) AS count FROM massage WHERE email = ? AND DATE(created_at) = CURDATE()`, [messagedata.email]);

      if (rows[0].count >= 2) {
        return res.status(429).json({ message: 'Batas kirim pesan hari ini sudah tercapai yaa (maks. 2 kali).' });
      }

      // Jika tidak mencapai batas, simpan pesan baru ke database
      const message = await Message.create(messagedata); // Asumsi Message adalah model ORM
      res.status(201).json(message);
    } catch (err) {
      console.error('Error creating message:', err);
      res.status(500).json({ message: 'Gagal menambah pesan' });
    }
  },
  getAllMessage: async (req, res) => {
    try {
      const massages = await Message.getAll();
      res.json({ success: true, data: massages });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'gagal mengambil pesan' });
    }
  },
  deleteMessage: async (req, res) => {
    try {
      const { id } = req.params;

      const result = await Message.delete(id);
      res.json({
        success: true,
        message: 'pesan berhasil dihapus',
      });
    } catch (err) {
      console.error('Delete pesan error:', err);
      res.status(500).json({
        success: false,
        message: 'Gagal menghapus pesan',
      });
    }
  },
};
module.exports = messagecontroller;
