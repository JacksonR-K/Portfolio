import React from 'react';
import '../styles/Section.css';
import Project from './Project';
import Contact from './Contact';

function Section() {
  return (
    <section id="main-content">
        <section className="topic" id="about-me">
            <h2>About Me</h2>
            <aside>
                <p>Jackson Rainbird-Kendrick is currently an IT Specialist at Canadian Tire.
                    Jackson has over 5 years of coding experience in languages such as: HTML, CSS,
                    JavaScript, and Java, with some exposure to Python and C#. Jackson graduated at
                    Humber College in 2020 after taking a two year Computer Programming course and is
                    currently partaking in a Web Development bootcamp through the University Of Toronto.
                    His passion for logic puzzles and out of box thinking has driven his love for code
                    and that thrill of finding the missing semi-colon on line 42 that somehow broke
                    the whole project. Jackson is looking to bring his experience into a professional Web
                    Developer environment and to expand his understanding of the ever-changing world
                    of code.
                </p>
            </aside>
        </section>
        <Project />
        <Contact />
    </section>
  );
}

export default Section;
