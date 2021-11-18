# fastify-example-ts - TODO

## TODO

* [x] general: update TypeScript to 4.5, then use its new features like [Import Assertions - TypeScript 4.5 - TypeScript blog](https://devblogs.microsoft.com/typescript/announcing-typescript-4-5/#import-assertions) to load json data (maybe even css), etc ... wip
* [x] general: tests made in TypeScript: use the Fastify server configured in its own source, and ensure routes defined works in the right way (via injection) ... wip
* [x] general: tests made in TypeScript: find a way to have Node.js modules work (like in original js code); check if move in a dedicated source ... wip
* [x] general: tests made in TypeScript: remove pre-ES6 code; then remove some unnecessary functions ... wip
* [x] content: add initial (but minimal) content, start by publishing 'favicon.ico' (maybe with my plugin) ... wip
* [x] content: update README and CHANGELOG ... wip
* [x] general: tag sources (check if with 0.x.y or if with a timestamp) ... wip

* [x] general: bump next release (or do not change version in 'package.json' for now, and tag sources at release end) ... wip
* [x] general: update 'is-docker' to '^3.0.0' but it requires this project to use ESM, see [here](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c) for more info ... wip
* [x] general: update requirements to Node.js 12 LTS and ESM modules, then: update 'package.json' with `"type": "module",` and related settings, then update TypeScript output to be 'es2020' with support for ES Modules (esm), and update all import statements using esm syntax, for example:
```
// import assert from 'node:assert'
import { strict as assert } from 'node:assert'
import tap, { Test } from 'tap'
```
and remove eslint rule to disable @typescript-eslint/no-var-requires, fix all other imports using Node.js require statement, rename tap tests from 'test' to 'tap.test', import tap type for Test, to be able to update '(t)' to '(t: Test)', etc ... wip
* [x] general: update code to use only ESM modules (no more Node.js require statements, etc); but check if it's better with Node.js 14 LTS instead ... wip
* [x] general: check if split main server in: server creation and server start, to be able to reuse server creation even in tests and inject calls in it; for example see 'fastify-starter' at [CodeSandbox](https://codesandbox.io) ... wip
* [x] general: use a modern and good example for Fastify 3.x as a reference for some stuff here, for example [delvedor/fastify-101 - GitHub](https://github.com/delvedor/fastify-101), even if not in TypeScript ... wip
* [x] general: add Docker related stuff (npm custom commands, Dockerfile/s, etc) ... wip
* [x] general: add JSON Schema to TypeScript, as seen for example [here](https://www.fastify.io/docs/latest/TypeScript/) (same doc seen in GitHub, only with a different style) ... wip
* [x] general: add the ability to serve favicon and a static page as home page (add related content even here), of course using related plugins ... wip
* [x] general: replace 'simple-get' with 'undici ... wip
* [x] general: add more content in 'package.json', like in fastify-example (add stuff related to more tests, Docker, etc); but add a build mode that uses TypeScript (TS) watch mode (check if use it instead of usual dependency on 'nodemon') ... added npm custom command 'build:watch' that uses it, but it only compiles (without a server restart or similar, maybe 'nodemon' is needed even in this case) and not sure it takes in account even other resources (templates, etc), so maybe its configuration need to be tweaked ... wip
* [x] general: add the ability to use even JavaScript (js) files, in TypeScript compiler (options) and to check them, could be useful ... wip
* [x] general: add some types (using TS features), and ensure Fastify (and related plugins) types are resolved in the right way ... wip
* [x] general: use same Fastify plugins used in fastify-example, and ensure all is good, even types ... wip
* [x] general: enable snyk here ... wip
* [x] general: add same features of fastify-example (evolve like it), and ensure all is good ... wip
* [x] content: update README and CHANGELOG ... wip
* [x] general: tag sources (check if with 0.x.y or if with a timestamp) ... wip

* [x] general: later update to Node.js 14 LTS (14.15.0)  and so output ES2020/ES11 or ES2021/ES12 (but partial support for it); for some info look at [Recommended Node TSConfig settings - TypeScript wiki](https://github.com/microsoft/TypeScript/wiki/Node-Target-Mapping), [here](https://stackoverflow.com/questions/61305578/what-typescript-configuration-produces-output-closest-to-node-js-14-capabilities/61305579#61305579), etc; anyway, export all as native ES Modules (ESM), important; as a sample take this great example: [fastify-101 - delvedor - github](https://github.com/delvedor/fastify-101) ... wip

* [x] general: later update to Node.js 16 LTS (16.13.0) and so output ES2022/ES13 or at least ES2021/ES12; ensure to expose all only as ES Modules (ESM), no more CommonJS ...


---------------


## DONE

* [x] general: create/update initial skeleton (from an existing example) ... ok, started from current code/skeleton of my repo [fastify-example](https://github.com/smartiniOnGitHub/fastify-example), today is 2020-06-02
* [x] general: setup project with TypeScript, and add dependencies; check if continue in a similar way of fastify-example, or instead on top of a skeleton generated by fastify cli, and update/adapt it ... start as suggested by Fastify official documentation: [TypeScript - Fastify](https://github.com/fastify/fastify/blob/master/docs/TypeScript.md) ... ok
* [x] general: configure TypeScript to output modern js compatible with Node.js minimal version set here (at the moment Node.js 10 LTS), so at least ES2017; and into the '/dist' folder; see [here](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) for TypeScript compiler options in the 'tsconfig.json' file, and [here](https://www.typescriptlang.org/docs/handbook/compiler-options.html) for TypeScript compiler options via command-line (CLI) ... ok, and note that I specified ts output folder in root 'tsconfig.json' file, and even in 'package.json' (but here mainly to have more evidence on the output folder, used there even in other npm custom commands)
* [x] general: rename initial 'server.ts' into 'server-simple.ts', and keep it as a minimal/initial but working example ... ok, but duplicated for now; to resolve TypeScript errors update project config
* [x] general: update to use latest Fastify 3.x (released today), see at [fastify - npmjs](https://www.npmjs.com/package/fastify); but do it in a feature branch, to merge later into master (and before tag existing master and open a branch for fastify-2.x) ... no, this is a new project so it's good the same to use that new release directly here
* [x] general: update to use latest Fastify 3.x (current release now); and update requirements ... ok
* [x] general: keep compatibility with ES2017 for now, because it seems most of current browsers already support it, approx. 90%, as seen [here](https://web.dev/publish-modern-javascript/) ... ok
* [x] general: update all dependencies to latest ... ok
* [x] general: remove 'standardx' and fix like in Fastify ... ok, but had to disable lint of js sources with 'standard' from npm custom command 'lint:js' (and removed its call from the more general npm custom command 'lint'), because at the moment no '*.js' sources are present; re-add and enable later if/when needed
* [x] general: add npm custom command 'lint:ts:types' to only check/validate TypeScript types ... ok, but for now it's not called from the more general npm custom command 'lint'), because at the moment no '*.d.ts' sources are present; re-add and enable later if/when needed
* [x] general: remove 'esdoc' and add 'jsdoc' instead ... ok
* [x] general: delete '.eslintrc' and ensure the new file '.eslintrc.json' (with more settings inside) is used ... ok
* [x] general: tweak TypeScript config file ... ok, updated even the same under the './types' folder (not sure it''s really needed here because this is not a library)
* [x] general: later update to Node.js 12 LTS (12.13.0) and so output ES2019, or better ES2020 ... maybe later
* [x] general: add npm custom commands to clean, build, start sources as 'start:dev', and another for tests: clean, run tests in dev mode (auto-relaunch modified sources) as 'test:dev' ... ok, added, but had to comment the override that disable coverage generation
* [x] general: update tests config to be able to use Node-Tap ('tap') even with TypeScript; for example look at [ilyadoroshin/node-tap-ts-example - GitHub](https://github.com/ilyadoroshin/node-tap-ts-example) but note it uses a fork of 'node-tap' ... ok, but I had to update the path given to tap: update 'test/*.test.js' in 'test/*.test.ts'; later if needed to test even JavaScript test sources, add even the pattern for js files
* [x] general: install as dev dependencies 'tap' TypeScript types definitions ('@types/tap') ... ok done, but at the moment they are not been updated to latest tap release (currently '15.0.2'); updated today
* [x] general: update ts sources to use Fastify TypeScript definitions ... ok, but done automatically because Fastify TypeScript type definitions are bundled in its npm package
* [x] general: add some tests and update/cleanup existing ones ... ok
* [x] general: add some content (from my 'utils.js' here but as 'utils.ts', start by copying JavaScript code and progressively update to TypeScript semantics; then fix usage of 'require' statements even in Node-tap ('tap') tests made in TypeScript; some info even at [Asserts - Node-Tap](https://node-tap.org/docs/api/asserts/) ... fixed tests execution by: adding the build just before tests running (but built only first time on 'test:dev', pay attention if some source in the main source folder ('src') is changed), and using local paths that points to ts output folder ('dist') to reference generated (compiled) js sources ... ok
* [x] general: tests made in TypeScript: later check if using [ts-node](https://www.npmjs.com/package/ts-node) it's possible to remove the build step ... maybe later
* [x] general: tests made in TypeScript: enable/add some more feature that could be useful in the project ... ok, but come features to enable later
* [x] general: tests made in TypeScript: check if/how to reduce required code coverage (by default now at 100% since Tap 15, but here is not really important), to reduce the error: 'ERROR: Coverage for functions (0%) does not meet global threshold (100%)' ... ok, but had to force the flag '--no-check-coverage' in related npm custom commands
* [x] general: tests made in TypeScript: remove (if possible and not too complex here) ESLint rule that disables the usage of ts 'any' type ('eslint @typescript-eslint/no-explicit-any'), and even ('eslint @typescript-eslint/explicit-module-boundary-types'); then maybe even the one that disable the usage of 'require' statements ('@typescript-eslint/no-var-requires'); some useful info [here](https://www.typescriptlang.org/docs/handbook/migrating-from-javascript.html) ... for example note that most code in the 'utils' source currently uses in many places the ts type 'any' because of its almost direct translation to js, but it can be improved to be more ts-oriented ... maybe later, because I'm even interested to look what js does by calling such functions now implemented in ts, so mabye a wider (more generic) types in functions, could be useful; anyway chack it later
* [x] general: split Fastify server configuration in its own source ('build-server' or similar), to be able to reuse it even in unit tests ... ok, for now as Node.js module and as ESM modules commented
* [x] general: since 01 May 2021, Node.js 10 is in End-of-Life (EoL), so now update requirements to Node.js 12 LTS (12.13.0) and so output ES2019/ES10 or ES2020/ES11 ... ok, as seen at [Recommended Node TSConfig settings - TypeScript wiki](https://github.com/microsoft/TypeScript/wiki/Node-Target-Mapping), [here](https://stackoverflow.com/questions/59787574/typescript-tsconfig-settings-for-node-js-12), etc, set target output to ES2019 and target library as ES2020 because many functions of it are already implemented since that version but not its syntax; for now keep commonjs modules
* [x] general: to improve interaction with ES Modules (ESM), look even [here](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c) ... maybe later
* [x] general: for some general info and examples about JWT, JWT Authentication using Node.js (so at server side), look even: [here](https://www.youtube.com/watch?v=7Q17ubqLfaM), [here](https://www.youtube.com/watch?v=mbsmsi7l3r4) with related repo [here](https://github.com/WebDevSimplified/JWT-Authentication), [here](https://www.youtube.com/watch?v=Ud5xKCYQTjM), etc ... ok; for info about how to manage user roles in Node.js (so at server side), look even [here](https://www.youtube.com/watch?v=jI4K7L-LI58), etc
* [x] general: to simplify manual use/debug of API in the DEV environment, if using Visual Studio Code (VSCode), install the [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) extension, and write API calls in one or more files '.http' or '.rest', then execute related callas directly from that file (open in the editor) and maybe save results, use/convert in cURL format, etc ... ok, very useful; see an example usage even [here](https://blog.bitsrc.io/vs-codes-rest-client-plugin-is-all-you-need-to-make-api-calls-e9e95fcfd85a); of course related files should be added to version control, but excluded from packaging
* [x] general: check if publish this app at [Heroku](https://www.heroku.com/) but using Docker containers, some info even [here](https://dev.to/analythium/deploying-shiny-apps-to-heroku-with-docker-and-github-actions-2687); then add a bagde in README to point to it ... maybe later
* [x] general: add on 'Open in VS Code' badge in the README, as seen [here](https://code.visualstudio.com/updates/v1_58#_open-in-vs-code-badge) ... no, it's no more present in that page, not sure it still works that way
* [x] general: for a general structure of a more complex TypeScript project (with some  microservices, some shared libraries, etc), look ev en at [Make sharing TypeScript code and types quick and easy - LogRocket Blog](https://blog.logrocket.com/make-sharing-typescript-code-types-quick-easy/) and related sources [ashleydavis/sharing-typescript-code-libraries - GitHub](https://github.com/ashleydavis/sharing-typescript-code-libraries) ... maybe later, in general useful but here I'd have to move all current code in a new subfolder and add at least one shared library (for example in a './libs' folder)


---------------

