import React from "react";
import CourseCards from "../CourseCards";
import Footer from "../Footer";
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
                    <h1 style={{ color: "#fff" }}>Trainings</h1>
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
                        background: "#D44A73",
                        color: "#fff",
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
          <Footer />
        </div>
      </section>
    </div>
  );
}
