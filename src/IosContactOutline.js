import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosContactOutline extends Component {

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
        <path d="M512 96c-229.8 0-416 186.2-416 416s186.2 416 416 416c229.8 0 416-186.2 416-416s-186.2-416-416-416zM512 130.6c210.2 0 381.4 171 381.4 381.4 0 93.2-33.6 178.4-89.2 244.8 0 0-0.2-0.2-0.2-0.2-40-16.4-131.8-48.2-185.8-64.2-4.8-1.4-5.4-1.8-5.4-21.4 0-16.2 6.6-32.6 13.2-46.6 7.2-15 15.4-40.4 18.4-63.2 8.4-9.8 20-29 27.2-65.8 6.4-32.4 3.4-44.2-0.8-55.2-0.4-1.2-1-2.4-1.2-3.4-1.6-7.6 0.6-47 6.2-77.6 3.8-21-1-65.6-29.8-102.6-18.2-23.4-53.2-52-117-56h-35c-62.8 4-97.6 32.6-116 56-29 37-33.8 81.6-30 102.6 5.6 30.6 7.8 70 6.2 77.6-0.4 1.4-0.8 2.4-1.2 3.6-4.2 11-7.4 22.8-0.8 55.2 7.4 36.8 18.8 56 27.2 65.8 3 22.8 11.4 48 18.4 63.2 5.2 11 7.6 26 7.6 47.2 0 19.8-0.8 20-5.2 21.4-56 16.6-144.4 48.4-180.2 63.8-55.8-66.4-89.4-151.8-89.4-245 0-210.2 171.2-381.4 381.4-381.4zM242.8 782c39.8-16 117.2-43.6 166.2-58.2h0.4c16.8-5.2 23.2-17 25.6-26 1.8-6.4 2-13 2-26 0-26.2-3.4-45.4-10.6-60.8-5.8-12.2-13.2-34.4-15.8-53.8l-1.2-9.4-6.2-7.2c-3.8-4.4-13.6-18.4-20.2-51.2-5.2-26-2.8-32-0.8-37.4v-0.4l0.2-0.6c0.4-1.2 1.2-3.2 2-5.6l0.4-2c3.4-16-1.2-63.8-6-90-2.2-12.4 0.6-47.6 23.6-77.2 14.2-18 41.6-40.2 91.8-43.6h33c51.2 3.4 78.8 25.6 92.8 43.8 23.2 29.6 25.8 64.8 23.6 77.2-4.8 26-9.4 74-6 90l0.4 1.2c0.8 3 1.8 5.6 2.4 7.2 2.2 5.6 4.2 11.8-0.8 37.2-6.6 32.8-16.2 46.6-20 51.2l-6.2 7.2-1.2 9.6c-2.6 19.4-10 41.4-15.6 53.6-8 17-16.2 37.6-16.2 60.2 0 11.6 0.2 19.2 2.2 26.4 2.6 8.8 9 20.4 25.8 25.6h0.4c47.4 14 127.8 41.6 172 58.8-69 68.8-164.2 111.4-269 111.4-104.8 0.2-199.8-42.4-269-111.2z"></path>
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


IosContactOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosContactOutline.propTypes = {
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


export default IosContactOutline
