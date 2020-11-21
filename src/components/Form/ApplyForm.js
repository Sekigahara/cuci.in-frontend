import React from 'react'
import '../../styles/index.css'
import laundry from '../../styles/laundry-pict.jpg'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import {MdSupervisorAccount, MdMarkunreadMailbox, MdLocalLaundryService} from "react-icons/md"
import {FaPhoneAlt} from "react-icons/fa"
import Thanks from '../../containers/Thanks'

const ApplyForm = () => {
    return (
        <div className="form-box">
            <Container>
                <Form>
                    <div className="left-side">
                        <div className="left-fragment">
                            <Form.Group className="form-group1" controlId="formBasicOwner">
                                <Col sm={10}>
                                    <div className="input-icon">
                                    <div className='aplly-icon'><MdSupervisorAccount /></div>
                                        <Form.Control 
                                            className = "no-border" 
                                            type="text" placeholder="Owner Name"
                                        />
                                    </div>
                                </Col>
                            </Form.Group>
                            <Form.Group className="form-group1" controlId="formBasicPhone">
                                <Col sm={10}>
                                    <div className="input-icon">
                                    <div className='aplly-icon'><FaPhoneAlt /></div>
                                        <Form.Control 
                                            className = "no-border" 
                                            type="text" placeholder="Phone"
                                        />
                                    </div>
                                </Col>
                            </Form.Group>
                            <Form.Group className="form-group1" controlId="formBasicAddress">
                                <Col sm={10}>
                                    <div className="input-icon">
                                    <div className='aplly-icon'><MdMarkunreadMailbox /></div>
                                        <Form.Control 
                                            className = "no-border" 
                                            type="text" placeholder="Address"
                                        />
                                    </div>
                                </Col>
                            </Form.Group>

                            <Form.Group className="form-group1" controlId="LaundryType">
                                <Col sm={10}>
                                    <p className="form-type"><MdLocalLaundryService /> Laundry Type 
                                        <div className="form-check">
                                            <Form.Check
                                                type="checkbox"
                                                label="Regular"
                                                name="LaundryType"
                                                id="LaundryType1"
                                            />
                                            <Form.Check
                                                type="checkbox"
                                                label="Express"
                                                name="LaundryType"
                                                id="LaundryType2"
                                            />
                                            <Form.Check
                                                type="checkbox"
                                                label="Bed Cover"
                                                name="LaundryType"
                                                id="LaundryType3"
                                            />
                                            <Form.Check
                                                type="checkbox"
                                                label="Baby Stuff"
                                                name="LaundryType"
                                                id="LaundryType4"
                                            />
                                            <Form.Check
                                                type="checkbox"
                                                label="Footwear"
                                                name="LaundryType"
                                                id="LaundryType5"
                                            />
                                        </div>
                                    </p>
                                </Col>
                            </Form.Group>
                        </div>
                    </div>
                    <div className="right-side">
                        <div className="right-fragment">
                            <Form.Group>
                                <div className="right-fragment-center">
                                    <img src={laundry} className="img-laundry"></img>
                                    <Button href="/thanks" component={Thanks} type="submit" className="rounded-pill btn-submit" style={{ backgroundColor:"#0063E3" }}><h5 className="button-text">JOIN US</h5></Button>
                                </div>
                            </Form.Group>
                        </div>
                    </div>
                </Form>
            </Container>
        </div>
    )
}

export default ApplyForm