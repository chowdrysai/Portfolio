import React from 'react';
import Lottie from 'lottie-react';
import SpaceBoy from '../LottieFiles/SpaceBoy.json';
import Typed from './Typed.js';
import Tilt from 'react-parallax-tilt';
const Home = () => {                                                                                                                                                                                                                                                                                                                                                     
    return (
        <div >
            <div className='HomePage'>

                <div className='HomeText'>
                    <h1>Hi There!</h1>
                    <h1>I'M <b style={{ color: '#9067C6',filter: 'drop-shadow(0 0 0.50rem #9067C6)' }}>CHOWDRY SAI KUMAR</b></h1>
                    <Typed />
                </div>
                <Tilt>
                    <Lottie
                        className="illustration"
                        animationData={SpaceBoy}
                        loop={true}
                    />
                </Tilt>

            </div>
        </div>
    );
};

export default Home;