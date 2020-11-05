import React from 'react'
import Header from '../components/Header/Header'
import Navbar from '../components/Thanks/NavBar'
import Content from '../components/Content/Content'
import ContentThanks from '../components/Thanks/ContentThanks'

const Thanks = () => {
    return (
        <body>
            <div>
                <Navbar/>
                <ContentThanks/>
            </div>
        </body>
    )
}

export default Thanks