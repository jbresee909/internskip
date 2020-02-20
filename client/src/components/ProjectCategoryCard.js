import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProjectCategoryCard = props => {
  return (
    <Col md={3}>
      <Link to={props.link}>
        <Card className="my-2 shadow">
          <Card.Img variant="top" src={props.img} />
          <Card.Body>
            <Card.Text className="text-center">{props.name}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default ProjectCategoryCard;
