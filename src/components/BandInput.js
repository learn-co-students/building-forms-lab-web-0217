import React, { Component } from 'react';

class BandInput extends Component {
  constructor() {
    super()
    this.state = {
      text: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.store.dispatch({type: 'ADD_BAND', band: this.state.text})
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' onChange={this.handleChange} value={this.state.input} />
          <input type='submit' />
        </form>
      </div>
    );
  }
};

export default BandInput;
