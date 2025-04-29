const db = require('../config/db');

class Coment {
  static async create(comentdata) {
    const { name, coment } = comentdata;
    const [result] = await db.query(`INSERT INTO coments (name , coment) VALUES (?,?)`, [name, coment]);
    return { id: result.insertId, ...comentdata };
  }
  static async getAll() {
    const [result] = await db.query(`SELECT * FROM coments`);
    return result;
  }
  static async delete(id) {
    const [result] = await db.query(`DELETE FROM coments WHERE id = ?`, [id]);
    return result;
  }
}
module.exports = Coment;
