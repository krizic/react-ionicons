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

var IosPeopleOutline = function (_Component) {
  _inherits(IosPeopleOutline, _Component);

  function IosPeopleOutline(props) {
    _classCallCheck(this, IosPeopleOutline);

    var _this = _possibleConstructorReturn(this, (IosPeopleOutline.__proto__ || Object.getPrototypeOf(IosPeopleOutline)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(IosPeopleOutline, [{
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
        _react2.default.createElement('path', { d: 'M512 224v0 0z M698.4 669.6c-27-9.4-56.2-10-83.2-19.4-8.2-2.8-24.4-6.2-27.8-15.6-3.2-9.2-3.2-20-3.8-29.6-0.4-7.6-0.6-15.2-0.6-22.8 0-5 12.8-15.6 15.6-20.2 10.8-18 11.8-42.2 13.8-62.6 17.4 4.8 19.6-27.4 22.6-37.2 2.2-6.8 15.6-53.6-5.2-47.2 5-8.8 7-19.6 8.4-29.4 4-25.6 5.6-53.6-2.2-78.6-16.2-52-66-81.2-118.6-82.8-53.4-1.8-107 23.8-127 75.6-9.6 25.2-8.8 52.6-5.6 79 1.4 12 3.4 25.4 9.4 36.2-19.4-5.8-9 35.4-6.8 42.6 3.2 10.2 6 46.8 24.2 41.8 1.6 16.2 3.4 32.8 7.8 48.6 3 10.6 9.2 19.6 16.4 27.8 3.6 4 5.4 4.4 5.2 9.6-0.2 15.6 0.2 32.4-3.8 47.6s-37.4 21.6-50.8 24.4c-36 7.4-69.2 10.8-99.2 33.2-35 25.8-53.2 66-53.2 109.4 166.6 0 333.2 0 499.8 0 18.8 0 37.4 0 56.2 0 0-59-35.6-111-91.6-130.4-22.4-7.8 22.6 7.8 0 0zM294.2 727.2c11.2-11.8 25.4-22.2 40.8-28 21-8 44.8-7.6 66.6-13.2 18-4.6 40.4-11.8 54.4-24.8 12.8-12 14.2-30.4 15.4-47 1-14 0.8-27.8 0.8-41.8 0-9.8-11.4-15.4-17-23.2-9-12.2-9.4-30.4-11.2-45-0.8-6.4-1-14.6-6.4-19-6-4.8-10.4-7.4-13.4-15-4-10.4-5.4-21.6-8.6-32.4-2-7 5-13.6 7.8-19.4 5.2-10.6-3.8-27-5.6-38-5.6-32.8-5.4-68.6 18.2-94.6 47.4-52.4 156-35.8 171.6 37.8 4.8 23 1.8 49.8-4.6 72.2-2.8 9.6-6 16.6-0.4 26 8.4 13.6 4.8 22.4 0.8 37.6-3.2 12.6-7.2 18.2-16.8 26-8 6.4-6.8 22.4-8.2 31.6-1.6 11.2-2.6 23-9.4 32.4-2.6 3.6-16.8 14.8-16.8 18.6 0 22-1 44.4 2.8 66.2 5.2 31 31.2 38.4 57.2 49 26.4 10.2 57 6.4 82.6 19 26.4 13 51.8 36.8 59.4 66.2-158.6 0-317.2 0-475.8 0-2.8 0-5.6 0-8.4 0 3.8-16.6 13-29.2 24.2-41.2 18.4-19.4-11.8 12.6 0 0z M288.2 644c14-7 29.2-8.6 44.6-10.2 5.6-0.6 8.2-4.4 4-9.8-8-10.2-35.6-12.2-47.2-16.8-7.2-2.8-9.2-5.4-9.8-13.4-0.2-3.6-2.2-19.6 0.6-22.2 2-2 14.6-1.2 17.4-1.6 11.4-1.4 23-3.8 33.8-8 4.6-1.8 9-4 13-6.8 4.8-3.6-3.6-12.4-5.8-17.2-6.8-15-9.8-31.4-10.8-47.8-2-32.2 3-64.6-3-96.6-9-49-46.8-73.6-95-73.6-29.8 0-59.2 10.2-75.8 36.2-18.4 28.6-17.4 64.2-16.4 96.8 0.6 18.6 1.4 37.4-1.2 56-1.2 8-3 15.8-5.8 23.4-2.2 5.8-13.4 20.2-9 23.2 16.6 11.8 44.6 15.8 64.6 14.2 0.6 9.8 2.4 22.4-1.2 31.6-5.6 14.4-47.4 18.2-60 22.4-35.2 11.8-61.2 41.2-61.2 80.2 36.6 0 73 0 109.6 0 16.4 0 32.8 0 49.4 0 2.6 0 12.6-18.6 15.4-21.6 14-15.6 31.2-29 49.8-38.4 18-9-29.2 14.8 0 0zM205.6 672c-32.6 0-65.2 0-97.8 0 14.2-23.6 49.8-22 73.2-30.4 21.6-7.8 35.4-21 37.6-44 0.2-2.6 0.4-58.4-1.8-58.4-17.4-0.6-35.6-0.2-53-2.8 13.8-44.6 0.6-90.6 8-135.6 5.4-32.6 26.2-50.6 59.4-50.6 31.8 0 55.4 14.8 62.2 46.8 9.6 46.4-4 93.8 10.8 139.8-11 2.8-22.6 3.2-34 3.6-5.6 0.2-11.4 0.4-17 0.6-3.6 0.2-2.4 6.4-2.6 9.4-2 21.8-10 56.2 7.4 73.8-19.2 12-40 28.6-52.4 47.8z M799.6 704c53.4 0 107 0 160.4 0 0-39-26.2-68.6-61.4-80.2-16.2-5.2-47.4-6.8-59-20.8-5.8-7-2.6-24.8-2-33.2 8.8 0.8 18.4-0.6 27.4-1.8 8.2-1.2 16.2-2.8 24-5.6 3.6-1.4 7.2-2.8 10.6-4.8 7.8-4.6 4.2-5.4 0.2-12.2-21.8-36.6-12-83-13-123.2-0.8-33.4-9.6-70-40-88.8-27.4-17-68-17.6-97.4-5.6-84.8 34-34.8 146.4-63.8 210.8-5 10.8-12.2 14.6 0.4 21 7 3.6 14.6 6 22.2 7.8 11.6 2.8 23.6 4.4 35.6 4.8 2 0 0.6 25.2 0 27.8-2.2 9.8-23.6 12.6-31.6 14.8-8.2 2.2-21.8 2.8-25.8 11.4-6 12.8 19.8 9.6 26.2 10.8 20.6 3.8 38.8 15.2 54.8 28.2 11.8 9.6 27.8 23.2 32.2 38.8zM798.8 649.8c-10.2-9.4-20.8-18.6-32.6-26 17.6-17.6 9.4-51.8 7.4-73.8-1.2-12.6-4-9.4-16.6-9.8-12-0.4-25.6 0.2-37-3.6 14.4-44.6 2.6-90.4 10-135.8 5.6-34.2 29-51 63-51 30.8 0 52 15.4 58.4 46 9.8 46.2-5.2 94 9 140-17 2.6-34.6 2-51.8 2.6-4.2 0.2-3.8 50.2-3.4 54.6 1.4 23.4 12.2 37.6 34.4 46.6 24.2 9.8 62 7.2 76.8 31.8-18.6 0-37 0-55.6 0-11.2 0-22.4 0-33.8 0-14.2 0.2-17.8-12.2-28.2-21.6-10-9.2 8 7.2 0 0z' })
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

  return IosPeopleOutline;
}(_react.Component);

IosPeopleOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosPeopleOutline.propTypes = {
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

exports.default = IosPeopleOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosPeopleOutline.js.map