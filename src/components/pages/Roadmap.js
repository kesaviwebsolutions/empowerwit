import React from "react";
import img14 from "../images/img14.png";
import img8 from "../images/img8.png";

export default function Roadmap() {
  return (
    <div>
      <section>
        <div className="container">
          <div className="roadmap-area">
            <img src={img14} alt="" className="road-mg" />
          </div>
          <div className="empower-img">
            <img src={img8} alt="" className="rmi" />
          </div>
        </div>
      </section>
    </div>
  );
}
