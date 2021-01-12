import React, { Component } from 'react'
import '../../styles/index.css'
import pict from '../../styles/laundry-pict.jpg';
import { Nav } from 'react-bootstrap'
import { DOWNLOAD } from '../../utils/url'
import { getToken } from '../../utils/auth'
import axios from 'axios';

const ContentThanks = () => {
    const config = {
        headers: { Authorization: `Bearer ${getToken()}` }
    };

    const onSubmit = () => {
        axios
            .get(DOWNLOAD, config)
            .then((res) => {
                console.log(res);
            });        
    }

    return (
        <div className="thanks-background">
            <div className="thanks-box">  
                <div className="thanks-sidebar">
                    <img src={pict}/>
                </div>
                <div className="thanks-text">
                    <h1>Terimakasih Telah Bergabung !</h1>
                    <h6>Selamat datang di Cuci-In!</h6>
                    <h6>Semoga pelayanan kami membantu bisnis laundry Anda</h6>
                </div>
                <br></br>
                <div className="download-content text-center">
                    <p className="download-text">Keep exploring with us.
                        <Nav.Link onClick={onSubmit}>Download Desktop</Nav.Link>
                    </p>
                </div>
            </div>
        </div>
        
    )
}

export default ContentThanks