import React from 'react'
import { Chrono } from 'react-chrono'
import img14 from "../Images/img14.png"

export default function MobileRoadmap() {
  const items = [
    {
      title: 'April 2022',
    },
    {
      cardDetailedText: 'Training 30 housewives to become leaders in IT',
    },
    {
      cardDetailedText:
        'Collaborations with NGOs to promote digital literacy among women. ewives to become leaders in IT.',
    },
    {
      cardDetailedText:
        "Stamping EWIT's presence across cities with commercial ads and promotions.",
    },
    {
      cardDetailedText:
        "Expand EWIT's global presence by forming partnerships with organisations working in the fields of women empowerment across  the globe.",
    },
    {
      cardDetailedText:
        'Building women empowerment centric blockchain to bring power of web3 to women across the globe.',
    },
    {
      title: 'March 2023',
      cardDetailedText: 'Roadmap End',
    },
  ]

  return (
    <div>
      <div id="roadmap">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mobile-background6">
                <div className="mobile-img">
                  <img src={img14} alt="" className="im" />
                </div>
                <div style={{ height: '400px', marginTop: '50px' }}>
                  <Chrono items={items} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
