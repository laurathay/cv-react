import React from 'react'
import './experience.css'
import { CgCheckO } from 'react-icons/cg'

const Experience = () => {
    return (
        <section id='experience'>
            <h5> What are my skills</h5>
            <h2> My Experiences </h2>

            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3> Frontend Development</h3>
                    <div className="experience__content">

                    <article className="experience__details">
                        <CgCheckO className='experience__details-icon' />
                        <div>
                            <h4> HTML </h4>
                            <small className="text-light">Experienced </small>
                        </div>
                    </article>
                    <article className="experience__details">
                        <CgCheckO className='experience__details-icon' />
                        <div>
                            <h4> CSS/ SASS </h4>
                            <small className="text-light">Experienced </small>
                        </div>
                    </article>
                    <article className="experience__details">
                        <CgCheckO className='experience__details-icon' />
                        <div>
                            <h4> Bootstrap </h4>
                            <small className="text-light">Experienced </small>
                        </div>
                    </article>
                    <article className="experience__details">
                        <CgCheckO className='experience__details-icon' />
                        <div>
                            <h4> JavaScript </h4>
                            <small className="text-light">Experienced </small>
                        </div>
                    </article>
                    <article className="experience__details">
                        <CgCheckO className='experience__details-icon' />
                        <div>
                            <h4> Wordpress </h4>
                            <small className="text-light">Experienced </small>
                        </div>
                    </article>
                    </div>
                </div>
            {/* ---------------- end of front end --------------------*/}

                <div className="experience__backend">
                <h3> Back-end Development</h3>
                <div className="experience__content">
                    <article className="experience__details">
                        <CgCheckO />
                        <div>
                            <h4> PHP </h4>
                        <small className="text-light">Experienced </small>
                        </div>
                    </article>
                    <article className="experience__details">
                        <CgCheckO />
                        <div>
                            <h4> NodeJs </h4>
                            <small className="text-light">Experienced </small>
                        </div>
                    </article>
                    <article className="experience__details">
                        <CgCheckO />
                        <div>
                            <h4> MySQL </h4>
                            <small className="text-light">Experienced </small>
                        </div>
                    </article>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
