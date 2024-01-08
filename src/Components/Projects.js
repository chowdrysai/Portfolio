import React from 'react';
import ProjectBox from './ProjectBox';
import AadviImage from '../images/aadvi.png';
import ComplaintApp from '../images/ComplainApp.png';
import FoodImage from '../images/food.png';

const Projects = () => {
    return (
        <div style={{ height: '75vh' }}>
            <h1 className='projectHeading'>My <b>Projects</b></h1>
            <div className='project'>
                <ProjectBox projectPhoto={ComplaintApp} projectName="Complaint App" />
                <ProjectBox projectPhoto={AadviImage} projectName="Aadvi Website" />
                <ProjectBox projectPhoto={FoodImage} projectName="Food App" />
            </div>
        </div>
    );
};

export default Projects;