import React from "react";

export default function Navbar() {
  return (
    <div>
      <section>
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
          <div className="container-fluid">
            <a className="navbar-brand" href=" /">
              Navbar
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
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
}
