const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

// Middleware para registrar cada petición en la consola
app.use((req, res, next) => {
   console.log(`📡 Petición recibida desde ${req.ip} -> ${req.method} ${req.url}`);
   next();
});

app.get('/', async (req, res) => {
   try {
      const response = await axios.get('https://api.example.com');
      res.send(response.data);
   } catch (error) {
      console.error('Error al obtener datos:', error.message);
      res.status(500).send('Error al obtener datos');
   }
});

app.listen(PORT, () => {
   console.log(`🚀 Servidor web activo en http://localhost:${PORT}`);
});