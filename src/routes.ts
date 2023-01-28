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

// const k = require('./constants')
const utils = require('./utils')

// manually define the list of some exposed routes, with some description
const sampleRoutes = [
  { link: '/', url: '/', description: 'Home page (async)' },
  { link: 'time', url: '/time', description: 'Sample API call that returns the current server time, as timestamp and in ISO format (async)' }
  // others ...
  // ].sort((a, b) => a.link.localeCompare(b.link))
].sort(utils.compareProperties('link')) // opt. add sort order, 'asc' (by default) or 'desc'
// manually define the list of some routes exposed by some loaded plugins
const pluginRoutes = [
  // others ...
  { link: 'favicon', url: '/favicon.ico', description: "Expose the favicon, by 'fastify-favicon' plugin" },
  { link: 'healthcheck', url: '/health', description: "Expose an healthcheck, by 'fastify-healthcheck' plugin" }
].sort(utils.compareProperties('link')) // opt. add sort order, 'asc' (by default) or 'desc'

// add content (routes, etc) in the given server instance
// note that some routes here are normal (non-async) and others are async
// export default async function routes (fastify: FastifyInstance, opts: FastifyServerOptions) { // as esm
async function routes (fastify: FastifyInstance, opts: FastifyServerOptions) { // as a Node.js classic module (commonjs)
  // add some routes

  // example route to return current timestamp, in async way
  fastify.get('/time', async (request:FastifyRequest, reply: FastifyReply) => {
    const now = new Date()
    const timestamp = now.getTime()
    return {
      timestamp,
      time: now.toISOString()
    }
  })
}

module.exports = routes
