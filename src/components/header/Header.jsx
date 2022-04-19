import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpeg'
import HeaderSocial from './HeaderSocial'

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5> Hello I'm </h5>
                <h1> Laura THAY </h1>
                <h5 className="text-light"> Web design integrator/ developer </h5>
                <CTA />
                <HeaderSocial />

                <div className="me">
                    <img src={ME} alt=""/>
                </div>

                <a href="#contact" className='scroll__down'> Scroll Down</a>
            </div>
        </header>
    )
}

export default Header
