import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class MdBasketball extends Component {

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
        <path d="M383.2 544c-7.6 110-52.8 214.2-129 295.4 63.2 50 141.8 82 225.8 88.6v-384h-96.8z M544 928c84-6.6 163-38.8 226.2-89-76-81.2-121-185-128.6-295h-97.6v384z M480 96c-84 6.4-161 38-223.8 87.2 76 81.8 120.6 186.8 127.4 296.8h96.4v-384z M641.4 480c6.8-110 51.2-214.8 127-296.6-63-49.2-140.4-81-224.4-87.4v384h97.4z M817.2 228.4c-34.4 37-61.4 79.4-80.2 125.8-16.4 40.4-26.2 81.8-29.2 125.8h220.2c-7.4-96-48.2-184.4-110.8-251.6z M737 666.2c19.2 47.4 46.6 90.2 81.8 127.6 61.8-67 101.8-153.8 109.2-249.8h-219.8c3.2 42 13 83 28.8 122.2z M287.8 354.2c-19-46.6-46-89-80.6-126.2-62.8 67.2-103.8 156-111.2 252h221c-3.2-44-13-85.6-29.2-125.8z M205.4 794.2c35.4-37.6 63-80.6 82.2-128 16-39.2 25.6-80.2 29-122.2h-220.6c7.4 96 47.6 183.2 109.4 250.2z"></path>
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


MdBasketball.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdBasketball.propTypes = {
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


export default MdBasketball
