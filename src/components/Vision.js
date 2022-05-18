import React from "react";
import img20 from "./images/img20.png";
import img17 from "./images/img17.png";
import img18 from "./images/img18.png";
import img19 from "./images/img19.png";
import img8 from "./images/img8.png";
import img12 from "./images/img12.png";
import img6 from "./images/img6.png";

export default function Vision() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="drawing-desktop">
              <div className="dd-image">
                <img src={img20} alt="" className="ddi" />
                <img src={img8} alt="" className="ei2" />
              </div>
              <div className="dd-images">
                <img src={img19} alt="" className="vi" />
                <img src={img18} alt="" className="vi" />
                <img src={img17} alt="" className="vi" />
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="vision-area">
              <div className="row">
                <div className="col-md-6">
                  <div className="vision-content">
                    <div className="vision">
                      <h2 style={{ color: "#0071BC", fontWeight: "700" }}>
                        Vision
                      </h2>
                      <p>
                        Empowerment of women across the globe in the field of
                        information technology.
                      </p>
                    </div>
                    <div className="vision">
                      <h2 style={{ color: "#0071BC", fontWeight: "700" }}>
                        Short term goal
                      </h2>
                      <p>
                        Making a team of 30 trained housewives by the end of
                        March 2023 to lead the mission of EWIT.
                      </p>
                    </div>
                    <div className="vision">
                      <h2 style={{ color: "#0071BC", fontWeight: "700" }}>
                        Mission
                      </h2>
                      <p>
                        Bring financial freedom to the household women by
                        training them to use information technologies to their
                        advantage.
                      </p>
                    </div>
                  </div>
                  <div className="line">
                    <p
                      style={{
                        fontWeight: "700",
                        width: "100%",
                        fontSize: "20px",
                      }}
                    >
                      EmpowerWIT is the shot of technical dose of adrenaline
                      women of tomorrow needs
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="vision-img">
                    <img src={img12} alt="" className="vi" />
                  </div>
                  <div className="idea">
                    <img src={img6} alt="" className="idea-img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
