import React from 'react'
import img2 from './images/img2.png'
import './timeline.css'

export default function Timeline() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="roadmap-image">
              <img src={img2} alt="" className="img2" />
            </div>
            <div className="ps-timeline-sec position-relative">
              <div className="container">
                <h1
                  style={{
                    position: 'absolute',
                    top: '-40px',
                    left: '21px',
                    fontSize: '25px',
                    fontWeight: '700',
                    color: '#0071bc',
                    transform: 'rotate(-14deg)',
                  }}
                >
                  April 2022
                </h1>
                <ol className="ps-timeline">
                  <li>
                    <div className="img-handler-top">
                      <p>Training 30 housewives to become leaders in IT.</p>
                    </div>

                    <span className="ps-sp-top"></span>
                  </li>
                  <li>
                    <div className="img-handler-bot">
                      <p>
                        Collaborations with NGOs to promote digital literacy
                        among graduate housewives to become leaders in IT.
                      </p>
                    </div>

                    <span className="ps-sp-bot"></span>
                  </li>
                  <li>
                    <div className="img-handler-top">
                      <p>
                        Stamping EWIT's presence across cities with commercial
                        ads and promotions.
                      </p>
                    </div>

                    <span className="ps-sp-top"></span>
                  </li>
                  <li>
                    <div className="img-handler-bot">
                      <p>
                        Expand EWIT's global presence by forming partnerships
                        with organisations working in the fields of women
                        empowerment across the globe.
                      </p>
                    </div>
                    <span className="ps-sp-bot"></span>
                  </li>
                  <li>
                    <div className="img-handler-top">
                      <p>
                        Building women empowerment centric blockchain to bring
                        power of web3 to women across the globe.
                      </p>
                    </div>

                    <span className="ps-sp-top"></span>
                  </li>
                </ol>
                <h1
                  style={{
                    position: 'absolute',
                    top: '-40px',
                    right: '-21px',
                    fontSize: '25px',
                    fontWeight: '700',
                    color: '#0071bc',
                    transform: 'rotate(-14deg)',
                  }}
                >
                  March 2023
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
