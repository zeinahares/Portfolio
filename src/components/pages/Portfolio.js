import React, { useState } from 'react';
import '../../styles/portfolio.css';

export default function Portfolio() {


  // const styles = {
  //   title: {
  //     zIndex: 1,
  //   },
  // }

  const [isShown, setIsShown] = useState(true);

  return (
    <div class="page">
      <div class="header">
      <h1>My Portfolio</h1>
      <p>
        Enjoy my work! I have a lot of fun with it. I hope you do too!
      </p>
    </div>
      {/* 6 photo posts */}
      {/* clickable link */}
      {/* hovarable with inf and an extra link to github repo  */}
      {/* double layer hover */}

      <div class="section_content">

        <a href="https://pawesomecare1.herokuapp.com/" class="card"
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}>
          <img src="/images/dog1.png" alt="Project Snapshot of a mandebrot set" />
          {isShown && (
            <div class="title">
              <h3>Pawesome Care</h3>
              <p>HandleBars/CSS/JS/Sequalize/NodeJS/ExpressJS</p>
              <a href='https://www.google.com'><img src="/images/github-mark.png" alt="Github Logo" class="logo"/></a>
            </div>
          )}
        </a>

        <a href="https://zeinahares.github.io/Group-Project-1-CineFile/" class="card"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}>
          
          <img src="/images/cinefile.png" alt="Project Snapshot of CineFile" />
          <div class="title">
            <h3>CineFile</h3>
            <p>HTML/CSS/JS</p>
            <a href='https://www.google.com'><img src="/images/github-mark.png" alt="Github Logo" class="logo"/></a>
          </div>
        </a>

        <a href="https://zeinahares.github.io/Pre-course-study-guide/" class="card"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}>
          <img src="/images/preworkwebsite.png" alt="Project Snapshot of website" />
          <div class="title">
            <h3>Beginner Wesbite</h3>
            <p>HTML/CSS/JS</p>
            <a href='https://www.google.com'><img src="/images/github-mark.png" alt="Github Logo" class="logo"/></a>
          </div>
        </a>

        <a href="https://pawesomecare1.herokuapp.com/" class="card"
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}>
          <img src="/images/dog1.png" alt="Project Snapshot of a mandebrot set" />
          {isShown && (
            <div class="title">
              <h3>Pawesome Care</h3>
              <p>HandleBars/CSS/JS/Sequalize/NodeJS/ExpressJS</p>
              <a href='https://www.google.com'><img src="/images/github-mark.png" alt="Github Logo" class="logo"/></a>
            </div>
          )}
        </a>
        <a href="https://pawesomecare1.herokuapp.com/" class="card"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}>
          <img src="/images/dog1.png" alt="Project Snapshot of a mandebrot set" />
          {isShown && (
            <div class="title">
              <h3>Pawesome Care</h3>
              <p>HandleBars/CSS/JS/Sequalize/NodeJS/ExpressJS</p>
              <a href='https://www.google.com'><img src="/images/github-mark.png" alt="Github Logo" class="logo"/></a>
            </div>
          )}
        </a>

        {/* one more */}
      </div>
    </div>
  );
}
