import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import axios from "axios";
import ProjectCategoryCard from "./ProjectCategoryCard";

const ProjectCategories = () => {
  const [categories, setCategories] = useState({
    data: []
  });

  useEffect(() => {
    const port = process.env.PORT || 5000;
    axios
      .get("http://localhost:" + port + "/api/project-categories")
      .then(categories => setCategories(categories))
      .catch(err => console.log(err));
  }, []);
  return (
    <div
      className="container"
      style={{ marginTop: "120px", marginBottom: "40px" }}
    >
      <h4 className="mb-3">All Project Categories</h4>
      <Row>
        {categories.data.map((category, index) => (
          <ProjectCategoryCard
            name={category.name}
            img={category.imageURL}
            link={"/projects/" + category.name.toLowerCase()}
            key={index}
          />
        ))}
      </Row>
    </div>
  );
};

export default ProjectCategories;
