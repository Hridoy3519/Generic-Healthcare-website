import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./DentalServices.css";
const DentalService = (props) => {
  const { img, title, description, key } = props.service;
  return (
    <Col>
      <Card className="h-100 customized-card">
        <Card.Img className="customized-card-img" variant="top" src={img} />
        <Card.Body className="customized-card-body">
          <Card.Title> {title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <Card.Footer className="customized-card-footer text-center">
          <Link to={`service/${key}`}>
            <button className="generic-customized-btn w-100">Details</button>
          </Link>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default DentalService;
