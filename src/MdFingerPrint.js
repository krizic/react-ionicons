import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class MdFingerPrint extends Component {

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
        <path d="M156.2 411.2c-4.8 0-9.8-1.2-14.2-3.8-13.4-7.8-18-24.8-10.2-38.2 35.6-60 143.8-200.2 380.2-200.2 102.4 0 192.2 27.2 266.8 80.8 61.4 44 95.8 93.8 112.2 117.8 8.8 12.8 5.4 30-7.4 38.8-12.8 8.6-30.4 5.4-39.2-7.4-29.8-43.2-120.2-174.4-332.4-174.4-207.2 0-300.8 120.8-331.4 172.6-5.2 9.2-14.6 14-24.4 14z M631 960c-2.4 0-4.6-0.2-7-0.8-171.4-43-235.4-216.2-238-223.4l-0.4-1.6c-1.4-5-35.8-123.8 17-193.4 24.2-31.8 61-48 109.6-48 45.2 0 77.8 14.2 100.2 43.6 18.4 24 25.8 53.6 33 82.2 15 59.4 25.8 90.6 88.2 93.8 27.4 1.4 45.4-14.8 55.6-28.6 27.6-37.6 32.4-99 11.6-153-26.8-70-121.6-201.8-288.8-201.8-71.4 0-137 23.2-189.6 66.8-43.6 36.2-78.2 87.2-94.8 139.6-30.8 97.6 9.6 251 10 252.4 4 14.8-5 30.2-20 34-15 4-30.6-5-34.6-19.8-1.8-7-45-170.6-9.4-283.4 38.8-122.2 158.4-245.4 338.4-245.4 83.2 0 161.8 28.6 227.4 82.6 50.8 42 92.4 98.4 114 154.8 27.6 72 20.2 152.8-18.8 205.6-26 35.2-63 53.6-104 51.6-106.8-5.4-126-80.8-140-135.8-14.4-56.4-23.6-83.6-78.6-83.6-30.2 0-51.4 8.4-64.6 25.8-18 23.8-19.4 61-17.4 88 2 28.2 8 51 9.4 55.6 4.4 11.2 61.6 153 198.6 187.4 15.2 3.8 24.2 19 20.4 33.8-3.4 12.6-14.8 21-27.4 21z M411 947.2c-7.6 0-15-3-20.6-8.8-68.6-72.8-107.4-154.2-122-256v-0.6c-8.2-67.4 3.8-162.8 62.6-228.4 43.4-48.4 104.4-73 181-73 90.6 0 161.8 42.6 206.2 123 32.2 58.4 38.6 116.6 38.8 119 1.6 15.4-9.8 29-25.2 30.6s-29.4-9.6-31-24.8v0c0-0.6-5.6-50.6-33-99.4-34.4-61.4-86.8-92.6-156-92.6-59.8 0-106.6 18.2-138.8 54.2-46.4 51.8-55.4 131.6-49 184.4 12.8 90 47 161.6 107.4 225.6 10.6 11.2 10 29-1.4 39.4-5.2 4.8-12.2 7.4-19 7.4z M727 867c-60 0-111-16.8-151.8-50.2-82-66.8-91.2-175.6-91.6-180.2-1.2-15.4 10.4-28.8 26-30s29 10.2 30.2 25.6c0.2 1.6 8.4 90.6 71.6 141.8 37.4 30.2 87.4 42.2 149 35.2 15.4-1.8 29.4 9.2 31.2 24.6s-9.4 29.2-24.8 30.8c-13.6 1.6-27 2.4-39.8 2.4z M774.4 125.2c-23.4-15.4-106.4-61.2-262.4-61.2-163.8 0-247 50.6-265.4 63.4-1.2 0.8-2.4 1.6-3.4 2.6-0.2 0.2-0.4 0.2-0.4 0.2v0c-5.8 5.2-9.4 12.6-9.4 20.8 0 15.4 12.6 27.8 28.2 27.8 6.2 0 11.8-2 16.4-5.2v0l-0.2 0.2c0.8-0.6 72.6-54 234.2-54s233.4 53.6 234.2 54l-0.2-0.2 0.4-0.4c4.8 3.6 10.6 5.6 17 5.6 15.6 0 28.2-12.4 28.2-27.8 0-11.6-7-21.6-17.2-25.8z"></path>
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


MdFingerPrint.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdFingerPrint.propTypes = {
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


export default MdFingerPrint
