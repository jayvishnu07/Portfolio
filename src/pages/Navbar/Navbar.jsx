import React, { useEffect, useRef, useState } from 'react'
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


  const [activeNavItem, setActiveNavItem] = useState("Home");
  // const [scrollPosition, setScrollPosition] = useState(0);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // const handleScroll = () => {
  //   const position = window.pageYOffset;
  //   const home = document.querySelector("#home");
  //   const project = document.querySelector("#projects");
  //   const education = document.querySelector("#education");
  //   const skills = document.querySelector("#skills");
  //   const contact = document.querySelector("#contact");
  //   if (home && position < project.offsetTop - 500) {
  //     setActiveNavItem("Home");
  //   } else if (project && position > education.offsetTop - 500) {
  //     setActiveNavItem("Project");
  //   } else if (education && position > skills.offsetTop - 500) {
  //     setActiveNavItem("Education");
  //   } else if (skills && position > contact.offsetTop - 500) {
  //     setActiveNavItem("Skills");
  //   } else if (contact) {
  //     setActiveNavItem("Contact");
  //   }
  //   setScrollPosition(position);
    
  // };



  return (
    <div className='navbar-main-div' ref={navRef} >
      <nav>
        <ul className='nav-ul' >
          {/* <li><HashLink smooth to='/#home' className={`nav-item ${activeNavItem === "Home" ? "active" : ""}`} >Home </HashLink> </li>
          <li><HashLink smooth to='/#projects' className={`nav-item ${activeNavItem === "Project" ? "active" : ""}`} >Projects </HashLink> </li>
          <li><HashLink smooth to='/#education' className={`nav-item ${activeNavItem === "Education" ? "active" : ""}`} >Education </HashLink> </li>
          <li><HashLink smooth to='/#skills' className={`nav-item ${activeNavItem === "Skills" ? "active" : ""}`} >Skills </HashLink> </li>
          <li><HashLink smooth to='/#contact' className={`nav-item ${activeNavItem === "Contact" ? "active" : ""}`} >Contact </HashLink> </li> */}
          <li><HashLink smooth to='/#home' className="nav-item">Home </HashLink> </li>
          <li><HashLink smooth to='/#projects' className="nav-item">Projects </HashLink> </li>
          <li><HashLink smooth to='/#education' className="nav-item">Education </HashLink> </li>
          <li><HashLink smooth to='/#skills' className="nav-item">Skills </HashLink> </li>
          <li><HashLink smooth to='/#contact' className="nav-item">Contact </HashLink> </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar