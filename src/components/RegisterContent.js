import React from 'react'

export default function RegisterContent() {
  // const [register, setRegister] = useState({
  //   name: '',
  //   lastname: '',
  //   email: '',
  //   phonenumber: '',
  //   address: '',
  //   address2: '',
  //   workingstatus: '',
  //   maritalstatus: '',
  // })
  // const [records, setRecords] = useState([])
  // const handleInput = (e) => {
  //   const name = e.target.name
  //   const value = e.target.value

  //   setRegister({ ...register, [name]: value })
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   const newRecord = { ...register, id: new Date().getTime().toString() }
  //   console.log(records)
  //   setRecords({ ...records, newRecord })
  // }
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
                  type="tel"
                  name="phonenumber"
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
          {/* <form
          className="row g-3"
          target="_blank"
          action="https://formsubmit.co/el/momeha"
          method="POST"
        ></form> */}
          {/* <div className="col-md-12">
            <label htmlFor="inputName4" className="form-label">
              Full Name
            </label>
            <input
              type="name"
              className="form-control"
              id="inputName4"
              placeholder="full name"
            />
          </div> */}
          {/* <div className="col-md-6">
            <label htmlFor="inputName4" className="form-label">
              Last Name
            </label>
            <input
              type="name"
              className="form-control"
              id="inputName4"
              placeholder="last name"
            />
          </div> */}
          {/* <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="inputEmail4"
              placeholder="email"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputNumber4" className="form-label">
              Phone Number
            </label>
            <input
              type="tel"
              className="form-control"
              id="inputNumber4"
              placeholder="xxxxx-xxxxx"
            />
          </div> */}
          {/* <div className="col-md-12 d-flex justify-content-between">
            <label htmlFor=""style={{color:"white"}}>Gender</label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Female
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Others
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Male
              </label>
            </div>
          </div> */}
          {/* <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div> */}
          {/* <div className="col-12">
            <label htmlFor="inputAddress2" className="form-label">
              Address 2
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </div> */}
          {/* <div className="col-md-6">
            <label htmlFor="inputAddress2" className="form-label">
              Country
            </label>
            <input
              type="text"
              className="form-control"
              id="inputCountry2"
              placeholder="country"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputAddress2" className="form-label">
              State
            </label>
            <input
              type="text"
              className="form-control"
              id="inputState2"
              placeholder="state"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputAddress2" className="form-label">
              City
            </label>
            <input
              type="text"
              className="form-control"
              id="inputCity2"
              placeholder="city"
            />
          </div> */}
          {/* <div className="col-md-12">
            <label htmlFor="inputAddress2" className="form-label">
              Qualification
            </label>
            <input
              type="text"
              className="form-control"
              id="inputQualification2"
              placeholder="qualification"
            />
          </div> */}
          {/* <div className="col-md-12">
            <label htmlFor="inputAddress2" className="form-label">
              Photo
            </label>
            <input type="file" className="form-control" id="inputPhoto2" />
          </div> */}
          {/* <div className="col-md-6">
            <label htmlFor="inputState" className="form-label">
              Marital Status
            </label>
            <select id="inputState" className="form-select">
              <option>Choose...</option>
              <option>Married</option>
              <option>Unmarried</option>
            </select>
          </div>
          <div className="col-md-6">
            <label htmlFor="inputState" className="form-label">
              Working Status
            </label>
            <select id="inputState" className="form-select">
              <option>Choose...</option>
              <option>Employed</option>
              <option>Unemployed</option>
            </select>
          </div>
          <div className="col-12">
            <label htmlFor="inputState" className="form-label">
              Do you have computer/laptop
            </label>
            <select id="inputState" className="form-select">
              <option>Choose...</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-outline-light">
              Register
            </button>
          </div>*/}
        </form>
      </div>
    </div>
  )
}
