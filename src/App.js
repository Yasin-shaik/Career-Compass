import "./App.css";
import LoadingBar from "react-top-loading-bar";
import Navbar from "./Components/Navbar.js";
import About from "./Components/About.js";
import Alert from "./Components/Alert.js";
import { useState } from "react";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Demo from "./Components/Demo.js";
import jobContext from "./Contexts/Jobs/jobContext.js";
import PostJob from "./Components/PostJob.js";
import PostedJobs from "./Components/PostedJobs.js";
export default function App() {
  const [myStyle, setmyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [btnText, setbtnText] = useState("Enable dark Mode");
  const modeFunction = () => {
    showAlert("Mode Changed", "Success");
    if (myStyle.color === "black") {
      setmyStyle({
        color: "white",
        backgroundColor: "rgb(17 24 39)",
      });
      setbtnText("Enable light mode");
      document.body.style.backgroundColor = "rgb(17 24 39)";
      document.body.style.color = "white";
    } else {
      setmyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setbtnText("Enable dark mode");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };
  const [alert, setAlert] = useState(null);
  const showAlert = (message, msgtype) => {
    setAlert({
      msg: message,
      type: msgtype,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const [progress, setProgress] = useState(0);
  const changeProgress = () => {
    setProgress(50);
    setTimeout(() => {
      setProgress(100);
    }, 250);
    setProgress(0);
  };
  const host='http://localhost:5000'
  const jobsInitial=[]
  const[jobs,setJobs]=useState(jobsInitial)
  const getJobs=async()=>{
    //API calls

    const response = await fetch(`${host}/api/jobs/fetchAllRecruiterPostedJobs`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "log-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZWNydWl0ZXIiOnsiaWQiOiI2NjJkZmNkZGY2NTMwMDY4Y2U2ZGNjNTUifSwiaWF0IjoxNzE0MjkwMDA2fQ.YKz6JzBr_O3W73UmUJuAYKPiUkg2GymEZ4znqqFQ-Pk"
      },
    });
    const json= await response.json();
    console.log(json);
    setJobs(jobs.concat(json));
  }


  const addJob=async(jobTitle,salary)=>{
    //API calls
    const response = await fetch(`${host}/api/jobs/postRecruiterJob`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "log-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZWNydWl0ZXIiOnsiaWQiOiI2NjJkZmNkZGY2NTMwMDY4Y2U2ZGNjNTUifSwiaWF0IjoxNzE0MjkwMDA2fQ.YKz6JzBr_O3W73UmUJuAYKPiUkg2GymEZ4znqqFQ-Pk"
      },
      body: JSON.stringify({jobTitle,salary}),
    });
    const json=response.json();
    console.log(json);
    const job={
      "_id": "662e0f22ffd1781346618b285",
      "jobID": "662dfcddf6530068ce6dcc55",
      "jobTitle": jobTitle,
      "salary": salary,
      "__v": 0
    }
    setJobs(jobs.concat(job));
  }
  const deleteJob=async(id)=>{
    const response = await fetch(`${host}/api/jobs/deleteRecruiterJob/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "log-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZWNydWl0ZXIiOnsiaWQiOiI2NjJkZmNkZGY2NTMwMDY4Y2U2ZGNjNTUifSwiaWF0IjoxNzE0MjkwMDA2fQ.YKz6JzBr_O3W73UmUJuAYKPiUkg2GymEZ4znqqFQ-Pk"
      },
    });
    const json=response.json();
    console.log(json);
    const newJobs=jobs.filter((job)=>{return job._id!==id});
    setJobs(newJobs);
  }
  const editJob= async(id,jobTitle,salary)=>{

    //API calls
     const response = await fetch(`${host}/api/jobs/updateRecruiterJob/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "log-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZWNydWl0ZXIiOnsiaWQiOiI2NjJkZmNkZGY2NTMwMDY4Y2U2ZGNjNTUifSwiaWF0IjoxNzE0MjkwMDA2fQ.YKz6JzBr_O3W73UmUJuAYKPiUkg2GymEZ4znqqFQ-Pk"
      },
      body: JSON.stringify({jobTitle,salary}),
    });
    const json= await response.json();
    console.log(json);
    let newJobs=await JSON.parse(JSON.stringify(jobs));
    for(let i=0;i<newJobs.length;i++)
    {
      if(newJobs[i]._id===id)
      {
        newJobs[i].jobTitle=jobTitle;
        newJobs[i].salary=salary;
        break;
      }
    }
    setJobs(newJobs);
  }
  return (
    <>
        <Router>
        <jobContext.Provider value={{jobs,getJobs,addJob,deleteJob,editJob}}>
          <Navbar
            modeFunction={modeFunction}
            changeProgress={changeProgress}
            sty={myStyle}
            btnText={btnText}
          ></Navbar>
          <LoadingBar color="#f11946" progress={progress} height={3} />
          <Alert alert={alert}></Alert>
          <Routes>
            <Route exact path="/" element={<Demo />} />
            <Route exact path="/about" element={<About sty={myStyle} />}/>
            <Route exact path="/link" element={<PostedJobs />} />
            <Route exact path="/home2" element={<PostJob sty={myStyle} />}/>
          </Routes>
          </jobContext.Provider>
        </Router>
    </>
  );
}