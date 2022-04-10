const { query } = require('express');
const express = require('express');
const app = express();
const Router = express.Router();
app.use(express.json());

app.get('/makers/:name', (req, res) => {
  let { name: nameInput } = req.params;
  const caps = nameInput.charAt(0).toUpperCase() + nameInput.slice(1);
  //res.json(req, res);
  console.log('GET Request Received', caps);
  res.send(`<h1>Hola ${caps}!<h1>`);
});

app.get('/', function (req, res) {
  // const { query: queryDestructoring } = req;
  // const { nombre: name } = queryDestructoring;
  let { query: { nombre: name = 'desconocido' } = {} } = req;
  console.log('GET Request Received');
  res.send(`<h1>Hola ${name}!<h1>`);
});

// // app.get('/', (req, res) => {
// //   ({ nombre } = req), res.send(`<h1>Hola ${nombre}</h1>`);
// // });

app.listen(3000, () => console.log('Listening on port 3000!'));
