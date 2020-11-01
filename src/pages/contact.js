import React from "react"
import Layout from '../components/Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CgMail, CgInstagram } from 'react-icons/cg'
import { RiMailSendLine } from 'react-icons/ri'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import styles from '../components/Layout/Layout.module.scss'



export default function Contact() {
  return( 
    <Layout pageTitle="Contact">
      <div className={styles.contactainer}>
      <h1>Contact Me</h1>
      <h2>Email: tiyaagallegos@gmail.com</h2>
      <h2>Phone: 714-294-8156</h2>
      <section className={styles.linkbox}>
          <a className={styles.contactlinks} href="https://github.com/tiyagallegos" target="_blank">
            <div><FaGithub/> </div></a>
          <a className={styles.contactlinks} href="https://www.linkedin.com/in/tiya-gallegos/" target="_blank">
            <div><FaLinkedin/> </div></a>
          <a className={styles.contactlinks} href="https://www.instagram.com/tntech01/" target="_blank">
            <div><CgInstagram/> </div></a>
          <a className={styles.contactlinks} href="https://www.instagram.com/tntech01/" target="_blank">
            <div><FiMail/> </div></a>
        </section>
        </div>
    </Layout>

  )
}
