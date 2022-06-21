import React from "react";
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
