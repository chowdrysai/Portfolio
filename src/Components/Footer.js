import React from 'react';
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {GrMail} from 'react-icons/gr';
import {SiLeetcode} from 'react-icons/si';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer>
            <h4>Developed by Sai kumar</h4>
            <h4>Copyright &copy; {year} CS </h4>
            <div className='footerLinks'>
                <a href="https://github.com/chowdrysai" target='_blank' rel="noreferrer"><FaGithub/></a>
                <a href="https://www.linkedin.com/in/sai-kumar-bb773326b/" target='_blank' rel="noreferrer"><FaLinkedin/></a>
                <a href='mailTo:chowdrysai123@gmail.com' target='_blank' rel="noreferrer"><GrMail/></a>
                <a href="https://leetcode.com/Sai_kumar45/" target="_blank" rel="noreferrer"><SiLeetcode/></a>
            </div>
        </footer>
    );
};

export default Footer;