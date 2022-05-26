import React from 'react'
import NavTraining from './NavTraining'
import cardimg1 from './images/cardimg1.jpg'
import icon from './images/icon_profil_3.png'
import { BsPlayCircle, BsFillCircleFill } from 'react-icons/bs'
import './training.css'
import Slider from 'react-slick'
import OtherCourses from './OtherCourses'

export default function Trainings() {
  return (
    <div>
      <NavTraining />
      <section>
        <div className="container">
          <div
            className="training-area"
            style={{ backgroundImage: 'linear-gradient(#edcee3, #c3729d)' }}
          >
            <div className="row">
              <div className="col-md-8">
                <div className="content-area">
                  <div className="img-text">
                    <div className="imgimg">
                      <img src={icon} alt="" className="ii" />
                    </div>
                    <div className="ST">
                      <span className="sst">Sadie Tesla</span>
                    </div>
                  </div>
                  <div className="intro">
                    <h3 style={{ width: '45%' }}>
                      Introduction to Blockchain technology
                    </h3>
                    <span
                      className="available"
                      style={{
                        fontSize: '20px',
                        color: '#319e31',
                        marginTop: '30px',
                      }}
                    >
                      session available{' '}
                      <BsFillCircleFill size={15} color="#319e31" />
                    </span>
                  </div>
                  <div className="row" style={{ borderBottom: '1px solid' }}>
                    <div className="col-md-6">
                      <div className="content">
                        <p>
                          In this course we will discuss the limitations of the
                          Internet for business and economic activity, and
                          explain how blockchain technology represents the way
                          forward.
                        </p>
                      </div>
                      <div className="lang" style={{ marginTop: '85px' }}>
                        <b>Language</b> <span>- English</span>
                      </div>
                      <div className="estimate">
                        <div className="ed">
                          {' '}
                          <b>Estimated duration</b> <span>- 5 hours</span>
                        </div>
                        <div className="levels">
                          <div className="level-item">
                            <b style={{ color: '#000000' }}>Level</b>{' '}
                            <BsFillCircleFill size={15} color="#fed3b2" />
                          </div>
                          <div className="level-items">
                            <BsFillCircleFill size={15} color="#ccccc" />
                            <BsFillCircleFill size={15} color="#ccccc" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="playicon">
                        <BsPlayCircle />
                      </div>
                      <div className="video-area">
                        <img src={cardimg1} alt="" className="video" />
                      </div>
                    </div>
                  </div>
                  <div className="button-area">
                    <button className="enroll">Enroll Now</button>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
               <OtherCourses/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
