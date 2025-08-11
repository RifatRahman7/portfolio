import React from 'react';
import Navbar from './Navbar';
import Intro from './intro';
import About from './AboutMe';
import Skills from './Skills';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Intro />
            <About />
            <Skills />
        </div>
    );
};

export default Home;