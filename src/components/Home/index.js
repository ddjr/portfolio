import React from "react";
import "./Home.scss";
import Gif from "../../giphy.webp";
function Home() {
  return (
    <div className="home" id="home">
      <div className="home__content">
        <div className="flex-group">
          <h1>David Daly</h1>
          <img src={Gif} alt="project overview" />
        </div>
        <h2 className="typewriter">Software Engineer</h2>
      </div>
    </div>
  );
}

export default Home;
