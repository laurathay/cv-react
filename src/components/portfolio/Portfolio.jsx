import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'


const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Website for Ubud',
        github: 'http://github.com',
        demo: 'https://ubud-vincennes.com'
    },
    {
        id: 2,
        image: IMG2,
        title: 'Website for Mondol Kiri',
        github: 'http://github.com',
        demo: 'https://mondol-kiri-choisy.com'
    },
    {
        id: 3,
        image: IMG3,
        title: 'Website for construction services',
        github: 'http://github.com',
        demo: 'https://afast.com'
    },
    {
        id: 4,
        image: IMG4,
        title: 'Web app Haki Community',
        github: 'http://github.com',
        demo: 'https://haki-community.com'
    },
    {
        id: 5,
        image: IMG5,
        title: 'My portfolio',
        github: 'http://github.com',
        demo: 'https://lthay.org'
    },
    {
        id: 6,
        image: IMG6,
        title: 'Schoolab redesign',
        github: 'http://github.com',
        demo: 'https://schoolab.com'
    }
]

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My recent work</h5>
            <h2> Portfolio</h2>

            <div className="container portfolio__container">
               {
                   data.map(({ id, image, title, github, demo }) => {
                       return (
                        <article key={ id }className="portfolio__item">
                        <div className="portfolio__item-image">
                        <img src={ image } alt={ title }/>
                        </div>
                        <h3> { title }</h3>
                        <div className="portfolio__item-cta">
    
                        <a href={ github } className="btn"> Github </a>
                        <a href={ demo } className="btn btn-primary" target='_blank'> LiveDemo </a>
                        </div>
                    </article>
                       )
                   })
               }
            </div>
        </section>
    )
}

export default Portfolio
