//MIR implementation of saludame 1
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  let name = req.query.nombre;
  if (!name || name.length === 0) {
    name = 'desconocido';
  }

  res.send(`<h1>Hola ${name}!</h1>`);
});

app.listen(3000, () => console.log('Listening on port 3000!'));

// MIR implementation of Saludame2
const express = require('express');
const app = express();

app.get('/makers/:name', (req, res) => {
  let name = req.params.name;
  name = name.replace(/^\w/, (c) => c.toUpperCase());

  res.send(`<h1>Hola ${name}!</h1>`);
});

app.listen(3000, () => console.log('Listening on port 3000!'));
