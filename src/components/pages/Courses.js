import React from "react";
import CourseCards from "../CourseCards";
import NavCourse from "../NavCourse";

export default function Courses() {


  return (
    <div>
      <NavCourse />
      <section>
        <div className="container">
          <div className="training-section">
            <div className="training-area">
              <div className="row">
                <div className="col-md-6">
                  <div className="training-heading">
                    <h2 style={{ color: "#FFFFFF" }}>TRAININGS</h2>
                  </div>
                </div>
                <div className="col-md-6">
                  <form
                    className="d-flex"
                    role="search"
                    action=""
                    style={{ marginRight: "80px" }}
                  >
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button
                      className="button border border-0"
                      type="submit"
                      style={{
                        background: "#ffffff",
                        color: "#333333",
                        fontSize: "17px",
                        width: "150px",
                      }}
                    >
                      Search
                    </button>
                  </form>{" "}
                </div>
              </div>
            </div>
            <div className="fliter">
              <div className="row">
                <div className="col-md-9">
                  <div className="fliter-area">
                   
                  </div>
                </div>
            
              </div>
            </div>
            <CourseCards />
          </div>
        </div>
      </section>
    </div>
  );
}
