import React from 'react';
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {GrMail} from 'react-icons/gr';
import {SiLeetcode} from 'react-icons/si';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer>
            <h4><b>Developed by</b> Sai kumar</h4>
            <h4><b>Copyright</b> &copy; {year} CS </h4>
            <div className='footerLinks'>
                <a href="https://github.com/chowdrysai" rel="noreferrer" target='_blank'><FaGithub/></a>
                <a href="https://www.linkedin.com/in/chowdrysai-mernstack" rel="noreferrer" target='_blank'><FaLinkedin/></a>
                <a href='mailTo:chowdrysai123@gmail.com' rel="noreferrer" target='_blank'><GrMail/></a>
                <a href="https://leetcode.com/Sai_kumar45/" rel="noreferrer" target="_blank"><SiLeetcode/></a>
            </div>
        </footer>
    );
};

export default Footer;