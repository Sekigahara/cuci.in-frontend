import React from 'react'
import '../../styles/index.css'
import laundry from '../../styles/laundry-pict.jpg'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { MdSupervisorAccount, MdMarkunreadMailbox, MdLocalLaundryService } from "react-icons/md"
import { APPLYFORM, USERID, STOREOWNER, GETOWNER } from '../../utils/url'
import { user } from '../../utils/auth'
import { FaPhoneAlt } from "react-icons/fa"
import Thanks from '../../containers/Thanks'
import axios from 'axios';

class ApplyForm extends React.Component {
    constructor(){
        super();
        this.state = {
            owner_id: 0,
            name: "",
            phone: "",
            address: "",
            rating: 0,
            manhours: 0,
            laundry_type:[]
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    onOwnerIdChange = e => {
        this.setState({
            owner_id: e.target.value
        });
    };

    onNameChange = e => {
        this.setState({
            name: e.target.value
        });
    };

    onPhoneChange = e => {
        this.setState({
            phone: e.target.value
        });
    };

    onAddressChange = e => {
        this.setState({
            address: e.target.value
        });
    };

    onSubmit = () => {
        //var usr_id = 0;
        //getting user id by username
        /*
        axios
            .get(USERID, { 
                params: {
                    username: user()
                }
            })
            .then((e) => {
                usr_id = e.id;
            })
            .then(function (response) {
                console.log(response);
            })
        */

        //store owner id by user id
        axios
            .post(STOREOWNER, {
                params: {
                    user_id: user()
                }
            }).then(res => console.log(res))
        
        //get owner by user id
        axios
            .get(GETOWNER, {
                params: {
                    user_id: user()
                }
            }).then((e) => {
                this.onOwnerIdChange(e.id);
            })
            .then(function (response) {
                console.log(response);
            })

        //packed all data inside array
        const data = {
            owner_id: this.state.id,
            name: this.state.ownername,
            phone: this.state.phone,
            address: this.state.address,
            rating: this.state.rating,
            manhours: this.state.manhours,
            laundry_type: this.state.laundry_type
        };
        axios
            .post(APPLYFORM, data)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    handleInputChange(event) {
        const target = event.target;
        var value = target.value;
        
        if(target.checked){
            this.state.laundry_type[value] = value;   
        }else{
            this.state.laundry_type.splice(value, 1);
        }
    }

    render() {
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
                                        <Button /*href="/thanks" component={Thanks}*/ onChange={this.onSubmit} type="submit" className="rounded-pill btn-submit" style={{ backgroundColor: "#0063E3" }}><h5 className="button-text">JOIN US</h5></Button>
                                    </div>
                                </Form.Group>
                            </div>
                        </div>
                    </Form>
                </Container>
            </div>
        )
    }
}

export default ApplyForm