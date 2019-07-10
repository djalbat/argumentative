'use strict';

function parseArgv(argv, abbreviations) {
  var interpreterPath = argv[0],
      filePath = argv[1],
      args = argv.slice(2),
      ///
  commands = [],
      optionMap = {},
      optionAbbreviationMap = abbreviations || {};

  args.forEach(function (argument) {
    ///
    var abbreviatedOptions = /^-[^-]+$/.test(argument),
        unabbreviatedOption = /^--[^-]+$/.test(argument);

    if (false) {
      ///
    } else if (abbreviatedOptions) {
      var index = argument.indexOf('=');

      if (index === -1) {
        var optionNames = argument.split('');

        optionNames.shift();

        optionNames.forEach(function (optionName) {
          var optionValue = true;

          optionMap[optionName] = optionValue;
        });
      } else {
        var _optionNames = argument.substring(1, index).split(''),
            optionNamesLength = _optionNames.length,
            lastOptionIndex = optionNamesLength - 1,
            lastOptionValue = argument.substring(index + 1);

        _optionNames.forEach(function (optionName, index) {
          var optionValue = index === lastOptionIndex ? lastOptionValue : true;

          optionMap[optionName] = optionValue;
        });
      }
    } else if (unabbreviatedOption) {
      var optionName = void 0,
          optionValue = void 0;

      var _index = argument.indexOf('=');

      if (_index === -1) {
        optionName = argument.substring(2);

        optionValue = true;
      } else {
        optionName = argument.substring(2, _index);

        optionValue = argument.substring(_index + 1);
      }

      optionMap[optionName] = optionValue;
    } else {
      var command = argument; ///

      commands.push(command);
    }
  });

  var abbreviatedOptionNames = Object.keys(optionAbbreviationMap); ///

  abbreviatedOptionNames.forEach(function (abbreviatedOptionName) {
    if (optionMap.hasOwnProperty(abbreviatedOptionName)) {
      var unAbbreviatedOptionName = optionAbbreviationMap[abbreviatedOptionName];

      if (optionMap.hasOwnProperty(unAbbreviatedOptionName)) {
        ///
      } else {
        optionMap[unAbbreviatedOptionName] = optionMap[abbreviatedOptionName];
      }

      delete optionMap[abbreviatedOptionName];
    }
  });

  var options = optionMap; ///

  return {
    args: args,
    options: options,
    commands: commands,
    filePath: filePath,
    interpreterPath: interpreterPath
  };
}

module.exports = {
  parseArgv: parseArgv
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9hcmd1bWVudGF0aXZlLmpzIl0sIm5hbWVzIjpbInBhcnNlQXJndiIsImFyZ3YiLCJhYmJyZXZpYXRpb25zIiwiaW50ZXJwcmV0ZXJQYXRoIiwiZmlsZVBhdGgiLCJhcmdzIiwic2xpY2UiLCJjb21tYW5kcyIsIm9wdGlvbk1hcCIsIm9wdGlvbkFiYnJldmlhdGlvbk1hcCIsImZvckVhY2giLCJhcmd1bWVudCIsImFiYnJldmlhdGVkT3B0aW9ucyIsInRlc3QiLCJ1bmFiYnJldmlhdGVkT3B0aW9uIiwiaW5kZXgiLCJpbmRleE9mIiwib3B0aW9uTmFtZXMiLCJzcGxpdCIsInNoaWZ0Iiwib3B0aW9uTmFtZSIsIm9wdGlvblZhbHVlIiwic3Vic3RyaW5nIiwib3B0aW9uTmFtZXNMZW5ndGgiLCJsZW5ndGgiLCJsYXN0T3B0aW9uSW5kZXgiLCJsYXN0T3B0aW9uVmFsdWUiLCJjb21tYW5kIiwicHVzaCIsImFiYnJldmlhdGVkT3B0aW9uTmFtZXMiLCJPYmplY3QiLCJrZXlzIiwiYWJicmV2aWF0ZWRPcHRpb25OYW1lIiwiaGFzT3duUHJvcGVydHkiLCJ1bkFiYnJldmlhdGVkT3B0aW9uTmFtZSIsIm9wdGlvbnMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxTQUFTQSxTQUFULENBQW1CQyxJQUFuQixFQUF5QkMsYUFBekIsRUFBd0M7QUFDdkMsTUFBTUMsa0JBQWtCRixLQUFLLENBQUwsQ0FBeEI7QUFBQSxNQUNHRyxXQUFXSCxLQUFLLENBQUwsQ0FEZDtBQUFBLE1BRU9JLE9BQU9KLEtBQUtLLEtBQUwsQ0FBVyxDQUFYLENBRmQ7QUFBQSxNQUU4QjtBQUN2QkMsYUFBVyxFQUhsQjtBQUFBLE1BSU9DLFlBQVksRUFKbkI7QUFBQSxNQUtPQyx3QkFBd0JQLGlCQUFpQixFQUxoRDs7QUFPQUcsT0FBS0ssT0FBTCxDQUFhLFVBQUNDLFFBQUQsRUFBYztBQUFHO0FBQzdCLFFBQU1DLHFCQUFxQixXQUFXQyxJQUFYLENB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aWN0JztcblxuZnVuY3Rpb24gcGFyc2VBcmd2KGFyZ3YsIGFiYnJldmlhdGlvbnMpIHtcblx0Y29uc3QgaW50ZXJwcmV0ZXJQYXRoID0gYXJndlswXSxcblx0XHRcdFx0ZmlsZVBhdGggPSBhcmd2WzFdLFxuICAgICAgICBhcmdzID0gYXJndi5zbGljZSgyKSwgIC8vL1xuICAgICAgICBjb21tYW5kcyA9IFtdLFxuICAgICAgICBvcHRpb25NYXAgPSB7fSxcbiAgICAgICAgb3B0aW9uQWJicmV2aWF0aW9uTWFwID0gYWJicmV2aWF0aW9ucyB8fCB7fTtcblxuXHRhcmdzLmZvckVhY2goKGFyZ3VtZW50KSA9PiB7ICAvLy9cblx0XHRjb25zdCBhYmJyZXZpYXRlZE9wdGlvbnMgPSAvXi1bXi1dKyQvLnRlc3QoYXJndW1lbnQpLFxuICAgICAgICAgIHVuYWJicmV2aWF0ZWRPcHRpb24gPSAvXi0tW14tXSskLy50ZXN0KGFyZ3VtZW50KTtcblxuXHRcdGlmIChmYWxzZSkge1xuXHRcdCAgLy8vXG4gICAgfSBlbHNlIGlmIChhYmJyZXZpYXRlZE9wdGlvbnMpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gYXJndW1lbnQuaW5kZXhPZignPScpO1xuXG4gICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbk5hbWVzID0gYXJndW1lbnQuc3BsaXQoJycpO1xuXG4gICAgICAgIG9wdGlvbk5hbWVzLnNoaWZ0KCk7XG5cbiAgICAgICAgb3B0aW9uTmFtZXMuZm9yRWFjaCgob3B0aW9uTmFtZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG9wdGlvblZhbHVlID0gdHJ1ZTtcblxuICAgICAgICAgIG9wdGlvbk1hcFtvcHRpb25OYW1lXSA9IG9wdGlvblZhbHVlO1xuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uTmFtZXMgPSBhcmd1bWVudC5zdWJzdHJpbmcoMSwgaW5kZXgpLnNwbGl0KCcnKSxcbiAgICAgICAgICAgICAgb3B0aW9uTmFtZXNMZW5ndGggPSBvcHRpb25OYW1lcy5sZW5ndGgsXG4gICAgICAgICAgICAgIGxhc3RPcHRpb25JbmRleCA9IG9wdGlvbk5hbWVzTGVuZ3RoIC0gMSxcbiAgICAgICAgICAgICAgbGFzdE9wdGlvblZhbHVlID0gYXJndW1lbnQuc3Vic3RyaW5nKGluZGV4ICsgMSk7XG5cbiAgICAgICAgb3B0aW9uTmFtZXMuZm9yRWFjaCgob3B0aW9uTmFtZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBvcHRpb25WYWx1ZSA9IChpbmRleCA9PT0gbGFzdE9wdGlvbkluZGV4KSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RPcHRpb25WYWx1ZSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZTtcblxuICAgICAgICAgIG9wdGlvbk1hcFtvcHRpb25OYW1lXSA9IG9wdGlvblZhbHVlO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHVuYWJicmV2aWF0ZWRPcHRpb24pIHtcblx0XHQgIGxldCBvcHRpb25OYW1lLCBvcHRpb25WYWx1ZTtcblxuXHRcdCAgY29uc3QgaW5kZXggPSBhcmd1bWVudC5pbmRleE9mKCc9Jyk7XG5cblx0XHQgIGlmIChpbmRleCA9PT0gLTEpIHtcblx0XHQgICAgb3B0aW9uTmFtZSA9IGFyZ3VtZW50LnN1YnN0cmluZygyKTtcblxuICAgICAgICBvcHRpb25WYWx1ZSA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuXHRcdCAgICBvcHRpb25OYW1lID0gYXJndW1lbnQuc3Vic3RyaW5nKDIsIGluZGV4KTtcblxuXHRcdCAgICBvcHRpb25WYWx1ZSA9ICBhcmd1bWVudC5zdWJzdHJpbmcoaW5kZXggKyAxKTtcbiAgICAgIH1cblxuICAgICAgb3B0aW9uTWFwW29wdGlvbk5hbWVdID0gb3B0aW9uVmFsdWU7XG4gICAgfSBlbHNlIHtcblx0XHQgIGNvbnN0IGNvbW1hbmQgPSBhcmd1bWVudDsgLy8vXG5cbiAgICAgIGNvbW1hbmRzLnB1c2goY29tbWFuZCk7XG4gICAgfVxuXHR9KTtcblxuXHRjb25zdCBhYmJyZXZpYXRlZE9wdGlvbk5hbWVzID0gT2JqZWN0LmtleXMob3B0aW9uQWJicmV2aWF0aW9uTWFwKTsgIC8vL1xuXG4gIGFiYnJldmlhdGVkT3B0aW9uTmFtZXMuZm9yRWFjaCgoYWJicmV2aWF0ZWRPcHRpb25OYW1lKSA9PiB7XG4gICAgaWYgKG9wdGlvbk1hcC5oYXNPd25Qcm9wZXJ0eShhYmJyZXZpYXRlZE9wdGlvbk5hbWUpKSB7XG4gICAgICBjb25zdCB1bkFiYnJldmlhdGVkT3B0aW9uTmFtZSA9IG9wdGlvbkFiYnJldmlhdGlvbk1hcFthYmJyZXZpYXRlZE9wdGlvbk5hbWVdO1xuXG4gICAgICBpZiAob3B0aW9uTWFwLmhhc093blByb3BlcnR5KHVuQWJicmV2aWF0ZWRPcHRpb25OYW1lKSkge1xuICAgICAgICAvLy9cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9wdGlvbk1hcFt1bkFiYnJldmlhdGVkT3B0aW9uTmFtZV0gPSBvcHRpb25NYXBbYWJicmV2aWF0ZWRPcHRpb25OYW1lXTtcbiAgICAgIH1cblxuICAgICAgZGVsZXRlIG9wdGlvbk1hcFthYmJyZXZpYXRlZE9wdGlvbk5hbWVdO1xuICAgIH1cbiAgfSk7XG5cblx0Y29uc3Qgb3B0aW9ucyA9IG9wdGlvbk1hcDsgLy8vXG5cblx0cmV0dXJuICh7XG5cdFx0YXJncyxcbiAgICBvcHRpb25zLFxuXHRcdGNvbW1hbmRzLFxuXHRcdGZpbGVQYXRoLFxuXHRcdGludGVycHJldGVyUGF0aFxuXHR9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHBhcnNlQXJndlxufTtcbiJdfQ==