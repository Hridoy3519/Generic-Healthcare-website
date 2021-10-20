import React from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';
import PageHeader from '../PageHeader/PageHeader';
import Contact from '../Contact/Contact'
const Appointment = () => {
    return (
        <div>
            <PageHeader page="Appointment"></PageHeader>
            <Contact></Contact>
            <AppointmentForm></AppointmentForm>
        </div>
    );
};

export default Appointment;