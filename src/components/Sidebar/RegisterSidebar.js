import React, { Component } from 'react'
import '../../styles/index.css'
import { Nav } from 'react-bootstrap'


const RegisterSidebar = () => {
    return (
        <div className="sidebar-register">
            <div className="sidebar-text">
                <h1>Welcome Back!</h1>
                <h6>To keep connected with us please login with your personal info </h6>
            </div>
            <div className="sidebar-btn">
                <Nav.Link href="/login">
                    <button type="button" class="btn btn-primary">
                        <h4>Sign In</h4>
                    </button>
                </Nav.Link>
            </div>
        </div>
    )
}

export default RegisterSidebar