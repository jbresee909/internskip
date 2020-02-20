import React, { useState } from "react";
import { Form, Card, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
import cookie from "js-cookie";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [phone, setPhone] = useState("");

  const handleRegisterUser = e => {
    e.preventDefault();

    //checks if password fields match
    if (password !== passwordConfirmation) {
      alert("password fields don't match");
    }

    const port = process.env.PORT || 5000;
    axios
      .post("http://localhost:" + port + "/api/users/add", {
        first_name: firstName,
        last_name: lastName,
        username: username,
        password: password,
        phone: phone
      })
      .then(user => {
        cookie.set("crumbl", user.data.token);
        window.open("/", "_self");
      })
      .catch(err => console.log(err));
  };

  return (
    <Card
      className="w-50 mx-auto p-3"
      style={{ marginTop: "120px", marginBottom: "30px" }}
    >
      <Form>
        <Form.Text className="h3 mb-3">Create a New Account</Form.Text>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>First and Last Name</Form.Label>
          <Row>
            <Col md={6}>
              <Form.Control
                placeholder="First Name"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
              />
            </Col>
            <Col md={6}>
              <Form.Control
                placeholder="Last Name"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
              />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Enter Phone Number"
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPasswordConfirm">
          <Form.Label>Re-Enter Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={passwordConfirmation}
            onChange={e => setPasswordConfirmation(e.target.value)}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={e => handleRegisterUser(e)}
        >
          Register
        </Button>
      </Form>
    </Card>
  );
};

export default Register;
