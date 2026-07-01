const usuariosEscola = [
  { id: 1, nome: 'Maykon', papel: 'Estudante do Ensino Médio' },
  { id: 2, nome: 'Bianca', papel: 'Estudante do Ensino Médio' },
  { id: 3, nome: 'Allan', papel: 'Estudante do Ensino Médio' }
];

const avisosEscola = [
  'Reunião de pais na próxima sexta-feira às 19h.',
  'Entrega dos relatórios de notas até dia 10.',
  'Feira de Ciências adiada para o próximo mês.',
  'Manutenção programada nos computadores do laboratório amanhã.'
];

const tarefasEscola = [
  { materia: 'Matemática', descricao: 'Resolver exercícios da página 42', dataEntrega: '05/05' },
  { materia: 'História', descricao: 'Ler os capítulos 3 e 4 do livro', dataEntrega: '08/05' },
  { materia: 'Biologia', descricao: 'Montar o relatório do experimento', dataEntrega: '12/05' }
];

const reservasSala = [
  { sala: 'Laboratório de Informática', professor: 'Mateus', horario: '08:00 - 09:30' },
  { sala: 'Laboratório de Química', professor: 'Bianca', horario: '10:00 - 11:30' }
];

console.log('MOCK: USUÁRIOS DA ESCOLA');
console.log(usuariosEscola);

console.log('\nMOCK: AVISOS DA ESCOLA');
console.log(avisosEscola);

console.log('\nMOCK: TAREFAS');
console.log(tarefasEscola);

console.log('\nMOCK: RESERVAS DE SALA');
console.log(reservasSala);