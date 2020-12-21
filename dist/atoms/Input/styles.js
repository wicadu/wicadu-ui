"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __makeTemplateObject = void 0 && (void 0).__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};

var InputWrapper = _styledComponents.default.input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: ", ";\n  width: 100%;\n  height: ", ";\n  padding: 20px 17px;\n  margin: 10px;\n  border: 1px solid ", ";\n  border-radius: ", ";\n  outline: none;\n\n  &:disabled,\n  &[disabled] {\n    background-color: #9c9a9f;\n    cursor: not-allowed;\n    color: #808080;\n  }\n"], ["\n  font-size: ", ";\n  width: 100%;\n  height: ", ";\n  padding: 20px 17px;\n  margin: 10px;\n  border: 1px solid ", ";\n  border-radius: ", ";\n  outline: none;\n\n  &:disabled,\n  &[disabled] {\n    background-color: #9c9a9f;\n    cursor: not-allowed;\n    color: #808080;\n  }\n"])), function (_a) {
  var fontSize = _a.fontSize;
  return fontSize + "px";
}, function (_a) {
  var height = _a.height;
  return height + "px";
}, function (_a) {
  var borderColor = _a.borderColor;
  return borderColor;
}, function (_a) {
  var rounded = _a.rounded;
  return rounded + "px";
});

var _default = InputWrapper;
exports.default = _default;
var templateObject_1;