import React from 'react'
import { Nav } from 'react-bootstrap'

export default function MobileNav() {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-transparent">
          <div className="container-fluid">
            <Nav.Link className="navbar-brand" href="#"></Nav.Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Nav.Link className="nav-link active" aria-current="page" href="#about-us">About</Nav.Link>
                </li>
                <li className="nav-item">
                  <Nav.Link className="nav-link" href="#trainings">Training</Nav.Link>
                </li>
                <li className="nav-item">
                  <Nav.Link className="nav-link" href="#partners">Partners</Nav.Link>
                </li>
                <li className="nav-item">
                  <Nav.Link className="nav-link" href="#roadmap">Roadmap</Nav.Link>
                </li>
              </ul>
          
            </div>
          </div>
        </nav>
        {/* <nav   className="navbar bg-light fixed-top">
          <div   className="container-fluid">
            <a   className="navbar-brand" href="/">
              Offcanvas navbar
            </a>
            <button
                className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
            >
              <span   className="navbar-toggler-icon"></span>
            </button>
            <div
                className="offcanvas offcanvas-end"
              tabindex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div   className="offcanvas-header">
                <h5   className="offcanvas-title" id="offcanvasNavbarLabel">
                  Offcanvas
                </h5>
                <button
                  type="button"
                    className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div   className="offcanvas-body">
                <ul   className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li   className="nav-item">
                    <Nav.Link   className="nav-link active" aria-current="page" href="/">
                      Home
                    </Nav.Link>
                  </li>
                  <li   className="nav-item">
                    <Nav.Link   className="nav-link" href="#about-us">
                      Link
                    </Nav.Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>{' '} */}
      </div>
    </>
  )
}
