// todo-service.js

const mysql = require('mysql2/promise');

async function getConnection() {
  return await mysql.createConnection({
    host: 'localhost',
    user: 'root', // your user name
    password: 'tjsals6092', // your password
    database: 'todoapp'  // your database name
  });
}

exports.get = async function(connection = null) {
  try {
    if (!connection) {
      connection = await getConnection();
    }

    /* results: [ { id: 1, content: 'do the homework' } ] */
    const [results, fields] = await connection.query(
        'SELECT * FROM `todos` WHERE `id` = 1'
    );

    if (!connection) {
      await connection.end();
    }

    return results[0].content;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

// post
// put
// delete

module.exports = exports; // 모듈로 내보내기
