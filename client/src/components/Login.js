import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import cookie from "js-cookie";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleAuthenticateUser = e => {
    const port = process.env.PORT || 5000;
    e.preventDefault();

    // sends request to login user
    axios
      .post("http://localhost:" + port + "/api/users/auth", {
        username: username,
        password: password
      })
      .then(user => {
        //embeds cookie & returns user to home page
        cookie.set("crumbl", user.data.token, { expires: 1 });
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
        <Form.Text className="h3 mb-3">Login</Form.Text>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={e => setUsername(e.target.value)}
            value={username}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={e => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember Me" />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={e => handleAuthenticateUser(e)}
        >
          Login
        </Button>
        <br />
        <Link to="/register" className="text-primary">
          Register for new account | &nbsp;
        </Link>
        <Link to="/register" className="text-primary">
          Forgot your Password?
        </Link>
      </Form>
    </Card>
  );
};

export default Login;
