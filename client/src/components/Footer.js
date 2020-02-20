import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#333" }} className="pb-4">
      <Container>
        <Row className="pt-4">
          <Col sm={4}>
            <h5 className="text-white">Company</h5>
            <p className="mb-0">
              <Link className="text-light text-decoration-none" to="/">
                About Us
              </Link>
            </p>
            <p className="mb-0">
              <Link className="text-light text-decoration-none" to="/">
                Investor Relations
              </Link>
            </p>
            <p className="mb-0">
              <Link className="text-light text-decoration-none" to="/">
                Careers
              </Link>
            </p>
            <p className="mb-0">
              <Link className="text-light text-decoration-none" to="/">
                Terms of Service
              </Link>
            </p>
            <p className="mb-0">
              <Link className="text-light text-decoration-none" to="/">
                Privacy Policy
              </Link>
            </p>
            <p>
              <Link className="text-light text-decoration-none" to="/">
                Trust & Safety
              </Link>
            </p>
          </Col>
          <Col sm={4}>
            <h5 className="text-white">Resources</h5>
            <p className="mb-0">
              <Link className="text-light text-decoration-none" to="/">
                Customer Support
              </Link>
            </p>
            <p className="mb-0">
              <Link className="text-light text-decoration-none" to="/">
                Internskip Blog
              </Link>
            </p>
            <p className="mb-0">
              <Link className="text-light text-decoration-none" to="/">
                Customer Reviews
              </Link>
            </p>
            <p>
              <Link className="text-light text-decoration-none" to="/">
                Business Stories
              </Link>
            </p>
          </Col>
          <Col sm={4}>
            <h5 className="text-white">Search</h5>
            <p className="mb-0">
              <Link className="text-light text-decoration-none" to="/">
                Find Talent
              </Link>
            </p>
            <p className="mb-0">
              <Link className="text-light text-decoration-none" to="/">
                Search Schools
              </Link>
            </p>
            <p className="mb-0">
              <Link className="text-light text-decoration-none" to="/">
                Search Employers
              </Link>
            </p>
            <p className="mb-0">
              <Link className="text-light text-decoration-none" to="/">
                Search by Education Level
              </Link>
            </p>
            <p>
              <Link className="text-light text-decoration-none" to="/">
                Search by Location
              </Link>
            </p>
          </Col>
        </Row>
        <Row className="justify-content-md-center border-top border-bottom border-light mt-4">
          <Col xs lg="3" className="mt-3">
            <p className="text-white">
              Follow Us: &nbsp;
              <img
                src="https://img.icons8.com/metro/22/000000/facebook-new--v2.png"
                alt="facebook"
              ></img>
              <img
                src="https://img.icons8.com/ios-filled/24/000000/instagram-new.png"
                alt="instagram"
              ></img>
              <img
                src="https://img.icons8.com/ios-filled/24/000000/twitter-squared.png"
                alt="twitter"
              ></img>
              <img
                src="https://img.icons8.com/windows/24/000000/youtube.png"
                alt="youtube"
              ></img>
              <img
                src="https://img.icons8.com/ios-filled/24/000000/linkedin.png"
                alt="linkedIn"
              ></img>
            </p>
          </Col>
          <Col lg="7"></Col>
          <Col xs lg="2" className="mt-3">
            <p className="text-white">
              Mobile App: &nbsp;
              <img
                src="https://img.icons8.com/ios-filled/24/000000/mac-os.png"
                alt="applie"
              ></img>
              <img
                src="https://img.icons8.com/metro/24/000000/android-os.png"
                alt="android"
              ></img>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
