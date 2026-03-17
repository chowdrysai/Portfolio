import React from 'react';
import Tilt from 'react-parallax-tilt';
import Lottie from 'lottie-react';
import Coder from '../LottieFiles/coder.json';

const About = () => {
    return (                                                                                                                            
        <div className='AboutPage'>
            <div className='AboutText'>
                <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
                <p>
            Hi, my name is <b>Chowdry Sai Kumar</b> and I am from Hyderabad, India.
            I am a <b>Full-Stack Developer</b> with 2.6+ years of experience building scalable web applications and APIs using <b>Node.js, NestJS, React,</b> and modern cloud platforms like <b>AWS</b> and <b>Azure</b>. <br/><br/>
            I have worked as a <b>Sr. Software Engineer</b>, <b>Software Developer</b>, and <b>Freelance Engineer</b>, focusing on performant frontends, secure backends, cloud-native architectures, and CI/CD automation.
            I love creating products that solve real problems and are robust, maintainable, and user-friendly—you can explore some of this work in the projects section.<br/><br/>
            I am <b>open</b> to new opportunities where I can contribute, learn, and grow. Feel free to connect with me, links are in the footer.<br/>
            Outside of work, I enjoy <b>drawing</b> and <b>travelling</b>. </p>
            </div>

            <div>
                <Tilt>
                    <Lottie
                        className="illustration" 
                        animationData={Coder} 
                        loop={true} 
                    />
                </Tilt>
            </div>

        </div>      

    );
};

export default About;