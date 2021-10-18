import React from "react";
import { Container } from "react-bootstrap";
import "./Contact.css";
const Contact = () => {
  return (
    <Container>
      <div className="row contact p-5">
        <div className="col-md-6 d-flex justify-content-center align-items-center text-center">
          <div>
            <h1>For any Touble</h1>
            <h1>& For Special Care</h1>
            <h3 className="contact-no">Contact Us Today +880 176 776 xxxx </h3>
          </div>
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <img
            className="img-fluid lady-pic"
            src="https://i.ibb.co/b6FKjVy/overview.png"
            alt=""
          />
        </div>
      </div>
    </Container>
  );
};

export default Contact;
