import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./style.css";

function ProjectCards(props) {
  return (
    // <div className="project-div">
    <Row className="project-div">
      <Col lg={4}></Col>
      <Col className="project-left-column">
        <Row className="project-left-top-row">
          <div className="project-image-div">
            <img className="project-image" src={props.projectImage}></img>
          </div>
        </Row>
        <Row className="project-left-bottom-row">
          <div className="project-header-div">
            <h1 className="project-header">{props.projectTitle}</h1>
          </div>
        </Row>
      </Col>
      <Col className="project-right-column">
        <Row className="project-right-first-row">
          <div className="project-description-div">
            <h5>{props.projectDescription}</h5>
          </div>
        </Row>
        <Row className="project-right-second-row">
          <div className="project-technologies-div">
            {props.projectLanguages}
          </div>
        </Row>
        <Row className="project-right-third-row">
          <div className="project-resources-separator-div"></div>
        </Row>
        <Row className="project-right-fourth-row">
          <div className="project-resources-div">
            <p className="project-resources-title">Resources</p>
          </div>
        </Row>
        <Row className="project-right-fifth-row">
          <div className="project-resources">
            <div className="first-project-div">
              <Row className="project-row-icon">
                <div className="project-icon-div">
                  <img
                    className="project-icon-image"
                    src={props.gitHubIcon}
                  ></img>
                </div>
              </Row>

              <Row className="project-row-name">
                <div className="project-icon-title">
                  <h1 className="name-for-icon">Git Repo</h1>
                </div>
              </Row>
            </div>
            <div className="second-project-div">
              <Row className="project-row-icon">
                <div className="project-icon-div">
                  <img
                    className="project-icon-image"
                    src={props.websiteIcon}
                  ></img>
                </div>
              </Row>

              <Row className="project-row-name">
                <div className="project-icon-title">
                  <h1 className="name-for-icon">Live</h1>
                </div>
              </Row>
            </div>
          </div>
        </Row>
      </Col>
      <Col lg={4}></Col>
    </Row>
    // </div>
  );
}

export default ProjectCards;
