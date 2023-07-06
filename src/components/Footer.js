import React from 'react';

function Footer({ currentPage, handlePageChange }) {
  return (
    <div className='footer'>
      {/* three logos, github, linked in, and a 3rd */}
      <a href="https://www.instagram.com/zeinadoesart/"> <img src="/images/insta.png" alt="insta logo" /></a>
      <a href="https://github.com/zeinahares"> <img src="/images/github-mark.png" alt="github logo" /></a>
      <a href="https://www.linkedin.com/in/zeinahares/"> <img src="/images/LI-In-Bug.png" alt="linked in logo" /></a>
    </div>
  );
}

export default Footer;
