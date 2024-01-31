"use strict";

function snakeCaseToCamelCase(string) {
  return string.replace(/-(.)/g, (match, character) => character.toUpperCase());
}

module.exports = {
  snakeCaseToCamelCase
};
