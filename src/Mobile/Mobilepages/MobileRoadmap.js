import React from "react";
import { Chrono } from "react-chrono";
import img14 from "../Images/img14.png";
import Mobilecontact from "./Mobilecontact";

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

  // const items = [
  //   {
  //     title: "May 1940",
  //     contentTitle: "Dunkirk",
  //     contentText:
  //       "Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.",
  //     contentDetailedText:
  //       "On 10 May 1940, Hitler began his long-awaited offensive in the west...",
  //   },
  // ];

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
                {/* <div style={{ width: "500px", height: "400px" }}>
                  <chrono items={items} />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Mobilecontact/>
    </div>
  );
}
