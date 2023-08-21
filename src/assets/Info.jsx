import React from 'react'

export default function Info() {
    return (
        <div className='info'>
            <h3 className='info--name'>Aizada Tynchybek kyzy</h3>
            <p className='info--position'>Frontend Developer</p>
            <a className='info--website' href='#'>aizada.website</a>
            <div className='info--btns'>
                <a href="mailto:tynchynek.a@gmail.com" className='info--email btn'>
                    <i className="fa-solid fa-envelope"></i>
                    Email
                </a>
                <a href='https://www.linkedin.com/in/aizadatynchybek/' className='info--linkedIn btn'>
                    <i className="fa-brands fa-linkedin"></i>
                    LinkedIn
                </a>
            </div>
        </div>
    )
}