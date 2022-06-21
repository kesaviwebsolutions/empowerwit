import React from "react";
import { Link } from "react-router-dom";
import Bottom from "./Bottom";

export default function Main() {
  return (
    <div>
      <section>
        <div className="container">
            <div className="col-md-8">
              <div className="explore-buttons">
                  <Link to="/courses" className="btn">
                    Explore our trainings
                  </Link>
                </div>
            </div>
        </div>
      </section>
        <Bottom/>
    </div>
  );
}
