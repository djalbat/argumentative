"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return parseArgv;
    }
});
const _constants = require("./constants");
const _case = require("./utilities/case");
function parseArgv(argv, abbreviations = {}) {
    const [interpreterPath, filePath, ...args] = argv, abbreviationMap = abbreviations, optionMap = {}, commands = [];
    args.forEach((arg)=>{
        const argument = arg, abbreviatedOptions = /^-[^-]+$/.test(argument), unabbreviatedOption = /^--[^-].+$/.test(argument);
        if (false) {
        ///
        } else if (abbreviatedOptions) {
            const index = argument.indexOf(_constants.EQUALS);
            if (index === -1) {
                const optionNames = argument.split(_constants.EMPTY_STRING);
                optionNames.shift();
                optionNames.forEach((optionName)=>{
                    const optionValue = true;
                    optionMap[optionName] = optionValue;
                });
            } else {
                const optionNames = argument.substring(1, index).split(_constants.EMPTY_STRING), optionNamesLength = optionNames.length, lastOptionIndex = optionNamesLength - 1, lastOptionValue = argument.substring(index + 1);
                optionNames.forEach((optionName, index)=>{
                    const optionValue = index === lastOptionIndex ? lastOptionValue : true;
                    optionMap[optionName] = optionValue;
                });
            }
        } else if (unabbreviatedOption) {
            let optionName, optionValue;
            const index = argument.indexOf(_constants.EQUALS);
            if (index === -1) {
                optionName = argument.substring(2);
                optionValue = true;
            } else {
                optionName = argument.substring(2, index);
                optionValue = argument.substring(index + 1);
            }
            optionMap[optionName] = optionValue;
        } else {
            const command = argument; ///
            commands.push(command);
        }
    });
    const abbreviatedNames = Object.keys(abbreviationMap); ///
    abbreviatedNames.forEach((abbreviatedName)=>{
        if (optionMap.hasOwnProperty(abbreviatedName)) {
            const unAbbreviatedName = abbreviationMap[abbreviatedName], optionName = unAbbreviatedName; ///
            if (optionMap.hasOwnProperty(optionName)) {
            ///
            } else {
                optionMap[optionName] = optionMap[abbreviatedName];
            }
            delete optionMap[abbreviatedName];
        }
    });
    const optionNames = Object.keys(optionMap), options = optionNames.reduce((options, optionName)=>{
        const optionValue = optionMap[optionName];
        optionName = (0, _case.hamburgerCaseToCamelCase)(optionName); ///
        options[optionName] = optionValue;
        return options;
    }, {});
    return {
        args,
        options,
        commands,
        filePath,
        interpreterPath
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wYXJzZUFyZ3YuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVRVUFMUywgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBoYW1idXJnZXJDYXNlVG9DYW1lbENhc2UgfSBmcm9tIFwiLi91dGlsaXRpZXMvY2FzZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYXJzZUFyZ3YoYXJndiwgYWJicmV2aWF0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IFsgaW50ZXJwcmV0ZXJQYXRoLCBmaWxlUGF0aCwgLi4uYXJncyBdID0gYXJndixcbiAgICAgICAgYWJicmV2aWF0aW9uTWFwID0gYWJicmV2aWF0aW9ucywgLy8vXG4gICAgICAgIG9wdGlvbk1hcCA9IHt9LFxuICAgICAgICBjb21tYW5kcyA9IFtdO1xuXG4gIGFyZ3MuZm9yRWFjaCgoYXJnKSA9PiB7XG4gICAgY29uc3QgYXJndW1lbnQgPSBhcmcsIC8vL1xuICAgICAgICAgIGFiYnJldmlhdGVkT3B0aW9ucyA9IC9eLVteLV0rJC8udGVzdChhcmd1bWVudCksXG4gICAgICAgICAgdW5hYmJyZXZpYXRlZE9wdGlvbiA9IC9eLS1bXi1dLiskLy50ZXN0KGFyZ3VtZW50KTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmIChhYmJyZXZpYXRlZE9wdGlvbnMpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gYXJndW1lbnQuaW5kZXhPZihFUVVBTFMpO1xuXG4gICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbk5hbWVzID0gYXJndW1lbnQuc3BsaXQoRU1QVFlfU1RSSU5HKTtcblxuICAgICAgICBvcHRpb25OYW1lcy5zaGlmdCgpO1xuXG4gICAgICAgIG9wdGlvbk5hbWVzLmZvckVhY2goKG9wdGlvbk5hbWUpID0+IHtcbiAgICAgICAgICBjb25zdCBvcHRpb25WYWx1ZSA9IHRydWU7XG5cbiAgICAgICAgICBvcHRpb25NYXBbb3B0aW9uTmFtZV0gPSBvcHRpb25WYWx1ZTtcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbk5hbWVzID0gYXJndW1lbnQuc3Vic3RyaW5nKDEsIGluZGV4KS5zcGxpdChFTVBUWV9TVFJJTkcpLFxuICAgICAgICAgICAgICBvcHRpb25OYW1lc0xlbmd0aCA9IG9wdGlvbk5hbWVzLmxlbmd0aCxcbiAgICAgICAgICAgICAgbGFzdE9wdGlvbkluZGV4ID0gb3B0aW9uTmFtZXNMZW5ndGggLSAxLFxuICAgICAgICAgICAgICBsYXN0T3B0aW9uVmFsdWUgPSBhcmd1bWVudC5zdWJzdHJpbmcoaW5kZXggKyAxKTtcblxuICAgICAgICBvcHRpb25OYW1lcy5mb3JFYWNoKChvcHRpb25OYW1lLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG9wdGlvblZhbHVlID0gKGluZGV4ID09PSBsYXN0T3B0aW9uSW5kZXgpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdE9wdGlvblZhbHVlIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlO1xuXG4gICAgICAgICAgb3B0aW9uTWFwW29wdGlvbk5hbWVdID0gb3B0aW9uVmFsdWU7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodW5hYmJyZXZpYXRlZE9wdGlvbikge1xuICAgICAgbGV0IG9wdGlvbk5hbWUsIG9wdGlvblZhbHVlO1xuXG4gICAgICBjb25zdCBpbmRleCA9IGFyZ3VtZW50LmluZGV4T2YoRVFVQUxTKTtcblxuICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICBvcHRpb25OYW1lID0gYXJndW1lbnQuc3Vic3RyaW5nKDIpO1xuXG4gICAgICAgIG9wdGlvblZhbHVlID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9wdGlvbk5hbWUgPSBhcmd1bWVudC5zdWJzdHJpbmcoMiwgaW5kZXgpO1xuXG4gICAgICAgIG9wdGlvblZhbHVlID0gIGFyZ3VtZW50LnN1YnN0cmluZyhpbmRleCArIDEpO1xuICAgICAgfVxuXG4gICAgICBvcHRpb25NYXBbb3B0aW9uTmFtZV0gPSBvcHRpb25WYWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY29tbWFuZCA9IGFyZ3VtZW50OyAvLy9cblxuICAgICAgY29tbWFuZHMucHVzaChjb21tYW5kKTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGFiYnJldmlhdGVkTmFtZXMgPSBPYmplY3Qua2V5cyhhYmJyZXZpYXRpb25NYXApOyAgLy8vXG5cbiAgYWJicmV2aWF0ZWROYW1lcy5mb3JFYWNoKChhYmJyZXZpYXRlZE5hbWUpID0+IHtcbiAgICBpZiAob3B0aW9uTWFwLmhhc093blByb3BlcnR5KGFiYnJldmlhdGVkTmFtZSkpIHtcbiAgICAgIGNvbnN0IHVuQWJicmV2aWF0ZWROYW1lID0gYWJicmV2aWF0aW9uTWFwW2FiYnJldmlhdGVkTmFtZV0sXG4gICAgICAgICAgICBvcHRpb25OYW1lID0gdW5BYmJyZXZpYXRlZE5hbWU7IC8vL1xuXG4gICAgICBpZiAob3B0aW9uTWFwLmhhc093blByb3BlcnR5KG9wdGlvbk5hbWUpKSB7XG4gICAgICAgIC8vL1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3B0aW9uTWFwW29wdGlvbk5hbWVdID0gb3B0aW9uTWFwW2FiYnJldmlhdGVkTmFtZV07XG4gICAgICB9XG5cbiAgICAgIGRlbGV0ZSBvcHRpb25NYXBbYWJicmV2aWF0ZWROYW1lXTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IG9wdGlvbk5hbWVzID0gT2JqZWN0LmtleXMob3B0aW9uTWFwKSxcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbk5hbWVzLnJlZHVjZSgob3B0aW9ucywgb3B0aW9uTmFtZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG9wdGlvblZhbHVlID0gb3B0aW9uTWFwW29wdGlvbk5hbWVdO1xuXG4gICAgICAgICAgb3B0aW9uTmFtZSA9IGhhbWJ1cmdlckNhc2VUb0NhbWVsQ2FzZShvcHRpb25OYW1lKTsgLy8vXG5cbiAgICAgICAgICBvcHRpb25zW29wdGlvbk5hbWVdID0gb3B0aW9uVmFsdWU7XG5cbiAgICAgICAgICByZXR1cm4gb3B0aW9ucztcbiAgICAgICAgfSwge30pO1xuXG4gIHJldHVybiAoe1xuICAgIGFyZ3MsXG4gICAgb3B0aW9ucyxcbiAgICBjb21tYW5kcyxcbiAgICBmaWxlUGF0aCxcbiAgICBpbnRlcnByZXRlclBhdGhcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsicGFyc2VBcmd2IiwiYXJndiIsImFiYnJldmlhdGlvbnMiLCJpbnRlcnByZXRlclBhdGgiLCJmaWxlUGF0aCIsImFyZ3MiLCJhYmJyZXZpYXRpb25NYXAiLCJvcHRpb25NYXAiLCJjb21tYW5kcyIsImZvckVhY2giLCJhcmciLCJhcmd1bWVudCIsImFiYnJldmlhdGVkT3B0aW9ucyIsInRlc3QiLCJ1bmFiYnJldmlhdGVkT3B0aW9uIiwiaW5kZXgiLCJpbmRleE9mIiwiRVFVQUxTIiwib3B0aW9uTmFtZXMiLCJzcGxpdCIsIkVNUFRZX1NUUklORyIsInNoaWZ0Iiwib3B0aW9uTmFtZSIsIm9wdGlvblZhbHVlIiwic3Vic3RyaW5nIiwib3B0aW9uTmFtZXNMZW5ndGgiLCJsZW5ndGgiLCJsYXN0T3B0aW9uSW5kZXgiLCJsYXN0T3B0aW9uVmFsdWUiLCJjb21tYW5kIiwicHVzaCIsImFiYnJldmlhdGVkTmFtZXMiLCJPYmplY3QiLCJrZXlzIiwiYWJicmV2aWF0ZWROYW1lIiwiaGFzT3duUHJvcGVydHkiLCJ1bkFiYnJldmlhdGVkTmFtZSIsIm9wdGlvbnMiLCJyZWR1Y2UiLCJoYW1idXJnZXJDYXNlVG9DYW1lbENhc2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUtBOzs7ZUFBd0JBOzs7MkJBSGE7c0JBQ0k7QUFFMUIsU0FBU0EsVUFBVUMsSUFBSSxFQUFFQyxnQkFBZ0IsQ0FBQyxDQUFDO0lB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