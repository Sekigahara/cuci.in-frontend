import React, { Component } from 'react'
import '../../styles/index.css'
import { Navbar, Nav } from 'react-bootstrap'
import { isLogin, logout } from "../../utils/auth";
import { useHistory } from "react-router-dom";

const NavBar = () => {
    const history = useHistory();
    
    const onLogout = () => {
        logout();
        history.replace("/");
    };

    return (
        <div className="navbar-nav">
            <Navbar expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home" className="menu">Home</Nav.Link>
                        <Nav.Link href="#link" className="menu">Features</Nav.Link>
                        <Nav.Link href="/applypartnership" className="menu">Kemitraaan</Nav.Link>
                        <Nav.Link href="#mitra" className="menu">Kemitraaan</Nav.Link>
                        <Nav.Link href="#aboutus" className="menu">About Us</Nav.Link>
                    </Nav>
                    <Nav className="auth">
                        {isLogin ? (
                            <Nav.Link onClick={onLogout}>Logout</Nav.Link>
                        ) : (
                            <React.Fragment>
                                <Nav.Link href="/login">Sign In</Nav.Link>
                                <div className="line">|</div>
                                <Nav.Link href="#signup">Sign Up</Nav.Link>
                            </React.Fragment>
                        )}   
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar
