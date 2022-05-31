import React from 'react'

export default function ContactUs() {
  return (
    <div>
      <div className="container">
        <form
          target="_blank"
          action="https://formsubmit.co/el/momeha"
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
              <div className="col" style={{ marginTop: '20px' }}>
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
          <div className="form-group" style={{ marginTop: '20px' }}>
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
            className="btn btn-lg btn-secondary btn-block"
            style={{ marginTop: '20px' }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
