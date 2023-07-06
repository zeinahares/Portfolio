import React from 'react';
// import '../styles/nav.css'

function Footer() {
  return (
    <div className='footer'>
      {/* three logos, github, linked in, and a 3rd */}
      <a href="https://www.instagram.com/zeinadoesart/" rel="noreferrer" target="_blank"> <img src="./images/insta.png" alt="insta logo" /></a>
      <a href="https://github.com/zeinahares" rel="noreferrer" target="_blank"> <img src="./images/github-mark.png" alt="github logo" /></a>
      <a href="https://www.linkedin.com/in/zeinahares/" rel="noreferrer" target="_blank"> <img src="./images/LI-In-Bug.png" alt="linked in logo" /></a>
    </div>
  );
}

export default Footer;
