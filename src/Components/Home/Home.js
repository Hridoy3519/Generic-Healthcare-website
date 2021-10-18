import React from 'react';
import AboutDescription from '../AboutDescription/AboutDescription';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Contact></Contact>
            <AboutDescription></AboutDescription>
        </div>
    );
};

export default Home;