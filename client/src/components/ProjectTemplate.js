import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import axios from "axios";

const ProjectTemplate = props => {
  const [projectState, setProjectState] = useState({
    project: {
      data: [{ title: "", organization: "", description: "" }]
    }
  });
  useEffect(() => {
    const port = process.env.PORT || 5000;
    axios
      .get(
        "http://localhost:" +
          port +
          "/api/projects/project/" +
          props.match.params.id
      )
      .then(project => {
        setProjectState({ project });
      })
      .catch(err => {
        console.log(err);
      });
  });

  const project = projectState.project.data[0];

  return (
    <Card
      className="w-75 mx-auto"
      style={{ marginTop: "120px", marginBottom: "100px" }}
    >
      <Card.Header>{project.organization}</Card.Header>
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Card.Text className="project-desc">{project.description}</Card.Text>
        <Button variant="primary">Add to Your Projects</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
};

export default ProjectTemplate;
