import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import DentalService from "../DentalService/DentalService";
import "./Services.css";
const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  });
  return (
    <Container className="services">
      <h5 className="colored-text text-center mt-5">
        Our Best Dental Services
      </h5>
      <h1>Enjoy Specialized Care Through</h1>
      <h1>Precision, Artistry, and Experience</h1>

      <Row xs={1} md={3} className="g-4 mt-2">
        {
            services.map(service => <DentalService key={service.key} service={service}></DentalService> )
        }
      </Row>
      
    </Container>
  );
};

export default Services;
