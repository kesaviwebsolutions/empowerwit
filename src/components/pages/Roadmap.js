import React from 'react'
import img14 from '../images/img14.png'
import Timeline from '../Timeline'

export default function Roadmap() {
  return (
    <div>
      <section>
        <div className="container">
          <div className="row">
            <div className="roadmap-area">
              <div className="roadmap-content">
                <div className="roadmap">
                  <img
                    src={img14}
                    alt=""
                    className="roadmap-img"
                    style={{ width: '50%', marginTop: '100px' }}
                  />

                </div>
                {/* <Timeline /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}