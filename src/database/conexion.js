import sqlite3 from 'sqlite3';

sqlite3.verbose()

const db = new sqlite3.Database('tienda.db', (err) => {
  if (err) {
    console.error(err.message);
    throw err;
  }
  console.log('Conectado a la base de datos SQLite3.');
});







export default db;
