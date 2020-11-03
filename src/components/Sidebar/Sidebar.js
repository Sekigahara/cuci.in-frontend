import React, { Component } from 'react'
import '../../styles/index.css'


const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-text">
                <h1>Hello Friend!</h1>
                <h6>Enter your personal details and start journey with us</h6>
            </div>
            <div className="sidebar-btn">
                <button type="button" className="btn btn-primary">Sign Up</button>
            </div>
        </div>
    )
}

export default Sidebar