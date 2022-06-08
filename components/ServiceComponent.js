import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function ServiceComponent() {
  return (
    <div className="service-container-bg" id='service'>
      <Container className="service-container">
        <Row>
          <Col xs={12} md={4}>
            <img src="assets/image-one.png" className="img-fluid service-img" />
            <h2>Best Offer In Town</h2>
            <p>
                Guarantees the best offer mong the popular Food delivery Companies.
            </p>
          </Col>
          <Col xs={12} md={4}>
            <img src="assets/image-two.png" className="img-fluid service-img" />
            <h2>Fast Delivery</h2>
            <p>
              You don't have to wait for you food for long as we ensure the fast delivery.
            </p>
          </Col>
          <Col xs={12} md={4}>
            <img
              src="assets/image-three.png"
              className="img-fluid service-img"
            />
            <h2>Quality Food</h2>
            <p>
              Quality of the food is the primary aspect of our company.
            </p>
          </Col>
        </Row>
        <hr />
      </Container>
    </div>
  );
}

export default ServiceComponent;