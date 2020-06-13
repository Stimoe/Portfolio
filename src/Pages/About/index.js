import React, { Fragment, Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Header from "../../Components/NavBar/index";
import AboutCards from "../../Components/AboutCards/index";
import "./style.css";

class About extends Component {
  render() {
    return (
      <div className="about-page-div">
        <div className="sticky-top">
          <Header />
        </div>
        <div className="aboutCards-container-div">
          <AboutCards />
        </div>
      </div>
    );
  }
}

export default About;
