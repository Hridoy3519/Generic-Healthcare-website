import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Doctor from "../Doctor/Doctor";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("./doctor.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  });

  return (
    <Container className="mb-5">
      <h5 className="colored-text text-center mt-5">
        Our Doctors
      </h5>
      <Row xs={1} md={3} className="g-4 mt-2">
        {doctors.map((doctor) => (
          <Doctor key={doctor.key} doctor={doctor}></Doctor>
        ))}
      </Row>
    </Container>
  );
};

export default Doctors;
