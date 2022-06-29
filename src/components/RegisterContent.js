import React from 'react'
import { useForm } from 'react-hook-form'
import './registercontent.css'

export default function RegisterContent() {
  const {
    register,
    handleSubmit,
    reset,
    trigger,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    reset()
  }

  // console.log(errors)
  return (
    <div>
      <div className="container">
        <form
          target="_blank"
          action="https://formsubmit.co/ajax/ewitofficial@gmail.com"
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="form-group">
            <div className="form-row">
              <div className="col">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Full Name"
                  {...register('fullName', {
                    required: 'Please enter your full name',
                  })}
                  onKeyUp={() => {
                    trigger('fullName')
                  }}
                />
                {errors.fullName && (
                  <small className="text-danger">
                    {errors.fullName.message}
                  </small>
                )}
              </div>
              <div className="col" style={{ marginTop: '20px' }}>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email Address"
                  {...register('email', {
                    required: 'Please enter your email.',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Please enter valid email',
                    },
                  })}
                  onKeyUp={() => {
                    trigger('email')
                  }}
                />
                {errors.email && (
                  <small className="text-danger">{errors.email.message}</small>
                )}
              </div>
              <div className="col" style={{ marginTop: '20px' }}>
                <input
                  type="tel"
                  name="phonenumber"
                  className="form-control"
                  placeholder="Phone Number"
                  {...register('phone', {
                    required: 'Please enter your phone number.',
                    pattern: {
                      value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                      message: 'only numbers are allowed up to 10 digit ',
                    },
                  })}
                  onKeyUp={() => {
                    trigger('phone')
                  }}
                />
                {errors.phone && (
                  <small className="text-danger">{errors.phone.message}</small>
                )}
              </div>
              <div className="col" style={{ marginTop: '20px' }}>
                <input
                  type="text"
                  name="address"
                  className="form-control"
                  placeholder="Address"
                  {...register('address', {
                    required: 'Please enter your address.',
                  })}
                  onKeyUp={() => {
                    trigger('address')
                  }}
                />
                {errors.address && (
                  <small className="text-danger">
                    {errors.address.message}
                  </small>
                )}
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
