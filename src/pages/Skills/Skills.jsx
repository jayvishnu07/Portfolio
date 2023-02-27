import React, { useRef } from "react";
import './Skills.css';
import { useInView } from "framer-motion";

const Projects = () => {

  const bar1 = useRef(null)
  const bar2 = useRef(null)
  const bar3 = useRef(null)
  const bar4 = useRef(null)
  const isInView1 = useInView(bar1)
  const isInView2 = useInView(bar2)
  const isInView3 = useInView(bar3)
  const isInView4 = useInView(bar4)
  return (
    <>
      <div className="main-div" id="skills" >
        <div className="left">

          <div className="skill-content-wrapper">
            <div className="title">HTML & CSS</div>
            <div className="progress-bar-track">
              <div className="progress-bar1"></div>
            </div>
          </div>
          <div className="skill-content-wrapper">
            <div className="title">ReactJs</div>
            <div className="progress-bar-track">
              <div className="progress-bar2"></div>
            </div>
          </div>
          <div className="skill-content-wrapper">
            <div className="title">NodeJs</div>
            <div className="progress-bar-track">
              <div className="progress-bar3"></div>
            </div>
          </div>
          <div className="skill-content-wrapper">
            <div className="title">ExpressJs</div>
            <div className="progress-bar-track">
              <div className="progress-bar4"></div>
            </div>
          </div>
          <div className="skill-content-wrapper">
            <div className="title">MongoDB</div>
            <div className="progress-bar-track">
              <div className="progress-bar5"></div>
            </div>
          </div>
          <div className="skill-content-wrapper">
            <div className="title">Git & Github</div>
            <div className="progress-bar-track">
              <div className="progress-bar6"></div>
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
            <div className="language">JavaScript</div>

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
            <div className="language">Python</div>
          </div>
          {/* ------------------------------------------- */}
        </div>
      </div>
    </>
  )
}

export default Projects

