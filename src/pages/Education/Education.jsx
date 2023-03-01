import React from 'react'
import educationCartoon from '../../assets/images/education-cartoon.png'
import "./Education.css"

import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger)

const Education = () => {

  const box1 = useRef(null)

  const box2 = useRef(null)
  const box3 = useRef(null)
  const vid = useRef(null)

  useEffect(() => {

    const box = vid.current
    const el1 = box1.current
    const el2 = box2.current
    const el3 = box3.current
    gsap.fromTo(el1, { x: 1500, opacity: 0, scale: 0.8 },
      {
        x: 10,
        opacity: 1.4,
        scale: 1,
        scrollTrigger: {
          trigger: el1,
          start: "top 150%",
          stop: "top  140%",
          scrub: 3,
          toggleActions: "restart none none none ",
          // markers: {
          //   startColor: "green",
          //   endColor: "red",
          //   fontSize: "2rem",
          //   indent: 100
          // }
        }
      })
    gsap.fromTo(el2, { x: 900, opacity: 0, scale: 0.8 },
      {
        x: 10,
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: el2,
          start: "top 200%",
          stop: "top  190%",
          scrub: 3,
          toggleActions: "restart none none none ",
          // markers: {
          //   startColor: "green",
          //   endColor: "red",
          //   fontSize: "2rem",
          //   indent: 100
          // }
        }
      })
    gsap.fromTo(el3, { x: 600, opacity: 0, scale: 0.6 },
      {
        x: 10,
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: el3,
          start: "top 280%",
          stop: "top  270%",
          scrub: 3,
          toggleActions: "restart none none none ",
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
    <div className='education-main-div' id='education'  >
      <div className="edu-wrapper">
        <div className="edu-line">
          <div className="line-circle"></div>
          <div className="line-circle"></div>
          <div className="line-circle"></div>
        </div>

        <div className="education-content">
          <div className="box1" ref={box1} >
            <p className='content' > <b>UnderGraduate : </b>  &emsp;
              Bannari Amman Institute Of
              Technology (2020-2024)<br />
              <b>CGPA : &ensp;</b> 9.06   (Upto 5th semester)</p>
          </div>


          <div className="box2" ref={box2} >
            <p className='content' > <b>Higher Secondary : </b> &ensp;
              Bannari Amman Vidya Niketan,
              Matriculation Higher Secondary
              School (2018-2020)
              <br />
              <b>Percentage : &ensp;</b> 83.67%</p>
          </div>


          <div className="box3" ref={box3} >
            <p className='content' > <b>SSLC : </b> &emsp;
              Bharathi Matriculation school
              Year of Passing: 2018
              <br />
              <b>Percentage: &emsp;</b>90.8%
            </p>
          </div>

          <div className="circle-education">
            <img src={educationCartoon} alt="education" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Education