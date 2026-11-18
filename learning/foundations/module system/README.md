## Context:

The very initial releases of JS didn't have separation of scopes b/w files. So suppose file1.js had variable x = 0 and file2.js had x = 1; They would clash
Reasoning: Because everything was part of <b>1 gaint global scope</b>

## Progression:

Slowly in 2008, when nodeJS was introduced, the developers felt the need for modular code implementations. Thus introduced CJS (common js).

## How does CJS (common js) work?

Simply, it wraps the whole file in a enclosed function. Why this helps is, function scope is private, thus making variables private.

```(javascript)
<!-- our original file content -->
console.log("sample")

<!-- how cjs wraps this -->
(function(exports, require, module, __filename, __dirname){
    // our file contents injected
    // console.log("sample");
})
```

## Working examples (CJS)

> notice app.js & math.js - look at how we use the following syntax for doing

1. exports -> module.export({function1, function2....})
2. imports -> const {function1, function...} = require("./file")

## What's ES Modules & How to write?

The core JS developers felt that we now need an module system rather than external like commmonJS.
So they introduced ES Modules in 2015/6.

> notice app.js & math.js - look at how we use the following syntax for doing

1. exports -> we have 2 export choices, named & default
   - named exports -> export function add(a,b){}
   - default export -> (1 per file) export default function sub(a,b){}
2. imports -> import sub, {app} from "./file.js"

## Major Differences b/w ESM vs CJS

1. Note: imports need to have extension listed in ES Module, wherein CJS omits it.
2. require (CJS) is a function that runs while the program is executed, we can call it anywhere even inside an if or such. However import (ESM) is a declarative stateemnt that needs to be written at the very top of the file -> this is the part where bundlers drop unused code without runing the code by checking all files first, mapping out who depends on whom, and then execute as needed.

## How does node system decide which to use?

> It could be confusing by default what to opt, a node code uses CJS but modern JS uses ESM.
> The logic here is based on extension and configs

1. .js file -> defaults to cjs
2. .js file with "type:module" in package.json -> ESM
3. .mjs file -> always ESM

## Shorthand notes:

1. default - no braces, use any name, ensure it's written first then named exports.

```
example: import someRandomName from './file'
```

2. named - braces and exact name, written after default

```
example: import {addUser, subUser} from './file'
```
