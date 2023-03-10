import React from 'react'
import Typewriter from 'typewriter-effect';
import image from '../../assets/images/profile-image.png'
import resume from '../../assets/resume/JAYAVISHNUSIVAM R.pdf'
import { useEffect } from 'react';
import './LandingPage.css'
import { HashLink } from 'react-router-hash-link';
const LandingPage = ({timeline , ease}) => {



    useEffect(() => {
        timeline.fromTo('#cartoon-img', { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1 }, "Start")
        timeline.fromTo(['#welcome-title', '#get-started-button'], { y: 50, opacity: 0 }, { y: 0, ease: ease, opacity: 1, duration: 1 }, 'Start')

    }, [])
    return (
        <div className="landingpage" id='home' >
            <div className="front-main-div">
                <div className="frontpage-details-div">

                    <p id='welcome-title'>Welcome</p>
                    <div className='typewriter'>
                        <Typewriter
                            options={{
                                strings: ["HI THERE . . . ","THIS IS JAYAVISHNUSIVAM R", "WEB DEVELOPER . . . "],
                                autoStart: true,
                                loop: true,
                                delay: 150
                            }}
                        />
                    </div>
                    <a href={resume} target='_blank' ><button id='get-started-button'>Check out my Resume</button></a>
                    
                </div>

                <div className="frontpage-image">
                    <img id='cartoon-img' src={image} alt="image" />
                </div>
            </div>


        </div>
    )
}

export default LandingPage