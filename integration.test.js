// integration.test.js

const request = require('supertest');
const { app } = require('./app');

describe('Integration Test for /todo API', () => {
    let server;

    beforeAll(() => {
        server = app.listen(0);
    });

    afterAll(() => {
        server.close();
    });

    test('GET /todo returns JSON containing the todo content', async () => {
        const response = await request(server).get('/todo');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('result');
        expect(typeof response.body.result).toBe('string');
    });
});
