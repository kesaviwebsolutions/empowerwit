import React from "react";

export default function Trainings() {
  return (
    <div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6">
                </div>
                <div className="col-md-6">
                  <div
                    className="available-content"
                    style={{
                      marginTop: "50px",
                      marginLeft: "-13px",
                      position: "relative ",
                    }}
                  >
                    <div className="ac">
                      <h2
                        style={{
                          color: "#333333",
                          fontSize: "25px",
                          fontWeight: "700",
                        }}
                      >
                        Digital Marketing & PR
                      </h2>
                      <p style={{ width: "100%%", color: "#333333" }}>
                        Business Communication Understanding digital platforms
                        Creating impactful content PPC Ad campaigns
                      </p>
                    </div>

                    <div
                      className="ac"
                      style={{ marginTop: "50px", position: "relative" }}
                    >
                      <h2
                        style={{
                          color: "#333333",
                          fontSize: "30px",
                          fontWeight: "700",
                        }}
                      >
                        Business Design
                      </h2>
                      <p style={{ width: "100%", color: "#333333" }}>
                        Logo & Branding UI/UX Development Business presentation
                        design Whitepaper/Pitchdeck
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="available-content"
                style={{ marginTop: "250px", marginLeft: "75px" }}
              >
                <div className="ac position-relative">
                  <h2 style={{ color: "#333333", fontWeight: "700" }}>
                    Social Media Development
                  </h2>
                  <p
                    style={{
                      width: "100%",
                      color: "#333333",
                      fontSize: "15px",
                    }}
                  >
                    Understanding various social platforms Creating engagement
                    on social media Promotion of content on social media Power
                    of networking & collaborations
                  </p>
                </div>
                <div
                  className="ac"
                  style={{ marginTop: "50px", position: "relative" }}
                >
                  <h2 style={{ color: "#333333", fontWeight: "700" }}>
                    Blockchain Development
                  </h2>
                  <p
                    style={{
                      width: "100%",
                      color: "#333333",
                      fontSize: "15px",
                    }}
                  >
                    Basics of blockchain
                    <br /> Smart Contract logic development <br />
                    Solidity & Rust
                    <br /> Web3 Js
                  </p>
                </div>
                <div
                  className="ac"
                  style={{ marginTop: "50px", position: "relative" }}
                >
                  <h2 style={{ color: "#333333", fontWeight: "700" }}>
                    Web Development
                  </h2>
                  <p
                    style={{
                      width: "100%",
                      color: "#333333",
                      fontSize: "15px",
                    }}
                  >
                    HTML, CSS & JS
                    <br /> React Js
                    <br /> WordPress Websites
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
