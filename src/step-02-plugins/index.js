import Fastify from 'fastify'

function buildServer() {
  const fastify = Fastify()

  fastify.register(import('./routes/users.js'))

  return fastify
}

export default buildServer

// const start = async function () {
//   const app = fastify()

//   fastify.get('/', () => {
//     return { hello: 'world' }
//   })

//   try {
//     await fastify.listen(3000)
//   } catch (err) {
//     app.log.error(err)
//     process.exit(1)
//   }
// }

// start()
