/// <reference path="../global.d.ts" />
/// <reference path="../client/client.d.ts" />
import { FastifyInstance, FastifyPluginOptions } from 'fastify'

declare module 'fastify' {
  interface FastifyInstance {
    example: string
  }
}

export default async function (fastify: FastifyInstance, opts: FastifyPluginOptions) {
  fastify.get('/example', async (request, reply) => {
    return { hello: fastify.example }
  })

  fastify.get('/bar-example', async (request, reply) => {
    const res = await request.client.getExample()
    return { fromBar: res }
  })
}
