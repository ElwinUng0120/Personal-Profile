import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HomeContainer from '../components/HomeContainer';

function Home(){
    return (
    <>
        <Navbar checker={true} />
        <HomeContainer />
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <Footer checker={true}/>
    </>
    );
}

export default Home;