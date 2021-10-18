import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Feature from '../Feature/Feature';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Contact></Contact>
            <Feature></Feature>
        </div>
    );
};

export default Home;