import React, { Component } from 'react'
import '../../styles/index.css'
import { Navbar, Nav } from 'react-bootstrap'
// import { Link } from 'react-router-dom'


class NavBar  extends Component {
    render() {
        return (
            <div className="navbar-nav">
                <Navbar expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home" className="menu">Home</Nav.Link>
                            <Nav.Link href="#link" className="menu">Features</Nav.Link>
                            <Nav.Link href="#mitra" className="menu active">Kemitraaan</Nav.Link>
                            <Nav.Link href="#aboutus" className="menu">About Us</Nav.Link>
                        </Nav>
                        <Nav className="auth">
                            <Nav.Link href="/">Logout</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default NavBar
