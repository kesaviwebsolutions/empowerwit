import React from 'react'
import img11 from '../images/img11.png'
import img3 from '../images/img3.png'
import img8 from '../images/img8.png'
import desktop from '../images/desktop.png'
import Vision from '../Vision'

export default function About() {
  return (
    <div>
      <section>
        <div id="about-us">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="about-imgs">
                  <img src={img11} alt="" className="about-img" />
                  <img src={img3} alt="" className="wi" />
                </div>
              </div>
              <div className="col-md-8">
                <div className="about-area">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="about-content">
                        <div className="content">
                          <h2 style={{ color: '#0071BC', fontWeight: '700' }}>
                            Who are we ?
                          </h2>
                          <p style={{ fontFamily: 'Futura Lt BT' }}>
                            EmpowerWIT is a social movement aimed to empower
                            women/housewives by training them in the filed on
                            Information Technolgoy and equip them with skills to
                            earn economic freedom while being around their
                            family
                          </p>
                        </div>
                        <div className="content" style={{ marginTop: '50px' }}>
                          <h2 style={{ color: '#0071BC', fontWeight: '700' }}>
                            Why Empowerit ?
                          </h2>

                          <div className="Questions">
                            <div
                              className="content-heading"
                              style={{ marginTop: '50px' }}
                            >
                              <h5 style={{ color: '#554c4c' }}>
                                Time Constraint
                              </h5>
                              <p className='abt'>
                                Unabity to devote time to self development and
                                move towards financial independence.
                              </p>
                              <p className='abt'>
                                A number of housewives are devoid of ample
                                opportunities despite being adequately
                                qualified.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="desktop-img">
                        <img src={desktop} alt="" className="di" />
                      </div>
                      <div className="Questions" style={{ marginTop: '85px' }}>
                        <div className="content-heading2">
                          <div className="content-heading">
                            <h5 style={{ color: '#554c4c' }}>
                              Family Obligations
                            </h5>
                            <p style={{ width: '100%' }}>
                              Family obligations keep housewives away from
                              realising their dreams.
                            </p>
                            <div className="content-heading">
                              <h5 style={{ color: '#554c4c' }}>
                                Financial Dependence
                              </h5>
                              <p style={{ width: '100%' }}>
                                To often housewives are financially dependent
                                and are unable to make their own decisions.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="empower-img">
                        <img src={img8} alt="" className="ei" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Vision />
    </div>
  )
}
