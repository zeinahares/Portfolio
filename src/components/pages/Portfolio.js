import React from 'react';
import '../../styles/portfolio.css';

export default function Portfolio() {

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

      <a href="https://qwizard-c649b0755527.herokuapp.com/" rel="noreferrer" target="_blank" class="work_card">
          <img src="./images/qwizard.png" alt="Project Snapshot of a mandebrot set" />
            <div class="title_card">
              <div class="title_content">
                <h3>Qwizard</h3>
                <p>React/GraphQL/Mongoose/Express/Antd/Node/JS</p>
              </div>
              <a href='https://github.com/zeinahares/Group-Project-3' rel="noreferrer" target="_blank"><img src="./images/github-mark.png" alt="Github Logo" class="logo" /></a>
            </div>
        </a>

        <a href="https://pawesomecare1.herokuapp.com/" rel="noreferrer" target="_blank" class="work_card">
          <img src="./images/pawesome-screenshot5.png" alt="Project Snapshot of a mandebrot set" />
            <div class="title_card">
              <div class="title_content">
                <h3>Pawesome Care</h3>
                <p>HandleBars/CSS/JS/Sequalize/NodeJS/ExpressJS</p>
              </div>
              <a href='https://github.com/zeinahares/PawsomeCare' rel="noreferrer" target="_blank"><img src="./images/github-mark.png" alt="Github Logo" class="logo" /></a>
            </div>
        </a>

        <a href="https://jate-code-9aec63e172ae.herokuapp.com/" rel="noreferrer" target="_blank" class="work_card">
          <img src="./images/jate.png" alt="jate snapshot" />
            <div class="title_card">
              <div class="title_content">
                <h3>JATE</h3>
                <p>HTML/CSS/JS/NodeJS/ExpressJS/npm/PWA/Webpack</p>
              </div>
              <a href='https://github.com/zeinahares/Coding-Text-Editor' rel="noreferrer" target="_blank"><img src="./images/github-mark.png" alt="Github Logo" class="logo" /></a>
            </div>
        </a>

        <a href="https://developer-tech-blog.herokuapp.com/8" rel="noreferrer" target="_blank" class="work_card">
          <img src="./images/screenshot1.png" alt="Project Snapshot of a mandebrot set" />
            <div class="title_card">
              <div class="title_content">
                <h3>The Tech Blog</h3>
                <p>HandleBars/CSS/JS/Sequalize/NodeJS/ExpressJS</p>
              </div>
              <a href='https://github.com/zeinahares/Developer-Blog' rel="noreferrer" target="_blank"><img src="./images/github-mark.png" alt="Github Logo" class="logo" /></a>
            </div>
        </a>
 
        <a href="https://note-taker-database.herokuapp.com/"  rel="noreferrer" target="_blank" class="work_card">
          <img src="./images/full-note.png" alt="Project Snapshot of a mandebrot set" />
            <div class="title_card">
              <div class="title_content">
                <h3>Note Taker Databse</h3>
                <p>HTML/CSS/JS/NodeJS/ExpressJS</p>
              </div>
              <a href='https://github.com/zeinahares/Note-Taker-Database' rel="noreferrer" target="_blank"><img src="./images/github-mark.png" alt="Github Logo" class="logo" /></a>
            </div>
        </a>
 
        <a href="https://zeinahares.github.io/Group-Project-1-CineFile/" rel="noreferrer" target="_blank" class="work_card">
          <img src="./images/cinefile.png" alt="Project Snapshot of a mandebrot set" />
            <div class="title_card">
              <div class="title_content">
                <h3>CineFile</h3>
                <p>HTML/CSS/JS/API</p>
              </div>
              <a href='https://github.com/zeinahares/Group-Project-1-CineFile' rel="noreferrer" target="_blank"><img src="./images/github-mark.png" alt="Github Logo" class="logo" /></a>
            </div>
        </a>
 
      </div>
    </div>
  );
}
