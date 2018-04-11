import React, { Component } from 'react';
import Item from './item';

class Pheptinh extends Component {
    constructor(props){
        super(props);
        this.state={
            value:0,     
        }
    }

    onAdd=()=>{ 
        
        this.setState({
           value:parseInt(this.refs.value1.value,10)+parseInt(this.refs.value2.value,10)
          
        })
    }

    onSub=()=>{    
        this.setState({
            value:parseInt(this.refs.value1.value,10)-parseInt(this.refs.value2.value,10)
        })
    }

  render() {
    
    return (
      <div>
          Số thứ nhất: <input  type="text" ref="value1" />
          Số thứ hai: <input type="text" ref="value2"/><br/>
          <h3>
                <Item value={this.state.value}/>  
          </h3>
          <button className="btn btn-success" onClick={this.onAdd}>+</button>
          <button className="btn btn-danger" onClick={this.onSub}>-</button>
      </div>
    );
  }
}

export default Pheptinh;
