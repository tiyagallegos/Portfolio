import React from "react"
import Layout from '../components/Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faLine } from '@fortawesome/free-brands-svg-icons'
import styles from '../components/Layout/Layout.module.scss'



export default function Contact() {
  return( 
    <Layout pageTitle="Contact">
      <div className={styles.contactainer}></div>
      <h1>Contact Me</h1>
      <h2>Email: tiyaagallegos@gmail.com</h2>
      <h2>Phone: 714.294.8156</h2>
      <section>
          <a className={styles.contactlinks} href="https://github.com/tiyagallegos" target="_blank">
            <FontAwesomeIcon icon={faGithub} /></a>
          <a className={styles.contactlinks} href="https://www.linkedin.com/in/tiya-gallegos/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} /></a>
        </section><br></br><br></br><br></br><br></br>

  <h2>Email Me!</h2>
 <div className={styles.contactform}>
 <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
   <input type="hidden" name="bot-field" />
   <input type="hidden" name="form-name" value="contact" />
  <div className={styles.eform}>
  <label>
  <strong>Name</strong><br></br>
  <input type="text" name="name" id="name" />
  </label>
  </div>
  <div className={styles.eform}></div>
  <label>
  <strong>Email</strong><br></br>
    <input type="email" name="email" id="email" />
  </label>
  <div className={styles.eform}></div>
  <label>
  <strong>Subject</strong><br></br>
    <input type="text" name="subject" id="subject" />
  </label>
  <div className={styles.eform}></div>
  <label>
  <strong>Message</strong><br></br>
    <textarea name="message" id="message" rows="5" />
  </label>
  <div className={styles.eform}>
  <button className={styles.ebuttons} type="submit"><strong>Send</strong></button><br></br>
  <input className={styles.ebuttons} type="reset" value="Clear" />
  </div>
</form>
</div>
    </Layout>

  )
}
