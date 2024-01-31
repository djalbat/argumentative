"use strict";

const { EQUALS, EMPTY_STRING } = require("./constants"),
      { snakeCaseToCamelCase } = require("./utilities/case");

function parseArgv(argv, abbreviations = {}) {
  const [ interpreterPath, filePath, ...args ] = argv,
        abbreviationMap = abbreviations, ///
        optionMap = {},
        commands = [];

  args.forEach((arg) => {
    const argument = arg, ///
          abbreviatedOptions = /^-[^-]+$/.test(argument),
          unabbreviatedOption = /^--[^-].+$/.test(argument);

    if (false) {
      ///
    } else if (abbreviatedOptions) {
      const index = argument.indexOf(EQUALS);

      if (index === -1) {
        const optionNames = argument.split(EMPTY_STRING);

        optionNames.shift();

        optionNames.forEach((optionName) => {
          const optionValue = true;

          optionMap[optionName] = optionValue;
        })
      } else {
        const optionNames = argument.substring(1, index).split(EMPTY_STRING),
              optionNamesLength = optionNames.length,
              lastOptionIndex = optionNamesLength - 1,
              lastOptionValue = argument.substring(index + 1);

        optionNames.forEach((optionName, index) => {
          const optionValue = (index === lastOptionIndex) ?
                                lastOptionValue :
                                  true;

          optionMap[optionName] = optionValue;
        });
      }
    } else if (unabbreviatedOption) {
      let optionName, optionValue;

      const index = argument.indexOf(EQUALS);

      if (index === -1) {
        optionName = argument.substring(2);

        optionValue = true;
      } else {
        optionName = argument.substring(2, index);

        optionValue =  argument.substring(index + 1);
      }

      optionMap[optionName] = optionValue;
    } else {
      const command = argument; ///

      commands.push(command);
    }
  });

  const abbreviatedNames = Object.keys(abbreviationMap);  ///

  abbreviatedNames.forEach((abbreviatedName) => {
    if (optionMap.hasOwnProperty(abbreviatedName)) {
      const unAbbreviatedName = abbreviationMap[abbreviatedName],
            optionName = unAbbreviatedName; ///

      if (optionMap.hasOwnProperty(optionName)) {
        ///
      } else {
        optionMap[optionName] = optionMap[abbreviatedName];
      }

      delete optionMap[abbreviatedName];
    }
  });

  const optionNames = Object.keys(optionMap),
        options = optionNames.reduce((options, optionName) => {
          const optionValue = optionMap[optionName];

          optionName = snakeCaseToCamelCase(optionName); ///

          options[optionName] = optionValue;

          return options;
        }, {});

  return ({
    args,
    options,
    commands,
    filePath,
    interpreterPath
  });
}

module.exports = parseArgv;
