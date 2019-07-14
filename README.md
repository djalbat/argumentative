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

If you pass a map of abbreviations, abbreviated option names in the `options` map will be replaced with their corresponding unabbreviated names. If corresponding unabbreviated and abbreviated options are present, the latter are removed. Unabbreviated options will always be converted to camel-case if they contain dashes. Underscores are left as-is. If you want to convert commands to camel-case, you can make use of the `toCamelCase()` utility function. For example:

```js
const argumentative = require('argumentative');

const { stringUtilities } = argumentative,
      { toCamelCase } = stringUtilities,
      { argv } = process;

let { commands } = parseArg(argv);

commands = commands.map((command) => toCamelCase(commeand));

...
```
Obviously you may only want to convert specific commands in this way rather than all of them, or not do so at all.

## Examples

The command line arguments are given first, followed by the plain old JavaScript object that the `parseArgv()` function returns. Only the `options` and `commands` properties are given. These first two examples have no abbreviations.

A single command; and no options:

```js
install
```
```js
{
  'options': {},
  'commands': [
    'install'
  ]
}
```

A single command; a shorthand, boolean option; and a full length, string-valued option:
```js
build -c --file-path=./main.js
```
```js
{
  'options': {
    'c': true,
    'filePath': './main.js'
  },
  'commands': [
    'build'
  ]
}
```
Note that the `--file-path` option becomes the camel-case `filePath`.

No commands; two shorthand options, boolean and string-valued, respectively; and a full length, string-valued option:
```js
-cf=./index.js --file-path=./main.js
```
```js
{
  'options': {
    'compile': true,
    'filePath': './main.js'
  },
  'commands': []
}
```
This last example has the following abbreviations:

```js
{
  'c': 'compile',
  'f': 'file-path'
}
```
Note that the abbreviated option name 'c' has been replaced by the corresponding unabbreviated name, whilst the abbreviated option 'f' has been removed altogether.

## Compiling from source

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Contact

- james.smith@djalbat.com
- http://djalbat.com
