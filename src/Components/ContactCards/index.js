import React from "react";
import "./style.css";

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
              <h1 className="email-header">Email me at</h1>
            </div>
            <div className="second-div-bottom"></div>
            <h1 className="email-header">Thomas.S.Stimac@gmail.com</h1>
          </div>
          <div className="third-contact-div"></div>
          <div className="fourth-contact-div"></div>
        </div>
      </div>
    </div>
  );
}

export default ContactCards;
