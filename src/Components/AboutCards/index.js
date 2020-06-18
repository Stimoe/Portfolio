import React from "react";
import "./style.css";
import gitHubIcon from "../../assets/icons/GitHub_Logo_White.png";
import linkedInIcon from "../../assets/icons/linkedIn_logo_white.webp";
import myImage from "../../assets/images/myImageCropped.jpg";

function AboutCards(props) {
  return (
    <div className="main-about-div">
      <div className="inside-about-card-div">
        <div className="inside-about-div">
          <div className="top-div">
            <div className="left-div">
              <div className="my-image-div">
                <img className="my-image" src={myImage}></img>
              </div>
            </div>
            <div className="right-div">
              <div className="inside-right-div">
                <div className="inside-right-about-div-top">
                  <p className="paragraph-about-me">
                    Full Stack Web Developer with a certificate from the
                    University of Washington.
                  </p>
                </div>
                <div className="inside-right-about-div-bottom">
                  <p className="paragraph-about-me">
                    Experience designing and building applications using best
                    practices in UX, technology, architecture, and process.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-div">
            <div className="github-link-div">
              <a href="https://github.com/Stimoe" target="_blank">
                <div className="gitHub-link">
                  <img className="links-image" src={gitHubIcon}></img>
                </div>
              </a>
            </div>
            <div className="linkedIn-link-div">
              <a
                href="https://www.linkedin.com/in/thomas-stimac/"
                target="_blank"
              >
                <div className="gitHub-link">
                  <img className="links-image" src={linkedInIcon}></img>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="inside-about-card-div">
        <div className="lower-lnside-about-div">
          <div className="upper-about-div">
            <div className="languages-about-title">
              <p className="languages-title">Languages and Applications:</p>
            </div>
            <div className="languages-about">
              <p className="languages-about-me">
                HTML5, CSS3, Javascript, JQuery, Bootstrap, Firebase, Node Js,
                MySQL, MongoDB, Express, Handelbars.js, Heroku, and ReactJS.
              </p>
            </div>
          </div>
          {/* <div className="lower-about-div">
            <div className="interest-title-div">
              <p className="other-about-me">MY INTEREST</p>
            </div>
            <div className="interest-div">
              <div className="interest-top">
                <div className="interest-div-one">
                  <p className="other-about-me">RAISING HONEY BEES</p>
                </div>
                <div className="interest-div-two">
                  <p className="other-about-me">PLAYING VIDEO GAMES</p>
                </div>
              </div>
              <div className="interest-bottom">
                <div className="interest-div-three">
                  <p className="other-about-me">TRAVELING</p>
                </div>
                <div className="interest-div-four">
                  <p className="other-about-me">READING</p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}

export default AboutCards;
