import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import UserProfileRegister from './pages/UserProfileRegister'
import Bottom from './Bottom'
import img5 from './images/img.png'
import img6 from './images/img9.png'
import About from './pages/About'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Main() {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  return (
    <div>
      <section>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Registration</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <UserProfileRegister />
          </Modal.Body>
        </Modal>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="hero-img">
                <img src={img5} alt="" className="hero" />
              </div>
            </div>
            <div className="col-md-8">
              <div className="hero-heading">
                <img src={img6} alt="" className="heading-img" />
              </div>
              <div className="hero-para">
                <p className="para-text">
                  Discover our open trainings specifically designed to groom
                  women in the field of Information Technology.
                </p>
              </div>
              <div className="explore-buttons">
                {userLogin.userInfo ? (
                  <Link
                    to="/courses"
                    style={{
                      background: '#D44A73',
                      border: 'none',
                      fontSize: '18px',
                      borderRadius: '25px',
                      textDecoration: 'none',
                      color: '#fff',
                      padding: '10px 5px',
                    }}
                  >
                    Explore our trainings
                  </Link>
                ) : (
                  <Button
                    onClick={handleShow}
                    style={{
                      background: '#D44A73',
                      border: 'none',
                      fontSize: '18px',
                      borderRadius: '25px',
                    }}
                  >
                    Explore our trainings
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="about-us">
        <About />
      </div>
      <Bottom />
    </div>
  )
}
