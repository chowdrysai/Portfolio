import React from 'react';

const  ProjectBox = ({projectName}) => {
    const desc = {
        'EZ.ROIdesc' : 'Node.js, React.js, NestJS, MySQL, payment gateways, Tailwind, Azure (Blob Storage, Email, AI Search).',
        'EZ.ROIGithub' : '',
        'EZ.ROIWebsite' : '',

        'MRSdesc' : 'Node.js, Express, React, Redux Toolkit, Microsoft SQL Server, AWS S3 & SES, cron and queue-based processing.',
        'MRSGithub' : '',
        'MRSWebsite' : '',

        'Vigil - Xdesc':'NestJS, React.js, Redux Toolkit, MS SQL, Material UI, AWS S3 & SNS with scalable, modular architecture.',
        'Vigil - XGithub':'',
        'Vigil - XWebsite':''
    };
    return (
        <div className='projectBox'> 
            <div className='projectThumb'>
                <span className='projectThumbTitle'>{projectName}</span>
            </div>
            <div className='projectContent'>
                <h3 className='projectTitle'>{projectName}</h3>
                <p className='projectDesc'>
                    {desc[projectName + 'desc']}
                </p>
            </div>
        </div>
    );
};

export default  ProjectBox;