import React from "react";
import img13 from "../images/img13.png";
import img1 from "../images/img1.png";
import img8 from "../images/img8.png";
import bsc from "../images/bsc.png";
import cg from "../images/cg.png";
import cmc from "../images/cmc.png";

export default function Partners() {
  return (
    <div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="partners-area">
                <div className="partners">
                  <img src={bsc} alt="" className="PI" />
                  <img src={cg} alt="" className="PI" />
                  <img src={cmc} alt="" className="PI" />
                </div>
              </div>
              <img src={img8} alt="" className="ei3" />
            </div>
            <div className="col-md-6">
              <div className="partners-image">
                <img src={img13} alt="" className="pi" />
                <img src={img1} alt="" className="partner" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
