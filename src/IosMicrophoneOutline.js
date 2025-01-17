import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosMicrophoneOutline extends Component {

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
        <path d="M560 96h-96c-132 0-240 108-240 240v256c0 126.6 99.4 231.2 224 239.4v96.6h128v-96.6c124.6-8.4 224-112.8 224-239.4v-256c0-132-108-240-240-240zM480 896v-64h64v64h-64zM560 800h-96c-55.2 0-107.4-21.8-146.8-61.2-1-1-1.8-2-2.8-2.8h395.4c-1 1-1.8 2-2.8 2.8-39.6 39.4-91.8 61.2-147 61.2zM735 704h-446c-21.4-33.2-33-71.8-33-112v-16h160v-32h-160v-64h160v-32h-160v-64h160v-32h-160v-16c0-55.2 21.8-107.4 61.2-146.8 27.8-27.8 61.8-46.8 98.8-55.6v90.4h32v-95.4c5.2-0.4 10.6-0.6 16-0.6h32v128h32v-128h32c5.4 0 10.8 0.2 16 0.6v95.4h32v-90.4c37 8.8 71.2 27.8 98.8 55.6 39.4 39.4 61.2 91.6 61.2 146.8v16h-160v32h160v64h-160v32h160v64h-160v32h160v16c0 40.2-11.6 78.8-33 112z"></path>
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


IosMicrophoneOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosMicrophoneOutline.propTypes = {
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


export default IosMicrophoneOutline
