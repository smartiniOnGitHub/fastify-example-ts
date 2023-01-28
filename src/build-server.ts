/*
 * Copyright 2020-2023 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { FastifyInstance, FastifyReply, FastifyRequest, FastifyServerOptions } from 'fastify'

/* eslint no-console: "off" */
/* eslint no-undef: "off" */
/* eslint no-unused-vars: "off" */
/* eslint callback-return: "off" */
/* eslint no-process-env: "off" */
/* eslint @typescript-eslint/no-explicit-any: "off" */
/* eslint @typescript-eslint/explicit-module-boundary-types: "off" */
/* eslint @typescript-eslint/no-unused-vars: "off" */
/* eslint @typescript-eslint/no-var-requires: "off" */

// add content (routes, etc) in the given server instance
// note that some routes here are normal (non-async) and others are async
// export default async function server (fastify: FastifyInstance, opts: FastifyServerOptions) { // as esm
async function server (fastify: FastifyInstance, opts: FastifyServerOptions) { // as a Node.js classic module (commonjs)
  // add some routes

  // fastify.get('/', async (request, reply) => { // shorter version
  fastify.get('/', async (request:FastifyRequest, reply: FastifyReply) => {
    return 'Hello from Fastify and TypeScript.'
  })
}

module.exports = server
