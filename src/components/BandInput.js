import React, { Component } from 'react';

class BandInput extends Component {
  constructor(){
    super()
    this.state = {
      text: ''
    }
  }

  handleChange(event){
    //update component state
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit(event){
    debugger
        //update store state
    event.preventDefault()
    this.props.store.dispatch({
      type:"ADD_BAND",
      band: this.state.text
    })
    this.setState({
      text: ""
    })
  }

  render() {
    return (
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <input onChange={(event) => this.handleChange(event)} type="text" />
        <input type="submit"/>
      </form>
    );
  }
};

export default BandInput;
