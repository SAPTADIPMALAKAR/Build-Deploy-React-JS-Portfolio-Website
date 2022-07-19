import React, { useRef } from 'react';
import './Contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ah52phj', 'template_qcpg10g'
        , form.current, '-8fRR36YgQSaTxZJJ')

        e.target.reset();
    };

    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className="contact__option-icon" />
                        <h4>Email</h4>
                        <h5>youremail@gmail.com</h5>
                        <a href="mailto:youremail@gmail.com" target="_blank" rel="noreferrer" >Send a Message</a>
                    </article>
                    <article className="contact__option">
                        <RiMessengerLine className="contact__option-icon" />
                        <h4>Messenger</h4>
                        <h5>facebook-username</h5>
                        <a href="https://m.me/facebook.username" target="_blank" rel="noreferrer">Send a Message</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className="contact__option-icon" />
                        <h4>Whatsapp</h4>
                        <h5>+25412345678</h5>
                        <a href="https://api.whatsapp.com/send?phone=+25412345678" target="_blank" rel="noreferrer">Send a Message</a>
                    </article>
                </div>
                {/* End of CONTACT OPTIONS */}
                <form ref={form} onSubmit={sendEmail} >
                    <input type="text" name="name" placeholder="Your Full name" required />
                    <input type="email" name="email" placeholder="Your Email" required/>
                    <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;