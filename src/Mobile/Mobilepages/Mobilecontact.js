import React from "react";

export default function Mobilecontact() {
  return (
    <div>
      <div id="contact"></div>
      <div className="mobile-background6">
        <div className="mobile-img">

          <div className="container">
            <h1 className="text-center py-5  my-2 " style={{ fontSize: '40px', fontWeight: "700", color: "rgb(212, 74, 115)" }}>CONTACT-US</h1>
            <form
              target="_blank"
              action="https://formsubmit.co/ajax/mayankbhati1911@gmail.com"
              method="POST"
            >
              <div className="form-group">
                <div className="form-row">
                  <div className="col">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Full Name"
                      required
                    />
                  </div>
                  <div className="col" style={{ marginTop: "20px" }}>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="form-group" style={{ marginTop: "20px" }}>
                <textarea
                  placeholder="Your Message"
                  className="form-control"
                  name="message"
                  rows="10"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-outline-danger my-3"

              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
