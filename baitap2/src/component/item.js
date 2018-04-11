import React, { Component } from 'react';

class Item extends Component {
  render() {
    return (
      <div>
          <label>{this.props.value}</label>
      </div>
    );
  }
}

export default Item;
