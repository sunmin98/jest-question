// todo-service.test.js

const { get } = require('./todo-service'); // get 함수를 가져옴

// Mock mysql2/promise module
jest.mock('mysql2/promise', () => ({
    createConnection: jest.fn(() => ({
        query: jest.fn(() => [[{ id: 1, content: 'do the homework' }], []]),
        end: jest.fn()
    }))
}));

describe('Todo Service Unit Test', () => {
    test('Get Todo', async () => {
        const todo = await get();
        expect(todo).toEqual('do the homework');
    });
});
