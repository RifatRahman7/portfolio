import React from 'react';
import Navbar from './Navbar';
import Intro from './intro';
import About from './AboutMe';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Intro />
            <About />
        </div>
    );
};

export default Home;