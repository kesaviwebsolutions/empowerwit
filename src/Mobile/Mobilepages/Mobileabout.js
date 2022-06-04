import React from 'react'
import img11 from '../Images/img11.png'
import desktop from '../Images/desktop.png'
import img3 from '../Images/img3.png'
import Mobilevision from '../Mobilevision'

export default function Mobileabout() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="mobile-view-area">
              <div className="mobile-view-content">
                <div className="mobile-background2">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mobile-img">
                        <img src={img11} alt="" className="mi" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mobile-img">
                        <img src={desktop} alt="" className="mi" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="mobile-content">
                        <div className="mac" style={{ marginTop: '50px' }}>
                          <h2 style={{ color: '#0071BC', fontWeight: '700' }}>
                            Who we are ?
                          </h2>
                          <p style={{ fontSize: '17px' }}>
                            EmpowerWIT is a social movement aimed to empower
                            women/housewives by training them in the filed on
                            Information Technolgoy and equip them with skills to
                            earn economic freedom while being around their
                            family.
                          </p>
                        </div>

                        <div className="content" style={{ marginTop: '50px' }}>
                          <h2 style={{ color: '#0071BC', fontWeight: '700' }}>
                            Why Empowerit ?
                          </h2>

                          <div className="mobile-about-area">
                            <div className="mobileabout-paragraph">
                              <h4>Time Constraint</h4>
                              <p style={{ fontSize: '17px' }}>
                                Unabity to devote time to self development and
                                move towards financial independence. A number of
                                housewives are devoid of ample opportunities
                                despite being adequately qualified.
                              </p>
                            </div>
                            <div className="mobileabout-paragraph">
                              <h4>Financial Dependence</h4>
                              <p style={{ fontSize: '17px' }}>
                                Too often housewives are financially dependent
                                and are unable to make their own decisions.
                              </p>
                            </div>
                            <div className="mobileabout-paragraph">
                              <h4>Family Obligations</h4>
                              <p style={{ fontSize: '17px' }}>
                                Family obligations keep housewives away from
                                realising their dreams.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="mobileabout-img">
                          <img src={img3} alt="" className="mai" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Mobilevision />
    </div>
  )
}
