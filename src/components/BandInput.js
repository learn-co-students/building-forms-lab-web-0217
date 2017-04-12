import React, { Component } from 'react';

class BandInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.store.dispatch({ type: "ADD_BAND", band: this.state.text })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text'
          onChange={this.handleChange} />
        <input type='submit' />
      </form>
    );
  }
};

export default BandInput;
