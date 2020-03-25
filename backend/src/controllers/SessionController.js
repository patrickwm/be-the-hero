const connection = require('../database/connection');

module.exports = {
    //é utilizado async, para que quando for fazer o insert no banco, ele espere dar certo para ai responder via json
    async create(req, res) {
        const { id } = req.body;

        const ong = await connection('ongs')
            .where('id', id)
            .select('name')
            .first();

        if(!ong){
            return res.status(400).json({ error: 'No ONG found with this ID' });
        }

        return res.json(ong);
    }
}