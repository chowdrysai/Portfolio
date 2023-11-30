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
            I'm a <b>MERN stack developer</b> and completed graduation in <b>Information Technology</b>. <br/><br/>
            Gained handful of experience working as a <b>software developer</b> .
            I love creating projects that explore new things and have better functionalities, you can check out some of my work in the projects section.<br/><br/>
            I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br/>
            Apart from coding I love to do <b>drawing,travelling</b> </p>
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