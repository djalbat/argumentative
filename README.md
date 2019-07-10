# Argumentative

Parses the `argv` array.

## Installation

You can install Argumentative with [npm](https://www.npmjs.com/):

    npm install argumentative

You can also clone the repository with [Git](https://git-scm.com/):

    git clone https://github.com/djalbat/argumentative.git

There are no dependencies to install.

## Usage

There is only one `parseArgv()` function, which takes the `argv` array and an optional map of abbreviations as its first and second arguments, respectively:

```js
const argumentative = require('argumentative');

const { argv } = process,
      { parseArgv } = argumentative;

const abbreviations = {
  'h': 'help',
  'v': 'version'
};

const { commands, options } = parseArgv(argv, abbreviations);

...
```

The return value is a plain old JavaScript object with the following properties:

* `interpreterPath` - The first element of the `argv` array. This is fully qualified path of interpreter running the script.

* `filePath` - The second element of the `argv` array. This will be the fully qualified path of the script itself.

* `args` - An array of the remaining arguments, possibly empty if no command line arguments were passed.

* `options` - A map of option names to their values.

* `commands` - An array of the elements of the `argv` array that are not options.

If you pass a map of abbreviations, any abbreviated option name in the `options` map will be replaced with its corresponding unabbreviated name. The value corresponding to the abbreviated option takes precedence over the unabbreviated one if both are present, however. The examples should help clarify.

## Examples

The command line arguments are given first, followed by the plain old JavaScript object that the `parseArgv()` function returns. Only the `options` and `commands` properties are given. These first two examples have no abbreviations.

```js
install

{
  'options': {},
  'commands': [
    'install'
  ]
}
```

```js
build -c --file-path=./main.js

{
  'options': {
    'c': true,
    'file-path': './main.js'
  },
  'commands': [
    'build'
  ]
}
```
```js
watch -cf=./index.js --file-path=./main.js

{
  'options': {
    'compile': true,
    'file-path': './index.js'
  },
  'commands': [
    'watch'
  ]
}
```
This last example has the following abbreviations:

```js
{
  'c': 'compile',
  'f': 'file-path'
}
```

## Compiling from source

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Contact

- james.smith@djalbat.com
- http://djalbat.com
