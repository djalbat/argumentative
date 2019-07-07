# Argumentative

Parses the `argv` array.

## Installation

You can install Argumentative with [npm](https://www.npmjs.com/):

    npm install argumentative

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/argumentative.git

...and then install the necessary modules with npm from within the project's root directory:

    npm install

## Usage

There is only one function, namely the `parseArgv` function. It takes the `argv` array and an option map of abbreviations as its first and second arguments respectively.


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

The return value is a plain old JavaScript object with several properties:

* `interpreterPath` - The first element of the `argv` array, which is fully qualified path of interpreter running the script, likely a Node instance.

* `filePath` - The second element of the `argv` array, which will be the fully qualified path of the script itself.

* `args` - An array of the remaining arguments, possibly empty if no arguments are explicitly passed.

* `options` - A map of option names to their values.

* `commands` - The elements of the `argv` array that are not options, which are referred to here as commands.


## Compiling from source

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Contact

- james.smith@djalbat.com
- http://djalbat.com
