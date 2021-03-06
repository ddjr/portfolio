import React from "react";
import "./About.scss";
import Face from "../../media/face.jpg";
function About() {
  return (
    <div className="about" id="about">
      <h1>About</h1>
      <img src={Face} alt="face" />
      <p>
        {" "}
        Hi there! David is a Software Engineer from the United States. He
        starting college at 14 years old, where he learned to code. He recieved
        his degree in Computer Science from Kalamazoo College and has been
        coding professionally since 2014. David has worked on enterprise
        software used by Fortune 10 companies, as well as startup projects.
      </p>
    </div>
  );
}

export default About;
