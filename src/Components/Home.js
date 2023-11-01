import React from 'react';
import Lottie from "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import { CiCoffeeCup } from "react-icons/ci";
import moment from "react"
const Home = () => {                                                                                                                                                                                                                                                                                                                                                     
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>CHOWDRY SAI KUMAR</b></h1>
          <Typed />
        </div>
        <Tilt>
          {/* <img className=''style={{ height: "60vh", width: "40vw",transform: 'translateX(-100px)' }}  src={image} alt="" /> */}
          <Lottie
            className="illustration"
            animationData={SpaceBoy}
            loop={true}
          />
        </Tilt>

      </div>
    </div>
  )
}

export default Home