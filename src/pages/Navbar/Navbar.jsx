import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Navbar = ({ timeline, ease }) => {
  
  const navRef = useRef(null)
  
  useEffect(() => {
    gsap.fromTo(navRef, { y: -100 },{y:0})
    timeline.fromTo('.navbar-main-div', { opacity: 0, y: -100 }, { opacity: 1, y: 0, ease: ease, duration: 1 }, "Start")

  }, [])



  return (
    <div className='navbar-main-div' ref={navRef} >
      <nav>
        <ul className='nav-ul' >
          <li>Contact</li>
          <li>Education</li>
          <li>Projects Done</li>
          <li>Skills</li>
          <li>Personal Info</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar