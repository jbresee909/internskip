import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <Jumbotron className="my-0 hero text-white p-5" style={{ height: "350px" }}>
      <div
        className="p-3 mt-3"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.25)",
          borderRadius: "10px"
        }}
      >
        <div style={{ textShadow: "3px 5px 8px #555" }}>
          <h1>Find Your Passion. Sooner.</h1>
          <p>
            Skip the internship. Close the experience gap before you graduate.
          </p>
        </div>
        <p>
          <Link to="/register">
            <Button variant="primary mx-2">Get Started</Button>
          </Link>
          <Button
            variant="light"
            className="text-primary mx-2"
            href="#how-it-works"
          >
            How it Works
          </Button>
        </p>
      </div>
    </Jumbotron>
  );
};

export default Hero;
