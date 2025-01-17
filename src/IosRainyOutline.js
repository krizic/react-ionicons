import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosRainyOutline extends Component {

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
        <path d="M748.8 286.4l-26.6-0.2c-23.6-107-110.2-190.2-250.2-190.2s-255.6 103.4-255.6 245.6l0.6 9.6c-84.6 11.2-153 89-153 177.8 0 94 75.8 177 169.2 177h21.2l-74.8 101.4c-5.2 7.2-3.6 16.6 3.6 21.8 2.6 2 5.8 2.8 8.8 2.8 4.6 0 10.2-1.2 13.6-5.8l88.4-120.2h122.8l-144.6 198c-5.2 7.2-4.4 16 2.8 21.2 2.6 2 6.6 2.8 9.6 2.8 7.4 0 12.2-2.6 15.6-7.2l156-214.8h122.2l-74.6 101.4c-5.2 7.2-3.6 16.6 3.6 21.8 2.6 2 5.8 2.8 8.8 2.8 4.6 0 10.2-1.2 13.6-5.8l88.2-120.2h122.8l-144.6 198c-5.2 7.2-4.2 15.6 3 20.6 2.6 2 6.4 3.4 9.4 3.4 4.6 0 10.2-1.6 13.6-6.2l160.2-220.6c100.8-16.8 177.8-107.4 177.8-213.2-0.2-117.2-94.8-201.6-211.4-201.6zM774.4 671.6c0 0-17.8 2.4-40.4 2.4s-500.8 0-500.8 0c-36 0-70.2-15.8-96.4-43.6-26-27.4-40.8-64.6-40.8-101.8 0-35 13.2-69.4 37-96.8 23.6-27 54.8-44.4 88.2-48.8l29.6-4-2-29.8-0.6-8.6c0.2-58.6 23.4-112.6 65.2-151.8 42-39.2 98.2-60.8 158.6-60.8 58.6 0 110 16.6 148.6 47.8 35.4 28.8 59.8 69.4 70.4 117.4l5.8 26.8c23-1.4 52-1.4 52-1.4 49 0 94.2 17.2 127.4 48.2 33.4 31.2 51.6 74.2 51.6 121.4 0.2 89.2-67.2 169-153.4 183.4z"></path>
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


IosRainyOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosRainyOutline.propTypes = {
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


export default IosRainyOutline
