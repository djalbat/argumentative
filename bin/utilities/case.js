"use strict";

function snakeCaseToCamelCase(string) {
  return string.replace(/-(.)/g, (match, character) => {
    const upperCaseCharacter = character.toUpperCase();

    return upperCaseCharacter;
  });
}

module.exports = {
  snakeCaseToCamelCase
};
