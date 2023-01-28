import fastify from 'fastify'
// import { expectAssignable } from 'tsd'

const app = fastify()

app.listen({ port: 3000 }, (err, address) => {
  if (err) throw err
  console.log(`Server listening on '${address}' ...`)
})
