import React from "react";
import img from "./images/img10.png";
import bg1 from "./images/background.png";
export default function Navbar() {
  return (
    <div>
      <section>
        <nav
          className="navbar navbar-expand-lg navbar-light bg-transparent"
          style={{ marginTop: "10px" }}
        >
          <div
            className="container-fluid"
            style={{ maxWidth: "1280px", margin: "50px auto" }}
          >
            <a className="navbar-brand" href=" /" style={{ width: "0" }}>
              <img src={img} alt="" style={{ maxWidth: "150px" }} />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href=" /">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href=" /">
                    Trainings
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href=" /">
                    Partners
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href=" /">
                    Roadmap
                  </a>
                </li>
              </ul>

              <div className="buttons">
                <div
                  className="btn"
                  style={{
                    border: "none",
                    background: "#554c4c",
                    color: "#fff",
                    maxWidth: "100px",
                    padding: "8px 20px",
                    marginRight: "10px",
                  }}
                >
                  Sign in
                </div>
                <div
                  className="btn"
                  style={{ border: "1px solid", marginRight: "10px" }}
                >
                  Register
                </div>
              </div>
            </div>
          </div>
          <div className="background">
            <img src={bg1} alt="" className="bg1" />
          </div>
        </nav>
      </section>
    </div>
  );
}
