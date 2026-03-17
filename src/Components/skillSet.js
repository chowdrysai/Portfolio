import React from 'react';
import Skills from './Skills';

const Skillset = () => {
    return (
        <>
            <h1 className='SkillsHeading' style={{marginTop:'100px'}}> <b>Professional </b> Skillset</h1>
            <div className='skills'>
                <Skills skill='React' />
                <Skills skill='Redux' />
                <Skills skill='Node' />
                <Skills skill='Express' />
                <Skills skill='MongoDb' />
                <Skills skill="MySQL" />
                <Skills skill="PostgreSQL" />
                <Skills skill="SQL Server" />
                <Skills skill="TS" />
                <Skills skill="Javascript" />
                <Skills skill='Github' />
                <Skills skill='Html' />
                <Skills skill='Postman' />
                <Skills skill="Vue" />
                <Skills skill='Docker' />
                <Skills skill='CSS' />
                <Skills skill='ESlint' />
                <Skills skill='Bootstrap'/>
                <Skills skill='Next.js'/>
                <Skills skill='AWS'/>
                <Skills skill='Azure'/>
                <Skills skill='Redis'/>
                <Skills skill='Tailwind'/>
                <Skills skill='Chakra UI'/>
                <Skills skill='Ant Design'/>
                <Skills skill='Jira'/>
            </div>
        </>
    );
};

export default Skillset;