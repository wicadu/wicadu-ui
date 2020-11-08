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
      textSize = props.textSize,
      dataSet = props.dataSet,
      rounded = props.rounded,
      value = props.value,
      size = props.size,
      type = props.type,
      name = props.name,
      id = props.id;
  return /*#__PURE__*/_react.default.createElement(_styles.default, {
    borderColor: borderColor,
    placeholder: placeholder,
    className: className,
    onChange: onChangeHandle,
    textSize: textSize,
    disabled: disabled,
    "data-id": dataSet,
    rounded: rounded,
    value: value,
    name: name,
    type: type,
    size: size,
    id: id
  });
};

Input.propTypes = {
  placeholder: _propTypes.default.string,
  borderColor: _propTypes.default.string,
  className: _propTypes.default.string,
  textSize: _propTypes.default.number,
  onChange: _propTypes.default.func.isRequired,
  disabled: _propTypes.default.bool,
  rounded: _propTypes.default.number,
  dataSet: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  value: _propTypes.default.string,
  type: _propTypes.default.oneOf(['password', 'number', 'email', 'color', 'text', 'date']),
  size: _propTypes.default.number,
  id: _propTypes.default.string,
  name: _propTypes.default.string
};
Input.defaultProps = {
  placeholder: '',
  borderColor: '',
  className: '',
  disabled: false,
  value: '',
  textSize: 16,
  rounded: 0,
  dataSet: '',
  type: 'text',
  size: 24,
  id: '',
  name: null
};
var _default = Input;
exports.default = _default;