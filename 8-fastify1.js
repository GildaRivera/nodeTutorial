
const fastify = require('fastify')({
  logger: true
})


// fastify.get('/', function (request, reply) {
//   reply.send({ hello: 'world' })
// })


fastify.listen(3000, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})

const opts = {
    schema: {
      response: {
        200: {
          type: 'object',
          properties: {
            hello: { type: 'string' }
          }
        }
      }
    }
  }
  
  fastify.get('/', opts, async (request, reply) => {
    return { hello: 'world' }
  })
  fastify.post('/', opts, async (request, reply) => {
    return request.body
  })