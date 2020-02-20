import React, { useState, useEffect } from "react";
import { ProgressBar, Button, Card, Form } from "react-bootstrap";
import axios from "axios";

const PostProject = () => {
  // sets values of properties
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [visibility, setVisibility] = useState("");

  const [projectCategories, setProjectCategories] = useState({
    data: []
  });

  useEffect(() => {
    const port = process.env.PORT || 5000;
    axios
      .get("http://localhost:" + port + "/api/project-categories")
      .then(categories => setProjectCategories(categories))
      .catch(err => console.log(err));
  }, []);

  // sets display of all the slides
  const [slideDisplays, setSlideDisplays] = useState([
    { name: "slide one", display: true },
    { name: "slide two", display: false },
    { name: "slide three", display: false },
    { name: "slide four", display: false },
    { name: "slide five", display: false }
  ]);

  const handleSetSlideDisplays = (hide, show) => {
    const newSlideDisplays = { ...slideDisplays };
    newSlideDisplays[hide].display = false;
    newSlideDisplays[show].display = true;
    setSlideDisplays(newSlideDisplays);
  };

  const handleSubmit = () => {
    handleSetSlideDisplays(3, 4);
  };

  return (
    <div style={{ marginTop: "120px" }}>
      <Card
        style={{ display: slideDisplays[0].display ? "" : "none" }}
        className="w-75 my-4 mx-auto p-5"
      >
        <ProgressBar now={25} className="mb-3" />
        <Form>
          <h3>Basic Information</h3>
          <p className="text-muted">Tell us about your project.</p>
          <Form.Group controlId="project-title">
            <Form.Label>Project Title</Form.Label>
            <Form.Control
              placeholder="Example: 'Marketing Strategy'"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Label style={{ display: "block" }}>Project Category</Form.Label>
          <select
            className="mb-3"
            onChange={e => setSelectedCategory(e.target.value)}
          >
            <option>Select a Category</option>
            {projectCategories.data.map((category, index) => (
              <option value={category.name} key={index}>
                {category.name}
              </option>
            ))}
          </select>
          <Form.Group controlId="project-description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows="8"
              placeholder="Enter project description..."
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
          </Form.Group>
        </Form>
        <div className="text-right">
          <Button
            style={{ width: "100px" }}
            className="mx-2"
            variant="primary"
            onClick={() => handleSetSlideDisplays(0, 1)}
          >
            Next
          </Button>
        </div>
      </Card>

      <Card
        style={{ display: slideDisplays[1].display ? "" : "none" }}
        className="w-75 my-4 mx-auto p-5"
      >
        <ProgressBar now={50} className="mb-3" />
        <h3>Upload Project Resources</h3>
        <p className="text-muted">
          Choose any files, images, or assets to include in project.
        </p>
        <div className="text-right">
          <Button
            style={{ width: "100px" }}
            className="mx-2"
            variant="primary"
            onClick={() => handleSetSlideDisplays(1, 0)}
          >
            Previous
          </Button>
          <Button
            style={{ width: "100px" }}
            className="mx-2"
            variant="primary"
            onClick={() => handleSetSlideDisplays(1, 2)}
          >
            Next
          </Button>
        </div>
      </Card>

      <Card
        style={{ display: slideDisplays[2].display ? "" : "none" }}
        className="w-75 my-4 mx-auto p-5"
      >
        <ProgressBar now={75} className="mb-3" />
        <h3>Set Visibility</h3>
        <p className="text-muted">
          Choose who can see and work on your project.
        </p>
        <select
          onChange={e => {
            setVisibility(e.target.value);
          }}
          className="mb-4"
        >
          <option>Select One</option>
          <option>Anyone</option>
          <option>Under Graduate Programs</option>
          <option>Master's Programs</option>
          <option>Doctorate's Programs</option>
        </select>
        <div className="text-right">
          <Button
            style={{ width: "100px" }}
            className="mx-2"
            variant="primary"
            onClick={() => handleSetSlideDisplays(2, 1)}
          >
            Previous
          </Button>
          <Button
            style={{ width: "100px" }}
            className="mx-2"
            variant="primary"
            onClick={() => handleSetSlideDisplays(2, 3)}
          >
            Next
          </Button>
        </div>
      </Card>

      <Card
        style={{ display: slideDisplays[3].display ? "" : "none" }}
        className="w-75 my-4 mx-auto p-5"
      >
        <ProgressBar now={100} className="mb-3" />
        <h3>Review Details</h3>
        <p className="text-muted">Make sure everything is entered correctly.</p>
        <h4>Project Title: {title}</h4>
        <p>Description: {description}</p>
        <p>Category: {selectedCategory}</p>
        <p>Visibility: {visibility}</p>
        <div className="text-right">
          <Button
            style={{ width: "100px" }}
            className="mx-2"
            variant="primary"
            onClick={() => handleSetSlideDisplays(2, 1)}
          >
            Previous
          </Button>
          <Button
            style={{ width: "100px" }}
            className="mx-2"
            variant="primary"
            onClick={() => handleSubmit()}
          >
            Submit
          </Button>
        </div>
      </Card>

      <Card
        style={{ display: slideDisplays[4].display ? "" : "none" }}
        className="w-75 my-4 mx-auto p-5 text-success"
      >
        <h3>Project Created Successfully!</h3>
        <p>Project Details</p>
        <h4>Project Title: {title}</h4>
        <p>Description: {description}</p>
        <p>Category: {selectedCategory}</p>
        <p>Visibility: {visibility}</p>
      </Card>
    </div>
  );
};

export default PostProject;
