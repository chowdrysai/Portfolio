import React from 'react';
import ProjectBox from './ProjectBox';

const Projects = () => {
    return (
        <div>
            <h1 className='projectHeading'>Featured <b>Projects</b></h1>
            <div className='project'>
                <ProjectBox projectName="EZ.ROI" />
                <ProjectBox projectName="MRS" />
                <ProjectBox projectName="Vigil - X" />
            </div>
        </div>
    );
};

export default Projects;