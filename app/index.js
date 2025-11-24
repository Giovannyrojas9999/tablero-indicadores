const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const fs = require('fs'); 
const app = express();
const port = 3000;

// Configuración de BD
const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

const pool = mysql.createPool(dbConfig);


const publicPath = path.join(__dirname, 'public');
console.log('************************************************');
console.log('DIAGNÓSTICO DE INICIO');
console.log('Ruta base:', __dirname);
console.log('Ruta public esperada:', publicPath);


try {
  console.log(' Archivos en raíz:', fs.readdirSync(__dirname));
  if (fs.existsSync(publicPath)) {
    console.log(' Archivos en public:', fs.readdirSync(publicPath));
  } else {
    console.error(' ERROR: ¡La carpeta public NO EXISTE en el contenedor!');
  }
} catch (e) {
  console.error('Error leyendo archivos:', e);
}
console.log('************************************************');


app.use(express.static(publicPath));


app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'), (err) => {
    if (err) {
      res.status(500).send(`Error cargando dashboard: ${err.message}. Revisa los logs.`);
    }
  });
});

// Ruta de prueba de BD
app.get('/test-db', (req, res) => {
  pool.query('SELECT 1 + 1 AS solution', (err, results) => {
    if (err) return res.status(503).json({ error: err.message });
    res.json({ status: 'Conectado', calculo: results[0].solution });
  });
});

app.listen(port, () => {
  console.log(` Servidor corriendo en http://localhost:${port}`);
});