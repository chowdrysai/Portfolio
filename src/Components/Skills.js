import React from 'react';
import { FaReact, FaCss3Alt,FaDocker, FaGitAlt, FaGithub, FaNpm, FaHtml5, FaBootstrap } from "react-icons/fa";
import { DiNodejs, DiJavascript1 } from "react-icons/di";
import { SiExpress, SiMongodb,SiPostman } from "react-icons/si";
const Skills = ({ skill }) => {
  const icon = {
    Javascript: <DiJavascript1 />,
    React: <FaReact />,
    Node: <DiNodejs />,
    Express: <SiExpress />,
    MongoDb: <SiMongodb />,
    Git: <FaGitAlt />,
    Postman:<SiPostman/>,
    Github: <FaGithub />,
    Npm: <FaNpm />,
    CSS:<FaCss3Alt/>,
    Bootstrap: <FaBootstrap />,
    Docker:<FaDocker />,
    Html:<FaHtml5 />
  }

  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills
