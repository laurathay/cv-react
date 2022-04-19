import React from 'react'
import {FiLinkedin} from 'react-icons/fi'
import {FiGithub} from 'react-icons/fi'
import {FaDribbble} from 'react-icons/fa'

const HeaderSocial = () => {
    return (
        <div className='header__socials'>
            <a href="https://linkedin.com" target="_blank"><FiLinkedin /></a>
            <a href="https://github.com" target="_blank"><FiGithub /></a>
            <a href="https://dribble.com" target="_blank"><FaDribbble /></a>
            
        </div>
    )
}

export default HeaderSocial
