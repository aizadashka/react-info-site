import React from 'react'
import Info from './assets/Info'
import About from './assets/About'
import Interests from './assets/Interests'
import Footer from './assets/Footer'
import Img from './assets/Img'


export default function App() {
    return (
        <div>
            <div className='container'>
                <Img />
                <div className='sections-container'>
                    <Info />
                    <About />
                    <Interests />
                </div>
            </div>
            <Footer />
        </div>
    )
}

            