/*
 * Copyright 2020-2026 the original author or authors.
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
import Fastify from 'fastify'

const buildServer = require('./build-server') as any
const routes = require('./routes') as any
const features = require('./features') as any

const fastify = Fastify()

// load a code configuration for the fastify instance just built
// fastify.register(import('./build-server')) // as esm
// for now, register it as a Node.js classic module (commonjs)
fastify.register(buildServer)
fastify.register(routes) // add some routes
fastify.register(features) // add application features

fastify.listen({ port: 8000, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address} ...`)
})
