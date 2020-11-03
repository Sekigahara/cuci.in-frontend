import React, { Component } from 'react'
import '../../styles/index.css'
import pict from '../../styles/laundry-pict.jpg';


const ContentThanks = () => {
    return (
        <div className="thanks-background">
            <div className="thanks-box">  
                <div className="thanks-sidebar">
                    <img src={pict}/>
                </div>
                <div className="thanks-text">
                    <h1>Terimkasih Telah Bergabung !</h1>
                    <h6>Selamat datang di Cuci-In!</h6>
                    <h6>Semoga pelayanan kami membantu bisnis laundry Anda</h6>
                </div>
            </div>
        </div>
        
    )
}

export default ContentThanks