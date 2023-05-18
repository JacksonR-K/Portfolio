import React from 'react';
import '../styles/Header.css';
import resume from '../assets/Resume.pdf';
import photo from "../assets/images/Jackson.jpg"
function Header() {
  return (
    /* "title-image-container" holds the title and portrait image inside a flex box to orient them using flex properties */
    <header>
      <nav id="navigation">
        <ul>
            {/* Links lead to the subtitled sections in the main page */}
            <li><a href="#about-me">About Me</a></li>
            <li><a href="#projects">Portfolio</a></li>
            <li><a href="#contact-me">Contact Me</a></li>
            <li><a href={resume} download="Jackson resume.pdf">Resume</a></li>
        </ul>
      </nav>
      <div id="title-image-container">
        <h1>Jackson
            <pre>Rainbird-Kendrick</pre>
        </h1> {/* Used pre tag so last name isn't broken into 2 words */}
        <img id="portrait" src={photo} alt="Portrait of Jackson" />
      </div>
    </header>
  );
}

export default Header;
