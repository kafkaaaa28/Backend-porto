const db = require('../config/db.js');

class Admin {
  static async findByEmail(email) {
    const [rows] = await db.query(`SELECT * FROM admin WHERE EMAIL = ?`, [email]);
    return rows[0];
  }
}
module.exports = Admin;
