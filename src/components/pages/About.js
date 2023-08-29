import React from 'react';
import '../../styles/about.css'

export default function About() {
  return (
    <div className='about'>
      <div className='aboutTitle'>
        <h1>About Me</h1>
        <img id='headshot' src="./images/zeinaheadshot.png" alt="Zeina Headshot" />
      </div>
      <div className='aboutContent'>

        <p>
        Full Stack Web Developer currently completing a Bachelors of Computer Science at UNSW. Acquired recently a certificate in Full Stack Web Development from the University of Sydney’s Coding Boot Camp. Possessing a background in Media Screen and Sound Production, offering distinct viewpoints in project creation and management, as well as in designing end-user interaction for websites and software platforms. Demonstrating innovation in problem-solving and a dedicated interest in app development, with a specialized emphasis on backend design and management, as well as mobile-first design and development. Fostering creativity, collaboration within teams, and seamlessly steering projects from conceptualization to realization.
        </p>
      </div>

    </div >
  );
}
