import React from 'react';
import './Portfolio.css';
// 6 portfolio imgs need to be downloaded into the assets folder
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.jpg';
import IMG6 from '../../assets/portfolio6.jpg';

// DATA ARRAY METHOD using data array

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Crypto Currency Dashboard & Financial Visualisation',
        github: 'https://github.com',
        demo: 'https://live.demo.link.com/demo-1'
    },
    {
        id: 2,
        image: IMG2,
        title: 'Charts templates & infographics in Figma',
        github: 'https://github.com',
        demo: 'https://live.demo.link.com/demo-2'
    },
    {
        id: 3,
        image: IMG3,
        title: 'Crypto Currency Dashboard & Financial Visualisation',
        github: 'https://github.com',
        demo: 'https://live.demo.link.com/demo-3'
    },
    {
        id: 4,
        image: IMG4,
        title: 'Maintaining Tasks and tracking progress',
        github: 'https://github.com',
        demo: 'https://live.demo.link.com/demo-4'
    },
    {
        id: 5,
        image: IMG5,
        title: 'Charts templates & infographics in Figma',
        github: 'https://github.com',
        demo: 'https://live.demo.link.com/demo-5'
    },
    {
        id: 6,
        image: IMG6,
        title: 'Crypto Currency Dashboard & Financial Visualisation',
        github: 'https://github.com',
        demo: 'https://live.demo.link.com/demo-6'
    },
]

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({id, image, title, github, demo}) => {
                        return (
                            <article key={id} className="portfolio__item">
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                            <h3> This is a portfolio item title</h3>
                            <div className="portfolio__item-cta">
                                <a href={github} className="btn" target="_blank">Github</a>
                                <a href={demo} className="btn btn-primary"  target="_blank">Live Demo</a>
                            </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    );
}

export default Portfolio;