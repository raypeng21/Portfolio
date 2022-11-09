/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
// import styled from 'styled-components';
import { motion } from 'framer-motion';
import "./opening.scss"


export const Opening = () => {
  return (
    <div className="Opening" id='home'>
      <iframe className='meteor_shower' width="100%" height="100%" frameborder="0" scrolling="no" src="https://editor.p5js.org/raypeng21/full/LIRx72yDI"></iframe>
        <div className="bgContainer">
          <motion.img src="assets/stars.png" alt=""
          initial={{opacity:0, x:-100}}
          animate = {{opacity:1, x:0, transition:{duration:1}}}
          />
        </div>
        <div className="ball1">
          <motion.img src="assets/ball1.png" alt="" 
          whileTap={{scale:0.9}} 
          whileHover={{scale:1.1}} 
          drag = {true}
          dragConstraints={{left:-500 ,right:900,top:-50,bottom:50}}
          initial={{opacity:0, y:100}}
          animate = {{opacity:1, y:0, transition:{duration:1}}}
          />
        </div>

        <div className="ball2">
        <motion.img src="assets/ball2.png" alt="" 
          whileTap={{scale:0.9}} 
          whileHover={{scale:1.1}} 
          drag = {true}
          dragConstraints={{left:-900 ,right:500,top:-50,bottom:50}}
          initial={{opacity:0, x:100}}
          animate = {{opacity:1, x:0, transition:{duration:1}}}
        />


        </div>

        <div className="ball3">

        <motion.img src="assets/ball3.png" alt=""
          whileTap={{scale:0.9}} 
          whileHover={{scale:1.1}} 
          drag = {true}
          dragConstraints={{left:-500 ,right:900,top:-50,bottom:50}}
          initial={{opacity:0, y:-100}}
          animate = {{opacity:1, y:0, transition:{duration:1}}}
        />

        </div>

        
        <div className="raypeng">

        <motion.img src="assets/name.png" alt=""
          whileHover={{scale:1.05}} 
          whileTap={{scale:0.9}} 

        />

        </div>

        <div className="slog">

        <motion.img src="assets/slog.png" alt=""
          whileHover={{scale:1.05}} 
          whileTap={{scale:0.9}} 

        />

        </div>

        <a className='smallRocket' href="#intro">
                    <img src="assets/rocket.png" alt="" />
                </a>

                
    </div>
  )
}



export default Opening;