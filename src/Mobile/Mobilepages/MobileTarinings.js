import React from 'react'
import { Link } from 'react-router-dom'
import img16 from '../Images/img16.png'
import img4 from '../Images/img4.png'
import MobilePartners from './MobilePartners'

export default function MobileTarinings() {
  return (
    <div>
      <div id="trainings">
        <div className="container">
          <div className="row">
            <div className="mobiletraining-view">
              <div className="mobiletraining-content">
                <div className="mobile-background4">
                  <div className="mobiletrainings-area">
                    <div className="mobiletrainings-content">
                      <div className="mobile-img">
                        <img src={img16} alt="" className="im" />
                      </div>
                      <div className="mtc">
                        <div className="mt-c" style={{ marginTop: '30px' }}>
                          <h3
                            style={{
                              color: '#0071BC',
                              paddingLeft: '20px',
                              fontSize: '30px',
                              fontWeight: '700',
                            }}
                          >
                            Social Media Development
                          </h3>
                          <p style={{ fontSize: '17px', paddingLeft: '20px' }}>
                            Understanding various social platforms Creating
                            engagement on social media Promotion of content on
                            social media Power of networking & collaborations.
                          </p>
                        </div>
                        <div className="mt-c" style={{ marginTop: '30px' }}>
                          <h3
                            style={{
                              color: '#0071BC',
                              paddingLeft: '20px',
                              fontSize: '30px',
                              fontWeight: '700',
                            }}
                          >
                            Blockchain Development
                          </h3>
                          <p style={{ fontSize: '17px', paddingLeft: '20px' }}>
                            Basics of blockchain Smart Contract logic development
                            Solidity & Rust
                          </p>
                        </div>
                        <div className="mt-c" style={{ marginTop: '30px' }}>
                          <h3
                            style={{
                              color: '#0071BC',
                              paddingLeft: '20px',
                              fontSize: '30px',
                              fontWeight: '700',
                            }}
                          >
                            Digital Marketing & PR
                          </h3>
                          <p style={{ fontSize: '17px', paddingLeft: '20px' }}>
                            Business Communication Understanding digital platforms
                            Creating impactful content PPC Ad campaigns
                          </p>
                        </div>
                        <div className="mt-c" style={{ marginTop: '30px' }}>
                          <h3
                            style={{
                              color: '#0071BC',
                              paddingLeft: '20px',
                              fontSize: '30px',
                              fontWeight: '700',
                            }}
                          >
                            Business Design
                          </h3>
                          <p style={{ fontSize: '17px', paddingLeft: '20px' }}>
                            Logo & Branding UI/UX Development Business
                            presentation
                          </p>
                        </div>
                        <div className="mt-c" style={{ marginTop: '30px' }}>
                          <h3
                            style={{
                              color: '#0071BC',
                              paddingLeft: '20px',
                              fontSize: '30px',
                              fontWeight: '700',
                            }}
                          >
                            Web Development
                          </h3>
                          <p style={{ fontSize: '17px', paddingLeft: '20px' }}>
                            HTML, CSS & JS <br />
                            React Js <br />
                            WordPress
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-img">
                    <img src={img4} alt="" className="mt" />
                  </div>
                  <div className="mobileexplore-button">
                    <Link
                      to="/courses"
                      style={{
                        textDecoration: 'none',
                        fontSize: '25px',
                        border: '2px solid #c3729d',
                        padding: '20px',
                        borderRadius: '25px',
                        color: '#c3729d',
                      }}
                    >
                      Explore now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MobilePartners />
    </div>
  )
}
