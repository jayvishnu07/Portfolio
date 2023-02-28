import React, { useRef } from "react";
import './Skills.css';
import { useInView } from "framer-motion";

//icons
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { FaReact } from 'react-icons/fa';
import { IoLogoNodejs } from 'react-icons/io';
import { SiExpress } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import { BsGithub } from 'react-icons/bs';
import { BiGitBranch } from 'react-icons/bi';
import { DiPython } from 'react-icons/di';
import { IoLogoJavascript } from 'react-icons/io';

const Projects = () => {

  // circle bar
  const bar1 = useRef(null)
  const bar2 = useRef(null)
  const bar3 = useRef(null)
  const bar4 = useRef(null)
  const isInView1 = useInView(bar1)
  const isInView2 = useInView(bar2)
  const isInView3 = useInView(bar3)
  const isInView4 = useInView(bar4)

  //linear bar
  const line1 = useRef(null)
  const line2 = useRef(null)
  const line3 = useRef(null)
  const line4 = useRef(null)
  const line5 = useRef(null)
  const line6 = useRef(null)
  const isInViewLine1 = useInView(line1)
  const isInViewLine2 = useInView(line2)
  const isInViewLine3 = useInView(line3)
  const isInViewLine4 = useInView(line4)
  const isInViewLine5 = useInView(line5)
  const isInViewLine6 = useInView(line6)

  return (
    <>
      <div className="main-div" id="skills" >
        <div className="left">
          <div className="skill-content-wrapper">
            <div className="title" ref={line1} >HTML <AiFillHtml5 id="html" color="#D84924" />&ensp;& &ensp;CSS <DiCss3 color="#1A6DB1" id="css"/></div>
            <div className="progress-bar-track">
              <div className={isInViewLine1 ? "progress-bar1-seen" : "progress-bar1"}>
              <span className="tooltip">75%</span>
              </div>
            </div>
          </div>
          <div className="skill-content-wrapper">
            <div className="title" ref={line2} >ReactJs <FaReact color="#00D1F2" id="react"/> </div>
            <div className="progress-bar-track">
              <div className={isInViewLine2 ? "progress-bar2-seen" : "progress-bar2"}>
              <span className="tooltip">65%</span>
              </div>
            </div>
          </div>
          <div className="skill-content-wrapper">
            <div className="title" ref={line3} >NodeJs <IoLogoNodejs color="#7BC328"  id="node" /></div>
            <div className="progress-bar-track">
              <div className={isInViewLine3 ? "progress-bar3-seen" : "progress-bar3"}>
              <span className="tooltip">65%</span>
              </div>
            </div>
          </div>
          <div className="skill-content-wrapper">
            <div className="title" ref={line4} >ExpressJs <SiExpress color="#000000"  id="express" /> </div>
            <div className="progress-bar-track">
              <div className={isInViewLine4 ? "progress-bar4-seen" : "progress-bar4"}>
              <span className="tooltip">70%</span>
              </div>
            </div>
          </div>
          <div className="skill-content-wrapper">
            <div className="title" ref={line5} >MongoDB <SiMongodb color="#4BA13E" id="mongo" /> </div>
            <div className="progress-bar-track">
              <div className={isInViewLine5 ? "progress-bar5-seen" : "progress-bar5"}>
              <span className="tooltip">65%</span>
              </div>
            </div>
          </div>
          <div className="skill-content-wrapper">
            <div className="title" ref={line6} >Git <BiGitBranch color="#E44C30" id="git" /> &ensp;& &ensp; Github <BsGithub color="#000000" id="github"  /></div>
            <div className="progress-bar-track">
              <div className={isInViewLine6 ? "progress-bar6-seen" : "progress-bar6"}>
              <span className="tooltip">45%</span>
              </div>
            </div>
          </div>



        </div>
        {/* ------------------------------------------- */}
        <div className="right">
          <div className="container1">
            <div className="outer-circle" ref={bar1} >
              <div className="inner-circle">
                <div id="number">
                  70%
                </div>
              </div>

              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                <defs>
                  <linearGradient id="GradientColor">
                    <stop offset="0%" stop-color="#e91e63" />
                    <stop offset="100%" stop-color="#673ab7" />
                  </linearGradient>
                </defs>
                <circle className={isInView1 ? 'circle-clicked1' : 'circle'} cx="80" cy="80" r="70" stroke-linecap="round" />
              </svg>
            </div>
            <div className="language">C</div>
          </div>

          {/* ------------------------------------------- */}

          <div className="container2">
            <div className="outer-circle" ref={bar2} >
              <div className="inner-circle">
                <div id="number">
                  65%
                </div>
              </div>

              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                <defs>
                  <linearGradient id="GradientColor">
                    <stop offset="0%" stop-color="#e91e63" />
                    <stop offset="100%" stop-color="#673ab7" />
                  </linearGradient>
                </defs>
                <circle className={isInView2 ? 'circle-clicked2' : 'circle'} cx="80" cy="80" r="70" stroke-linecap="round" />
              </svg>
            </div>
            <div className="language">C++</div>

          </div>
          {/* ------------------------------------------- */}

          <div className="container3">
            <div className="outer-circle" ref={bar3} >
              <div className="inner-circle">
                <div id="number">
                  55%
                </div>
              </div>

              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                <defs>
                  <linearGradient id="GradientColor">
                    <stop offset="0%" stop-color="#e91e63" />
                    <stop offset="100%" stop-color="#673ab7" />
                  </linearGradient>
                </defs>
                <circle className={isInView3 ? 'circle-clicked3' : 'circle'} cx="80" cy="80" r="70" stroke-linecap="round" />
              </svg>
            </div>
            <div className="language">JavaScript <IoLogoJavascript color="#E4D04B" id="js" /></div>

          </div>
          {/* ------------------------------------------- */}

          <div className="container4">
            <div className="outer-circle" ref={bar4} >
              <div className="inner-circle">
                <div id="number">
                  55%
                </div>
              </div>

              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                <defs>
                  <linearGradient id="GradientColor">
                    <stop offset="0%" stop-color="#e91e63" />
                    <stop offset="100%" stop-color="#673ab7" />
                  </linearGradient>
                </defs>
                <circle className={isInView4 ? 'circle-clicked4' : 'circle'} cx="80" cy="80" r="70" stroke-linecap="round" />
              </svg>
            </div>
            <div className="language">Python <DiPython color="#336D9D"  id="python" /></div>
          </div>
          {/* ------------------------------------------- */}
        </div>
      </div>
    </>
  )
}

export default Projects

