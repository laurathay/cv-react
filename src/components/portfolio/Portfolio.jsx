import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio.png'

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My recent work</h5>
            <h3> Portfolio</h3>

            <div className="container portfolio__container">
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG1} alt=""/>
                    </div>
                    <h3> We are all cucumber with anxiety</h3>
                    <div className="portfolio__item-cta">
                        <a href="http://github.com" className="btn"> Github </a>
                        <a href="http://github.com" className="btn btn-primary" target='_blank'> LiveDemo </a>      
                    </div>
          
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                    <img src={IMG1} alt=""/>
                    </div>
                    <h3> We are all cucumber with anxiety</h3>
                    <div className="portfolio__item-cta">

                    <a href="http://github.com" className="btn"> Github </a>
                    <a href="http://github.com" className="btn btn-primary" target='_blank'> LiveDemo </a>
                    </div>
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                    <img src={IMG1} alt=""/>
                    </div>
                    <h3> We are all cucumber with anxiety</h3>
                    <div className="portfolio__item-cta">

                    <a href="http://github.com" className="btn"> Github </a>
                    <a href="http://github.com" className="btn btn-primary" target='_blank'> LiveDemo </a>
                    </div>
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                    <img src={IMG1} alt=""/>
                    </div>
                    <h3> We are all cucumber with anxiety</h3>
                    <div className="portfolio__item-cta">

                    <a href="http://github.com" className="btn"> Github </a>
                    <a href="http://github.com" className="btn btn-primary" target='_blank'> LiveDemo </a>
                    </div>
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                    <img src={IMG1} alt=""/>
                    </div>
                    <h3> We are all cucumber with anxiety</h3>
                    <div className="portfolio__item-cta">

                    <a href="http://github.com" className="btn"> Github </a>
                    <a href="http://github.com" className="btn btn-primary" target='_blank'> LiveDemo </a>
                    </div>
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                    <img src={IMG1} alt=""/>
                    </div>
                    <h3> We are all cucumber with anxiety</h3>
                    <div className="portfolio__item-cta">

                    <a href="http://github.com" className="btn"> Github </a>
                    <a href="http://github.com" className="btn btn-primary" target='_blank'> LiveDemo </a>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Portfolio
