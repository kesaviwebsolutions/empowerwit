import React from 'react'
import Vision from '../Vision'

export default function About() {
  return (
    <div>
      <section>
        <div id="about-us">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
              </div>
              <div className="col-md-8">
                <div className="about-area">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="about-content">
                        <div className="content">
                          <h2 style={{ color: '#333333', fontWeight: '700' }}>
                            Who are we ?
                          </h2>
                           <p className='abt'>
                            EmpowerWIT is a social movement aimed to empower
                            women/housewives by training them in the filed on
                            Information Technolgoy and equip them with skills to
                            earn economic freedom while being around their
                            family
                          </p>
                        </div>
                        <div className="content" style={{ marginTop: '50px' }}>
                          <h2 style={{ color: '#333333', fontWeight: '700' }}>
                            Why Empowerit ?
                          </h2>

                          <div className="Questions">
                            <div
                              className="content-heading"
                              style={{ marginTop: '50px' }}
                            >
                              <h5 style={{ color: '#333333' }}>
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
                      <div className="Questions" style={{ marginTop: '400px' }}>
                        <div className="content-heading2">
                          <div className="content-heading">
                            <h5 style={{ color: '#333333' }}>
                              Family Obligations
                            </h5>
                            <p style={{ width: '100%' }}>
                              Family obligations keep housewives away from
                              realising their dreams.
                            </p>
                            <div className="content-heading">
                              <h5 style={{ color: '#333333' }}>
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
