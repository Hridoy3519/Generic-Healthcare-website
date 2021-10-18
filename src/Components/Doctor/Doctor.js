import React from "react";
import { Card, Col } from "react-bootstrap";

const Doctor = (props) => {
    const {name,job,img} = props.doctor;
  return (
    <Col>
      <Card className="h-100 customized-card">
        <Card.Img variant="top" src={img} />
        <Card.Body className="customized-card-body text-center">
          <Card.Title> {name}</Card.Title>
          <Card.Text>{job}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Doctor;
