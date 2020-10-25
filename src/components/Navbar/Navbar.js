import React, { Component } from 'react'
import '../../styles/index.css'
import * as Item from 'react-bootstrap'


class Navbar extends Component {
    render() {
        return (
            <div className="navbar-nav">
                <Item.Navbar expand="lg">
                    <Item.Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Item.Navbar.Collapse id="basic-navbar-nav">
                        <Item.Nav className="mr-auto">
                            <Item.Nav.Link href="#home" className="menu">Home</Item.Nav.Link>
                            <Item.Nav.Link href="#link" className="menu">Features</Item.Nav.Link>
                            <Item.Nav.Link href="#mitra" className="menu">Kemitraaan</Item.Nav.Link>
                            <Item.Nav.Link href="#aboutus" className="menu">About Us</Item.Nav.Link>
                        </Item.Nav>
                        <Item.Nav className="auth">
                            <Item.Nav.Link href="#signin">Sign In</Item.Nav.Link>
                            <div className="line">|</div>
                            <Item.Nav.Link href="#signup">Sign Up</Item.Nav.Link>
                        </Item.Nav>
                    </Item.Navbar.Collapse>
                </Item.Navbar>
            </div>
        )
    }
}

export default Navbar
