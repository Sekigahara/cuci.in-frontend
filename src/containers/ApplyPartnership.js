import React from 'react'
import Navbar from '../components/Navbar/NavBar'
import ApplyForm from '../components/Form/ApplyForm'
import '../styles/index.css'

const ApplyPartnership = () => {
    return(
        <body>
            <div>
                <Navbar/>
                <div className="header"/>
                <ApplyForm/>
            </div>
        </body>
    )
}

export default ApplyPartnership