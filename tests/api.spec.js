const request = require('supertest')
const app = require('../app')

describe('GET /', () => {
  test("Return status: 200 and a hello world message", done => {
    request(app).get('/').then(res => {
      expect(res.statusCode).toBe(200)
      // expect(res.body).toHaveProperty('status') // Expect that the response body has status property
      // expect(res.body).toHaveProperty('message') // Expect that the response body has message property
      expect({
        status: true,
        message: "hello world"
      }) // Expect it to be success 
      done()
    })
  })
})

describe('POST /sum', () => {
  test("Return status: 200 and result of x + y", done => {
    request(app)
      .post('/sum')
      .set('Content-Type', 'application/json')
      .send({ x: 10, y: 10 })
      .then(res => {
        expect(res.statusCode).toBe(200)
        // expect(res.body).toHaveProperty('status') // Expect that the response body has status property
        // expect(res.body).toHaveProperty('message') // Expect that the response body has message property
        expect({
          status: true,
          message: "Parameters summarized!",
          data: { x: 10, y: 10, result: 20 }
        }) // Expect it to be success 
        done()
      })
  })
})
