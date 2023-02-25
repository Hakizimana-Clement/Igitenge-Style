import React from "react";
import Fade from "react-reveal/Fade";
export default function Test() {
  return (
    <div className="testContainer">
      <Fade top distance="20%" duration={1500}>
        <div className="testCard"></div>
        <div className="testCard"></div>
        <div className="testCard"></div>
        <div className="testCard"></div>
        <div className="testCard"></div>
        <div className="testCard"></div>
        <div className="testCard"></div>
        <div className="testCard"></div>
        <div className="testCard"></div>
        <div className="testCard"></div>
      </Fade>
    </div>
  );
}
