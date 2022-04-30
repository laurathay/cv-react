import React from 'react'
import './footer.css'
import {FaLinkedinIn} from 'react-icons/fa'
import {VscGithub} from 'react-icons/vsc'
import {GrInstagram} from 'react-icons/gr'

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer_logo'> LOGO </a>
            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://instagram.com"> <GrInstagram /> </a>
                <a href="https://linkedin.com"> <FaLinkedinIn/></a>
                <a href="https://github.com"> <VscGithub /> </a>
            </div>
        </footer>
    )
}

export default Footer
