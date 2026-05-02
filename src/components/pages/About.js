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
          I'm a final-year Computing and Software Systems student at the University of Melbourne with hands-on experience across the full stack — from React frontends to database architecture and workflow automation. I thrive in collaborative environments, naturally take on leadership, and care just as much about the user experience as the code behind it. Open to wherever great problems need solving.
        </p>
      </div>

    </div >
  );
}
