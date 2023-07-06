import React from 'react';
import '../../styles/resume.css';

export default function Resume() {
  return (
    <div className='resume'>
      <h1>My Skills</h1>
      <h5>< a href="/resume.pdf" target="_blank" download>Click Here to Download My Resume</a>
      </h5>
      <div className='resume_container'>
        <div className='set'>
          <h3>Front End</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>React</li>
            <li>Handlebars</li>
            <li>Progressive Web Apps</li>
            <li>Bootstrap</li>
            <li>Materialize</li>
            <li>Bulma</li>
          </ul>
        </div>
        <div className='set'>
          <h3>Back End</h3>
          <ul>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
          </ul>
        </div>
        <div className='set'>
          <h3>Dev Tools</h3>
          <ul>
            <li>Git</li>
            <li>GitHub</li>
            <li>Heroku</li>
            <li>Terminal</li>
            <li>npm</li>
            <li>Chrome DevTools</li>
            <li>Insomnia</li>
            <li>MySQL Workbench</li>
            <li>MongoDB Compass</li>
          </ul>
        </div>


        <div className='set'>
          <h3>Frameworks</h3>
          <ul>
            <li>Object Oriented Programming</li>
            <li>Object Relational Mapping</li>
            <li>Model View Controller</li>
            <li>MERN Stack</li>
            <li>Progressive Web Applications</li>
            <li>Single Page Applications</li>
            <li>Test Driven Development</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
