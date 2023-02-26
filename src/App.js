import Typewriter from 'typewriter-effect';
// import About from './pages/About/About';
import './App.css';
import Navbar from './pages/Navbar/Navbar';
// import Contact from './pages/Contact/Contact';
import Projects from './pages/Projects/Projects';

import image from './assets/images/profile-image.png'
import gsap, { Power3 } from 'gsap';
import { useEffect } from 'react';
import Education from './pages/Education/Education';

function App() {

  let tl1 = new gsap.timeline();
  let tl2 = new gsap.timeline();
  // let tl3 = new gsap.timeline();
  let ease = Power3.easeOut()

  useEffect(() => {
   tl1.fromTo('#cartoon-img',{opacity: 0,scale : 0.8}, {opacity: 1, scale:1 , duration: 1} ,"Start")
   tl1.fromTo(['#welcome-title','#get-started-button'],{y:50,opacity:0},{y:0, ease:Power3.easeOut,opacity:1,duration:1},'Start')
 
  }, [])

  return (
    <>
      <div className="App">
     <Navbar timeline={tl2} ease={ease} />
      <div className="front-main-div">
        <div className="frontpage-details-div">

          <p id='welcome-title'>Welcome</p>
          <div className='typewriter'>
            <Typewriter
              options={{
                strings: ["HI THERE . . . THIS IS JAYAVISHNUSIVAM R", "WEB DEVELOPER . . . "],
                autoStart: true,
                loop: true,
                delay: 150
              }}
            />
          </div>
          <button id='get-started-button'>Get Started</button>
        </div>
      
        <div className="frontpage-image">
          <img id='cartoon-img' src={image} alt="image"  />
        </div>
      </div>

        <Projects />

        <Education />
      </div>
    </>
  );
}

export default App;

