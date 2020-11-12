import React from 'react'
import '../../styles/index.css'
import { Button, Form } from 'react-bootstrap'
import { FaRegEnvelope, FaUnlockAlt } from 'react-icons/fa'
import { LOGIN } from '../../utils/url'
import { login } from '../../utils/auth'
import { useHistory } from "react-router-dom";
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const history = useHistory();

    const onSubmit = () => {
        axios
            .post(LOGIN, {
                username: username,
                password: password
            })
            .then((res) => {
                setUsername(res.username);
                setPassword(res.password);
                login({
                    username: username
                });
                history.push("/");
                // console.log(res);
            }).catch((err) => {
                alert("Username or Password Wrong" + " (" + err.message + ")");
                console.log(err);
            });
    }    

    return (
        <div className="login-form">
          <div className="login-title">
            <h1>Login to Cuci-in</h1>
          </div>
          <Form className="login-field">
            <Form.Group className="form-gorup" controlId="formBasicUsername">
              <div className="input-icon">
                <span className = "icon"><FaRegEnvelope /></span>
                <Form.Control 
                    className = "no-border" 
                    type="text" placeholder="Input Username" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </Form.Group>

            <Form.Group className="form-gorup" controlId="formBasicPassword">
              <div className="input-icon">
                <span className = "icon"><FaUnlockAlt /></span>
                <Form.Control 
                    className = "no-border" 
                    type="password" 
                    placeholder="Input Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </Form.Group>
            <div className="login-btn">
              <Button variant="primary" onClick={onSubmit}>
                Submit
              </Button>
            </div>
          </Form>
        </div>
    )
}

export default LoginForm