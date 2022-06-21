import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import img14 from "../Images/img14.png";
import Mobilecontact from "./Mobilecontact";

export default function MobileRoadmap() {


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
                <div className="container">
                  <VerticalTimeline>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      contentStyle={{ background: '#d44a73 ', color: '#fff' }}
                      contentArrowStyle={{ borderRight: '7px solid  #d44a73 ' }}
                      iconStyle={{ background: "#ff90ac", color: "#fff" }}
                    >

                      <p>
                        Training 30 housewives to
                        become leaders in IT
                      </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      contentStyle={{ background: '#d44a73 ', color: '#fff' }}
                      contentArrowStyle={{ borderRight: '7px solid  #d44a73 ' }}
                      iconStyle={{ background: "#ff90ac", color: "#fff" }}
                    >

                      <p>
                        Collaborations with NGOs to promote
                        digital literacy among women.ewives to
                        become leaders in IT.
                      </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      contentStyle={{ background: '#d44a73 ', color: '#fff' }}
                      contentArrowStyle={{ borderRight: '7px solid  #d44a73 ' }}
                      iconStyle={{ background: "#ff90ac", color: "#fff" }}
                    >

                      <p>
                        Stamping EWIT's presence
                        across cities with commercial
                        ads and promotions.
                      </p>

                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      contentStyle={{ background: '#d44a73 ', color: '#fff' }}
                      contentArrowStyle={{ borderRight: '7px solid  #d44a73 ' }}
                      iconStyle={{ background: "#ff90ac", color: "#fff" }}
                    >

                      <p>
                        Expand EWIT's global presence by forming
                        partnerships with organisations working in
                        the fields of women empowerment across
                        the globe.
                      </p>

                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      contentStyle={{ background: '#d44a73 ', color: '#fff' }}
                      contentArrowStyle={{ borderRight: '7px solid  #d44a73 ' }}
                      iconStyle={{ background: "#ff90ac", color: "#fff" }}
                    >

                      <p>
                        Building women empowerment
                        centric blockchain to bring power of
                        web3 to women across the globe.
                      </p>

                    </VerticalTimelineElement>
                  </VerticalTimeline>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Mobilecontact />
    </div>
  );
}
