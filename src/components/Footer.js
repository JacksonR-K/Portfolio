import React from 'react';
import "../styles/Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
      /* "title-image-container" holds the title and portrait image inside a flex box to orient them using flex properties */
      <footer>
        <a href="https://www.linkedin.com/in/jackson-rainbird-kendrick/">
            <FontAwesomeIcon icon={faLinkedin} className='icon'/>
        </a>
        <a href="https://github.com/JacksonR-K">
          <FontAwesomeIcon icon={faGithub} className='icon'/>
        </a>
      </footer>
    );
  }

export default Footer;
