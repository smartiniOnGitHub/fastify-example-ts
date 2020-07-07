import fastify from 'fastify'

const server = fastify()

server.get('/', async (request, reply) => {
  return 'Hello from Fastify and TypeScript.'
})

server.listen(8000, '0.0.0.0', (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address} ...`)
})
