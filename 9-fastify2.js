
const fastify = require('fastify')({
    logger: true
  })
  
  fastify.register(require('./9-fastify2-1'))
  
  fastify.listen(3000, function (err, address) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
   
  })