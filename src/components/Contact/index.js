import React from "react";
import "./Contact.scss";
const leftBrace = "{";
const rightBrace = "}";
function Contact() {
  return (
    <div className="contact" id="contact">
      <h1>Contact</h1>
      <div className="code">
        <div className="code__numbers">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
        </div>
        <div className="code__info">
          <p>
            <span>.socials </span>
            {leftBrace}
          </p>
          <div className="code__indent">
            <div className="code__indent__item">
              <p>email:</p>
              <a href="mailto:ddlyjr@gmail.com">
                <span>ddalyjr@gmail.com</span>
              </a>
            </div>
            <div className="code__indent__item">
              <p>github:</p>
              <a href="https://github.com/ddjr">
                <span>https://github.com/ddjr </span>
              </a>
            </div>
            <div className="code__indent__item">
              <p>instagram:</p>
              <a href="https://www.instagram.com/david.daly.jr/">
                <span>@david.daly.jr</span>
              </a>
            </div>
          </div>
          <p>{rightBrace}</p>
        </div>
      </div>
      <div className="contact__info"></div>
      <div className="contact__form"></div>
    </div>
  );
}

export default Contact;
