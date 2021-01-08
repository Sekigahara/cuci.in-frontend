import React, { Component } from 'react'
import '../../styles/index.css'
import { Form, Nav } from 'react-bootstrap'
import { FaUserCircle, FaRegEnvelope, FaUnlockAlt, FaPhoneAlt } from 'react-icons/fa'
import { REGISTER } from '../../utils/url'
import { useHistory } from "react-router-dom";
import axios from 'axios';


const RegisterForm = () => {
    const [full_name, setFullname] = React.useState("");
    const [username, setUsername] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");
	const [password, setPassword] = React.useState("");
    const [confirmation, setConfirmation] = React.useState("");
    const history = useHistory();
	
	const onSubmit = () => {
        axios
            .post(REGISTER, {
                full_name: full_name,
                username: username,
                email: email,
                phone: phone,
                confirmation: confirmation,
                password: password
            })
            .then((res) => {
				console.log(res);
                history.push("/login");
            }).catch((err) => {
                alert("Something Wrong" + " (" + err.message + ")");
                console.log(err);
            });
	}  
	
    return (
        <div className="login-form">
        	<div className="register-title">
            	<h1>Create Your Account</h1>
			</div>
			<div className="row form-register">
				<div className="col-md-6">
					<Form className="login-field">
						<Form.Group className="form-gorup" controlId="formBasicFullname">
							<div className="input-icon">
								<span className = "login-icon"><FaUserCircle /></span>
								<Form.Control 
									className = "no-border" 
									type="name"
									placeholder="Fullname"
									value={full_name}
									onChange={(e) => setFullname(e.target.value)}
								/>
							</div>
						</Form.Group>

						<Form.Group className="form-gorup" controlId="formBasicUsername">
						<div className="input-icon">
							<span className = "login-icon"><FaUserCircle /></span>
							<Form.Control 
								className = "no-border" 
								type="name" 
								placeholder="Username"
								value={username}
								onChange={(e) => setUsername(e.target.value)} 
							/>
						</div>
						</Form.Group>
						
						<Form.Group className="form-gorup" controlId="formBasicEmail">
						<div className="input-icon">
							<span className = "login-icon"><FaRegEnvelope /></span>
							<Form.Control 
								className = "no-border" 
								type="email" 
								placeholder="Email"
								value={email}
								onChange={(e) => setEmail(e.target.value)} 
							/>
						</div>
						</Form.Group>
					</Form>				
				</div>
				<div className="col-md-6">
					<Form className="login-field">
					<Form.Group className="form-gorup" controlId="formBasicPhone">
					<div className="input-icon">
						<span className = "login-icon"><FaPhoneAlt /></span>
						<Form.Control 
							className = "no-border" 
							type="phone" 
							placeholder="Phone"
							value={phone}
							onChange={(e) => setPhone(e.target.value)} 
						/>
					</div>
					</Form.Group>
					
					<Form.Group className="form-gorup" controlId="formBasicPassword">
					<div className="input-icon">
						<span className = "login-icon"><FaUnlockAlt /></span>
						<Form.Control 
							className = "no-border" 
							type="password" 
							placeholder="Password"
							value={confirmation}
							onChange={(e) => setConfirmation(e.target.value)} 
						/>
					</div>
					</Form.Group>

					<Form.Group className="form-gorup" controlId="formBasicConfirmation">
					<div className="input-icon">
						<span className = "login-icon"><FaUnlockAlt /></span>
						<Form.Control 
							className = "no-border" 
							type="password" 
							placeholder="Confirmation Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)} 
						/>
					</div>
					</Form.Group>
					</Form>				
				</div>
			</div>
			<Nav.Link onClick={onSubmit} className="mr-auto">
				<div className="login-btn-reg">
					<button type="button" class="btn btn-primary">Sign Up</button>
				</div>
			</Nav.Link>
			<p className="small-login"> Already have an account ? 
                 <a href="/login"> Login </a>
            </p>
        </div>
    )
}

export default RegisterForm