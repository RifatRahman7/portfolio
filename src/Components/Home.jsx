import React from 'react';
import Navbar from './Navbar';
import Intro from './intro';
import About from './AboutMe';
import Skills from './Skills';
import Education from './Education';
import Contact from './Contact';
const Home = () => {
    return (
        <div>
            <Navbar />
            <section id="intro">
                <Intro />
            </section>
            <section id="about">
                <About />
            </section>
            <section id="skills">
                <Skills />
            </section>
            <section id="education">
                <Education />
            </section>
             <section id="contact">
                <Contact />
            </section>
        </div>
    );
};

export default Home;