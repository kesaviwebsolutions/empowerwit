import React from "react";
import img from "./images/img10.png";
import bg1 from "./images/background_wt.png";

export default function Navbar() {
  return (
    <div>
      <section>
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
          <div className="container-fluid">
            <a className="navbar-brand" href="/" style={{ width: "0" }}>
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
              <ul className="navbar-nav m-auto">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#about-us"
                  >
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#trainings">
                    Trainings
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#partners">
                    Partners
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#roadmap">
                    Roadmap
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/courses">
                    Courses
                  </a>
                </li>
              </ul>

              <div className="buttons d-flex">
                <div
                  className="btn-sign"
                  style={{
                    border: "none",
                    background: "#554c4c",
                    color: "#fff",
                    maxWidth: "100px",
                    padding: "8px 20px",
                    marginRight: "10px",
                    cursor: "default",
                  }}
                >
                  Sign in
                </div>
                <div className="btn-register">Register</div>
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
