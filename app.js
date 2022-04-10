const { query } = require('express');
const express = require('express');
const app = express();
const Router = express.Router();
app.use(express.json());

app.get('/', function (req, res) {
  const { query: queryDestructoring } = req;
  const { nombre: name } = queryDestructoring;
  console.log('GET Request Received');
  res.send(`<h1>Hola ${name}!<h1>`);
});

// // app.get('/', (req, res) => {
// //   ({ nombre } = req), res.send(`<h1>Hola ${nombre}</h1>`);
// // });

app.listen(3000, () => console.log('Listening on port 3000!'));
