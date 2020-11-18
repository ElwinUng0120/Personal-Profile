import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactContainer from '../components/ContactContainer';

function Contact(){
    return (
    <>
        <Navbar checker={false} />
        <ContactContainer />
        <br/>
        <Footer />
    </>
    );
}

export default Contact;