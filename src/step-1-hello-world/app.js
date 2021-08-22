import fastify from 'fastify'
import { join } from 'desm'

export default async function () {
    const app = fastify()
    
    app.get('/', () => {
        return { hello: 'world' }
    })

    app.register(import('./routes/users.js'))
    return app
}
