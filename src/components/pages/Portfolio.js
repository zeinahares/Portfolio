import React, { useState } from 'react';

export default function Portfolio() {


  // const styles = {
  //   hoverBlock: {
  //     display: "none",
  //   },
  // }

  const [isShown, setIsShown] = useState(false);

  return (
    <div>
      <h1>My Portfolio</h1>
      <p>
        Enjoy my work! I have a lot of fun with it. I hope you do too!
      </p>

      {/* 6 photo posts */}
      {/* clickable link */}
      {/* hovarable with inf and an extra link to github repo  */}
      {/* double layer hover */}

      <div class="section_content">

        <a href="https://pawesomecare1.herokuapp.com/" id="project1" class="work_item"
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}>
          <img src="/images/dog1.png" alt="Project Snapshot of a mandebrot set" />
          {isShown && (
            <div class="work_title">
              <h3>Pawesome Care</h3>
              <p>HandleBars/CSS/JS/Sequalize/NodeJS/ExpressJS</p>
              <a href='https://www.google.com'><img src="/images/github-mark.png" alt="Github Logo" /></a>
            </div>
          )}
        </a>

        <a href="https://zeinahares.github.io/Group-Project-1-CineFile/" class="work_item">
          <img src="/images/cinefile.png" alt="Project Snapshot of CineFile" />
          <div class="work_title">
            <h3>CineFile</h3>
            <p>HTML/CSS/JS</p>
          </div>
        </a>

        <a href="https://zeinahares.github.io/Pre-course-study-guide/" class="work_item">
          <img src="/images/preworkwebsite.png" alt="Project Snapshot of website" />
          <div class="work_title">
            <h3>Beginner Wesbite</h3>
            <p>HTML/CSS/JS</p>
          </div>
        </a>

        <a href="https://zeinahares.github.io/Password-Generator/" class="work_item">
          <img src="/images/password.jpg" alt="Project Snapshot of abtract password art" />
          <div class="work_title">
            <h3>Password Generator</h3>
            <p>HTML/CSS/JS</p>
          </div>
        </a>

        <a href="https://zeinahares.github.io/Pre-course-study-guide/" class="work_item">
          <img src="/images/calculator.png" alt="Project Snapshot of a calculator" />
          <div class="work_title">
            <h3>Calculator</h3>
            <p>C++</p>
          </div>
        </a>

      </div>
    </div>
  );
}
