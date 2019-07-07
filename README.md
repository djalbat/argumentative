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

There is only one function, namely the `parseArgv` function. It takes the `argv` array and an option map of abbreviations as its first and second arguments respectively. It returns a plain old JavaScript object with a list of commands and a map of options:

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

## Compiling from source

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Contact

- james.smith@djalbat.com
- http://djalbat.com
