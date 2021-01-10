import React, { useEffect } from 'react'
import '../../styles/index.css'
import laundry from '../../styles/laundry-pict.jpg'
import { Container, Col, Form, Nav } from 'react-bootstrap'
import { MdSupervisorAccount, MdMarkunreadMailbox, MdLocalLaundryService } from "react-icons/md"
import { APPLYFORM, STATUS_APPLY } from '../../utils/url'
import { user, getToken } from '../../utils/auth'
import { FaPhoneAlt } from "react-icons/fa"
import { useHistory } from "react-router-dom";
import axios from 'axios';

const ApplyForm = () => {
    const config = {
        headers: { Authorization: `Bearer ${getToken()}` }
    };

    useEffect(() => {
        axios
            .get(STATUS_APPLY, config)
            .then((res) => {
				if (res.data.data === "Not Approved"){
                    history.push("/thanks");
                }
                console.log(res.data.data);
            }).catch((err) => {
                alert("Something Wrong" + " (" + err.message + ")");
                console.log(err);
            }); 
    }, []);

    const [ownername, setOwnername] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [address, setAddress] = React.useState("");
    const allowedState = [
        { name: "laundry_type_1", value: "Regular" },
        { name: "laundry_type_2", value: "Express" },
        { name: "laundry_type_3", value: "Bed Cover" },
        { name: "laundry_type_4", value: "Footwear" }
      ];      
    const [laundry_type, setLaundryType] = React.useState([]);
    const handleChange = event => {
        setLaundryType(laundry_type.concat(event.target.value));
    };
    const history = useHistory();

    const onSubmit = () => {
        axios
            .post(APPLYFORM, {
                user_id: user(),
                ownername: ownername,
                phone: phone,
                address: address,
                laundry_type: JSON.stringify(laundry_type)
            }, config)
            .then((res) => {
				console.log(res);
                history.push("/thanks");
            }).catch((err) => {
                alert("Something Wrong" + " (" + err.message + ")");
                console.log(err);
            });        
    }

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
                                        value={ownername}
                                        onChange={(e) => setOwnername(e.target.value)}
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
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
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
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                    />
                                </div>
                            </Col>
                        </Form.Group>

                        <Form.Group className="form-group1" controlId="LaundryType">
                            <Col sm={10}>
                                <p className="form-type"><MdLocalLaundryService />&nbsp; Laundry Type 
                                    <div className="form-check">
                                        {allowedState.map((state, index) => (
                                            <Form.Check
                                                type="checkbox"
                                                label={state.value}
                                                name={state.name}
                                                id="laundryType"
                                                value={state.value}
                                                onChange={handleChange}
                                            />
                                        ))}
                                        {/* <Form.Check
                                            type="checkbox"
                                            label="Regular"
                                            name="laundryType"
                                            id="laundryType"
                                            value="regular"
                                            onChange={(e) => setLaundryType(e.target.value)}
                                        />
                                        <Form.Check
                                            type="checkbox"
                                            label="Express"
                                            name="laundryType"
                                            id="LaundryType2"
                                            value="express"
                                            onChange={(e) => setLaundryType(e.target.value)}
                                        />
                                        <Form.Check
                                            type="checkbox"
                                            label="Bed Cover"
                                            name="laundryType"
                                            id="LaundryType3"
                                            value="bed cover"
                                            onChange={(e) => setLaundryType(e.target.value)}
                                        />
                                        <Form.Check
                                            type="checkbox"
                                            label="Baby Stuff"
                                            name="laundryType"
                                            id="LaundryType4"
                                            value="baby stuff"
                                            onChange={(e) => setLaundryType(e.target.value)}
                                        />
                                        <Form.Check
                                            type="checkbox"
                                            label="Footwear"
                                            name="laundryType"
                                            id="LaundryType5"
                                            value="footwear"
                                            onChange={(e) => setLaundryType(e.target.value)}
                                        /> */}
                                    </div>
                                </p>
                            </Col>
                        </Form.Group>
                        </div>
                        </div>
                    <div className="right-side">
                        <div className="right-fragment">
                            <Nav.Link onClick={onSubmit}>
                                <div className="right-fragment-center">
                                    <img src={laundry} className="img-laundry"></img>
                                    <button type="button" className="rounded-pill btn-submit" style={{ backgroundColor: "#0063E3" }}><h5 className="button-text">Join Us !</h5></button>
                                </div>
                            </Nav.Link>
                        </div>
                    </div>
                </Form>
            </Container>
        </div>
    )
}

export default ApplyForm