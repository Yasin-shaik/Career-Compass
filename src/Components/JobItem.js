import React, { useContext } from 'react'
import jobContext from '../Contexts/Jobs/jobContext'

function JobItem(props) {
    const context=useContext(jobContext);
    const {deleteJob}=context;
    const id=props.id;
    const handleEdit=()=>{
      props.updateJob(id,props.title,props.salary);
    }
    const handleDelete=()=>{
        deleteJob(id);
    }
    return (
        <div>
            <div className="card" style={props.sty}>
              <img src={props.imgurl} className="card-img-top" alt="Job"/>
              <div className="card-body" style={props.sty}>
                <h6 style={props.sty} className="card-title">{props.title}...</h6>
                <p style={props.sty} className="card-text">{props.salary}</p>
                <i className="fa-regular fa-pen-to-square mx-2" onClick={handleEdit}></i>
                <i className="fa-sharp fa-solid fa-trash mx-2" onClick={handleDelete}></i>
              </div>
            </div>
        </div>
      )
}

export default JobItem;
