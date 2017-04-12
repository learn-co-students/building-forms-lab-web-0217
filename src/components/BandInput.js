import React, { Component } from 'react';


class BandInput extends Component {
  constructor(){
    super()
    this.state={
      text:''
    }
  }

  onHandleChange(event){
    this.setState({
      text: event.target.value
    })
  }

  onHandleSubmit(event){
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_BAND',
      band: this.state.text
    })
  }


  render() {
    return (
      <div>
      <form onSubmit={this.onHandleSubmit.bind(this)}>
        <input type="text" onChange={this.onHandleChange.bind(this)} value={this.state.text}/>
      </form>
      </div>
    );
  }
};

export default BandInput;
