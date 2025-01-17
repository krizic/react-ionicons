import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosFlower extends Component {

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
        <path d="M770.2 460.4c-53.4 0-120.2 13.8-172.6 27-1.8-6.4-4.2-12.4-7.4-18.2 46.4-27.6 103.4-65 141-102.8 73.4-73.4 96.6-127.2 75.2-148.6-5.2-5.2-12-7.6-20.6-7.6-27.6 0-72 26.8-128 82.8-37.6 37.6-75.2 94.4-102.8 140.8-5.6-3.2-11.8-5.6-18.2-7.6 13.4-52.4 27-119 27-172.2 0-103.8-21.6-158.2-52-158.2s-52 54.4-52 158.2c0 53.2 13.6 120 27 172.2-6.4 1.8-12.4 4.4-18.2 7.6-27.6-46.4-65-103.2-102.8-140.8-56-56-100.6-82.8-128-82.8-8.6 0-15.4 2.6-20.6 7.6-21.6 21.6 1.6 75.2 75.2 148.6 37.8 37.8 94.6 75.2 141 102.8-3 5.6-5.6 11.8-7.4 18.2-52.4-13.4-119.2-27-172.6-27-103.6 0-157.4 21.2-157.4 51.6s53.8 52.4 157.8 52.4c53.4 0 120.4-13.8 172.8-27.2 1.8 6.2 4.4 12.4 7.6 18-46.6 27.6-103.6 65.2-141.4 103-73.4 73.4-96.6 127.2-75.2 148.6 5.2 5.2 12 7.6 20.6 7.6 27.6 0 72-26.8 128-82.8 37.8-37.8 75.6-95 103.2-141.6 5.6 3 11.6 5.6 18 7.4-13.4 52.4-27.2 119.6-27.2 173 0 103.8 21.6 157.2 52 157.2s52-53.4 52-157.2c0-53.6-13.8-120.6-27.2-173 6.2-1.8 12.2-4.2 18-7.4 27.6 46.6 65.2 103.8 103.2 141.6 56 56 100.6 82.8 128 82.8 8.6 0 15.4-2.6 20.6-7.6 21.6-21.6-1.6-75.2-75.2-148.6-37.8-37.8-95-75.4-141.4-103 3.2-5.6 5.6-11.6 7.6-18 52.4 13.4 119.4 27.2 172.8 27.2 103.8 0 157.8-21.6 157.8-52s-54.2-52-158.2-52zM512 544c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32z M636.8 752.8c-17-17-33.8-37.4-49.6-59 4 26.4 6.6 52.8 6.6 76.8 0 23.4-1 45-3.2 64.2 24.6 43.6 48.6 65.4 68 65.4 3.2 0 6.4-0.6 9.4-1.8 22-9 26.6-46.6 9-108.6-12.8-10.6-26.2-23-40.2-37z M387.6 272.2c16.8 16.8 33.4 37 49.2 58.4-4-26.4-6.4-52.6-6.4-76.4 0-23.4 1-45 3.2-64.2-24.6-43.6-48.6-65.4-68-65.4-3.2 0-6.4 0.6-9.4 1.8-22 9-26.6 46.6-9 108.6 12.8 10.8 26.4 23.2 40.4 37.2z M271.6 637.2c17-17 37.4-33.8 59-49.6-26.4 4-52.8 6.6-76.8 6.6-23.4 0-45-1-64.2-3.2-51 28.8-72.2 56.4-63.6 77.4 5.2 12.8 20.2 19.8 44.2 19.8 17 0 38.6-3.4 64.4-10.8 10.8-12.8 23-26.2 37-40.2z M752.4 387.6c-17 17-37.4 33.8-59 49.6 26.4-4 52.8-6.6 76.8-6.6 23.4 0 45 1 64.2 3.2 51-28.8 72.2-56.4 63.6-77.4-5.2-12.8-20.2-19.8-44.2-19.8-17 0-38.6 3.4-64.4 10.8-10.8 13-23 26.4-37 40.2z M387.2 752.8c-16.6 16.6-32.6 31.2-47.6 43.2-15.6 56.4-11 90.8 9.8 99.8 3.2 1.4 6.4 2 9.8 2 20.6 0 46.4-24 73.4-72.4-1.4-16.8-2.2-35-2.2-54.6 0-24 2.6-50.4 6.6-76.8-16 21.4-32.8 41.8-49.8 58.8z M636.8 272.4c16.6-16.6 32.4-31 47.4-43 15.8-56.8 11.4-91.6-9.6-100.4-3.2-1.4-6.4-2-9.8-2-20.6 0-46.4 24-73.4 72.4 1.4 16.8 2.2 35 2.2 54.6 0 24.2-2.6 50.6-6.6 77.4 16-21.4 32.8-42 49.8-59z M199.2 433c16.8-1.4 35-2.2 54.6-2.2 24 0 50.2 2.6 76.6 6.6-21.4-15.8-41.8-32.6-58.8-49.6-16.6-16.6-31.2-32.6-43.4-47.8-22.6-6.2-41.8-9.2-57.2-9.2-22.8 0-37.2 6.6-42.4 19-9.2 21.8 14.2 51.8 70.6 83.2z M824.8 592c-16.8 1.4-35 2.2-54.6 2.2-24 0-50.4-2.6-76.8-6.6 21.6 15.8 42 32.8 59 49.6 16.6 16.6 31 32.6 43.2 47.6 22.8 6.4 41.8 9.4 57.2 9.4 22.8 0 37.2-6.6 42.4-19 9.4-22-14-51.8-70.4-83.2z"></path>
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


IosFlower.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosFlower.propTypes = {
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


export default IosFlower
