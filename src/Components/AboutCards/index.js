import React from "react";
import "./style.css";

function AboutCards(props) {
  return (
    <div>
      <div className="inside-about-card-div">
        <div className="inside-about-div">
          <div className="top-div">
            <div className="left-div"></div>
            <div className="right-div"></div>
          </div>
          <div className="bottom-div"></div>
        </div>
      </div>
      <div className="bottom-about-card-div">
        <div className="inside-about-card-div"></div>
      </div>
    </div>
  );
}

export default AboutCards;
