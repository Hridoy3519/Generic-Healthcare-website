import React from 'react';
import AboutDescription from '../AboutDescription/AboutDescription';
import Doctors from '../Doctors/Doctors';
import PageHeader from '../PageHeader/PageHeader';

const About = () => {
    return (
        <div>
            <PageHeader page="About Us"></PageHeader>
            <AboutDescription></AboutDescription>
            <Doctors></Doctors>
        </div>
    );
};

export default About;