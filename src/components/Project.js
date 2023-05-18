import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
function Contact() {
  return (
    <section className="topic" id="projects">
        <h2>Projects</h2>
        <aside>
            {/* Span tags below are wrapped by a link tag to create a clickable link the size of the parent 'card'. */}
            <div className="card featured-project" id="The-Weather-DJ">
                <h3 className="project-title">The Weather DJ</h3>
                <a href="https://cleclair71.github.io/The-Weather-DJ/" target="_blank" rel="noreferrer"> 
                    <span className="link-spanner"></span>
                </a>
                <a href="https://github.com/cleclair71/The-Weather-DJ/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} className='icon'/>
                </a>
            </div>
            <div className="card" id="Horiseon">
                {/* 'featured-project' is set to be initially larger than other projects */}
                <h3 className="project-title">Horiseon Landing Page</h3>
                <a href="https://jacksonr-k.github.io/Challenge-1/" target="_blank" rel="noreferrer">
                    <span className="link-spanner"></span>
                </a>
                <a href="https://github.com/JacksonR-K/Challenge-1" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} className='icon'/>
                </a>
            </div>
            <div className="card" id="Revved-Up-Reviews">
                <h3 className="project-title">Revved Up Reviews</h3>
                <a href="https://revved-up-reviews.herokuapp.com" target="_blank" rel="noreferrer">
                    <span className="link-spanner"></span>
                </a>
                <a href="https://github.com/group4project22023/Revved_up_Reviews" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} className='icon'/>
                </a>
            </div>
            <div className="card" id="Weather-Dashboard"> 
                <h3 className="project-title">Weather Dashboard</h3>
                <a href="https://jacksonr-k.github.io/Weather-Dashboard/" target="_blank" rel="noreferrer"> 
                    <span className="link-spanner"></span>
                </a>
                <a href="https://github.com/JacksonR-K/Weather-Dashboard" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} className='icon'/>
                </a>
            </div>
            <div className="card" id="Code-Quiz">
                <h3 className="project-title">Code Quiz</h3>
                <a href="https://jacksonr-k.github.io/Coding-Quiz/" target="_blank" rel="noreferrer"> 
                    <span className="link-spanner"></span>
                </a>
                <a href="https://github.com/JacksonR-K/Coding-Quiz" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} className='icon'/>
                </a>
            </div>
        </aside>
    </section>
  );
}

export default Contact;


