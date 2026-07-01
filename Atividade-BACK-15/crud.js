const express = require('express');
const app = express();

app.use(express.json());

let usuarios = [
  { id: 1, nome: 'Maykon', papel: 'Estudante' },
  { id: 2, nome: 'Bianca', papel: 'Estudante' }
];

let tarefas = [
  { id: 1, descricao: 'Estudando rotas express', concluida: false },
  { id: 2, descricao: 'Fazer lição de matemática', concluida: true }
];

app.get('/usuarios', (req, res) => {
  res.json(usuarios);
});

app.get('/usuarios/:id', (req, res) => {
  const id = Number(req.params.id);
  const usuario = usuarios.find(item => item.id === id);
  
  if (!usuario) {
    return res.status(404).json({ mensagem: 'Usuário não encontrado' });
  }
  res.json(usuario);
});

app.post('/usuarios', (req, res) => {
  const novoUsuario = {
    id: usuarios.length > 0 ? usuarios[usuarios.length - 1].id + 1 : 1,
    nome: req.body.nome,
    papel: req.body.papel
  };
  usuarios.push(novoUsuario);
  res.status(201).json(novoUsuario);
});

app.put('/usuarios/:id', (req, res) => {
  const id = Number(req.params.id);
  const usuario = usuarios.find(item => item.id === id);

  if (!usuario) {
    return res.status(404).json({ mensagem: 'Usuário não encontrado' });
  }

  usuario.nome = req.body.nome;
  res.json({ mensagem: 'Nome do usuário atualizado', usuario });
});

app.delete('/usuarios/:id', (req, res) => {
  const id = Number(req.params.id);
  usuarios = usuarios.filter(item => item.id !== id);
  res.json({ mensagem: 'Usuário removido com sucesso' });
});

app.get('/tarefas', (req, res) => {
  res.json(tarefas);
});

app.get('/tarefas/:id', (req, res) => {
  const id = Number(req.params.id);
  const tarefa = tarefas.find(item => item.id === id);

  if (!tarefa) {
    return res.status(404).json({ mensagem: 'Tarefa não encontrada' });
  }
  res.json(tarefa);
});

app.post('/tarefas', (req, res) => {
  const novaTarefa = {
    id: tarefas.length > 0 ? tarefas[tarefas.length - 1].id + 1 : 1,
    descricao: req.body.descricao,
    concluida: req.body.concluida || false
  };
  tarefas.push(novaTarefa);
  res.status(201).json(novaTarefa);
});

app.put('/tarefas/:id', (req, res) => {
  const id = Number(req.params.id);
  const tarefa = tarefas.find(item => item.id === id);

  if (!tarefa) {
    return res.status(404).json({ mensagem: 'Tarefa não encontrada' });
  }

  tarefa.descricao = req.body.descricao;
  tarefa.concluida = req.body.concluida;
  res.json(tarefa);
});

app.delete('/tarefas/:id', (req, res) => {
  const id = Number(req.params.id);
  tarefas = tarefas.filter(item => item.id !== id);
  res.json({ mensagem: 'Tarefa removida com sucesso' });
});

app.listen(3000, () => {
  console.log('Servidor CRUD rodando na porta 3000');
});