import React from 'react';
import { FaReact, FaCss3Alt,FaDocker, FaGithub, FaHtml5, FaBootstrap } from 'react-icons/fa';
import { DiNodejs, DiJavascript1,DiMysql } from 'react-icons/di';
import { SiExpress, SiMongodb,SiPostman,SiEslint,SiTypescript,SiVuedotjs } from 'react-icons/si';
const Skills = ({ skill }) => {
    const icon = {
        Javascript: <DiJavascript1 />,
        React: <FaReact />,
        Node: <DiNodejs />,
        Express: <SiExpress />,
        MongoDb: <SiMongodb />,
        Postman:<SiPostman/>,
        Github: <FaGithub/>,
        ESlint: <SiEslint />,
        Vue: <SiVuedotjs />,
        CSS:<FaCss3Alt/>,
        MySQL:<DiMysql />,
        Bootstrap: <FaBootstrap />,
        Docker:<FaDocker />,
        Html:<FaHtml5 />,
        TS:<SiTypescript />
    };

    return (
        <div title={skill} className='SkillBox'>
            {icon[skill]}
        </div>
    );
};

export default Skills;
