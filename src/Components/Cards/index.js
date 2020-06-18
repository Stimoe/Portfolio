import React from "react";
import "./style.css";

function ProjectCards(props) {
  return (
    <div className="project-inside-main-div">
      <div className="project-left-div">
        <div className="project-left-top-div">
          <div className="project-image-div">
            <img className="project-image" src={props.projectImage}></img>
          </div>
        </div>
        <div className="project-left-bottom-div">
          <div className="project-main-title">{props.projectTitle}</div>
        </div>
      </div>
      <div className="project-right-div">
        <div className="project-framework">
          <div className="framework-div">{props.projectDescription}</div>
        </div>
        <div className="project-technologies">
          <div className="languages-div">{props.projectLanguages}</div>
        </div>
        <div className="project-links-div">
          <div className="project-links">
            <a href={props.projectGitHubLink} target="_blank">
              <div className="links-top-div">
                <div className="links-image-div">
                  <img className="links-image" src={props.gitHubIcon}></img>
                </div>
              </div>
              <div className="links-bottom-div">
                <h5 className="link-title">GitHub</h5>
              </div>
            </a>
          </div>
          <div className="project-links">
            <a href={props.websiteLink} target="_blank">
              <div className="links-top-div">
                <div className="links-image-div">
                  <img className="links-image" src={props.websiteIcon}></img>
                </div>
              </div>
              <div className="links-bottom-div">
                <h5 className="link-title">Live</h5>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;
