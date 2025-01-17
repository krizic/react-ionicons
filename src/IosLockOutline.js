import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosLockOutline extends Component {

  constructor(props) {
    super(props)
    this.state = {classNames: [], animationActive: false}
    this._getClasses = this._getClasses.bind(this)
  }

  render() {
    const style = {
      ...this.props.style,
      color: this.props.color,
      fontSize: this.props.fontSize,
    }

    return (
      <SVG
        style={this.props.style}
        className={this._getClasses()}
        fill={this.props.color}
        width={this.props.fontSize}
        height={this.props.fontSize}
        viewBox="0 0 1024 1024"
        onClick={this.props.onClick}
        rotate={this.props.rotate ? 1 : 0}
        shake={this.props.shake ? 1 : 0}
        beat={this.props.beat ? 1 : 0}
      >
        <path d="M720 448v-144c0-114.86-93.124-208-207.968-208-114.908 0-208.032 93.14-208.032 208v144h-112v480h640v-480h-112zM336 304c0-97.046 78.968-176 176.032-176 97.030 0 175.968 78.954 175.968 176v144h-352v-144zM800 896h-576v-416h576v416z M512 576c-35.346 0-64 28.654-64 64 0 29.82 20.396 54.878 48 61.984v66.016h32v-66.016c27.604-7.106 48-32.164 48-61.984 0-35.346-28.654-64-64-64zM512 672c-17.644 0-32-14.356-32-32s14.356-32 32-32 32 14.356 32 32-14.356 32-32 32z"></path>
      </SVG>
    )
  }

  _getClasses() {
    return [...this.state.classNames, this.props.className].join(' ')
  }

  _getPathByIconName() {
    let icon = icons.find(icon => icon.tags[0] === this.props.icon)
    if (icon) return icon.paths.join(' ')
    return ''
  }

}


IosLockOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosLockOutline.propTypes = {
  // style
  style: PropTypes.object,
  color: PropTypes.string,
  fontSize: PropTypes.string,

  // animation
  shake: PropTypes.bool,
  beat: PropTypes.bool,
  rotate: PropTypes.bool,

  // functions
  onClick: PropTypes.func
}


export default IosLockOutline
