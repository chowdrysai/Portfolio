import React from 'react';
import { FaReact, FaCss3Alt, FaDocker, FaGithub, FaHtml5, FaBootstrap } from 'react-icons/fa';
import { DiNodejs, DiJavascript1, DiMysql } from 'react-icons/di';
import {
    SiExpress,
    SiMongodb,
    SiPostman,
    SiEslint,
    SiTypescript,
    SiVuedotjs,
    SiRedux,
    SiNextdotjs,
    SiAmazonaws,
    SiMicrosoftazure,
    SiPostgresql,
    SiMicrosoftsqlserver,
    SiRedis,
    SiTailwindcss,
    SiChakraui,
    SiAntdesign,
    SiJirasoftware,
} from 'react-icons/si';
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
        TS:<SiTypescript />,
        Redux:<SiRedux />,
        'Next.js':<SiNextdotjs />,
        AWS:<SiAmazonaws />,
        Azure:<SiMicrosoftazure />,
        PostgreSQL:<SiPostgresql />,
        'SQL Server':<SiMicrosoftsqlserver />,
        Redis:<SiRedis />,
        Tailwind:<SiTailwindcss />,
        'Chakra UI':<SiChakraui />,
        'Ant Design':<SiAntdesign />,
        Jira:<SiJirasoftware />,
    };

    return (
        <div title={skill} className='SkillBox'>
            {icon[skill]}
        </div>
    );
};

export default Skills;
