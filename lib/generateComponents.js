'use strict';

var icons = require('./icons');
var fs = require('fs');

var toCamelCase = function toCamelCase(string) {
  var camelCased = string.replace(/-([a-z])/g, function (g) {
    return g[1].toUpperCase();
  });
  return camelCased.charAt(0).toUpperCase() + camelCased.slice(1);
};

var createTemplate = function createTemplate(componentName, paths) {
  return 'import React, { Component } from \'react\'\nimport PropTypes from \'prop-types\'\n\nimport SVG from \'./SVG\'\n\nclass ' + componentName + ' extends Component {\n\n  constructor(props) {\n    super(props)\n    this.state = {classNames: [], animationActive: false}\n    this._getClasses = this._getClasses.bind(this)\n  }\n\n  render() {\n    const style = {\n      ...this.props.style,\n      color: this.props.color,\n      fontSize: this.props.fontSize,\n    }\n\n    return (\n      <SVG\n        style={this.props.style}\n        className={this._getClasses()}\n        fill={this.props.color}\n        width={this.props.fontSize}\n        height={this.props.fontSize}\n        viewBox="0 0 1024 1024"\n        onClick={this.props.onClick}\n        rotate={this.props.rotate ? 1 : 0}\n        shake={this.props.shake ? 1 : 0}\n        beat={this.props.beat ? 1 : 0}\n      >\n        <path d="' + paths + '"></path>\n      </SVG>\n    )\n  }\n\n  _getClasses() {\n    return [...this.state.classNames, this.props.className].join(\' \')\n  }\n\n  _getPathByIconName() {\n    let icon = icons.find(icon => icon.tags[0] === this.props.icon)\n    if (icon) return icon.paths.join(\' \')\n    return \'\'\n  }\n\n}\n\n\n' + componentName + '.defaultProps = {\n  // style\n  style: {},\n  color: \'#000000\',\n  fontSize: \'22px\',\n\n  // animation\n  shake: false,\n  beat: false,\n  rotate: false,\n}\n\n\n' + componentName + '.propTypes = {\n  // style\n  style: PropTypes.object,\n  color: PropTypes.string,\n  fontSize: PropTypes.string,\n\n  // animation\n  shake: PropTypes.bool,\n  beat: PropTypes.bool,\n  rotate: PropTypes.bool,\n\n  // functions\n  onClick: PropTypes.func\n}\n\n\nexport default ' + componentName + '\n';
};

var components = [];
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  var _loop = function _loop() {
    var icon = _step.value;

    var componentName = toCamelCase(icon.tags[0]);
    components.push('./src/' + componentName + '.js');
    var paths = icon.paths.join(' ');
    var template = createTemplate(componentName, paths);
    fs.writeFile('./' + componentName + '.js', template, function (err) {
      if (err) return console.log('Error creating ' + componentName + ' component');
      console.log(componentName + ' created');
    });
  };

  for (var _iterator = icons[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    _loop();
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

fs.writeFile('./components.js', 'module.exports = ["' + components.join('", "') + '"]', function (err) {
  if (err) console.log(err);
});
//# sourceMappingURL=generateComponents.js.map