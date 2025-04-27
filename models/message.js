const db = require('../config/db.js');

class Message {
  static async create(messagedata) {
    const { email, nama, massage } = messagedata;
    const [result] = await db.query(`INSERT INTO massage (email, nama, massage) VALUES (?, ?, ?)`, [email, nama, massage]);
    return { id: result.insertId, ...messagedata };
  }

  static async delete(id) {
    const [result] = await db.query(`DELETE FROM massage WHERE id = ?`, [id]);
    return result;
  }
  static async getAll() {
    const [result] = await db.query('SELECT * FROM massage');
    return result;
  }
}

module.exports = Message;
