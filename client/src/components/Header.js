import React, { useState, useEffect } from "react";
import { Nav, Dropdown, Navbar } from "react-bootstrap";
import cookie from "js-cookie";
import axios from "axios";

const Header = props => {
  const [searchDropDown, setSearchDropDown] = useState(false);
  const currentUser = props.currentUser.data;
  const handleLogOutUser = () => {
    cookie.remove("crumbl");
    window.open("/", "_self");
  };

  // get projects | update projects
  const [projects, setProjects] = useState({
    data: []
  });

  useEffect(() => {
    const port = process.env.PORT || 5000;
    axios
      .get("http://localhost:" + port + "/api/projects/header-menu")
      .then(projects => setProjects(projects))
      .catch(err => console.log(err));
  }, []);

  const handleUpdateProjects = title => {
    const port = process.env.PORT || 5000;
    axios
      .get("http://localhost:" + port + "/api/projects/find-by-title/" + title)
      .then(projects => setProjects(projects))
      .catch(err => console.log(err));
  };

  return (
    <div>
      <Navbar
        bg="light"
        variant="light"
        collapseOnSelect
        expand="lg"
        fixed="top"
      >
        <a className="navbar-brand" href="/">
          <img
            src="https://res.cloudinary.com/justin-bresee/image/upload/v1580358986/Internskip/internskip_logo_x2n2pm.png"
            width="200"
            alt=""
          />
        </a>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              id="login-button"
              href="/login"
              className="bg-light text-primary rounded px-3 mr-3"
              style={{
                display: cookie.get("crumbl") ? "none" : ""
              }}
            >
              Login
            </Nav.Link>
            <Nav.Link
              id="register-button"
              href="/register"
              className="bg-light text-primary rounded px-3 mr-3"
              style={{
                display: cookie.get("crumbl") ? "none" : ""
              }}
            >
              Sign Up
            </Nav.Link>
            <Nav.Link
              id="register-button"
              href="/create-project"
              className="bg-primary text-white rounded mx-2 px-2"
              style={{
                display: cookie.get("crumbl") ? "none" : ""
              }}
            >
              Post a Project
            </Nav.Link>
          </Nav>
          <Dropdown
            className="ml-auto"
            show={searchDropDown}
            onToggle={() => setSearchDropDown(!searchDropDown)}
          >
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              <input
                onChange={e => handleUpdateProjects(e.target.value)}
                placeholder="Search Projects..."
                className="p-2"
                style={{
                  width: "225px",
                  borderRadius: "20px"
                }}
              ></input>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {projects.data.map((project, index) => (
                <Dropdown.Item href={"/project/" + project._id} key={index}>
                  {project.title}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown
            drop={"down"}
            style={{ visibility: props.auth ? "visible" : "hidden" }}
          >
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              {currentUser.first_name + " " + currentUser.last_name}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
              <Dropdown.Item href="#/action-1">Portfolio</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
              <Dropdown.Item onClick={() => handleLogOutUser()}>
                Sign Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
