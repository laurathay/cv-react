import React from 'react'
import {FiLinkedin} from 'react-icons/fi'
import {FiGithub} from 'react-icons/fi'
import {FaDribbble} from 'react-icons/fa'

const HeaderSocial = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/laura-thay-215439a7/" target="_blank"><FiLinkedin /></a>
            <a href="https://github.com/laurathay" target="_blank"><FiGithub /></a>
            <a href="https://dribbble.com/laurathay" target="_blank"><FaDribbble /></a>
            
        </div>
    )
}

export default HeaderSocial
