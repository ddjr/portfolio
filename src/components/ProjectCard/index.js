import React from "react";
import "./ProjectCard.scss";
// fire
function ProjectCard({ img, title, description, url, id }) {
  console.log(title);
  return (
    <div className="projectCard" onClick={() => window.open(url)} key={id}>
      <div className="projectCard__container">
        <img src={img} alt="project" className="projectCard__img" />
        <div className="projectCard__container__title">
          <h2 className="projectCard__title">{title}</h2>
          <button className="projectCard__Demo">Click to Demo</button>
        </div>
      </div>
      <div className="projectCard__description">
        <p> {description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
