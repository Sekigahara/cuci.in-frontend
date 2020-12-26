import React from 'react'
import '../../styles/index.css'
import { Button, Form } from 'react-bootstrap'
import { FaUserCircle, FaUnlockAlt } from 'react-icons/fa'
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
                login(res.data.data.id);
                history.push("/");
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
              <div className='login-icon'><FaUserCircle /></div>
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
                <span className = "login-icon"><FaUnlockAlt /></span>
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
              <p className="small-signup"> Don't have any account ?
                 <a href="/register"> Sign Up </a>
              </p>

            </div>
          </Form>
        </div>
    )
}

export default LoginForm