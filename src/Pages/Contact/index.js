import React, { Fragment, Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Header from "../../Components/NavBar/index";
import ContactCards from "../../Components/ContactCards/index";
import "./style.css";

class Contact extends Component {
  render() {
    return (
      <div className="contact-page-div">
        <div className="sticky-top">
          <Header />
        </div>
        <div className="contact-cards-container-div">
          <ContactCards />
        </div>
      </div>
    );
  }
}

export default Contact;
