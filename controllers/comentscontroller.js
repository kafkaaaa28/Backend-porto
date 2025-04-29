const db = require('../config/db');
const Coment = require('../models/coment.js');

const comentscontroller = {
  Createcoments: async (req, res) => {
    try {
      const comentdata = {
        name: req.body.name,
        coment: req.body.coment,
      };
      const [rows] = await db.query(`SELECT COUNT(*) AS count FROM coments WHERE name = ? AND DATE(created_at) = CURDATE()`, [comentdata.name]);

      if (rows[0].count >= 2) {
        return res.status(429).json({ message: 'Batas kirim pesan hari ini sudah tercapai yaa (maks. 2 kali).' });
      }
      const coment = Coment.create(comentdata);
      res.status(201).json();
    } catch (err) {
      console.error('Error creating coments', err);
      res.status(500).json({ msg: 'gagal menambah koment' });
    }
  },
  Getcoment: async (req, res) => {
    try {
      const coment = await Coment.getAll();
      res.json({ success: true, data: coment });
    } catch (err) {
      console.error('Error fetch coments', err);
      res.status(500).json({ msg: 'gagal mengambil koment' });
    }
  },
  Deletecoment: async (req, res) => {
    const { id } = req.params;
    try {
      const coment = await Coment.delete(id);
      res.json({ success: true, msg: 'berhasil menghapus coment' });
    } catch (error) {
      console.error(error);
      res.json({ success: false, msg: 'gagal menghapus pesan' });
    }
  },
};

module.exports = comentscontroller;
