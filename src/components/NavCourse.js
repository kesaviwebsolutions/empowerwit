import React from 'react'
import img7 from './images/img7.png'
import './courses.css'
import RegisterContent from './RegisterContent'
import { Link } from 'react-router-dom'

export default function NavCourse() {
  return (
    <div>
      <section>
        <nav className="navbar navbar-expand-lg bg-transparent">
          <div className="container">
            <a className="navbar-brand" href="/">
              <img src={img7} alt="" className="course-img" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <ul className="navbar-nav m-auto">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    href="/"
                    style={{
                      color: '#000000',
                      letterSpacing: '2px',
                      fontWeight: '500',
                    }}
                  >
                    BACK TO HOMEPAGE
                  </Link>
                </li>
              </ul>

              <div className="buttons d-flex">
                <div
                  className="btn-sign"
                  style={{
                    border: 'none',
                    background: '#554c4c',
                    color: '#fff',
                    maxWidth: '100px',
                    padding: '8px 20px',
                    marginRight: '10px',
                    cursor: 'default',
                  }}
                >
                  Sign in
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
                <h5 className="modal-title" id="exampleModalLabel">
                  Modal title
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
      </section>
    </div>
  )
}
