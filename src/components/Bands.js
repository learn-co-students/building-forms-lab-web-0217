import React, { Component } from 'react'

class Bands extends Component {
  render(){
  	let bandNames = this.props.store.getState().bands.map((band, index) => {
  		return <li key={index}>{band}</li>
  	})

    return (
      <div>
      	<ul>{bandNames}</ul>
      </div>
    )
  }
}

export default Bands
