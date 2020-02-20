import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Projects = props => {
  const [projects, setProjects] = useState({
    data: []
  });
  useEffect(() => {
    const category = props.match.params.category;
    const port = process.env.PORT || 5000;
    axios
      .get("http://localhost:" + port + "/api/projects/" + category)
      .then(projects => setProjects(projects))
      .catch(err => console.log(err));
  }, [props.match.params.category]);

  return (
    <div
      style={{ marginTop: "120px", marginBottom: "40px" }}
      className="container"
    >
      <Row>
        {projects.data.map((project, index) => (
          <Col sm={3} index={index}>
            <Link to={"/project/" + project._id}>
              <Card id={project._id}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Projects;
