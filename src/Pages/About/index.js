import React, { Fragment, Component } from "react";
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

        <AboutCards />
      </div>
    );
  }
}

export default About;
