const express = require('express');
const routes = express.Router();
const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentsController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


/**
*   GET: Buscar uma informação no back-end
*   POST: Criar uma informação no back-end
*   PUT: Alterar uma informação no back-end
*   DELETE: Deletar uma informação no back-end
*/

/**
 * Tipos de parâmetros
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (filtros, paginação) Ex: ?nome=Patrick - Pega request.query
 * Route Params: Parâmetros utilizados para identificar recursos. Ex: users/1 - Pega request.params
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos Pega por request.body
 */

//Criando rota base para a aplicação responder a página principal do projeto


routes.post('/ongs', OngController.create);
routes.get('/ongs', OngController.index);

routes.post('/incidents', IncidentsController.create);
routes.get('/incidents', IncidentsController.index);
routes.delete('/incidents/:id', IncidentsController.delete);

routes.get('/profile', ProfileController.index);

routes.post('/sessions', SessionController.create)

module.exports = routes;