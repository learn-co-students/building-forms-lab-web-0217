import React, { Component } from 'react';

class BandInput extends Component {
  constructor(){
    super()
    this.state = {
      text: ''
    }
  }

  handleSubmit(){
    this.props.store.dispatch({type: 'ADD_BAND', band: this.state.text})
  }

  handleChange(e){
    this.setState({
      text: e.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
            <input type="text"
              onChange={this.handleChange.bind(this)}/>
            <input type="sumbit"/>
        </form>
      </div>
    );
  }
};

export default BandInput;
