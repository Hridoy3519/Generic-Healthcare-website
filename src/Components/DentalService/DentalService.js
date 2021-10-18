import React from "react";
import { Button, Card , Col } from "react-bootstrap";
import './DentalServices.css';
const DentalService = (props) => {
  const { img, title, description } = props.service;
  return (
    <Col>
      <Card className="h-100 customized-card">
        <Card.Img className="customized-card-img" variant="top" src={img} />
        <Card.Body className="customized-card-body">
          <Card.Title> {title}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="customized-card-footer text-center">
            <Button>See Details</Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default DentalService;
