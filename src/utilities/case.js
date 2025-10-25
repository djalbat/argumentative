"use strict";

export function hamburgerCaseToCamelCase(string) {
  return string.replace(/-(.)/g, (match, character) => {
    const upperCaseCharacter = character.toUpperCase();

    return upperCaseCharacter;
  });
}
