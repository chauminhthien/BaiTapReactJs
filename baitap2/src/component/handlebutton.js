import React, { Component } from 'react';
import Item from './item';

class HandleButton extends Component {
  constructor(props){
    super(props);
    this.state={
     value:9
    }

  }
  onincrease=()=>{

    this.setState(
      {
        value: (this.state.value)+1
      }
    );
  }
  ondecrease=()=>{
    this.setState(
      {
        value: (this.state.value)-1
      }
    );
  }
  render() {
    
    return (
      <div >
       <Item value={this.state.value}/>
      
        <button className="btn btn-success" onClick={this.onincrease}>+</button>
        <button className="btn btn-danger" onClick={this.ondecrease}>-</button>
      </div>
    );
  }
}

export default HandleButton;
