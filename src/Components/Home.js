import React, { Component } from 'react'
import home from './home.jpg'
export default class Home extends Component {
    homeStyle={
        height:'650px',
        width:'700px',
        backgroundImage: `url(${home})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    }
  render() {
    return (
    <div className='d-flex'>
        <div style={this.homeStyle}></div>
        <h1>Career Compass</h1>
    </div>
    )
  }
}
