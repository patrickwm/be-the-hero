const generatedUniqueId = require('../utils/generateUniqueId')
const connection = require('../database/connection');

module.exports = {
    //é utilizado async, para que quando for fazer o insert no banco, ele espere dar certo para ai responder via json
    async create(req, res) {
        const {name, email, whatsapp, city, uf} = req.body;
    
        const id = generatedUniqueId();

        await connection('ongs').insert({
            id,
            name, 
            email, 
            whatsapp, 
            city, 
            uf,
        })

        return res.json({ id });
    },

    async index(req, res) {
        const ongs = await connection('ongs').select('*');
    
        return res.json(ongs);
    }
}