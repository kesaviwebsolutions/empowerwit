import React from "react";
import CourseCards from "../CourseCards";
import NavCourse from "../NavCourse";

export default function Courses() {
  const fliterInfo = [
    {
      subject: "Subject",
      action: "Action",
      action2: "Another Action",
    },
    {
      subject: "Level",
      action: "Action",
      action2: "Another Action",
    },
    {
      subject: "Language",
      action: "Action",
      action2: "Another Action",
    },
    {
      subject: "Availability",
      action: "Action",
      action2: "Another Action",
    },
  ];

  const renderFilter = (fliterInfo, index) => {
    return (
      <div className="btn-group" key={index}>
        <button
          type="button"
          className="btn  dropdown-toggle"
          style={{ background: "#edcee3", borderRadius: "0px" }}
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {fliterInfo.subject}
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="/">
              {fliterInfo.action}
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/">
              {fliterInfo.action2}
            </a>
          </li>
        </ul>
      </div>
    );
  };

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
                    <div className="fliter-heading">
                      <h5>Fliters</h5>
                    </div>
                    <div className="fliter-content d-flex">
                      {" "}
                      {fliterInfo.map(renderFilter)}
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="result-span">
                    <span className="rs">18 results on Empowerwit</span>
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
