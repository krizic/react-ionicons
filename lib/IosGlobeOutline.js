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

var IosGlobeOutline = function (_Component) {
  _inherits(IosGlobeOutline, _Component);

  function IosGlobeOutline(props) {
    _classCallCheck(this, IosGlobeOutline);

    var _this = _possibleConstructorReturn(this, (IosGlobeOutline.__proto__ || Object.getPrototypeOf(IosGlobeOutline)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(IosGlobeOutline, [{
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
        _react2.default.createElement('path', { d: 'M512 96c-0.2 0-0.2 0-0.4 0 0 0 0 0-0.2 0s-0.4 0-0.4 0c-229.4 0.6-415 186.6-415 416s185.6 415.4 415 416c0.2 0 0.4 0 0.4 0s0.2 0 0.2 0 0.2 0 0.4 0c229.8 0 416-186.2 416-416s-186.2-416-416-416zM528.6 345c44.2-1.2 87-7 128.4-17 12.4 49 20.2 105.6 21.4 167.6h-149.8v-150.6zM528.6 311.6v-179.6c44.8 12.4 90.4 72.2 119.2 164-38.4 9.2-78.2 14.4-119.2 15.6zM495.4 131.6v180.2c-41.4-1.2-81.6-6.6-120.2-16 29.2-92.4 75-152.6 120.2-164.2zM495.4 345v150.4h-150.8c1.2-62 9-118.6 21.4-167.6 41.6 10 85 16 129.4 17.2zM311 495.4h-181.2c3.6-85.6 35.6-164 86.6-226 37 20.4 76.4 37.2 117.6 49.6-13.6 53-21.6 112.8-23 176.4zM311 528.6c1.2 63.4 9.2 123.4 22.8 176.4-41.2 12.6-80.4 29.2-117.6 49.6-51-62-82.8-140.4-86.6-226h181.4zM344.6 528.6h150.8v150.2c-44.4 1.2-87.8 7.2-129.4 17.4-12.4-49-20.2-105.6-21.4-167.6zM495.4 712.2v180.4c-45.2-11.8-91-71.8-120.2-164.2 38.6-9.6 78.8-15 120.2-16.2zM528.6 892v-180c41 1.2 80.8 6.6 119.4 15.8-29 92-74.4 151.8-119.4 164.2zM528.6 678.8v-150.2h149.8c-1.2 61.8-9 118.4-21.4 167.4-41.4-10-84.2-16-128.4-17.2zM711.8 528.6h182.4c-3.6 85.6-35.6 163.8-86.6 226-37.4-20.6-77-37.4-118.6-50 13.6-53 21.6-112.6 22.8-176zM711.8 495.4c-1.2-63.4-9.2-123.2-22.6-176.2 41.6-12.6 81.2-29.4 118.4-49.8 51 62 83 140.4 86.6 226.2h-182.4zM784.8 243.8c-33.2 17.6-68 32.2-104.6 43.2-19.4-62.6-46.8-113.6-79-147.2 70.8 17 134 53.8 183.6 104zM421.6 140.2c-32.2 33.4-59.4 84.4-78.6 146.6-36.2-11-70.8-25.4-103.6-43 49-50 111.8-86.6 182.2-103.6zM239.2 780c32.8-17.6 67.6-32 103.6-43 19.4 62.4 46.6 113.2 78.8 146.8-70.4-17-133.2-53.6-182.4-103.8zM601.2 884.2c32.4-33.6 59.6-84.6 79.2-147.4 36.6 11 71.4 25.6 104.6 43.2-49.6 50.4-113 87.2-183.8 104.2z' })
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

  return IosGlobeOutline;
}(_react.Component);

IosGlobeOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosGlobeOutline.propTypes = {
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

exports.default = IosGlobeOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosGlobeOutline.js.map