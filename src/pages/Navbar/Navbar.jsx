import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { HashLink } from 'react-router-hash-link';


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
          <li><HashLink smooth to='/#projects' className='nav-item' >Projects Done </HashLink> </li>
          <li><HashLink smooth to='/#education' className='nav-item' >Education </HashLink> </li>
          <li><HashLink smooth to='/#skills' className='nav-item' >Skills </HashLink> </li>
          <li><HashLink smooth to='/#personal_info' className='nav-item' >Personal Info </HashLink> </li>
          <li><HashLink smooth to='/#contact' className='nav-item' >Contact </HashLink> </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar