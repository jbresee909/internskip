import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import cookie from "js-cookie";
import axios from "axios";

import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import Login from "./components/Login";
import Register from "./components/Register";
import ProjectTemplate from "./components/ProjectTemplate";
import PostProject from "./components/PostProject";
import Projects from "./components/Projects";
import ProjectCategories from "./components/ProjectCategories";
import Footer from "./components/Footer";

function App() {
  const [auth, setAuth] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    data: { first_name: "", last_name: "", username: "", phone: "" }
  });

  useEffect(() => {
    // Checks for cookie
    if (!cookie.get("crumbl")) {
      return console.log("no user is currently logged in");
    }

    // If user logged in, uses jwt to retrieve user info
    // Passes down user info to other components
    const token = cookie.get("crumbl");
    const port = process.env.PORT || 5000;
    axios
      .get("http://localhost:" + port + "/api/users/auth/user", {
        headers: {
          "x-auth-token": token
        }
      })
      .then(user => {
        setCurrentUser(user);
        setAuth(true);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <Router>
      <Header currentUser={currentUser} auth={auth} />
      <Route path="/" exact component={Main} />
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/project/:id" component={ProjectTemplate} />
      <Route path="/create-project" exact component={PostProject} />
      <Route path="/projects/" exact component={Projects} />
      <Route path="/projects/:category" component={Projects} />
      <Route path="/project-categories" component={ProjectCategories} />
      <Footer />
    </Router>
  );
}

export default App;
