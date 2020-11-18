import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PortfolioContainer from '../components/PortfolioContainer';

function Portfolio(){
    return (
    <>
        <Navbar checker={false}/>
        <br/>
        <PortfolioContainer />
        <br/><br/>
        <Footer checker={false}/>
    </>
    );
}

export default Portfolio;