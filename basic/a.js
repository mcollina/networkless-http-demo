import fastify from 'fastify'
import { setGlobalDispatcher } from 'undici'
import FasifyUndiciDispatcher from 'fastify-undici-dispatcher'

const app = fastify()

app.get('/', async (req, reply) => {
  return 'hello world'
})

const dispatcher = new FasifyUndiciDispatcher({
  domain: '.local'
})

dispatcher.route('a', app)

setGlobalDispatcher(dispatcher)

const res = await fetch('http://a.local')

console.log(await res.text())
