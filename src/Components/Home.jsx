import React from 'react';
import Navbar from './Navbar';
import Intro from './intro';
import About from './AboutMe';
import Skills from './Skills';
import Education from './Education';
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
        </div>
    );
};

export default Home;