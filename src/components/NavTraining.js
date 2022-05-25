import React from 'react'
import img7 from './images/img7.png'
import './courses.css'

export default function NavTraining() {
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
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="/courses"
                    style={{
                      color: '#000000',
                      letterSpacing: '2px',
                      fontWeight: '500',
                    }}
                  >
                    BACK TO COURSES
                  </a>
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
                <div className="btn-register">Register</div>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </div>
  )
}
