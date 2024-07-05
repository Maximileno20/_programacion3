import sqlite3 from 'sqlite3';

sqlite3.verbose()

const db = new sqlite3.Database('tienda.db', (err) => {
  if (err) {
    console.error(err.message);
    throw err;
  }
  console.log('Conectado a la base de datos SQLite3.');
});


// Crear las tablas "categorias" y "productos"
db.run(`
  CREATE TABLE IF NOT EXISTS categorias (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    categoria TEXT NOT NULL
  )
`, (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Tabla "categorias" creada.');
  }
});

db.run(`
  CREATE TABLE IF NOT EXISTS productos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    codigo TEXT NOT NULL UNIQUE,
    producto TEXT NOT NULL,
    categoria_id INTEGER NOT NULL,
    existencia_actual INTEGER NOT NULL,
    precio REAL NOT NULL,
    FOREIGN KEY (categoria_id) REFERENCES categorias(id)
  )
`, (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Tabla "productos" creada.');
  }
});







export default db;
