import React, { useEffect, useRef } from 'react'
import './Projects.css'
import chat from '../../assets/images/chat-app.png'
import expense from '../../assets/images/expenseTracker.png'
import { motion } from 'framer-motion'

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)


const Projects = () => {

  const square1 = useRef(null)
  const square2 = useRef(null)
  const square3 = useRef(null)
  const square4 = useRef(null)

  useEffect(() => {


    const el1 = square1.current;
    gsap.fromTo(el1,
      {
        x: -700,
      },
      {
        x: 0,
        scrollTrigger: {
          trigger: el1,
          start: "top 80%",
          end: "top 30%",
          scrub: 3,
          toggleActions: "restart none none none ",
          //play pause resume reverse restart reset complete none
          // markers: {
          //   startColor: "green",
          //   endColor: "red",
          //   fontSize: "2rem",
          //   indent: 100
          // }
        }
      })
    const el2 = square2.current;

    gsap.fromTo(el2,
      {
        x: 700,
      },
      {
        x: 0,
        scrollTrigger: {
          trigger: el2,
          start: "top 80%",
          end: "top 30%",
          scrub: 3,
          toggleActions: "restart none none none ",
          //play pause resume reverse restart reset complete none
          // markers: {
          //   startColor: "green",
          //   endColor: "red",
          //   fontSize: "2rem",
          //   indent: 100
          // }
        }
      })
    const el3 = square3.current;
    gsap.fromTo(el3,
      {
        x: -700,
      },
      {
        x: 0,
        scrollTrigger: {
          trigger: el3,
          start: "top 80%",
          end: "top 30%",
          scrub: 3,
          toggleActions: "restart none none none ",
          //play pause resume reverse restart reset complete none
          // markers: {
          //   startColor: "green",
          //   endColor: "red",
          //   fontSize: "2rem",
          //   indent: 100
          // }
        }
      })
    const el4 = square4.current;

    gsap.fromTo(el4,
      {
        x: 700,
      },
      {
        x: 0,
        scrollTrigger: {
          trigger: el4,
          start: "top 80%",
          end: "top 30%",
          scrub: 3,
          toggleActions: "restart none none none ",
          //play pause resume reverse restart reset complete none
          // markers: {
          //   startColor: "green",
          //   endColor: "red",
          //   fontSize: "2rem",
          //   indent: 100
          // }
        }
      })


  }, [])

  return (
    <div className='projects-main-div' id='projects'  >

      {/* Chat Application */}
      <div className="projects-i-d-wrapper">
        <div
          className="projects-image-div"
          ref={square1}
        >
          <img src={chat} alt="chat" />
        </div>


        {/* description */}

        <div className='projects-details-div' ref={square2} >
          <p>
            A MERN STACK Real Time chatting application for sharing our
            messages using SOCKET.IO
            Chat refers to the process of communicating, interacting and/or exchanging messages over the Internet.
            It involves two or more individuals that communicate through a chat-enabled service or software.
            <a href="https://chat-app-jvs-production.up.railway.app/" target="_blank" className='live-btn' >
              <motion.button
                className='seelive-button'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                transition={{ type: "just", stiffness: 400, damping: 17 }}
              >See Live
              </motion.button>
            </a>
          </p>
        </div>
      </div>

      {/* Expense Tracker */}

      <div className="projects-i-d-wrapper">
        <div
          className="projects-image-div"
          ref={square3}
        >
          <img src={expense} alt="chat" />
        </div>


        {/* description */}

        <div className='projects-details-div' ref={square4} >
          <p> Digital Expense Tracker using REACTJS and FIREBASE that will helps you take control of your finances and stay on budget.
           To have financial goals. It makes you unaware of what is happening with your money. You can make your money grow by tracking them.
            <a href="https://expense-tracker-v2-10.firebaseapp.com/login" target="_blank" className='live-btn' >
              <motion.button
                className='seelive-button'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                transition={{ type: "just", stiffness: 400, damping: 17 }}
              >See Live
              </motion.button>
            </a>
          </p>
        </div>
      </div>
      <div className="circle-project"></div>



    </div>
  )
}

export default Projects

