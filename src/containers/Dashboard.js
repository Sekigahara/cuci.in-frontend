import React from 'react'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import Content from '../components/Content/Content'

const Dashboard = () => {
    return (
        <body>
            <div>
                <Navbar/>
                <Header/>
            </div>
            <div>
                <Content/>
            </div>
        </body>
    )
}

export default Dashboard
