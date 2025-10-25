"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "hamburgerCaseToCamelCase", {
    enumerable: true,
    get: function() {
        return hamburgerCaseToCamelCase;
    }
});
function hamburgerCaseToCamelCase(string) {
    return string.replace(/-(.)/g, function(match, character) {
        var upperCaseCharacter = character.toUpperCase();
        return upperCaseCharacter;
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY2FzZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGhhbWJ1cmdlckNhc2VUb0NhbWVsQ2FzZShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC8tKC4pL2csIChtYXRjaCwgY2hhcmFjdGVyKSA9PiB7XG4gICAgY29uc3QgdXBwZXJDYXNlQ2hhcmFjdGVyID0gY2hhcmFjdGVyLnRvVXBwZXJDYXNlKCk7XG5cbiAgICByZXR1cm4gdXBwZXJDYXNlQ2hhcmFjdGVyO1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJoYW1idXJnZXJDYXNlVG9DYW1lbENhc2UiLCJzdHJpbmciLCJyZXBsYWNlIiwibWF0Y2giLCJjaGFyYWN0ZXIiLCJ1cHBlckNhc2VDaGFyYWN0ZXIiLCJ0b1VwcGVyQ2FzZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBRWdCQTs7O2VBQUFBOzs7QUFBVCxTQUFTQSx5QkFBeUJDLE1BQU07SUFDN0MsT0FBT0EsT0FBT0MsT0FBTyxDQUFDLFNBQVMsU0FBQ0MsT0FBT0M7UUFDckMsSUFBTUMscUJBQXFCRCxVQUFVRSxXQUFXO1FBRWhELE9BQU9EO0lBQ1Q7QUFDRiJ9