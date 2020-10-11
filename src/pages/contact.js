import React from "react"
import Layout from '../components/Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faLine } from '@fortawesome/free-brands-svg-icons'
import styles from '../components/Layout/Layout.module.scss'



export default function Contact() {
  return( 
    <Layout pageTitle="Contact">
      <h1>Contact Me</h1>
      <h2>Email: tiyaagallegos@gmail.com</h2>
      <h2>Phone: 714.294.8156</h2>
      <section>
          <a href="https://github.com/tiyagallegos" target="_blank">
            <FontAwesomeIcon icon={faGithub} /></a>
          <a href="https://www.linkedin.com/in/tiya-gallegos/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} /></a>
        </section>

  <h2>Contact Form</h2>
 <div className="contact-form">
 <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
   <input type="hidden" name="bot-field" />
   <input type="hidden" name="form-name" value="contact" />
  <label>
    Name
    <input type="text" name="name" id="name" />
  </label>
  <label>
    Email
    <input type="email" name="email" id="email" />
  </label>
  <label>
    Subject
    <input type="text" name="subject" id="subject" />
  </label>
  <label>
    Message
    <textarea name="message" id="message" rows="5" />
  </label>
  <button type="submit">Send</button>
  <input type="reset" value="Clear" />
</form></div>
    </Layout>

  )
}
