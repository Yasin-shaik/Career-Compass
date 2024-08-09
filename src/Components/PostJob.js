import React, { useContext } from 'react'
import jobContext from '../Contexts/Jobs/jobContext';
import { useState } from 'react';
function PostJob() {
  const Context=useContext(jobContext);
  const{addJob}=Context;
  const[job,setjob]=useState({title:"",salary:""})
  const handleClick=(e)=>{
      e.preventDefault();
      addJob(job.title,job.salary);
  }
  const onChange=(e)=>{
      setjob({...job,[e.target.name]:e.target.value});
  }
  return (
    <div className='container' style={{width:'500px',marginTop:'50px'}}>
      <div className="form-floating mb-3">
        <input type="text" className="form-control" id="title" name='title' onChange={onChange} placeholder="name@example.com"/>
        <label htmlFor="title">Job Title</label>
        </div>
        <div className="form-floating">
        <input type="number" className="form-control" id="salary" name='salary' onChange={onChange} placeholder="name@example.com"/>
        <label htmlFor="salary">Salary Package</label>
       </div>
       <div className="col-auto my-3">
            <button type="submit" className="btn btn-primary mb-3" onClick={handleClick}>Post the Job</button>
        </div>
    </div>
  )
}

export default PostJob
