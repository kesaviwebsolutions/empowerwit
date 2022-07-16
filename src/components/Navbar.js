import React, { useEffect, useState } from 'react'
import { Button, NavDropdown } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import img from './images/img9.png'
import ContactUs from './ContactUs'
import { FaTelegram } from 'react-icons/fa'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { logout } from '../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'
import UserProfileLogin from './pages/UserProfileLogin'

export default function Navbar() {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const logoutHandler = () => {
    dispatch(logout())
  }

  useEffect(() => {}, [userInfo])

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div>
      <section>
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/" style={{ width: '0' }}>
              <img src={img} alt="" style={{ maxWidth: '150px' }} />
            </Link>
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
                  <Nav.Link
                    href="#about-us"
                    className="nav-link active"
                    aria-current="page"
                  >
                    About
                  </Nav.Link>
                </li>
                <li className="nav-item">
                  <Nav.Link
                    href="#trainings"
                    className="nav-link active"
                    aria-current="page"
                  >
                    Trainings
                  </Nav.Link>
                </li>
                <li className="nav-item">
                  <Nav.Link
                    href="#partners"
                    className="nav-link active"
                    aria-current="page"
                  >
                    Partners
                  </Nav.Link>
                </li>
                <li className="nav-item">
                  <Nav.Link
                    href="#roadmap"
                    className="nav-link active"
                    aria-current="page"
                  >
                    Roadmap
                  </Nav.Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="/courses"
                    className="nav-link active"
                    aria-current="page"
                  >
                    Courses
                  </Link>
                </li>
                <div
                  className="btn-sign"
                  style={{
                    marginTop: '0px',
                    cursor: 'default',
                  }}
                >
                  <button
                    type="button"
                    className="btn bg-transparent"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                    style={{
                      marginLeft: '50px',
                      fontFamily: 'Futura Lt BT',
                      fontWeight: '700',
                      color: '#C3729D',
                    }}
                  >
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
                  <a
                    href="https://t.me/EWiTAnnounce"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: '#6c757d' }}
                  >
                    {' '}
                    <FaTelegram size={30} />
                  </a>
                </div>
                {userInfo ? (
                  <>
                    <NavDropdown
                      title={`${userInfo.name}`}
                      id="collasible-nav-dropdown"
                    >
                      <NavDropdown.Divider />
                      <NavDropdown.Item onClick={logoutHandler}>
                        Logout
                      </NavDropdown.Item>
                    </NavDropdown>
                  </>
                ) : (
                  <Button variant="outline-secondary" onClick={handleShow}>
                    LOGIN
                  </Button>
                )}
              </div>
            </div>
          </div>
        </nav>
        {/* MODAL */}
        <div className="modal-parent">
          <div
            className="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5
                    className="modal-title ms-auto"
                    id="exampleModalLabel"
                    style={{ color: '#white' }}
                  >
                    Contact Us
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <ContactUs />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* REACT MODAL */}
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <UserProfileLogin />
          </Modal.Body>
        </Modal>
      </section>
    </div>
  )
}
