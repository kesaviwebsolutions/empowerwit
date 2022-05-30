import React from 'react'
import img from './images/img10.png'
import bg1 from './images/ewit_background2.png'
import RegisterContent from './RegisterContent'
import ContactUs from './ContactUs'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <section>
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
          <div className="container-fluid">
            <a className="navbar-brand" href="/" style={{ width: '0' }}>
              <img src={img} alt="" style={{ maxWidth: '150px' }} />
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
                  <Link className="nav-link active" href="/courses">
                    Courses
                  </Link>
                </li>
              </ul>

              <div className="buttons d-flex">
                <div
                  className="btn-sign"
                  style={{
                    marginTop: "0px",
                    marginRight: '10px',
                    cursor: 'default',
                  }}
                >
                  <button type="button" className="btn btn-secondary border border-0" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    contact
                  </button>

                </div>

                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Register
                </button>
              </div>
            </div>
          </div>
          <div className="background">
            <img src={bg1} alt="" className="bg1" />
          </div>
        </nav>
        {/* MODAL */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title ms-auto" id="exampleModalLabel" style={{ letterSpacing: "1px", fontSize: "20px" }}>
                  Registration Form
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body"><RegisterContent /></div>
            </div>
          </div>
        </div>
        {/* MODAL 2 */}
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <ContactUs />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
