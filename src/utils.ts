/*
 * Copyright 2020-2021 the original author or authors.
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

/*
// TODO: enable later ... wip

// some generic utility functions
module.exports.clearConsole = function () {
  if (console.clear) { console.clear() }
}
module.exports.normalizeData = function (data: any, asArray: boolean): any {
  if (data != null) { return data } else {
    if (data instanceof Array || asArray) { return [] } else { return {} }
  }
}
module.exports.getOrElse = function (obj: any, def: any): any {
  if (typeof obj !== 'undefined' && obj !== null) { return Object.create(obj) } else { return def }
}
module.exports.getType = function (obj: any): string {
  return typeof obj
}
module.exports.getTypeFromConstructor = function (obj: any): string {
  // if (typeof obj !== 'undefined' && obj !== null) { return obj.constructor.name } else { return null }
  if (typeof obj !== 'undefined' && obj !== null) { return obj.constructor.name } else { return 'unknown' }
}
module.exports.getTypeFromPrototype = function (obj: any): string {
  return Object.prototype.toString.call(obj).slice(8, -1)
}
module.exports.has = function (obj: any, key: string): boolean {
  return key in obj
}
module.exports.hasLocalOrInPrototype = function (obj: any, key: string, searchInPrototype: boolean): boolean {
  if (!searchInPrototype) { return Object.prototype.hasOwnProperty.call(obj, key) } else {
    return key in obj
  }
}
module.exports.isDefined = function (o: any): boolean {
  return (typeof o !== 'undefined')
}
module.exports.isUndefined = function (o: any): boolean {
  return (typeof o === 'undefined')
}
module.exports.isNull = function (o: any): boolean {
  return (o === null)
}
module.exports.isNotNull = function (o: any): boolean {
  return (o !== null)
}
module.exports.isDefinedAndNotNull = function (o: any): boolean {
  return (o !== undefined && o !== null)
}
module.exports.isUndefinedOrNull = function (o: any): boolean {
  return (o === undefined || o === null)
}
module.exports.isUndefinedOrNullArrayItem = function (a: any): boolean {
  if (this.isUndefinedOrNull(a) && !this.isArray(a)) {
    return true
  } else {
    for (const item of a) {
      if (item === null) { return true }
    }
    return false
  }
}
module.exports.isFunction = function (f: any): boolean {
  return (typeof f === 'function')
}
module.exports.isArray = function (o: any): boolean {
  return (Array.isArray(o))
}
module.exports.isBoolean = function (o: any): boolean {
  return (typeof o === 'boolean')
}
module.exports.isNumber = function (o: any): boolean {
  return (typeof o === 'number')
}
module.exports.isDate = function (o: any): boolean {
  return (typeof o === 'object' || o instanceof Date)
}

module.exports.isValidDate = function (d: any): boolean {
  return (this.isDate(d) && !isNaN(d))
}
module.exports.isValidDateFromString = function (str: string): boolean {
  return (this.createDateFromString(str) != null)
}
module.exports.isString = function (o: any): boolean {
  return (typeof (o) === 'string')
}
module.exports.isNullOrEmpty = function (o: any): boolean {
  return (o == null || (this.isString(o) && o.length === 0) || (this.isArray(o) && o.length === 0))
}
module.exports.isRegExp = function (o: any): boolean {
  return (typeof o === 'object' && o instanceof RegExp)
}
module.exports.isMap = function (o: any): boolean { // ES6 Maps
  return (o instanceof Map || o instanceof WeakMap)
}
module.exports.isSet = function (o: any): boolean { // ES6 Sets
  return (o instanceof Set || o instanceof WeakSet)
}
module.exports.isSymbol = function (o: any): boolean { // ES6 Symbols
  return (typeof o === 'symbol')
}
module.exports.isObject = function (o: any): boolean {
  return (typeof o === 'object')
}
module.exports.isError = function (o: any): boolean {
  return (o instanceof Error && typeof o.message !== 'undefined')
}
module.exports.objectOwnPropertiesNames = function (obj: any): Array<string> {
  // return all own properties names of the given object, as a list (array)
  return Object.keys(obj)
}
module.exports.objectOwnPropertiesList = function (obj: any): Array<any> {
  // return all own properties of the given object, as a list (array)
  const values = []
  for (const prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      // console.debug('obj.' + prop + ' = ' + obj[prop])
      values.push(prop)
    }
  }
  return values
}
module.exports.isArrayEmpty = function (obj: any): boolean {
  if (this.isUndefinedOrNull(obj)) { return true }
  return obj.length === 0
}
module.exports.isStringEmpty = function (obj: any): boolean {
  if (this.isUndefinedOrNull(obj)) { return true }
  return obj.length === 0
}
module.exports.isStringTrimmedEmpty = function (obj: any): boolean {
  if (this.isUndefinedOrNull(obj)) { return true }
  return obj.trim().length === 0
}
module.exports.isEmpty = function (obj: any): boolean {
  if (this.isUndefinedOrNull(obj)) { return true }
  if (this.isArray(obj) || this.isString(obj)) { return obj.length === 0 }
  if (this.isMap(obj) || this.isSet(obj)) { return obj.size === 0 }
  if (this.isObject(obj)) { return this.isObjectEmpty(obj) }
  return false
}
module.exports.isStringFalse = function (obj: any): boolean {
  return (this.isString(obj) && ['false', 'f', 'no', 'n', '0'].indexOf(obj.toLowerCase()) > -1)
}
module.exports.isStringTrue = function (obj: any): boolean {
  return (this.isString(obj) && ['true', 't', 'yes', 'y', '1'].indexOf(obj.toLowerCase()) > -1)
}
module.exports.formatObjectToJson = function (o: any): string {
  return JSON.stringify(o)
}
module.exports.formatObjectToString = function (o: any, onlyOwnProperties: boolean): string {
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
module.exports.formatObjectToMap = function (o: any): Map<any, any> {
  if (Object.entries && typeof Map !== 'undefined') { return new Map(Object.entries(o)) } else { return new Map() }
}
module.exports.formatDateToTimestampNoCheck = function (d: any): string {
  return d.toISOString()
}
module.exports.formatCurrentDateToTimestamp = function (): string {
  return this.formatDateToTimestampNoCheck(new Date())
}
module.exports.parseDateFromISOStringNoCheck = function (d: any): any {
  return Date.parse(d)
}
module.exports.parseStringToBoolean = function (str: string, def: boolean): boolean {
  if (this.isUndefinedOrNull(str) && this.isDefinedAndNotNull(def)) {
    return def
  }

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
module.exports.parseJSON = function (str: string, callback: any): any {
  if (!this.isFunction(callback)) {
    throw new TypeError(`Illegal argument: callback must be a function, instead got a '${typeof callback}'`)
  }

  try {
    const parsedJSON = JSON.parse(str)
    callback(null, parsedJSON)
  } catch (err) {
    callback(err, null)
  }
}
module.exports.lowercase = function (o: string): string {
  return this.isString(o) ? o.toLowerCase() : o.toString().toLowerCase()
}
module.exports.uppercase = function (o: string): string {
  return this.isString(o) ? o.toUpperCase() : o.toString().toUpperCase()
}
module.exports.toInt = function (str: string): number {
  return parseInt(str, 10)
}
module.exports.evaluate = function (statement: string): boolean {
  const evaluator = eval
  try {
    evaluator(statement)
    return true
  } catch (e) {
    return false
  }
}
module.exports.isErrorAvailable = function (): boolean {
  return (typeof Error !== 'undefined')
}

module.exports.throwError = function (msg: string): Error { // note that msg could be a string or an Error, or another Object ...
  // throw new Error(msg)
  if (this.isErrorAvailable()) { throw new Error(msg) } else { throw msg } // fallback
}
module.exports.errorNotImplemented = function (): void {
  this.throwError('Not Implemented (implementation missing)')
}
module.exports.errorNotCallable = function (): void {
  this.throwError('Not Callable (abstract, implement it in childs)')
}
module.exports.logDebugMessage = function (message: string) {
  if (!this.isEnvironmentDevelopment) { return }
  // else ...
  const msg = this.name + ': ' + ((message != null) ? message : '')
  console.debug(msg)
}

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

// log to console
module.exports.logToConsole = function (msg: string) {
  console.log(msg)
}

// log a fastify request, but only the given URL
module.exports.logRoute = function (req: any) {
  req.log.info(`Got request for URL: '${req.req.url}' ...`)
}

// log a fastify request, full
module.exports.logRequest = function (req: any) {
  const details = this.dumpObject(req.req)
  req.log.info(`Got request for URL: '${req.req.url}', details: '${details}' ...`)
}

// register in the app the given module
// module.exports.registerLoadedModule = function (app: any, loadedModule: any, opts: any, uri: Url) {
module.exports.registerLoadedModule = function (app: any, loadedModule: any, opts: any, uri: any) {
  if (this.isUndefinedOrNullArrayItem([app, loadedModule])) { throw new Error('Missing mandatory argument (undefined or null)') }
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
module.exports.ExtendedError = ExtendedError

// build an Error with the given arguments, and throw or return it, depending on the last flag
module.exports.buildError = function (req: any, msg: string, code: number, description: string, throwError: boolean): Error {
  const codex: number | null = (code != null) ? code : 0
  const descr: string | null = (description != null) ? description : null
  const error = new ExtendedError(msg, codex, descr)
  req.log.error(`Build a new Error: msg:${error.message}, code:${error.errorCode}, description:'${error.errorDescription}', and throw it:${throwError}`)
  if (throwError === true) { throw error } else { return error }
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

// resolve the given value (generic, by default 0), after the number of given seconds (by default 1), returning a Promise
// use it with the async / await syntax (recommended)
module.exports.valueDelayed = function (value = 0, sec = 1): any {
  return new Promise((resolve) => {
    setTimeout(() => { resolve(value) }, sec * 1000)
  })
}

// tell if a feature is enabled
module.exports.featureIsEnabled = function (trueIsDisabled = false, booleanStringName = '', defaultBooleanValue = true): boolean {
  return (trueIsDisabled === true)
    ? !this.parseStringToBoolean(booleanStringName, defaultBooleanValue)
    : this.parseStringToBoolean(booleanStringName, defaultBooleanValue)
}

// sort string properties of objects,
// given 'key' (string property name), 'order' ('asc' or 'desc')
module.exports.compareProperties = function (key: string, order = 'asc'): any {
  return function (a: any, b: any): number {
    if (!Object.prototype.hasOwnProperty.call(a, key) || !Object.prototype.hasOwnProperty.call(b, key)) return 0
    const comparison = a[key].localeCompare(b[key])
    return (order === 'asc') ? comparison : (comparison * -1)
  }
}

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

export = {
  noop,
  isUndefinedOrNull,
  isStringEmpty
}
