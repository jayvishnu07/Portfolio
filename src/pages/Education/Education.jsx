import React from 'react'
import education from '../../assets/images/education.png'
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
          markers: {
            startColor: "green",
            endColor: "red",
            fontSize: "2rem",
            indent: 100
          }
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
          markers: {
            startColor: "green",
            endColor: "red",
            fontSize: "2rem",
            indent: 100
          }
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
          stop: "top  140%",
          scrub: 1,
          toggleActions: "restart none none none ",
          markers: {
            startColor: "green",
            endColor: "red",
            fontSize: "2rem",
            indent: 100
          }
        }
      })

  }, [])


  return (
    <div className='education-main-div' >
      <img className='education-image' src={education} alt="education" />

      <div className="education-content">
        <div className="box1" ref={box1} >
          <h5>UnderGraduate</h5>
          <p>Bannari Amman Institute Of
            Technology (2020-2024)
            <b>CGPA : 9.06</b> (Upto 5th semester)</p>
        </div>


        <div className="box2" ref={box2} >
          <h5>Higher Secondary</h5>
          <p>Bannari Amman Vidya Niketan,
            Matriculation Higher Secondary
            School (2018-2020)
            <b>Percentage : 83.67%</b></p>
        </div>


        <div className="box3" ref={box3} >
          <h5>SSLC</h5>
          <p>Bharathi Matriculation school
            Year of Passing: 2018
            <b>Percentage: 90.8%</b>
          </p>
        </div>

      </div>

    </div>
  )
}

export default Education