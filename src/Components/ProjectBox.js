import React from 'react';
import {FaGithub} from "react-icons/fa";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    'Complaint AppDesc' : "This website is a landing page of Complaint application. It is a responsive website which was made to understand Bootstrap. I also learned how to host my project on Github and then how to deploy that project using Github pages.",
    'ComplaintAppGithub' : "https://github.com/chowdrysai/ComplaintApp",
    'ComplaintAppWebsite' : "",

    'Aadvi WebsiteDesc' : "It is a Full stack application with javascript framework and mongoDB as database.It includes JWT authentication as security purpose.It is my first project by these I got handfull of experience on javascript and mongodb.",
    'AadviWebsiteGithub' : "https://github.com/chowdrysai/FoodAppIn",
    'AadviWebsiteWebsite' : "",

    'Food AppDesc':"A website designed during training program. It is a react website using bootstrap css which helped to get grip on the frontend.Implemented node.js to handle data by the administrator which makes these a full stack project",
    'FoodAppGithub':"https://github.com/chowdrysai/Aadvi",
    'FoodAppWebsite':""
  }
  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            {/* <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a> */}
        </div>
    </div>
  )
}

export default  ProjectBox