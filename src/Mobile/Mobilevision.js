import React from 'react'
import img12 from './Images/img12.png'
import img17 from './Images/img17.png'
import img18 from './Images/img18.png'
import img19 from './Images/img19.png'
import img6 from './Images/img6.png'

export default function Mobilevision() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="mobilevision-view">
              <div className="mobilevision-content">
                <div className="mobile-background3">
                  <div className="mobile-img">
                    <img src={img12} alt="" className="im" />
                  </div>
                  <div className="mobile-vision-paragraphs">
                    <div className="mvc">
                      <img src={img19} alt="" className="miv" />
                      <div className="mcv">
                        <h3
                          style={{
                            color: '#0071BC',
                            paddingLeft: '20px',
                            fontSize: '40px',
                            fontWeight: '700',
                          }}
                        >
                          Vision
                        </h3>
                        <p style={{ fontSize: '17px', paddingLeft: '20px' }}>
                          Empowerment of women across the globe in the field of
                          information technology.
                        </p>
                      </div>
                    </div>
                    <div className="mvc" style={{ marginRight: '30px' }}>
                      <img src={img18} alt="" className="miv" />
                      <div className="mcv">
                        <h3
                          style={{
                            color: '#0071BC',
                            paddingLeft: '20px',
                            fontSize: '40px',
                            fontWeight: '700',
                          }}
                        >
                          Short term goal
                        </h3>
                        <p
                          style={{
                            fontSize: '17px',
                            paddingLeft: '20px',
                          }}
                        >
                          Making a team of 30 trained housewives by the end of
                          March 2023 to lead the mission of EWIT..
                        </p>
                      </div>
                    </div>
                    <div className="mvc">
                      <img src={img17} alt="" className="miv" />
                      <div className="mcv">
                        <h3
                          style={{
                            color: '#0071BC',
                            paddingLeft: '20px',
                            fontSize: '40px',
                            fontWeight: '700',
                          }}
                        >
                          Mission
                        </h3>
                        <p style={{ fontSize: '17px', paddingLeft: '20px' }}>
                          Bring financial freedom to the household women by
                          training them to use information technologies to their
                          advantage
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <img src={img6} alt="" className="idea-img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
