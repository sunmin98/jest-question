const express = require('express');
const { get } = require('./todo-service');
const request = require('supertest');

const app = express();
const port = process.env.PORT || 3000; // 포트를 환경 변수로 지정

app.get('/todo', async (req, res) => {
  try {
    const content = await get();
    return res.json({ result: content });
  } catch (err) {
    return res.status(500).json({ result: 'server internal error', error: err });
  }
});

// post
// put
// delete

describe('GET /todo', () => {
  test('should respond with JSON and status 200', async () => {
    const response = await request(app).get('/todo');
    expect(response.status).toBe(200);
    expect(response.type).toMatch(/json/);
  });

  // 다른 테스트 케이스 추가 가능
});

if (process.env.NODE_ENV !== 'test') {
  const server = app.listen(port, () => {
    console.log(`Todo app listening on port ${port}`);
  });

  // 테스트 모드가 아닌 경우에만 서버를 시작합니다.
  module.exports = { app, server };
} else {
  module.exports = { app };
}
