import React, { Component } from 'react'
import '../../styles/index.css'
import { Navbar, Nav } from 'react-bootstrap'
import { isLogin, logout } from "../../utils/auth";
import { useHistory } from "react-router-dom";
import Aboutus from '../../containers/Aboutus';
import Dashboard from '../../containers/Dashboard'
import Login from '../../containers/Login'
import ApplyPartnership from '../../containers/ApplyPartnership'
import Fitur from '../../containers/Fitur'

const NavBar = () => {
    const history = useHistory();
    const _isLogin = isLogin();
    
    const onLogout = () => {
        logout();
        history.replace("/");
        window.location.reload();
    };

    return (
        <div className="navbar-nav">
            <Navbar expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/" component={Dashboard} className="menu">Home</Nav.Link>
                        <Nav.Link href="/fitur" component={Fitur} className="menu">Features</Nav.Link>
                        <Nav.Link href="/applypartnership" component={ApplyPartnership} className="menu">Kemitraaan</Nav.Link>
                        <Nav.Link href="/aboutus" component={Aboutus} className="menu">About Us</Nav.Link>
                    </Nav>
                    <Nav className="auth">
                        {_isLogin ? (
                            <Nav.Link onClick={onLogout}>Logout</Nav.Link>
                        ) : (
                            <React.Fragment>
                                <Nav.Link href="/login">Sign In</Nav.Link>
                                <div className="line">|</div>
                                <Nav.Link href="/Register">Sign Up</Nav.Link>
                            </React.Fragment>
                        )}   
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar
