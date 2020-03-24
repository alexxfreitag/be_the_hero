# Semana OmniStack 11.0

## Backend

### Métodos HTTP
**GET**: busca/lista informações  
**POST**: envia/cadastra informações  
**PUT**: atualiza informações  
**DELETE**: remove informações


#### Express

Usado para criação de rotas, middlewares e outras funções.

- Instalação
  
  ```
  npm install express
  ```

- Uso
  ```javascript
  //importa o express
  const express = require('express');

  //inicia o servidor
  const app = express();

  //necessário para reconhecer envio do corpo da requisição em formato JSON
  app.use(express.json());

  //exemplo de requisição GET
  app.get('/', (req, res) => {
    return res.json({
      evento: 'Semana OmniStack 11.0',
      aluno: 'Alex Freitag'
    })
  });

  //define a porta na qual o servidor deve apontar
  app.listen(3333);
  ```

#### Nodemon

Atualiza o servidor sempre que o código sofrer alguma alteração, sem necessitar reiniciar toda vez.

- Instalação (como dependência de desenvolvimento)
  ```
  npm install nodemon -D
  ```

- Script no package.json para iniciar o servidor com comando específico
  ```json
  "scripts": {
    "start": "nodemon index.js"
  }
  ```

- Comando para iniciar o servidor ao invés do "node index.js"
  ```
  npm start
  ```
