import React, { Component } from 'react'
import '../../styles/index.css'
import { Form } from 'react-bootstrap'
import { FaRegEnvelope, FaUnlockAlt } from 'react-icons/fa'


const LoginForm = () => {
    return (
        <div className="login-form">
          <div className="login-title">
            <h1>Login to Cuci-in</h1>
          </div>
          <Form className="login-field">
            <Form.Group className="form-gorup" controlId="formBasicEmail">
              <div className="input-icon">
                <span className = "icon"><FaRegEnvelope /></span>
                <Form.Control className = "no-border" type="email" placeholder="Email" />
              </div>
            </Form.Group>

            <Form.Group className="form-gorup" controlId="formBasicPassword">
              <div className="input-icon">
                <span className = "icon"><FaUnlockAlt /></span>
                <Form.Control className = "no-border" type="email" placeholder="Password" />
              </div>
            </Form.Group>
            <div className="login-btn">
                <button type="button" class="btn btn-primary">Login</button>
            </div>
          </Form>
        </div>
    )
}

export default LoginForm