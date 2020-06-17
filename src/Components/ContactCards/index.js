import React from "react";
import "./style.css";
import pdfResume from "../../assets/pdf/Thomas_Stimac_Resume.pdf";

function ContactCards(props) {
  return (
    <div>
      <div className="inside-contact-card-div">
        <div className="inside-contact-div">
          <div className="first-contact-div">
            <h1 className="contact-header">HOW TO CONTACT ME</h1>
          </div>
          <div className="second-contact-div">
            <div className="second-div-top">
              <h1 className="email-header">EMAIL ME AT</h1>
            </div>
            <div className="second-div-bottom"></div>
            <h1 className="email">THOMAS.S.STIMAC@GMAIL.COM</h1>
          </div>
          <div className="third-contact-div">
            <div className="div-for-resume-title">
              <div className="resume-title">
                <a>PDF OF RESUME</a>
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
          <div className="fourth-contact-div"></div>
        </div>
      </div>
    </div>
  );
}

export default ContactCards;
