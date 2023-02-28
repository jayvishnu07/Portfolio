import './App.css';
import Navbar from './pages/Navbar/Navbar';
// import Contact from './pages/Contact/Contact';
import Projects from './pages/Projects/Projects';

import Education from './pages/Education/Education';
import gsap, { Power3 } from 'gsap';

import { BrowserRouter as Router } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import Skills from './pages/Skills/Skills';
import Contact from './pages/Contact/Contact';

function App() {
  let tl1 = new gsap.timeline();
  let tl2 = new gsap.timeline();
  // let tl3 = new gsap.timeline();
  let ease = Power3.easeOut()

  return (
    <div className='App'>
      <Router>
        <Navbar timeline={tl2} ease={ease} />
        <LandingPage timeline={tl1} ease={ease} />
        <Projects />
        <Education />
        <Skills />
        <Contact />
      </Router>
    </div>
  );
}

export default App;

