const express = require('express');
const app = express();

const usuarios = ['Allan', 'Maykon', 'Bianca'];
const tarefas = ['Estudar Express', 'Tentar estudar', 'Trabalhar'];
const reservas = ['Mesa 4 - 20h', 'Quadra de Tênis - 14h'];
const turmas = ['Turma A - 1º Ano', 'Turma B - 2º Ano', 'Turma C - 3º Ano'];

app.get('/usuarios', (req, res) => {
  res.json(usuarios);
});

app.get('/tarefas', (req, res) => {
  res.json(tarefas);
});

app.get('/reservas', (req, res) => {
  res.json(reservas);
});

app.get('/turmas', (req, res) => {
  res.json(turmas);
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});