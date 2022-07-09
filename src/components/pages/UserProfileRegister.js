import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import axios from 'axios'
import Error from '../Error'

export default function UserProfileRegister() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  const [pic, setPic] = useState(
    'https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg',
  )
  const [picMessage, setPicMessage] = useState(null)
  const [message, setMessage] = useState(null)
  const [error, setError] = useState(false)

  const submitHandler = async (e) => {
    e.preventDefault()
    // console.log(name, email, password, confirmPass, pic)

    if (password !== confirmPass) {
      setMessage('passwords do not match')
    } else {
      setMessage(null)
    }
    try {
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      }

      const { data } = await axios.post(
        'http://localhost:5000/user',
        {
          name,
          email,
          password,
          pic,
        },
        config,
      )
      console.log(data)

      localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
      setError(error.response.data)
      console.log(error)
    }
  }




  return (
    <div>
      {message && <Error variant="danger">{message}</Error>}
      {error && <Error>{error}</Error>}
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="formBasicEmail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        >
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="formBasicPassword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        >
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="formBasicConfirmPassword"
          value={confirmPass}
          onChange={(e) => setConfirmPass(e.target.value)}
        >
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" />
        </Form.Group>
        <Form.Group
          controlId="formFile"
          className="mb-3"
          value={pic}
          onChange={(e) => setPic(e.target.value)}
        >
          <Form.Label>Uplaod your profile</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
        <Button variant="light" type="submit">
          Sing Up
        </Button>
      </Form>
      <div
        className="btn-sign"
        style={{
          marginTop: '0px',
          cursor: 'default',
        }}
      >
        <button
          type="button"
          className="btn bg-transparent"
          data-bs-toggle="modal"
          data-bs-target="#loginModal"
          style={{
            marginLeft: '0px',
            marginTop: '10px',
            fontFamily: 'Futura Lt BT',
            fontWeight: '700',
            color: '#fff',
          }}
        >
          Already have an account go to login page
        </button>
      </div>
    </div>
  )
}
