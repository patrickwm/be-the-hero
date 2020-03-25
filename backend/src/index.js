//Armazenando todas as funções na variável express
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

//variável que armazena a aplicação
const app = express();

app.use(cors());
//Informando para a aplicação que o corpo das requisições irá ser no formato JSON
app.use(express.json());

app.use(routes);

//mandando a aplicação ouvir a porta 333
app.listen(3333);
