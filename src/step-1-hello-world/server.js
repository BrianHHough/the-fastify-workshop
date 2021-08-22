import build from './app.js'

const app = await build()

wait app.listen(3000)
