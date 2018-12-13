'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SVG = require('./SVG');

var _SVG2 = _interopRequireDefault(_SVG);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IosArrowRoundDown = function (_Component) {
  _inherits(IosArrowRoundDown, _Component);

  function IosArrowRoundDown(props) {
    _classCallCheck(this, IosArrowRoundDown);

    var _this = _possibleConstructorReturn(this, (IosArrowRoundDown.__proto__ || Object.getPrototypeOf(IosArrowRoundDown)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(IosArrowRoundDown, [{
    key: 'render',
    value: function render() {
      var style = _extends({}, this.props.style, {
        color: this.props.color,
        fontSize: this.props.fontSize
      });

      return _react2.default.createElement(
        _SVG2.default,
        {
          style: this.props.style,
          className: this._getClasses(),
          fill: this.props.color,
          width: this.props.fontSize,
          height: this.props.fontSize,
          viewBox: '0 0 1024 1024',
          onClick: this.props.onClick,
          rotate: this.props.rotate ? 1 : 0,
          shake: this.props.shake ? 1 : 0,
          beat: this.props.beat ? 1 : 0
        },
        _react2.default.createElement('path', { d: 'M496 272v441.4l-148.8-132.6c-6.8-5.8-16.2-6.4-22.4-0.2s-6.6 17-0.2 22.8l176 160c0.4 0.4 0.8 0.8 1.2 1 0.2 0.2 0.4 0.2 0.6 0.4s0.4 0.4 0.8 0.6c0.2 0.2 0.4 0.2 0.6 0.4s0.4 0.2 0.6 0.4c0.2 0.2 0.4 0.2 0.8 0.4 0.2 0.2 0.4 0.2 0.6 0.4 0.2 0 0.4 0.2 0.8 0.2 0.2 0 0.6 0.2 0.8 0.2s0.4 0.2 0.8 0.2c0.2 0 0.6 0.2 0.8 0.2s0.6 0 0.8 0.2c0.2 0 0.4 0 0.6 0 1 0.2 2.2 0.2 3.2 0 0.2 0 0.4 0 0.6 0s0.6 0 0.8-0.2c0.2 0 0.6-0.2 0.8-0.2s0.4-0.2 0.8-0.2c0.2 0 0.6-0.2 0.8-0.2s0.4-0.2 0.8-0.2c0.2 0 0.4-0.2 0.6-0.4s0.4-0.2 0.8-0.4c0.2-0.2 0.4-0.2 0.6-0.4s0.4-0.2 0.6-0.4c0.2-0.2 0.4-0.4 0.8-0.6 0.2-0.2 0.4-0.2 0.6-0.4 0.4-0.4 0.8-0.6 1.2-1l176-160c3.4-3.2 4.6-7.2 4.6-11.4 0-4-1.6-8.2-4.6-11.4-6.2-6.2-16-6-22.6 0l-148.8 132.8v-441.4c0-8.8-7.2-16-16-16s-16 7.2-16 16z' })
      );
    }
  }, {
    key: '_getClasses',
    value: function _getClasses() {
      return [].concat(_toConsumableArray(this.state.classNames), [this.props.className]).join(' ');
    }
  }, {
    key: '_getPathByIconName',
    value: function _getPathByIconName() {
      var _this2 = this;

      var icon = icons.find(function (icon) {
        return icon.tags[0] === _this2.props.icon;
      });
      if (icon) return icon.paths.join(' ');
      return '';
    }
  }]);

  return IosArrowRoundDown;
}(_react.Component);

IosArrowRoundDown.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosArrowRoundDown.propTypes = {
  // style
  style: _propTypes2.default.object,
  color: _propTypes2.default.string,
  fontSize: _propTypes2.default.string,

  // animation
  shake: _propTypes2.default.bool,
  beat: _propTypes2.default.bool,
  rotate: _propTypes2.default.bool,

  // functions
  onClick: _propTypes2.default.func
};

exports.default = IosArrowRoundDown;
module.exports = exports['default'];
//# sourceMappingURL=IosArrowRoundDown.js.map