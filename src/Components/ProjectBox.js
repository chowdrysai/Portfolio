import React from 'react';
import {FaGithub} from 'react-icons/fa';


const  ProjectBox = ({projectPhoto, projectName}) => {
    const desc = {
        'Complaint AppDesc' : 'Javascript, Node.js, Express, React, MongoDB, Handlebars, HTML, CSS ,Bootstrap, ESlint',
        'ComplaintAppGithub' : 'https://github.com/chowdrysai/ComplaintApp',
        'ComplaintAppWebsite' : '',

        'Aadvi WebsiteDesc' : 'Javascript, Node.js, Express, React, MongoDB, HTML, CSS ,Bootstrap',
        'AadviWebsiteGithub' : 'https://github.com/chowdrysai/FoodAppIn',
        'AadviWebsiteWebsite' : '',

        'Food AppDesc':'Javascript, Node.js, Express, React, Redux, MongoDB, HTML,CSS ,Bootstrap,JWt authentication, ESlint',
        'FoodAppGithub':'https://github.com/chowdrysai/Aadvi',
        'FoodAppWebsite':''
    };
    let show ='';
    if(desc[projectName + 'Github']===''){
        show='none';
    }
    return (
        <div className='projectBox'> 
            <img className='projectPhoto' src={projectPhoto} alt="Project display" />
            <hr/> 
            <div>
                <br />
                <h3>{projectName}</h3>
                <br />
                {desc[projectName + 'Desc']}
                <br />

                <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank' rel="noreferrer">
                    <button className='projectbtn'><FaGithub/> Github</button>
                </a>

                {/* <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a> */}
            </div>
        </div>
    );
};

export default  ProjectBox;