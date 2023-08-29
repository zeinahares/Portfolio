import React from 'react';
import '../../styles/portfolio.css';

export default function Portfolio() {

  const projects = [
    {
      title: 'Qwizard',
      description: 'React/GraphQL/Mongoose/Express/Antd/Node/JS',
      image: './images/qwizard.png',
      github: 'https://github.com/zeinahares/Group-Project-3-Qwizard',
      deployed: 'https://qwizard-c649b0755527.herokuapp.com/'
    },
    {
      title: 'Pawesome Care',
      description: 'HandleBars/CSS/JS/Sequelize/NodeJS/ExpressJS',
      image: './images/pawesome-screenshot5.png',
      github: 'https://github.com/zeinahares/PawsomeCare',
      deployed: 'https://pawesomecare1.herokuapp.com/'
    },
    {
      title: 'JATE',
      description: 'HTML/CSS/JS/NodeJS/ExpressJS/npm/PWA/Webpack',
      image: './images/jate.png',
      github: 'https://github.com/zeinahares/Coding-Text-Editor',
      deployed: 'https://jate-code-9aec63e172ae.herokuapp.com/'
    },
    {
      title: 'The Tech Blog',
      description: 'HandleBars/CSS/JS/Sequalize/NodeJS/ExpressJS',
      image: './images/screenshot1.png',
      github: 'https://github.com/zeinahares/Developer-Blog',
      deployed: 'https://developer-tech-blog.herokuapp.com/'
    },
    {
      title: 'Note Taker Databse',
      description: 'HTML/CSS/JS/NodeJS/ExpressJS',
      image: './images/full-note.png',
      github: 'https://github.com/zeinahares/Note-Taker-Database',
      deployed: 'https://note-taker-database.herokuapp.com/'
    },
    {
      title: 'Google Book Search',
      description: 'HTML/CSS/JS/API/React',
      image: './images/screenshot.png',
      github: 'https://github.com/zeinahares/Google-Books',
      deployed: 'https://googlebookssearch-89b1230c1db2.herokuapp.com/'
    },
    {
      title: 'CineFile',
      description: 'HTML/CSS/JS/JQuery/API',
      image: './images/cinefile.png',
      github: 'https://github.com/zeinahares/Group-Project-1-CineFile',
      deployed: 'https://zeinahares.github.io/Group-Project-1-CineFile/'
    },
    {
      title: 'Weather Dashboard',
      description: 'HTML/CSS/JS/API',
      image: './images/website-screenshot.png',
      github: 'https://github.com/zeinahares/Weekly-Weather',
      deployed: 'https://zeinahares.github.io/Weekly-Weather/'
    },
    {
      title: 'Password Generator',
      description: 'HTML/CSS/JS',
      image: './images/password.jpg',
      github: 'https://github.com/zeinahares/Password-Generator',
      deployed: 'https://zeinahares.github.io/Password-Generator/'
    },
    {
      title: 'Work Day Scheduler',
      description: 'HTML/CSS/JS',
      image: './images/workday.png',
      github: 'https://github.com/zeinahares/Workday-To-Do-List',
      deployed: 'https://zeinahares.github.io/Workday-To-Do-List/'
    },
    {
      title: 'Code Quiz',
      description: 'HTML/CSS/JS',
      image: './images/CodeQuiz2.gif',
      github: 'https://github.com/zeinahares/Z-s-Code-Quiz',
      deployed: 'https://zeinahares.github.io/Z-s-Code-Quiz/'
    },
    {
      title: '1st Portfolio Website',
      description: 'HTML/CSS/JS',
      image: './images/website.png',
      github: 'https://github.com/zeinahares/zeina_portfolio',
      deployed: 'https://zeinahares.github.io/zeina_portfolio/'
    },
  ];

  return (
    <div class="page">
      <div class="header">
        <h1>My Portfolio</h1>
        <br></br>
        <p>
          Enjoy my work! I have a lot of fun with it. I hope you do too!
        </p>
      </div>

      <div class="section_content">
        {projects.map((project) => (
          <a href={project.deployed} rel="noreferrer" target="_blank" class="work_card">
            <img src={project.image} alt={project.title} />
            <div class="title_card">
              <div class="title_content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <a href={project.github} rel="noreferrer" target="_blank"><img src="./images/github-mark.png" alt="Github Logo" class="logo" /></a>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
