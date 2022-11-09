/* eslint-disable jsx-a11y/anchor-is-valid */
import './intro.scss'
import {useEffect, useRef } from 'react'
// import { Card, CardBody} from 'reactstrap';
import { motion } from 'framer-motion';


import { init } from 'ityped'

export default function Intro() {

    const textRef = useRef();

    useEffect(()=>{
        init(textRef.current,{
            showCursor:true,
            backDelay:1500,
            backSpeed:60,
            strings:["Web Designer", "Web Developer", "Content Creater"],
        });
    },[])
    return (
        
        <div className='intro' id = "intro">
            <div className="rocket">
                <motion.img src="assets/plants.png" alt="" 
                  whileTap={{scale:0.9}} 
                  whileHover={{scale:1.05}} 
                />
            </div>
            <div className="star">
                <motion.img src="assets/star2.png" alt="" 
                  whileTap={{scale:0.9}} 
                />
            </div>

            <div className="left">
                <div className="imgContainer">

                    <img src="assets/raypeng.png" alt="" />


                </div>


            </div>

            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'am</h2>
                    <h1>Ray Peng</h1>
                    <h3>Software Engineer at <a className='writeway' href='https://writeway.com/'>Writeway</a> </h3>
                    <h3>& Freelance <span ref ={textRef}></span></h3>
                </div>


                

            </div>

        </div>
    )
}
