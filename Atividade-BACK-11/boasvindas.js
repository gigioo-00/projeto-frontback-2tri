const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Seja bem-vinde ao projeto AGENDA DIGITAL LULÁTICOS!, aqui você poderá conhecer um pouco mais sobre o projeto e também acompanhar o desenvolvimento do mesmo.');
});

app.get('/sobre', (req, res) => {
  res.send('Este projeto é sobre uma Agenda Digital para facilitar nossa vida');
});

app.get('/equipe', (req, res) => {
  res.send('Nossa equipe: Allan, Bianca, Giovanna, Maykon e Miguel');
});

app.get('/contato', (req, res) => {
  res.send('Para contatar-nos, envie um e-mail para suportelulaticos@gmail.com');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});