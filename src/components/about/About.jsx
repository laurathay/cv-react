import React from 'react'
import './about.css'
import ME from '../../assets/me.jpg'
import {FiAward} from 'react-icons/fi'
import {FiUsers} from 'react-icons/fi'
import {TiFolder} from 'react-icons/ti'

const About = () => {
    return (
        <section id="about">
            <h5> Get To Know</h5>
            <h2> About Me </h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image"/>
                    </div>
        {/* a bit of animation */}
        <div className="about__animation">
            <div className="perspective-text">
                <div className="perspective-line">
                    <p></p>
                    <p>Working</p>
                </div>
                <div className="perspective-line">
                    <p>Working</p>
                    <p>Is Only</p>
                </div>
                <div className="perspective-line">
                    <p>Is Only</p>
                    <p>A Matter Of</p>
                </div>
                <div className="perspective-line">
                    <p>A Matter Of</p>
                    <p>Perception</p>
                </div>
                <div className="perspective-line">
                    <p>Perception</p>
                    <p></p>
                </div>
                </div>
            </div>
        </div>


                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FiAward className="about__icon"/>    
                            <h5> Experience </h5>
                            <small> 1+ Years Working</small>
                        </article>

                        <article className="about__card">
                            <FiUsers className="about__icon"/>    
                            <h5> Client </h5>
                            <small> 2+ France </small>
                        </article>

                        <article className="about__card">
                            <TiFolder className="about__icon"/>    
                            <h5> Projects </h5>
                            <small> 5+ Completed</small>
                        </article>
                    </div>
                    <hr/>
                    <p className="about_description">
                    Web designer integrator/ developer at Schoolab during my master degree in web development at Hetic. 
                    </p>
                    <p className="about_description">
                    Autodidact and followed a formation of coding (HTML/ CSS/ JavaScript/ PHP/ Agile method) 
                    at Les Descodeuses, first coding school for women in France because everything is better mixed 
                    - little reminder: only 10% of woman in the tech industry (not counting digital marketing and web design otherwise it would be 30%).
                    </p>
                    Part-time freelance for website creation or redesign. DM me up for any request!
                    <p className="about_description">
                    Coming back from my 2-year world tour after graduating from my master's degree in digital marketing. 
                    I developed a passion for the tourism industry as it is the only sector that combines travel, language, and diversity. 
                    I have great skills in socializing and occupied a mix of marketing jobs ( involving editing newsletters, community management, benchmark, infographics) 
                    around the world to match all the cultural differences and understand what works best for the customers.
                    </p>
                    <p className="about_description">
                    Passionate and dynamic, I helped oversee different website projects (using Bootstrap, ACF on Wordpress) and analyzed the benefits of the latter in order to always improve the action/supports and enrich them with recommendations for future projects.                    </p>
                    <hr/>
                    <a href="#contact" className="btn btn-primary"> Let's Talk </a>
                </div>
            </div>
        </section>
    )
}

export default About
