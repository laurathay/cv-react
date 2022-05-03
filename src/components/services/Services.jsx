import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
    return (
        <section id='services'>
            <h5>What I offer</h5>
            <h2> Services </h2>

            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>UI/ UX Design</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p> Wireframes. </p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p> User stories. </p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p> Information architecture. </p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p> Mobile First. </p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p> Offering possibilities according needs. </p>
                        </li>
                    </ul>
                </article>
{/* ---------------- end of ux/ui --------------------- */}

                <article className="service">
                    <div className="service__head">
                        <h3>Web Development</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p> Possibility of website from scratch (code only). </p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p> Websites with Wordpress. </p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p> Teaching my clients about using Wordpress. </p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p> Creating smooth landing pages. </p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p> Working as a team player. </p>
                        </li>
                    </ul>
                </article>
{/* ---------------- end of web dev --------------------- */}
                <article className="service">
                    <div className="service__head">
                        <h3>Content creation</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p> I have created a travel blog myself. </p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p> Practicing my skills on Figma. </p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p> Used to do some infographics on Photoshop/ Illustrator. </p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p> Worked as a content creator in product maketing in a SaaS company. </p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p> Worked as a community manager worlwide (principally on Instagram). </p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default Services
