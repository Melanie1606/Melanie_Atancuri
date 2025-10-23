const request = require('supertest');
const { app } = require('../index');

describe('GET /', () => {
  it('debe responder con un mensaje', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body.ok).toBe(true);
  });
});

describe('GET /sum', () => {
  it('debe sumar correctamente', async () => {
    const res = await request(app).get('/sum?a=5&b=4');
    expect(res.body.result).toBe(9);
  });
});
