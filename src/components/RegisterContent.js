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
              <div
                className="btn-sign"
                style={{
                  marginTop: "0px",
                  cursor: 'default',
                }}
              >
                <button type="button" className="btn bg-transparent" data-bs-toggle="modal" data-bs-target="#registerModal" style={{ marginLeft: "0px", marginTop: "10px", fontFamily: 'Futura Lt BT', fontWeight: "700", color: '#fff' }}>
                  Create your Profile
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
