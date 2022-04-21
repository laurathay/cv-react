import React from 'react'
import './nav.css'
import {FaHome} from 'react-icons/fa'
import {FiUser} from 'react-icons/fi'
import {BsBook} from 'react-icons/bs'
import {BiMessageRoundedDots} from 'react-icons/bi'
import {MdComputer} from 'react-icons/md'


const Nav = () => {
    return (
        <nav>
            <a href="#"><FaHome /></a>
            <a href="#"><FiUser /></a>
            <a href="#"><BsBook /></a>
            <a href="#"><MdComputer /></a>
            <a href="#"><BiMessageRoundedDots /></a>
        </nav>
    )
}

export default Nav
