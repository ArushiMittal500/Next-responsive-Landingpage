import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function AboutComponent() {
  return (
    <div className="about-container-bg carousel slide carousel-fade" id="about">
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <img src="assets/image-about.png" className="img-fluid" />
          </Col>
          <Col xs={12} md={6} className="about-details">
            <div>
              <h2>Best Offer In Town</h2>
              <b>Get you food in FOODO</b>
              <br />
              <br />
              <p>
              FOODO not only creates delicious food in the fine dining world but also They offer a variety of items such as snacks, meals, and drinks. Their products are all natural and free from preservatives.
              </p>
              <button className="btn btn-custom">Explore More</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutComponent;