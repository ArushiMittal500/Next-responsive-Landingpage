import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function HeaderComponent() {
  return (
<div class="m-4">
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a href="#" class="navbar-brand">
                <img src="/assets/food-logo.png" height="50" alt="Foodo"/>
            </a>
            <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav">
                    <a href="#" class="nav-item nav-link active">Home</a>

                </div></div>
                <div class="navbar-nav ">
                <a href="#service" class="nav-item nav-link">Services Provided</a>
                    <a href="#about" class="nav-item nav-link">About</a>
                    <a href="#contact" class="nav-item nav-link">Contact</a>
                    <a href="#download" class="nav-item nav-link">Download App</a>
                </div>
            
        </div>
    </nav>
</div>
  );
}

export default HeaderComponent;