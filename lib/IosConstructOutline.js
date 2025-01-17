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

var IosConstructOutline = function (_Component) {
  _inherits(IosConstructOutline, _Component);

  function IosConstructOutline(props) {
    _classCallCheck(this, IosConstructOutline);

    var _this = _possibleConstructorReturn(this, (IosConstructOutline.__proto__ || Object.getPrototypeOf(IosConstructOutline)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(IosConstructOutline, [{
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
        _react2.default.createElement('path', { d: 'M274.6 852.8c-11 10.8-28.8 10.8-39.8 0-10.8-11-10.8-28.8 0-39.8 11-10.8 28.8-10.8 39.8 0 10.8 11 10.8 29 0 39.8z M760.2 128.2v0 0z M426.2 481.4l51.8-51.8c6.2 6-2-2.2 17.2 16.6 8.4-7.8 16.2-15.2 23.2-22-38.4-37.8-29-28.4-29-28.4-2.8-2.8-7.6-4.6-12.6-4.6-2.8 0-5.8 0.6-8.4 2l-11.4 6c-56.2-55.6-70.8-80.6-68.6-123.6 2.2-44.8 24.6-74.4 61.2-105.4 49.6-42.2 121.4-30.6 121.4-30.6 16 0-8.2-17-20.8-25-18.8-12-46.6-19.2-75.8-19.2-28.6 0-60.8 5-93.6 18.6-93 38-148.2 91-162.4 105-14 14-33.6 36-45.8 53.4s3.8 42-12.2 58-49.6 0-49.6 0c-2.8 0-5.8 1-7.8 3.2l-68.4 67.8c-4.4 4.4-4.4 11.4 0 15.6l127.2 126.4c2.2 2.2 5 3.2 7.8 3.2s5.8-1 7.8-3.2l66.4-69.6c4.4-4.4 4.4-11.4 0-15.6 0 0-10.6-10.4-24.2-24s1.6-38.8 10.6-46.8c9-8.2 23.2-13.6 42.4-13.6 8.6 0 14.8 1.4 22.8 3.6 24.4 6.8 51.6 31.8 101.8 81.6l-7.8 13c-4.6 7.6-1.8 16.6 2.6 20.8 0 0-10-9.8 26.2 26.4 8-7.4 15.6-14.8 23.2-22-18-18.6-9.2-9.8-15.2-15.8zM420 435.8l-8-8c-47.8-47.6-76.6-73.2-107.8-81.8-10.2-2.8-19-4.8-31.4-4.8-23 0-39.4 5.4-57.4 17.4-21 14-37.2 44.2-37.2 63 0 19 13.4 29 24.6 40.4l-38.8 38.4-92-91.2 38.6-38.2 15.2 2.4c25.8 0 45.6-7 58.8-20 17.4-17.4 16-40.2 15-53.6-0.2-3.2-0.6-8-0.4-10.4 11-15.4 29-35.6 41.4-47.8 23-22.8 73.4-66 152-98 23-9.4 47-14.8 71.4-15.8-13.8 4.4-25.4 10.2-34.6 17.6v0 0c-46.2 37.2-70.8 80.6-73 129-2.8 57.8 20.6 91 78 147.8l2.8 2.8-14.2 14.2-3-3.4z M886.4 809.6l-77.8 77.2c-32-38.2-123.6-143-217.4-240.2-7.2 7.6-14.6 15.4-22 23.4 117.2 121.4 230.2 255.6 230.2 255.6 2.2 2.2 5 3.2 7.8 3.2s5.8-1 7.8-3.2l110.4-109.6c4.4-4.4 4.4-11.4 0-15.6 0 0-138-114.6-260.8-231.6-6.8 7.2-14.2 15-22 23.2 98 93.2 204.8 185.4 243.8 217.6z M959 250.2l-105 105.4-102.4-18.6-18.4-102.4 105-105.4c-22.4-22.4-53.6-33.2-78-33.2-1.4 0-2.8 0-4 0.2-25 1.4-78.6 15.4-120 59.4-40 42.4-82.2 121.4-45 209 4.4 10.6 9.4 24.6-5.4 39.4-3 2.8-19.8 18.8-45 42.6-7.2 6.8-15 14-23.2 22-16.2 15.2-34.2 32.4-53.6 50.6-7.6 7.2-15.4 14.6-23.2 22-114.2 107.8-254.2 239.4-254.2 239.4-36 31-33.4 88.4-0.2 121.8 17 16.8 40 25.6 62.6 25.6 22.2 0 43.8-8.4 59.2-26.2 0 0 131.2-139.8 238.8-254.2 7.4-8 14.8-15.8 22-23.4 18.6-19.8 36-38.2 51.6-54.6 7.8-8.4 15.2-16.2 22-23.2 23-24.4 38.8-40.8 42-44 8-7.8 15.4-10.2 22.2-10.2 6.6 0 12.6 2.4 17.2 4.8 19.8 10.2 42 14.8 64.8 14.8 53.6 0 110-24.8 144.4-59.2 48.8-48.8 57.8-96 59.2-120.2 1.4-23.8-6.8-55.6-33.4-82.2zM960.4 330.6c-1.4 24-11.4 61-50 99.6-29.8 29.8-78.6 49.8-121.6 49.8-19 0-35.8-3.8-50-11.2v0 0c-7-3.6-18-8.4-31.8-8.4-11.2 0-28 3.4-44.6 19.4-18 17.6-362.6 384.8-377.4 400.4l-0.8 0.8c-11.4 13.2-26.8 15.2-35 15.2-14.8 0-29.4-6-40.2-16.4-10.8-11-17-26.8-16.4-42.4 0.4-9.2 3.2-22.4 15-32.4l1.2-0.8c15.6-14.8 384.6-362.2 399.8-377.2v0 0c15.8-15.8 19.2-32.4 19.4-43.6 0-13.8-4.8-25.2-7-30.8v0 0c-36.4-85.4 20.4-155.2 38.8-174.4v0 0c34.6-36.8 79.4-48.4 98.4-49.4 0.8 0 1.6 0 2.4 0 8 0 18 2 28 6l-89.4 89.8 3 16.4 18.4 102.4 4 21.8 21.8 4 119 21.6 11.8-11.8 78-78.4c5.6 13.4 5.6 25.4 5.2 30z' })
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

  return IosConstructOutline;
}(_react.Component);

IosConstructOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosConstructOutline.propTypes = {
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

exports.default = IosConstructOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosConstructOutline.js.map