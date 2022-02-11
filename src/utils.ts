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

// import { Url } from 'node:url'

/* eslint no-console: "off" */
/* eslint no-undef: "off" */
/* eslint no-unused-vars: "off" */
/* eslint callback-return: "off" */
/* eslint no-process-env: "off" */
/* eslint no-eval: "off" */
/* eslint @typescript-eslint/no-explicit-any: "off" */
/* eslint @typescript-eslint/explicit-module-boundary-types: "off" */
/* eslint @typescript-eslint/no-var-requires: "off" */

// define a general object, and assign functions to it ...
// const utils = {}

// some generic utility functions
// ported from js, but using wide types here the same (even if in ts)
function clearConsole () {
  if (console.clear) { console.clear() }
}
function normalizeData (data: any, asArray: boolean): any {
  if (data != null) { return data } else {
    if (data instanceof Array || asArray) { return [] } else { return {} }
  }
}
function getOrElse (obj: any, def: any): any {
  if (typeof obj !== 'undefined' && obj !== null) { return Object.create(obj) } else { return def }
}
function getType (obj: any): string {
  return typeof obj
}
function getTypeFromConstructor (obj: any): string {
  // if (typeof obj !== 'undefined' && obj !== null) { return obj.constructor.name } else { return null }
  if (typeof obj !== 'undefined' && obj !== null) { return obj.constructor.name } else { return 'unknown' }
}
function getTypeFromPrototype (obj: any): string {
  return Object.prototype.toString.call(obj).slice(8, -1)
}
function has (obj: any, key: string): boolean {
  return key in obj
}
function hasLocalOrInPrototype (obj: any, key: string, searchInPrototype: boolean): boolean {
  if (!searchInPrototype) { return Object.prototype.hasOwnProperty.call(obj, key) } else {
    return key in obj
  }
}

function noop (): void {
  // do nothing ...
}

function isUndefinedOrNull (o: any): boolean {
  return (o === undefined || o === null)
}

function isStringEmpty (obj: any): boolean {
  if (isUndefinedOrNull(obj)) { return true }
  return obj.length === 0
}

function isDefined (o: any): boolean {
  return (typeof o !== 'undefined')
}
function isUndefined (o: any): boolean {
  return (typeof o === 'undefined')
}
function isNull (o: any): boolean {
  return (o === null)
}
function isNotNull (o: any): boolean {
  return (o !== null)
}
function isDefinedAndNotNull (o: any): boolean {
  return (o !== undefined && o !== null)
}

function isUndefinedOrNullArrayItem (a: any): boolean {
  if (isUndefinedOrNull(a) && !isArray(a)) {
    return true
  } else {
    for (const item of a) {
      if (item === null) { return true }
    }
    return false
  }
}

function isStringTrimmedEmpty (obj: any): boolean {
  if (isUndefinedOrNull(obj)) { return true }
  return obj.trim().length === 0
}
function isEmpty (obj: any): boolean {
  if (isUndefinedOrNull(obj)) { return true }
  if (isArray(obj) || isString(obj)) { return obj.length === 0 }
  if (isMap(obj) || isSet(obj)) { return obj.size === 0 }
  if (isObject(obj)) { return objectOwnPropertiesNames(obj).length === 0 }
  return false
}
function isArrayEmpty (obj: any): boolean {
  if (isUndefinedOrNull(obj)) { return true }
  return obj.length === 0
}

function isFunction (f: any): boolean {
  return (typeof f === 'function')
}
function isArray (o: any): boolean {
  return (Array.isArray(o))
}
function isBoolean (o: any): boolean {
  return (typeof o === 'boolean')
}
function isNumber (o: any): boolean {
  return (typeof o === 'number')
}
function isString (o: any): boolean {
  return (typeof o === 'string')
}
function isNullOrEmpty (o: any): boolean {
  return (o == null || (isString(o) && o.length === 0) || (isArray(o) && o.length === 0))
}
function isDate (o: any): boolean {
  return (typeof o === 'object' || o instanceof Date)
}
function isValidDate (d: any): boolean {
  return (isDate(d) && !isNaN(d))
}
function isRegExp (o: any): boolean {
  return (typeof o === 'object' && o instanceof RegExp)
}
function isMap (o: any): boolean { // ES6 Maps
  return (o instanceof Map || o instanceof WeakMap)
}
function isSet (o: any): boolean { // ES6 Sets
  return (o instanceof Set || o instanceof WeakSet)
}
function isSymbol (o: any): boolean { // ES6 Symbols
  return (typeof o === 'symbol')
}
function isObject (o: any): boolean {
  return (typeof o === 'object')
}
function isError (o: any): boolean {
  return (o instanceof Error && typeof o.message !== 'undefined')
}

function objectOwnPropertiesNames (obj: any): Array<string> {
  // return all own properties names of the given object, as a list (array)
  return Object.keys(obj)
}
function objectOwnPropertiesList (obj: any): Array<any> {
  // return all own properties of the given object, as a list (array)
  const values = []
  for (const prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      values.push(prop)
    }
  }
  return values
}

function isStringFalse (obj: any): boolean {
  return (isString(obj) && ['false', 'f', 'no', 'n', '0'].indexOf(obj.toLowerCase()) > -1)
}
function isStringTrue (obj: any): boolean {
  return (isString(obj) && ['true', 't', 'yes', 'y', '1'].indexOf(obj.toLowerCase()) > -1)
}
function formatObjectToJson (o: any): string {
  return JSON.stringify(o)
}
function formatObjectToString (o: any, onlyOwnProperties: boolean): string {
  let dump = ''
  let oop = false
  if (typeof onlyOwnProperties === 'undefined') { oop = true }
  for (const prop in o) {
    if (oop === false || Object.prototype.hasOwnProperty.call(o, prop)) {
      dump = dump + prop + ': ' + o[prop] + ', '
    }
  }
  return dump
}
function formatObjectToMap (o: any): Map<any, any> {
  if (Object.entries && typeof Map !== 'undefined') { return new Map(Object.entries(o)) } else { return new Map() }
}
function formatDateToTimestampNoCheck (d: any): string {
  return d.toISOString()
}
function formatCurrentDateToTimestamp (): string {
  return formatDateToTimestampNoCheck(new Date())
}
function parseDateFromISOStringNoCheck (d: any): any {
  return Date.parse(d)
}
function parseStringToBoolean (str: string, def: boolean): boolean {
  if (isUndefinedOrNull(str) && isDefinedAndNotNull(def)) { return def }
  switch (str.toLowerCase().trim()) {
    case 'false':
    case 'f':
    case 'no':
    case 'n':
    case '0':
    case null:
      return false
    case 'true':
    case 't':
    case 'yes':
    case 'y':
    case '1':
      return true
    default:
      return def
  }
}
function parseJSON (str: string, callback: any): any {
  if (!isFunction(callback)) {
    throw new TypeError(`Illegal argument: callback must be a function, instead got a '${typeof callback}'`)
  }
  try {
    const parsedJSON = JSON.parse(str)
    callback(null, parsedJSON)
  } catch (err) {
    callback(err, null)
  }
}
function lowercase (o: string): string {
  return isString(o) ? o.toLowerCase() : o.toString().toLowerCase()
}
function uppercase (o: string): string {
  return isString(o) ? o.toUpperCase() : o.toString().toUpperCase()
}
function toInt (str: string): number {
  return parseInt(str, 10)
}
function evaluate (statement: string): boolean {
  const evaluator = eval
  try {
    evaluator(statement)
    return true
  } catch (e) {
    return false
  }
}

function isErrorAvailable (): boolean {
  return (typeof Error !== 'undefined')
}

function throwError (msg: string): Error { // note that msg could be a string or an Error, or another Object ...
  // throw new Error(msg)
  if (isErrorAvailable()) { throw new Error(msg) } else { throw msg } // fallback
}
function errorNotImplemented (): void {
  throwError('Not Implemented (implementation missing)')
}
function errorNotCallable (): void {
  throwError('Not Callable (abstract, implement it in childs)')
}

// log to console
function logToConsole (msg: string) {
  console.log(msg)
}

// log a fastify request, but only the given URL
function logRoute (req: any) {
  req.log.info(`Got request for URL: '${req.req.url}' ...`)
}

/*
// log a fastify request, full
function logRequest (req: any) {
  const details = dumpObject(req.req)
  req.log.info(`Got request for URL: '${req.req.url}', details: '${details}' ...`)
}
 */

// register in the app the given module
// function registerLoadedModule (app: any, loadedModule: any, opts: any, uri: Url) {
function registerLoadedModule (app: any, loadedModule: any, opts: any, uri: any) {
  if (isUndefinedOrNullArrayItem([app, loadedModule])) { throw new Error('Missing mandatory argument (undefined or null)') }
  app.log.info(`Registering the app module from URI '${uri}' ...`)
  app.register(loadedModule, function (err: Error) {
    if (err) { throw err }
  })
}

// defines an extended error, with additional attributes
class ExtendedError extends Error {
  private code: number | null
  private description: string | null
  private date: Date

  constructor (msg: string, code: number | null, description: string | null) {
    super()

    this.name = 'ExtendedError'
    this.message = msg
    this.code = code
    this.description = description
    this.date = new Date()
  }

  public get errorCode () {
    return this.code
  }

  public get errorDescription () {
    return this.description
  }

  public get errorDate () {
    return this.date
  }
}

// build an Error with the given arguments, and throw or return it, depending on the last flag
function buildError (req: any, msg: string, code: number, description: string, throwError: boolean): ExtendedError {
  const codex: number | null = (code != null) ? code : 0
  const descr: string | null = (description != null) ? description : null
  const error = new ExtendedError(msg, codex, descr)
  req.log.error(`Build a new Error: msg:${error.message}, code:${error.errorCode}, description:'${error.errorDescription}', and throw it:${throwError}`)
  if (throwError === true) { throw error } else { return error }
}

// resolve the given value (generic, by default 0), after the number of given seconds (by default 1), returning a Promise
// use it with the async / await syntax (recommended)
function valueDelayed (value = 0, sec = 1): any {
  return new Promise((resolve) => {
    setTimeout(() => { resolve(value) }, sec * 1000)
  })
}

// tell if a feature is enabled
function featureIsEnabled (trueIsDisabled = false, booleanStringName = '', defaultBooleanValue = true): boolean {
  return (trueIsDisabled === true)
    ? !parseStringToBoolean(booleanStringName, defaultBooleanValue)
    : parseStringToBoolean(booleanStringName, defaultBooleanValue)
}

// sort string properties of objects,
// given 'key' (string property name), 'order' ('asc' or 'desc')
function compareProperties (key: string, order = 'asc'): any {
  return function (a: any, b: any): number {
    if (!Object.prototype.hasOwnProperty.call(a, key) || !Object.prototype.hasOwnProperty.call(b, key)) return 0
    const comparison = a[key].localeCompare(b[key])
    return (order === 'asc') ? comparison : (comparison * -1)
  }
}

/*
// TODO: enable later ... wip

// Browser specific functions
// TODO: check if move in its own source ... wip

module.exports.userBrowser = function (): string {
  // browser specific
  if (window && window.navigator) { return window.navigator.userAgent } else { return '' }
}
module.exports.userLanguage = function (): string {
  // browser specific
  if (window && window.navigator) { return window.navigator.language } else { return '' }
}
module.exports.userLanguages = function (): string {
  // browser specific
  if (window && window.navigator) { return window.navigator.languages.toString() } else { return '' }
}
module.exports.userLocale = function (): string {
  // browser specific
  if (window && window.navigator && window.navigator.languages) { return window.navigator.languages[0] } else { return '' }
}

// Node.js required
// TODO: check if move in its own source ... wip

// const process = require('process') // provided by Node.js // implicitly available

// returns the value of the given variable name from the Node.js environment
module.exports.fromEnv = function (varName: string) {
  return process.env[varName]
}
// returns the current Node.js environment
module.exports.currentEnv = function (): string {
  return process.env.NODE_ENV || 'development'
}
// tell if the current Node.js environment is development
module.exports.isEnvDevelopment = function (): boolean {
  return (this.currentEnv() === 'development')
}
// tell if the current Node.js environment is production
module.exports.isEnvProduction = function (): boolean {
  return (this.currentEnv() === 'production')
}
// tell if the current Node.js environment is not production
module.exports.isEnvNotProduction = function (): boolean {
  return !this.isEnvProduction()
}
// returns the current Node.js version
module.exports.runtimeVersion = function (): string {
  return process.version || 'unknown'
}
// returns the current Platform name for the process
module.exports.platformName = function (): string {
  return process.platform || 'unknown'
}

// returns the current process uptime (in sec)
module.exports.uptimeProcess = function (): number {
  return process.uptime() || 0.0
}

// returns the current process id (pid)
module.exports.pid = function (): number {
  return process.pid || 0
}

// returns the current environment variables
module.exports.envVars = function (): any {
  return process.env || {}
}

const os = require('os') // provided by Node.js

// returns the current host uptime (in sec)
module.exports.osUptime = function (): number {
  return os.uptime() || 0
}

// returns the Platform name of the OS
module.exports.osPlatform = function (): string {
  return os.platform() || 'unknown'
}

// returns the Architecture name of the OS
module.exports.osArch = function (): string {
  return os.arch() || 'unknown'
}

// returns detailed CPU info (about core/s) from the OS
module.exports.osCPU = function (): Array<string> {
  return os.cpus() || []
}

// returns the Version of the OS
module.exports.osVersion = function (): string {
  return os.release() || 'unknown'
}

// returns the Host name, from the OS
module.exports.osHost = function (): string {
  return os.hostname() || 'unknown'
}

// returns the total memory available, from the OS
module.exports.osMemoryTotal = function (): number {
  return os.totalmem() || 0
}

// returns the free memory available, from the OS
module.exports.osMemoryFree = function (): number {
  return os.freemem() || 0
}

const util = require('util') // provided by Node.js

// dump the given object using 'JSON.stringify' or Node.js 'util.inspect' (requires its module 'util'), depending on the given options
// opts is optional, but if given
// opts.method could have one of the following values: 'stringify', 'inspect', 'fast-json-stringify', null (for the default behavior)
module.exports.dumpObject = function (obj: any, opts: any) {
  if (this.isUndefinedOrNull(opts)) { return (obj != null) ? obj.toString() : obj }

  let val = null
  switch (opts.method) {
    case 'inspect':
      val = util.inspect(obj)
      break
    case 'fast-json-stringify':
      // TODO: implement later ...
      // val = stringify(obj)
      break
    case 'stringify':
      val = JSON.stringify(obj) // attention to circular references, some types not dump, etc ...
      break
    default:
      val = obj.toString() // default in js
  }
  return val
}

// later add a specific function to log dumpObject using app logger

// const exec = util.promisify(require('child_process').exec) // provided by Node.js
const execFile = util.promisify(require('child_process').execFile) // provided by Node.js

module.exports.gitVersion = async function () {
  const { stdout } = await execFile('git', ['version'])
  // const { stdout, stderr } = await execFile('git', ['version']).catch(e => console.error('Error: ', e.message)) // log some error info here
  // otherwise, do the same in callers (a catch for each promise, or wrap in a try/catch block) ...
  return stdout.replace('\n', '')
}

module.exports.gitBranch = async function () {
  const { stdout } = await execFile('git', ['branch'])
  return stdout.substring(2).replace('\n', '')
}

module.exports.gitHashFull = async function () {
  const { stdout } = await execFile('git', ['rev-parse', 'HEAD'])
  return stdout.replace('\n', '')
}

module.exports.gitHashShort = async function () {
  const { stdout } = await execFile('git', ['rev-parse', '--short', 'HEAD'])
  return stdout.replace('\n', '')
}
 */

// utility function to return a value from an Either object:
// error if defined (or throw it if related flag is true),
// or the value (or its default value)
function getFromEither (either: any, { throwOnError = false, value = {} } = {}):any {
  if (either === undefined || either === null) { throw new Error('Missing mandatory argument (undefined or null)') }
  if (either.err !== undefined && either.err !== null) {
    if (throwOnError === true) { throw either.err }
    // else
    return either.err
  } else {
    return either.data || value
  }
}

export = {
  buildError,
  clearConsole,
  compareProperties,
  errorNotCallable,
  errorNotImplemented,
  evaluate,
  ExtendedError,
  featureIsEnabled,
  formatCurrentDateToTimestamp,
  formatDateToTimestampNoCheck,
  formatObjectToJson,
  formatObjectToMap,
  formatObjectToString,
  getFromEither,
  getOrElse,
  getType,
  getTypeFromConstructor,
  getTypeFromPrototype,
  has,
  hasLocalOrInPrototype,
  isArray,
  isArrayEmpty,
  isBoolean,
  isDate,
  isDefined,
  isDefinedAndNotNull,
  isEmpty,
  isError,
  isErrorAvailable,
  isFunction,
  isMap,
  isNotNull,
  isNull,
  isNullOrEmpty,
  isNumber,
  isObject,
  isRegExp,
  isSet,
  isString,
  isStringEmpty,
  isStringFalse,
  isStringTrimmedEmpty,
  isStringTrue,
  isSymbol,
  isUndefined,
  isUndefinedOrNull,
  isUndefinedOrNullArrayItem,
  isValidDate,
  // logDebugMessage,
  // logRequest,
  logRoute,
  logToConsole,
  lowercase,
  noop,
  normalizeData,
  objectOwnPropertiesList,
  objectOwnPropertiesNames,
  parseDateFromISOStringNoCheck,
  parseJSON,
  parseStringToBoolean,
  registerLoadedModule,
  throwError,
  toInt,
  uppercase,
  valueDelayed
}
