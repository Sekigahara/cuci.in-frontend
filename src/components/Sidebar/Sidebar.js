import React, { Component } from 'react'
import { Nav } from 'react-bootstrap'
import '../../styles/index.css'


const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-text">
                <h1>Hello Friend!</h1>
                <h6>Enter your personal details and start journey with us</h6>
            </div>
            <div className="sidebar-btn">
<<<<<<< HEAD
                <Nav.Link href="/register">
                    <button type="button" class="btn btn-primary">
                        <h4>Sign Up</h4>
=======
                <Nav.Link href="/Register">
                    <button type="button" className="btn btn-primary">
                        Sign Up
>>>>>>> 244baf4be5e3313a8855470b3f753841eb196c1d
                    </button>
                </Nav.Link>
            </div>
        </div>
    )
}

export default Sidebar