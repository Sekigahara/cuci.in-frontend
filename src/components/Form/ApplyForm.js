import React from 'react'
import '../../styles/index.css'
import laundry from '../../styles/laundry-pict.jpg'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import {MdSupervisorAccount, MdMarkunreadMailbox, MdLocalLaundryService} from "react-icons/md"
import {FaPhoneAlt} from "react-icons/fa"

const ApplyForm = () => {
    return (
        <div className="form-box">
            <Container>
                <Form>
                    <div className="left-side">
                        <div className="left-fragment">
                            <Form.Group as={Row}>
                                <MdSupervisorAccount className="mr-2 icon-type" size={38} style={{fill: '#979595'}}/>
                                <Col sm={11}>
                                    <Form.Control size="lg" className="h-75 w-100 form-type" type="name" placeholder="Owner Name" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <FaPhoneAlt className="mr-3 icon-type" size={28} style={{fill: '#979595'}}/>
                                <Col sm={11}>
                                    <Form.Control size="lg" className="h-75 w-100 form-type" type="phone" placeholder="Phone" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <MdMarkunreadMailbox className="mr-3 icon-type" size={28} style={{fill: '#979595'}}/>
                                <Col sm={11}>
                                    <Form.Control size="lg" className="h-75 w-100 form-type" type="address" placeholder="Address" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row}>
                                <MdLocalLaundryService className="mr-2 icon-type" size={38} style={{fill: '#979595'}}/>
                                <Col sm={11}>
                                    <h3 className="form-type"> Laundry Type </h3>
                                    <Form.Check
                                        type="checkbox"
                                        label="Regular"
                                        name="LaundryType"
                                        id="LaundryType1"
                                        defaultChecked
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
                                </Col>
                            </Form.Group>
                        </div>
                    </div>
                    <div className="right-side">
                        <div className="right-fragment">
                            <Form.Group>
                                <div className="right-fragment-center">
                                    <img src={laundry} className="img-laundry"></img>
                                    <Button type="submit" className="rounded-pill btn-submit" style={{ backgroundColor:"#0063E3" }}><h5 className="button-text">JOIN US</h5></Button>
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