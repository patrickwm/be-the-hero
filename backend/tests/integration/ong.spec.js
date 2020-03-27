const req = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection')

describe('ONG', () => {
    beforeEach(async () => {
        //Limpa banco de dados de teste
        await connection.migrate.rollback();
        // Recria banco de dados de teste executando as migrations
        await connection.migrate.latest();
    })

    afterAll(() => {
        connection.destroy();
    })

    it('should be able to create a new ONG', async () => {
        const res = await req(app)
            .post('/ongs')
            .send({
                name: "APAD",
                email: "contato@apad.com.br",
                whatsapp: "4700000000",
                city: "Paraná",
                uf: "PR"
            });;
        
        expect(res.body).toHaveProperty('id');
        expect(res.body.id).toHaveLength(8);
        
    })
})