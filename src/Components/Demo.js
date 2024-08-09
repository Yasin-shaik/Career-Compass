import React from 'react';
import{ useContext } from "react";
import jobContext from '../Contexts/Jobs/jobContext';
const Demo=()=>{
    const a =useContext(jobContext);
    if(!a)
    {
        console.log('A is null');
    }
    return(
        <h1>demo document is about {a.jobs._id}</h1>
    )
}
export default Demo;