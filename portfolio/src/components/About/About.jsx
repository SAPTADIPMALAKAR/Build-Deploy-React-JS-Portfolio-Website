import React from 'react';
import './About.css';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

import ME from '../../assets/profile-img.jpg';

const About = () => {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Me" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about__icon"/>
                            <h5>Experience</h5>
                            <small>3+ Years Work Experience</small>
                        </article>

                        <article className="about__card">
                            <FiUsers className="about__icon"/>
                            <h5>Clients</h5>
                            <small>50+ WorldWide</small>
                        </article>

                        <article className="about__card">
                            <VscFolderLibrary className="about__icon" />
                            <h5>Projects</h5>
                            <small>40+ Completed</small>
                        </article>
                    </div>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas asperiores molestiae sapiente sed numquam, cum natus. Qui accusantium libero, corporis ratione impedit, repellendus voluptatibus explicabo enim nulla consectetur, maxime nostrum?
                        Minima ut repellendus placeat necessitatibus facere sit id, neque voluptas rerum ipsum totam animi ipsa repellat? Ullam incidunt unde, nam sapiente quaerat neque cupiditate iure tempora aliquam maxime nulla quod!
                        Cum nostrum ab tenetur corporis? Optio, quas libero cum autem nihil corrupti voluptate, provident eum aspernatur modi placeat aperiam rem alias consectetur maxime vel accusantium deleniti ut necessitatibus quos debitis?
                    </p>

                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>
        </section>
    );
}

export default About;
