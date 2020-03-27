const express = require('express');
const routes = express.Router();
const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentsController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const { celebrate, Segments, Joi} = require('celebrate')


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


routes.post('/ongs', celebrate({
    [Segments.BODY] : Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
    })
}), OngController.create);
routes.get('/ongs', OngController.index);

routes.post('/incidents', IncidentsController.create);
routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()
    })
}),IncidentsController.index);

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS] : Joi.object().keys({
        id: Joi.number().required(),
    })
}), IncidentsController.delete);

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}), ProfileController.index);

routes.post('/sessions', SessionController.create)

module.exports = routes;