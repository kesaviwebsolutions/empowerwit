import React from "react";
import Bottom from "./Bottom";
import img5 from "./images/img.png";
import img6 from "./images/img9.png";
import About from "./pages/About";

export default function Main() {
  return (
    <div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="hero-img">
                <img src={img5} alt="" className="hero" />
              </div>
            </div>
            <div className="col-md-8">
              <div className="hero-heading">
                <img src={img6} alt="" className="heading-img" />
              </div>
              <div className="hero-para">
                <p className="para-text">
                  Discover our open trainings specifically designed to groom
                  women in the field of Information Technology.
                </p>
              </div>
              <div className="explore-buttons">
                <a href="/courses" className="btn">
                  Explore our trainings
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="about-us">
        <About />
      </div>
      <Bottom />
    </div>
  );
}
