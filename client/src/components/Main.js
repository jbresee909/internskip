import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Hero from "./Hero";
import ProjectCategoryCard from "./ProjectCategoryCard";
import { Row, Col, Jumbotron, Container, Button, Card } from "react-bootstrap";
import axios from "axios";

const Main = () => {
  const [projectCategories, setProjectCategories] = useState({
    data: []
  });

  useEffect(() => {
    const port = process.env.PORT || 5000;
    axios
      .get("http://localhost:" + port + "/api/project-categories/home-page")
      .then(categories => setProjectCategories(categories))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="bg-light" style={{ marginTop: "80px" }}>
      <div className="divider"></div>
      <Hero />
      <div className="divider"></div>
      <div className="container mx-auto">
        <h5 className="mt-5 mb-3 mx-2">Find a Project Category</h5>
        <Row>
          {projectCategories.data.map((category, index) => (
            <ProjectCategoryCard
              link={"/projects/" + category.name.toLowerCase()}
              name={category.name}
              img={category.imageURL}
              index={index}
              key={index}
            />
          ))}
        </Row>
        <p className="text-muted mt-5 pb-5 text-center">
          Don't see what you want? Click{" "}
          <Link to="/project-categories">here</Link> for more categories!
        </p>
      </div>
      <Jumbotron
        fluid
        id="how-it-works"
        className="text-white mb-0"
        style={{ backgroundColor: "#2d6db5" }}
      >
        <Container>
          <h1>How it Works</h1>
          <p>This section describes how the process works to the clients.</p>
          <Row className="text-dark">
            <Col md={3}>
              <Card className="my-2 shadow">
                <Card.Body>
                  <Card.Text className="text-center">
                    Companies post projects.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="my-2 shadow">
                <Card.Body>
                  <Card.Text className="text-center">
                    Students select projects to work on.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="my-2 shadow">
                <Card.Body>
                  <Card.Text className="text-center">
                    Instructors assist students on projects.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="my-2 shadow">
                <Card.Body>
                  <Card.Text className="text-center">
                    All parties benefit!
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <Jumbotron className="mb-0">
        <Row>
          <Col style={{ textShadow: "3px 5px 8px #aaa" }}>
            <h1>Build A Portflio With Real Companies</h1>
            <p>
              Internskip connects businesses with students so that students get
              the real-world experience that companies want to hire.
            </p>
            <p>
              <Link to="/register">
                <Button variant="primary">Get Started</Button>
              </Link>
            </p>
          </Col>
          <Col>
            <div className="woman-image shadow"></div>
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
};

export default Main;
