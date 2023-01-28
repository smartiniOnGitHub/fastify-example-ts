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

// features wrap: depending on enabled feature flags, load and configure each one

// configuration for enabled/disabled features
const featuresEnabled = {
  // TODO: ...
  favicon: true,
  // favicon: utils.featureIsEnabled(true, utils.fromEnv('FEATURE_FAVICON_DISABLE'), false),
  healthcheck: true
  // healthcheck: utils.featureIsEnabled(true, utils.fromEnv('FEATURE_HEALTHCHECK_DISABLE'), false),
  // others ...
}

// features is a function because I need to pass fastify instance, and some configuration options
// otherwise implement as a class and pass those arguments in its constructor)
// export default async function features (fastify: FastifyInstance, opts: FastifyServerOptions) { // as esm
async function features (fastify: FastifyInstance, opts: FastifyServerOptions) { // as a Node.js classic module (commonjs)
  if (!fastify) {
    throw new Error('Fastify instance must have a value')
  }

  // define an object to return, it could contain useful data/references, depending on features enabled
  const features = {}

  if (featuresEnabled.favicon) {
    // fastify-favicon, example using only plugin default options
    fastify.register(require('fastify-favicon'), {
    })
  }

  if (featuresEnabled.healthcheck) {
    // fastify-healthcheck, example with null or empty options, using only plugin default options
    // features.healthcheck = {} // sample
    // enable only the option to expose even process uptime, as a sample
    fastify.register(require('fastify-healthcheck'), {
      exposeUptime: true
    })
  }

  // others ...
}

module.exports = features
