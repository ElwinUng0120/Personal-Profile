import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutContainer from '../components/AboutContainer';

function About(){
    return (
    <>
        <Navbar checker={false} />
        <br/>
        <AboutContainer />
        <br/>
        <Footer />
    </>
    );
}

export default About;