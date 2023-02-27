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
    gsap.fromTo(el1, { x: 1500, opacity: 0, scale: 0.6 },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: el1,
          start: "top 200%",
          stop: "top  160%",
          scrub: 1,
          toggleActions: "restart none none none ",
          // markers: {
          //   startColor: "green",
          //   endColor: "red",
          //   fontSize: "2rem",
          //   indent: 100
          // }
        }
      })
    gsap.fromTo(el2, { x: 1500, opacity: 0, scale: 0.6 },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: el2,
          start: "top 200%",
          stop: "top  160%",
          scrub: 1,
          toggleActions: "restart none none none ",
          // markers: {
          //   startColor: "green",
          //   endColor: "red",
          //   fontSize: "2rem",
          //   indent: 100
          // }
        }
      })
    gsap.fromTo(el3, { x: 1500, opacity: 0, scale: 0.6 },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: el3,
          start: "top 200%",
          stop: "top  160%",
          scrub: 1,
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

      <div className="education-content">
        <div className="box1" ref={box1} >
          <h4>UnderGraduate : &emsp;</h4>
          <p>Bannari Amman Institute Of
            Technology (2020-2024)
            <b>&emsp;  CGPA : &ensp;</b> 9.06   (Upto 5th semester)</p>
        </div>


        <div className="box2" ref={box2} >
          <h4>Higher Secondary : &ensp;</h4>
          <p>Bannari Amman Vidya Niketan,
            Matriculation Higher Secondary
            School (2018-2020)
            &emsp;
            <b>Percentage : &ensp;</b> 83.67%</p>
        </div>


        <div className="box3" ref={box3} >
          <h4>SSLC : &emsp;</h4>
          <p>Bharathi Matriculation school
            Year of Passing: 2018
            &emsp;
            <b>Percentage: &emsp;</b>90.8%
          </p>
        </div>

        <div className="circle-education">
          <img src={educationCartoon} alt="education" />
        </div>
      </div>

    </div>
  )
}

export default Education