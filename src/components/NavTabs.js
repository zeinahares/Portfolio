import React from 'react';
import '../styles/nav.css'

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div class="navContainer">
      <img src="./images/bghead.jpg" alt="bg header"/>
      <h1 className="navTitle">Zeina Hares</h1>
      <ul className="nav">
        <li 
        className={currentPage === 'About' ? 'clicked tab-item' : 'tab-item'}
        >
          <a
            href="#about"
            onClick={() => handlePageChange('About')}

            className="tab"
          >
            About Me
          </a>
        </li>
        <li className={currentPage === 'Portfolio' ? 'clicked tab-item' : 'tab-item'}
        >
          <a
            href="#portfolio"
            onClick={() => handlePageChange('Portfolio')}

            className="tab"
          >
            Portfolio
          </a>
        </li>
        <li className={currentPage === 'Contact' ? 'clicked tab-item' : 'tab-item'}
        >
          <a
            href="#contact"

            onClick={() => handlePageChange('Contact')}
            className="tab"
          >
            Contact
          </a>
        </li>
        <li className={currentPage === 'Resume' ? 'clicked tab-item' : 'tab-item'}
        >
          <a
            href="#resume"
            onClick={() => handlePageChange('Resume')}

            className="tab"
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;
