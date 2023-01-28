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

/* eslint no-console: "off" */
/* eslint no-undef: "off" */
/* eslint no-unused-vars: "off" */
/* eslint callback-return: "off" */
/* eslint @typescript-eslint/no-var-requires: "off" */

const test = require('tap').test

// load environment specific variables from '.env' file (if any) into process.env ...
// const dotenv = require('dotenv')
// dotenv.config()

const Fastify = require('fastify')
const App = require('../dist/build-server')

// some basic test, but using the async/await syntax
test('Basic', async t => {
  // t.plan(2) // ok but use t.end() now, without having to specify/update the right number of tests

  const fastify = Fastify()
  await fastify.register(App)

  const response = await fastify.inject({
    method: 'GET',
    path: '/'
  })

  t.equal(response.statusCode, 200)
  const r = response.body
  t.equal(r, 'Hello from Fastify and TypeScript.')

  t.end()
})

// etc ...
