import React from 'react'
import '../../styles/index.css'
import { FaMapMarked, FaPhoneAlt, FaInternetExplorer, FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa'

const About = () => {
    return (
        <div className='about'>
            <div className='history_bg'>
                <div className='logo'></div>
            </div>
            <div>
                <h3 className='history'>HISTORY</h3>
                <p className='text-history'>
                    The selector points to the HTML element you want to style.
                    The declaration block contains one or more declarations separated by semicolons.
                    The selector points to the HTML element you want to style.
                    The selector points to the HTML element you want to style.
                </p>
            </div>
            <div className='contact_bg'>
                <div className='gambar'></div>
            </div>
            <div>
                <h3 className='contact_us'>CONTACT US</h3>
                <div className='text'>
                    <p className='text-alamat'>Jl. Anggrek No 5, Sukolilo, Surabaya <FaMapMarked /></p>
                    <p className='text-telephone'>089345768778 <FaPhoneAlt /></p>
                    <p className='text-web'>www.cuci-in.id <FaInternetExplorer /></p>
                    <p className='text-fb'>cuci-in <FaFacebookSquare /></p>
                    <p className='text-ig'>@cuci.in.laundry <FaInstagramSquare /></p>
                </div>
            </div>
        </div>
    )
}

export default About