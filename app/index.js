const express = require('express');
const mysql = require('mysql2'); // Usamos el 'mysql2' normal
const app = express();
const port = 3000;

// Configuración de la conexión a la BD
const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  // Opciones mágicas del Pool:
  waitForConnections: true, // Esperar si no hay conexiones disponibles
  connectionLimit: 10,      // Número de conexiones en el pool
  queueLimit: 0             // Sin límite de consultas en cola
};

// 1. Ya NO usamos createConnection ni handleDisconnect
// En su lugar, creamos un POOL.
const pool = mysql.createPool(dbConfig);

console.log('Pool de conexiones de MySQL creado.');
console.log('Probando conexión al pool...');

// 2. Probamos el pool una vez al inicio
pool.query('SELECT 1', (err, results) => {
  if (err) {
    console.error('Error inicial al conectar con el Pool de BD:', err);
  } else {
    console.log('¡Conexión inicial al Pool de BD exitosa!');
  }
});


// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡El tablero de indicadores está funcionando!');
});

// Ruta para probar la BD
app.get('/test-db', (req, res) => {
  
  // 3. Ya NO revisamos 'connection.state'.
  // Simplemente le pedimos al POOL que haga la consulta.
  // Si la BD no está lista, el pool pondrá esta consulta en cola.
  pool.query('SELECT 1 + 1 AS solution', (err, results) => {
    
    // Si hay un error EN LA CONSULTA (ej: la BD se cayó)
    if (err) {
      console.error('Error al consultar la BD:', err);
      return res.status(503).send('Error al consultar la BD: ' + err.message);
    }

    // Si la consulta es exitosa
    if (results && results.length > 0) {
      res.send(`La respuesta de la BD es: ${results[0].solution}`);
    } else {
      res.send('Consulta a la BD exitosa, pero no hubo resultados.');
    }
  });
});

app.listen(port, () => {
  console.log(`App escuchando en http://localhost:${port}`);
});