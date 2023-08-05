"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _express = /*#__PURE__*/ _interopRequireDefault(require("express"));
const _morgan = /*#__PURE__*/ _interopRequireDefault(require("morgan"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
/***			config server 			***/ const server = (0, _express.default)();
server.use((0, _morgan.default)("dev"));
module.exports = server;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcbmltcG9ydCBtb3JnYW4gZnJvbSAnbW9yZ2FuJ1xuXG4vKioqXHRcdFx0Y29uZmlnIHNlcnZlciBcdFx0XHQqKiovXG5jb25zdCBzZXJ2ZXIgPSBleHByZXNzKClcbnNlcnZlci51c2UobW9yZ2FuKCdkZXYnKSlcblxubW9kdWxlLmV4cG9ydHMgPSBzZXJ2ZXJcblxuIl0sIm5hbWVzIjpbInNlcnZlciIsImV4cHJlc3MiLCJ1c2UiLCJtb3JnYW4iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7OzhEQUFvQjs2REFDRDs7Ozs7O0FBRW5CLDBCQUEwQixHQUMxQixNQUFNQSxTQUFTQyxJQUFBQSxnQkFBTztBQUN0QkQsT0FBT0UsR0FBRyxDQUFDQyxJQUFBQSxlQUFNLEVBQUM7QUFFbEJDLE9BQU9DLE9BQU8sR0FBR0wifQ==