const express = require('express');
const bodyParser = require('body-parser');
const winston = require('winston');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configuração do logger utilizando o módulo winston
const logger = winston.createLogger({
  level: 'info', // Define o nível de log como 'info'
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: 'logfile.log' }) // Salva os logs no arquivo 'logfile.log'
  ]
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/form.html'); // Substitua 'form.html' pelo nome do arquivo HTML do seu formulário
});

app.post('/submit', (req, res) => {
  const formData = req.body;

  // Log dos dados do formulário utilizando o logger
  logger.info('Dados do formulário:', formData);

  res.send('Formulário enviado com sucesso');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
