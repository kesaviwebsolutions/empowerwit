import React from 'react'
import img from './images/img9.png'
import bg1 from './images/ewit_background2.png'
import RegisterContent from './RegisterContent'
import ContactUs from './ContactUs'
import { FaTelegram } from 'react-icons/fa'
import { Nav } from 'react-bootstrap'
import { Link } from "react-router-dom"


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
                  <Nav.Link href="#about-us"
                    className="nav-link active"
                    aria-current="page"
                  >
                    About
                  </Nav.Link>
                </li>
                <li className="nav-item">
                  <Nav.Link href="#trainings"
                    className="nav-link active"
                    aria-current="page"
                  >
                    Trainings
                  </Nav.Link>
                </li>
                <li className="nav-item">
                  <Nav.Link href="#partners"
                    className="nav-link active"
                    aria-current="page"
                  >
                    Partners
                  </Nav.Link>
                </li>
                <li className="nav-item">
                  <Nav.Link href="#roadmap"
                    className="nav-link active"
                    aria-current="page"
                  >
                    Roadmap
                  </Nav.Link>
                </li>
                <li className="nav-item">
                  <Link to="/courses"
                    className="nav-link active"
                    aria-current="page"
                  >
                    Courses
                  </Link>

                </li>
                <div
                  className="btn-sign"
                  style={{
                    marginTop: "0px",
                    marginRight: '10px',
                    cursor: 'default',
                  }}
                >
                  <button type="button" className="btn bg-transparent" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{ marginLeft: "50px", fontFamily: 'Futura Lt BT', fontWeight: "700", color: '#C3729D' }}>
                    Contact
                  </button>

                </div>
              </ul>

              <div className="buttons d-flex">
                <div
                  className="btn-sign"
                  style={{
                    marginTop: '5px',
                    marginRight: '20px',
                    cursor: 'pointer',
                  }}
                >
                  <a href="https://t.me/EWiTAnnounce" target="_blank" rel="noreferrer" style={{ color: '#6c757d' }}>
                    {' '}
                    <FaTelegram size={30} />
                  </a>
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
                <h5 className="modal-title ms-auto" id="exampleModalLabel" style={{ color: '#d44a73' }}>
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
                <h5 className="modal-title ms-auto" id="exampleModalLabel" style={{ color: '#d44a73' }}>
                  Contact Us
                </h5>
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