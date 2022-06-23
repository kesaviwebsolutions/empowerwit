import React from "react";
import img9 from "./images/img9.png";
import "./courses.css";
import RegisterContent from "./RegisterContent";
import { FaTelegram } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function NavCourse() {
  return (
    <div>
      <section>
        <nav className="navbar navbar-expand-lg bg-transparent">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img src={img9} alt="" className="course-img" />
            </Link>
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
            {/* <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button> */}
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <ul className="navbar-nav m-auto">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/"
                    style={{
                      color: "#000000",
                      letterSpacing: "2px",
                      fontWeight: "500",
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
                    marginTop: "5px",
                    marginRight: "20px",
                    cursor: "pointer",
                  }}
                >
                  <a
                    href="https://t.me/EWiTAnnounce"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "#6c757d" }}
                  >
                    {" "}
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
                <h5 className="modal-title ms-auto" id="exampleModalLabel">
                  Registration Form
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <RegisterContent />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
