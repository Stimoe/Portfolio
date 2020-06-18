import React, { Fragment, Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Header from "../../Components/NavBar/index";
import AboutCards from "../../Components/AboutCards/index";
import gitHubIcon from "../../assets/icons/GitHub_Logo.png";
import "./style.css";

class About extends Component {
  render() {
    return (
      <div className="about-page-div">
        <div className="sticky-top">
          <Header />
        </div>

        <AboutCards />
      </div>
    );
  }
}

export default About;
