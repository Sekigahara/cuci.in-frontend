import React, { Component } from 'react'
import '../../styles/index.css'
import { Form, Nav } from 'react-bootstrap'
import { FaUserCircle, FaRegEnvelope, FaUnlockAlt } from 'react-icons/fa'


const RegisterForm = () => {
    return (
        <div className="login-form">
          <div className="login-title">
            <h1>Create Your Account</h1>
          </div>
          <Form className="login-field">
          <Form.Group className="form-gorup" controlId="formBasicEmail">
              <div className="input-icon">
                <span className = "icon"><FaUserCircle /></span>
                <Form.Control className = "no-border" type="name" placeholder="Name" />
              </div>
            </Form.Group>

            <Form.Group className="form-gorup" controlId="formBasicEmail">
              <div className="input-icon">
                <span className = "icon"><FaRegEnvelope /></span>
                <Form.Control className = "no-border" type="email" placeholder="Email" />
              </div>
            </Form.Group>

            <Form.Group className="form-gorup" controlId="formBasicPassword">
              <div className="input-icon">
                <span className = "icon"><FaUnlockAlt /></span>
                <Form.Control className = "no-border" type="password" placeholder="Password" />
              </div>
            </Form.Group>
            <Nav.Link href = "#dashboard" className="mr-auto">
              <div className="login-btn">
                  <button type="button" class="btn btn-primary">Register</button>
              </div>
            </Nav.Link>
          </Form>
        </div>
    )
}

export default RegisterForm