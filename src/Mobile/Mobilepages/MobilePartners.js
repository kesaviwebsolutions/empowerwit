import React from 'react'
import img13 from '../Images/img13.png'
import bsc from '../Images/bsc.png'
import cg from '../Images/cg.png'
import cmc from '../Images/cmc.png'
import img1 from '../Images/img1.png'
import MobileRoadmap from './MobileRoadmap'

export default function MobilePartners() {
  return (
    <div>
    <div id='partners'></div>
      <div className="container">
        <div className="row">
          <div className="mobilepartners-view">
            <div className="mobilepartners-content">
              <div className="mobile-background5">
                <div className="mobilepartners-area">
                  <div className="mobilepartners-content">
                    <div className="mobile-img">
                      <img
                        src={img13}
                        alt=""
                        className="im"
                        style={{ marginLeft: 'auto', display: 'block' }}
                      />
                    </div>
                    <div className="mobilepartners">
                      <img src={bsc} alt="" className="mbsc" />
                      <img src={cg} alt="" className="mbsc" />
                      <img src={cmc} alt="" className="mcmc" />
                    </div>
                    <div className="mt-img" style={{ marginTop: '100px' }}>
                      <img src={img1} alt="" className="mt" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MobileRoadmap />
    </div>
  )
}
