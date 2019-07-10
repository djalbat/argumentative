# Argumentative

Parses the `argv` array.

## Installation

You can install Argumentative with [npm](https://www.npmjs.com/):

    npm install argumentative

You can also clone the repository with [Git](https://git-scm.com/):

    git clone https://github.com/djalbat/argumentative.git

There are no dependencies to install.

## Usage

There is only one function, `parseArgv()`. It takes the `argv` array and an optional map of abbreviations as its first and second arguments, respectively:

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

* `interpreterPath` - The first element of the `argv` array. This is fully qualified path of interpreter running the script.

* `filePath` - The second element of the `argv` array. This will be the fully qualified path of the script itself.

* `args` - An array of the remaining arguments, possibly empty if no command line arguments have been passed.

* `options` - A map of option names to their values.

* `commands` - The elements of the `argv` array that are not options, which are referred to here as commands.

If you pass a map of abbreviations, any abbreviated option name in the `options` map will be replaced with its corresponding unabbreviated name. The value corresponding to the abbreviated option takes precedence over the unabbreviated one if both are present, however.

## Compiling from source

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Contact

- james.smith@djalbat.com
- http://djalbat.com
