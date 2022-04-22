import React from 'react'
import './nav.css'
import { FaHome } from 'react-icons/fa'
import { FiUser } from 'react-icons/fi'
import { BsBook } from 'react-icons/bs'
import { BiMessageRoundedDots } from 'react-icons/bi'
import { MdComputer } from 'react-icons/md'
import { useState } from 'react' 


const Nav = () => {

    const [ activeNav, setActiveNav ] = useState('#')

    return (
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FaHome /></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FiUser /></a>
            <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BsBook /></a>
            <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><MdComputer /></a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageRoundedDots /></a>
        </nav>
    )
}

export default Nav
