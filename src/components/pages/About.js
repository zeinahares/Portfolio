import React from 'react';
import '../../styles/about.css'

export default function About() {
  return (
    <div className='about'>
      <div className='aboutTitle'>
        <h1>About Me</h1>
        <img id='headshot' src="./images/zeinaheadshot.jpg" alt="Zeina Headshot" />
      </div>
      <div className='aboutContent'>

        <p>
          Final-year CS student at the University of Melbourne and certified full-stack developer. I build web apps, automate the things that shouldn't be manual, and somehow always end up project managing. Adaptable, fast to learn, and open to wherever meaningful work takes me.
        </p>
        <p>
          I'm drawn to backend engineering, full-stack development, and the intersections of software with security, machine learning, and AI — spaces where what you build can genuinely change how people experience the world, whether that impact reaches one person or a million.
        </p>
      </div>

    </div >
  );
}
