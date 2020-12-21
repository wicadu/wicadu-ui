"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _polished = require("polished");

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

var Wrapper = _styledComponents.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border-radius: 15px;\n  line-height: 24px;\n  text-align: center;\n  font-size: 16px;\n  cursor: pointer;\n  height: 48px;\n  border: 0;\n  padding: ", ";\n  margin: ", ";\n  width: ", ";\n  \n  ", "\n\n  ", "\n\n  &:hover {\n    ", "\n  }\n\n  &:disabled,\n  &[disabled] {\n    background-color: #d6d0d5;\n    cursor: not-allowed;\n  }\n"], ["\n  border-radius: 15px;\n  line-height: 24px;\n  text-align: center;\n  font-size: 16px;\n  cursor: pointer;\n  height: 48px;\n  border: 0;\n  padding: ", ";\n  margin: ", ";\n  width: ", ";\n  \n  ", "\n\n  ", "\n\n  &:hover {\n    ", "\n  }\n\n  &:disabled,\n  &[disabled] {\n    background-color: #d6d0d5;\n    cursor: not-allowed;\n  }\n"])), function (_a) {
  var padding = _a.padding;
  return padding;
}, function (_a) {
  var margin = _a.margin;
  return margin;
}, function (_a) {
  var width = _a.width;
  return "" + width || 'auto';
}, function (_a) {
  var asTextLink = _a.asTextLink;
  return !asTextLink && "\n    padding: 12px 24px;\n    filter: drop-shadow(0 2px 2px rgba(187, 188, 188, 0.35));\n  ";
}, function (_a) {
  var bgColor = _a.bgColor,
      asTextLink = _a.asTextLink,
      inverse = _a.inverse,
      color = _a.color;
  return inverse ? "\n        background-color: " + (asTextLink ? 'transparent' : color) + ";\n        " + (!asTextLink && "border: 1px solid " + bgColor + ";") + "\n        color: " + bgColor + ";\n        path {\n          fill: " + bgColor + ";\n        }\n        " : "\n        background-color: " + (asTextLink ? 'transparent' : bgColor) + ";\n        color: " + color + ";\n      ";
}, function (_a) {
  var bgColor = _a.bgColor,
      color = _a.color,
      inverse = _a.inverse,
      asTextLink = _a.asTextLink;
  return inverse ? "\n        " + (bgColor && !asTextLink && "background-color: " + (0, _polished.darken)(0.08, color) + ";") + "\n        " + (color && "color: " + (0, _polished.darken)(0.06, bgColor) + ";") + "\n      " : "\n        " + (bgColor && !asTextLink && "background-color: " + (0, _polished.darken)(0.08, bgColor) + ";") + "\n        " + (color && "color: " + (0, _polished.darken)(0.06, color) + ";") + "\n      ";
});

var _default = Wrapper;
exports.default = _default;
var templateObject_1;