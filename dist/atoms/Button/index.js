"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// styles
var propTypes = {
  asTextLink: _propTypes.default.bool,
  className: _propTypes.default.string,
  children: _propTypes.default.node.isRequired,
  disabled: _propTypes.default.bool,
  dataset: _propTypes.default.string,
  onClick: _propTypes.default.func,
  bgColor: _propTypes.default.string,
  inverse: _propTypes.default.bool,
  color: _propTypes.default.string,
  width: _propTypes.default.number,
  padding: _propTypes.default.string,
  margin: _propTypes.default.string
};
var defaultProps = {
  onClick: function onClick() {},
  asTextLink: false,
  className: '',
  disabled: false,
  datasets: null,
  bgColor: '#5430ff',
  inverse: false,
  width: 'auto',
  color: 'white',
  padding: '0',
  margin: '0'
};

var Button = function Button(props) {
  function onClickHandle(event) {
    var onClick = props.onClick,
        disabled = props.disabled;

    if (!disabled) {
      onClick(event);
    }
  }

  var asTextLink = props.asTextLink,
      className = props.className,
      disabled = props.disabled,
      children = props.children,
      dataset = props.dataset,
      inverse = props.inverse,
      bgColor = props.bgColor,
      width = props.width,
      color = props.color,
      padding = props.padding,
      margin = props.margin;
  return /*#__PURE__*/_react.default.createElement(_styles.default, {
    asTextLink: asTextLink,
    className: className,
    disabled: disabled,
    onClick: onClickHandle,
    dataset: dataset,
    inverse: inverse,
    bgColor: bgColor,
    width: width,
    color: color,
    padding: padding,
    margin: margin,
    type: "button"
  }, children);
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
var _default = Button;
exports.default = _default;