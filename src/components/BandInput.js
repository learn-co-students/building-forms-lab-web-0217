import React, { Component } from 'react';
// import Bands, from './Bands';

class BandInput extends Component {
  constructor(props){
    super(props);

    this.state = {
      text: '',
    };
    this.handleOnChange= this.handleOnChange.bind(this)
    this.handleSubmit= this.handleSubmit.bind(this)
  }

  handleOnChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  handleSubmit(event) {
  event.preventDefault();
  this.props.store.dispatch({
    type: 'ADD_BAND',
    band: this.state.text,
  });
}

  render() {
    return (
          <div>
            <form onSubmit={this.handleSubmit}>
             <input type="text" onChange={this.handleOnChange} />
             <input type="submit" value="Submit"/>
           </form>
           {this.state.text}
        </div>
    );
  }
};

export default BandInput;
