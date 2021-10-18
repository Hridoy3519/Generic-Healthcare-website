import React from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';
import PageHeader from '../PageHeader/PageHeader';

const Appointment = () => {
    return (
        <div>
            <PageHeader page="Appointment"></PageHeader>
            <AppointmentForm></AppointmentForm>
        </div>
    );
};

export default Appointment;