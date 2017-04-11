import React, { Component } from 'react';

class Bands extends Component {

  listBands() {
    return this.props.store.getState().bands.map((band) => {
      return <li>{band}</li>
    })
  }
  render(){
    return (
      <div>
        <ul>
          {this.listBands()}
        </ul>
      </div>
    );
  }
};

export default Bands;
