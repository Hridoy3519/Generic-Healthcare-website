import React, { useEffect, useState } from "react";
import { Card, Container} from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
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
    <Container className="my-5 service-detail-container">
      <div className="row detail">
        <div className="col-md-6">
          <h4 className="colored-text text-center">Service </h4>
          <div className="d-flex justify-content-center align-items-center">
            <Card className="detail-card">
              <Card.Img
                className="detail-card-img img-fluid"
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
        <div className="text-center">
          <Link to="/appointment">
            <button className="generic-customized-btn text-center">
              Book Appointment
            </button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default ServiceDetail;
