import React, { useEffect, useState } from "react";
import { Card, Container, Button, ButtonGroup } from "react-bootstrap";
import { useParams } from "react-router";
import "./ServiceDetail.css";
const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [services, setServices] = useState([]);
  const [currentService, setCurrentService] = useState({});

  useEffect(() => {
    if (!services.length) {
      fetch(
        "https://raw.githubusercontent.com/Hridoy3519/json-data/main/services.json"
      )
        .then((res) => res.json())
        .then((data) => setServices(data));
    }

    if (services.length) {
      const now = services.find((service) => service.key === serviceId);
      setCurrentService(now);
    }
  }, [services]);

  return (
    <Container className="m-5">
      <div className="row detail">
        <div className="col-md-6">
          <h4 className="colored-text text-center">Service </h4>
          <div className="d-flex justify-content-center align-items-center">
            <Card className="detail-card">
              <Card.Img
                className="detail-card-img"
                variant="top"
                src={currentService?.img}
              />
              <Card.Body>
                <Card.Text>{currentService?.description}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="col-md-6">
          <h4 className="colored-text text-center"> Doctor </h4>
          <div className="d-flex justify-content-center align-items-center">
            <img
              className="detail-card-img"
              src={currentService?.doctorImg}
              alt=""
            />
          </div>
          <h4 className="colored-text text-center">{currentService?.Job}</h4>
        </div>
        <button className="generic-customized-btn">Book Appointment</button>
      </div>
    </Container>
  );
};

export default ServiceDetail;
