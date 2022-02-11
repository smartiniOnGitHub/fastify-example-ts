/*
 * Copyright 2020-2022 the original author or authors.
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

const assert = require('assert').strict
const test = require('tap').test
const tap = require('tap')

// test zero, just to ensure that test framework works
assert(tap !== null)
tap.pass('this is an empty test, but test frameworks works')

// note that this is not neccessarily the main/entry point file, unless specified/called directly ...
tap.comment('Sample JavaScript Test file using TAP ...')

// load the module/s to test
// remember to use the ts output folder in local path
const utilModule = require('../dist/utils')
// import utilModule = require('../dist/utils') // future use

// first tests, on a utility module
// as a sample
tap.ok(utilModule)
tap.ok(utilModule.noop)
tap.ok(utilModule.isUndefinedOrNull)
tap.ok(utilModule.isStringEmpty)

// other tests, using a different (better) syntax
test('util, string empty or not', (t) => {
  // t.plan(2) // ok but use t.end() now, without having to specify/update the right number of tests

  t.ok(assert)
  t.ok(utilModule)

  t.ok(utilModule.noop)
  t.ok(utilModule.isUndefinedOrNull)
  t.ok(utilModule.isStringEmpty)

  t.equal(utilModule.isUndefinedOrNull(), true)
  t.equal(utilModule.isUndefinedOrNull(null), true)
  t.equal(utilModule.isUndefinedOrNull(''), false)
  t.equal(utilModule.isUndefinedOrNull({}), false)

  t.equal(utilModule.isStringEmpty(), true)
  t.equal(utilModule.isStringEmpty(null), true)
  t.equal(utilModule.isStringEmpty('not empty'), false)
  t.equal(utilModule.isStringEmpty(''), true)

  t.end()
})

// etc ...
