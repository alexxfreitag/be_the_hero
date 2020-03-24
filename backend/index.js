const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  return res.json({
    evento: 'Semana OmniStack 11.0',
    aluno: 'Alex Freitag'
  })
});

app.listen(3333);