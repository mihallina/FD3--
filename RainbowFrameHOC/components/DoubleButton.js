import React, { Component } from 'react';
import './DoubleButton.css';

export default class DoubleButton extends Component {
  render() {
    return (
      <div>
        <input type="button" value={this.props.caption1} onClick={() => this.props.cbPressed("1")} />
        <span className='children'>{this.props.children}</span>
        <input type="button" value={this.props.caption2} onClick={() => this.props.cbPressed("2")} />
      </div>
    )
  }
}
