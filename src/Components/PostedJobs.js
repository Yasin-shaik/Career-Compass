import React, { useContext, useEffect, useRef, useState } from "react";
import jobContext from "../Contexts/Jobs/jobContext";
import JobItem from "./JobItem";
function PostedJobs() {
  const context = useContext(jobContext);
  const { jobs, getJobs, editJob } = context;
  const[job,setjob]=useState({id:"",etitle:"",esalary:""})
  useEffect(() => {
    getJobs();
    // eslint-disable-next-line
  }, []);
  const ref = useRef(null);
  const closeRef = useRef(null);
  const updateJob = (jobid,title,salary) => {
    ref.current.click();
    setjob({id:jobid,etitle:title,esalary:salary});
  };
  const onChange=(e)=>{
    setjob({...job,[e.target.name]:e.target.value});
}
const handleClick=(e)=>{
  e.preventDefault();
  editJob(job.id,job.etitle,job.esalary);
  closeRef.current.click();
}
  return (
    <>
      <button
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        ref={ref}
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit the job
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="etitle"
                  name="etitle"
                  onChange={onChange}
                  value={job.etitle}
                  placeholder="name@example.com"
                />
                <label htmlFor="etitle">Job Title</label>
              </div>
              <div className="form-floating">
                <input
                  type="number"
                  className="form-control"
                  id="esalary"
                  name="esalary"
                  value={job.esalary}
                  onChange={onChange}
                  placeholder="name@example.com"
                />
                <label htmlFor="salary">Salary Package</label>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                ref={closeRef}
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={handleClick}>
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h1>This is posted jobs page</h1>
        <div className="row my-3 mx-3">
          {jobs.map((jobs) => {
            return (
              <div className="col-md-4 my-4">
                <JobItem
                  key={jobs._id}
                  updateJob={updateJob}
                  id={jobs._id}
                  title={jobs.jobTitle}
                  salary={jobs.salary}
                  imgurl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8QBMhMBsqb-QfOJGraYsL9V8KsGc8ijrIvA1eugCpEQ&s"
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default PostedJobs;
