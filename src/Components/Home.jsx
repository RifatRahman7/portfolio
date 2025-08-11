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
            <Intro />
            <About />
            <Skills />
            <Education />
        </div>
    );
};

export default Home;