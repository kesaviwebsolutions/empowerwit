import React from 'react'

export default function RegisterContent() {
  return (
    <div>
      <div className="container">
        <form
          target="_blank"
          action="https://formsubmit.co/ajax/ewitofficial@gmail.com"
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
              <div className="col" style={{ marginTop: '20px' }}>
                <input
                  type="number"
                  name="phonenumber"
                  maxLength="10"
                  className="form-control"
                  placeholder="Phone Number"
                  required
                />
              </div>
              <div className="col" style={{ marginTop: '20px' }}>
                <input
                  type="text"
                  name="address"
                  className="form-control"
                  placeholder="Address"
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-outline-light btn-block"
                style={{ marginTop: '20px' }}
              >
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
