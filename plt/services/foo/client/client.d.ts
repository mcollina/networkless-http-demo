import { type FastifyReply, type FastifyPluginAsync } from 'fastify'

declare namespace client {
  export interface Client {
    getExample(req?: GetExampleRequest): Promise<GetExampleResponses>;
  }
  export interface ClientOptions {
    url: string
  }
  export const client: ClientPlugin;
  export { client as default };
  export interface FullResponse<T, U extends number> {
    'statusCode': U;
    'headers': Record<string, string>;
    'body': T;
  }

  export interface GetExampleRequest {
  }

  export interface GetExampleResponseOK {
  }

  type GetExampleResponses = 
    GetExampleResponseOK

}

type ClientPlugin = FastifyPluginAsync<NonNullable<client.ClientOptions>>

declare module 'fastify' {
  interface ConfigureClient {
    getHeaders(req: FastifyRequest, reply: FastifyReply): Promise<Record<string,string>>;
  }
  interface FastifyInstance {
    configureClient(opts: ConfigureClient): unknown
  }

  interface FastifyRequest {
    'client': client.Client;
  }
}

declare function client(...params: Parameters<ClientPlugin>): ReturnType<ClientPlugin>;
export = client;
