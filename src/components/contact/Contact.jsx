import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {FaLinkedinIn} from 'react-icons/fa'
import {RiWhatsappFill} from 'react-icons/ri'

const Contact = () => {
    return (
        <section id='contact'>
            <h5> Get in Touch</h5>
            <h2> Contact </h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdEmail className="contact__option-icon" />
                        <h4>Email</h4>
                        <h5>laura.thaythay@gmail.com</h5>
                        <a href="mailto:laura.thaythay@gmail.com" target="_blank"> Send a message </a>
                    </article>

                    <article className="contact__option">
                        <FaLinkedinIn className="contact__option-icon" />
                        <h4>Linkedin</h4>
                        <h5>laura.thaythay@gmail.com</h5>
                        <a href="https://www.linkedin.com/in/laura-thay-215439a7/" target="_blank"> Send a message </a>
                    </article>

                </div>
            {/* end of contact options */}
            <form action="">
                <input type="text" name='name' placeholder='Your full name'required/>
                <input type="email" name='email' placeholder='Your email' required/>
                <textarea name="message" rows="7" placeholder='Your message'></textarea>
                <button type='submit' className='btn btn-primary'> Send Message</button>
            </form>
            </div>
        </section>
            
        
    )
}

export default Contact
