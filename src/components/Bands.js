import React, { Component } from 'react';

class Bands extends Component {
  render(){

    let bandList = this.props.store.getState().bands.map((band) => {
      return <li>{band}</li>
    })

    return (
      <div>
        <ul>
          {bandList}
        </ul>
      </div>
    );
  }
};

export default Bands;
