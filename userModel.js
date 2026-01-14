const db = require("../config/db");

const createUser = async (user) => {
  const query =
    "INSERT INTO users (name, email, password, role) VALUES ($1, $2, $3, $4)";
  await db.query(query, user);
};

const findUserByEmail = async (email) => {
  const query = "SELECT * FROM users WHERE email = $1";
  const result = await db.query(query, [email]);
  return result.rows;
};

module.exports = {
  createUser,
  findUserByEmail,
};
