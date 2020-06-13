import React from "react";
import "./style.css";
import gitHubIcon from "../../assets/icons/GitHub_Logo.png";

function AboutCards(props) {
  return (
    <div>
      <div className="inside-about-card-div">
        <div className="inside-about-div">
          <div className="top-div">
            <div className="left-div"></div>
            <div className="right-div"></div>
          </div>
          <div className="bottom-div">
            <div className="github-link-div">
              <a href="https://github.com/Stimoe" target="_blank">
                <div className="gitHub-link">
                  <img
                    className="links-image"
                    src="https://imgur.com/oxBw1Nd"
                  ></img>
                </div>
              </a>
            </div>

            <div className="linkedIn-link-div"></div>
          </div>
        </div>
      </div>
      <div className="inside-about-card-div"></div>
    </div>
  );
}

export default AboutCards;
