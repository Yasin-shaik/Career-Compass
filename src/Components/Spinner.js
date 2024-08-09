import React, { Component } from 'react'
import Loading from './Loading.gif'
export class Spinner extends Component {
  render() {
    return (
      <div className='container' style={{marginTop:'150px'}}>
        <center><img src={Loading} alt='Loading'></img></center>
      </div>
    )
  }
}

export default Spinner
