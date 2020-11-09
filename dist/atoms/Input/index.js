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
  placeholder: _propTypes.default.string,
  borderColor: _propTypes.default.string,
  className: _propTypes.default.string,
  fontSize: _propTypes.default.number,
  onChange: _propTypes.default.func.isRequired,
  disabled: _propTypes.default.bool,
  rounded: _propTypes.default.number,
  dataSet: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  value: _propTypes.default.string,
  type: _propTypes.default.oneOf(['password', 'number', 'text']),
  height: _propTypes.default.number,
  name: _propTypes.default.string
};
var defaultProps = {
  placeholder: '',
  borderColor: 'transparent',
  className: '',
  disabled: false,
  value: '',
  fontSize: 16,
  rounded: 15,
  dataSet: '',
  type: 'text',
  height: 15,
  name: null
};

var Input = function Input(props) {
  function onChangeHandle(event) {
    event.persist();
    var disabled = props.disabled,
        onChange = props.onChange;

    if (!disabled) {
      onChange(event);
    }
  }

  var placeholder = props.placeholder,
      borderColor = props.borderColor,
      className = props.className,
      disabled = props.disabled,
      fontSize = props.fontSize,
      dataSet = props.dataSet,
      rounded = props.rounded,
      value = props.value,
      height = props.height,
      type = props.type,
      name = props.name;
  return /*#__PURE__*/_react.default.createElement(_styles.default, {
    borderColor: borderColor,
    placeholder: placeholder,
    className: className,
    onChange: onChangeHandle,
    fontSize: fontSize,
    disabled: disabled,
    "data-id": dataSet,
    rounded: rounded,
    value: value,
    name: name,
    type: type,
    height: height
  });
};

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;
var _default = Input;
exports.default = _default;