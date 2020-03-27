//Armazenando todas as funções na variável express
const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

//variável que armazena a aplicação
const app = express();

app.use(cors());
//Informando para a aplicação que o corpo das requisições irá ser no formato JSON
app.use(express.json());

app.use(routes);
app.use(errors());

module.exports = app;
