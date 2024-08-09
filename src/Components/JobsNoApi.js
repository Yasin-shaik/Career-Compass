import React, { Component } from 'react'
import JobItem from './JobItem'
import sample from './sample.json'
export class JobsNoApi extends Component {
  results= sample.results
  constructor(){
    super();
    console.log('This is a constructor')
    this.state={
      results: this.results,
      loading: false
    }
  }
  myStyle={
      background: 'linear-gradient(45deg, #ff6f61, #d72b78, #3498db)',
      position: 'absolute',
      top: '0',
      bottom: '0',
      left: '0',
      right: '0',
      zIndex: '-1'
  }
  render() {
    let {sty}=this.props;
    return (
    <div style={this.myStyle}>
      <div className='container my-3'>
        <center><div style={{border:'2px solid white',margin:'10px',marginTop:'100px' ,width:'500px',padding:'10px',borderRadius:'15%'}}>
          <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-light" type="mode">Search</button>
          </form>
        </div></center>
        <center><h1>JobHere - Top Jobs</h1></center>
        <div className='row'>
          {this.state.results.map((element)=>{
              return <div className='col-md-4 my-4' key={element.jobkey}>
                <JobItem sty={sty}title={element.jobtitle} desc={element.snippet} url={element.url} imgurl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8QBMhMBsqb-QfOJGraYsL9V8KsGc8ijrIvA1eugCpEQ&s'/>
              </div>
            })}
        </div>
      </div>
    </div>
    )
  }
}

export default JobsNoApi
