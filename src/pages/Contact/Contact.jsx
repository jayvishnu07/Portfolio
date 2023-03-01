import React from 'react'
import "./Contact.css"
import { motion } from 'framer-motion'

//icons

import { FcPlanner } from 'react-icons/fc';//FcPlanner //FaBirthdayCake
import { FaGraduationCap } from 'react-icons/fa';
import { FcPhoneAndroid } from 'react-icons/fc'; //FcPhoneAndroid //BsTelephoneFill
import { MdEmail } from 'react-icons/md';
import { FcHome } from 'react-icons/fc'; //FcHome //FaHome

import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { SiLeetcode } from 'react-icons/si';
import { FaTwitter } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';


const Contact = () => {
  return (
    <div className='contact-main-div' id='contact' >
      <div className="contact-main-div">
        <div className="contact-wrapper">
          <div className="contact-content-wrapper">
            <div className="social-media-wrapper">
              <div className="social-item-wrapper">
                <motion.a
                  href="https://github.com/jayvishnu07"
                  target="_blank"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                  transition={{ type: "just", stiffness: 200, damping: 17 }}
                  className="social-item"
                ><BsGithub id='social-item-logo' /> <span class="tooltiptext">Github</span>
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/jayavishnusivam-r-a50688217/"
                  target="_blank"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                  transition={{ type: "just", stiffness: 200, damping: 17 }}
                  className="social-item"
                ><BsLinkedin id='social-item-logo' /> <span class="tooltiptext">LinkedIn</span>
                </motion.a>
                <motion.a
                  href="https://leetcode.com/jaivishnu07/"
                  target="_blank"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                  transition={{ type: "just", stiffness: 200, damping: 17 }}
                  className="social-item"
                ><SiLeetcode id='social-item-logo' /> <span class="tooltiptext">Leetcode</span>
                </motion.a>
                <motion.a
                  href="#"
                  target="_blank"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                  transition={{ type: "just", stiffness: 200, damping: 17 }}
                  className="social-item"
                ><FaTwitter id='social-item-logo' /> <span class="tooltiptext">Twitter</span>
                </motion.a>
                <motion.a
                  href="#"
                  target="_blank"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                  transition={{ type: "just", stiffness: 200, damping: 17 }}
                  className="social-item"
                ><BsInstagram id='social-item-logo' /> <span class="tooltiptext">Instagram</span>
                </motion.a>
              </div>
            </div>
            <div className="contact-right">
              <h3 className="developer">MERN STACK DEVELOPER</h3>
              <p>To get an opportunity that allows me to showcase my
                skills and contribute to the company's growth. To
                enhance my skills by taking on challenging position and
                expanding my knowledge. To seek a position in a
                company that can launch my career and help me to
                build a stronger skill set.
              </p>
              <div className="contact-right-details">
                <div className="contact-right-details-item"><div className="text-primary" >Name: </div><div className="text-secondary">JAYAVISHNUSIVAM R</div></div>
                <div className="contact-right-details-item"><div className="text-primary" >Birthday: </div><div className="text-secondary">23rd April 2003 <FcPlanner id="contact-item-logo" /></div>  </div>
                <div className="contact-right-details-item"><div className="text-primary" >Degree: </div><div className="text-secondary">UnderGraduate <FaGraduationCap id="contact-item-logo" color="#000000" /></div></div>
                <div className="contact-right-details-item"><div className="text-primary" >Phone: </div><div className="text-secondary">+91 6379136180 <FcPhoneAndroid id="contact-item-logo" /></div></div>
                <div className="contact-right-details-item"><div className="text-primary" >Email: </div><div className="text-secondary">jaivishnu063@gmail.com <MdEmail id="contact-item-logo" color="#188ED4" /></div></div>
                <div className="contact-right-details-item"><div className="text-primary" >Address: </div><div className="text-secondary address ">35,Nehru Street, Samy Nagar, D.G.Pudur, Erode - 638503.<FcHome id="contact-item-logo" /></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact


