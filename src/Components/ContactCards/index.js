import React from "react";
import "./style.css";
import pdfResume from "../../assets/pdf/Thomas_Stimac_Resume.pdf";

function ContactCards(props) {
  return (
    <div>
      <div className="inside-contact-card-div">
        <div className="inside-contact-div">
          <div className="first-contact-div">
            <div className="first-div-top">
              <h1 className="email-header">EMAIL</h1>
            </div>
            <div className="first-div-bottom">
              <h1 className="email">THOMAS.S.STIMAC@GMAIL.COM</h1>
            </div>
          </div>
          <div className="second-contact-div">
            <div className="div-for-resume-title">
              <div className="resume-title">
                <a>RESUME</a>
              </div>
            </div>
            <div className="div-for-pdf">
              <a
                className="pdf-title"
                href={pdfResume}
                download="Thomas's resume"
              >
                RESUME
              </a>
            </div>
          </div>
          <div className="third-contact-div">
            <div className="phone-number-title-div">
              <div className="phone-number-title">
                <a>PHONE (360) 710-3375</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactCards;
