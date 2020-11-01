import React from 'react'   
import styles from './Footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'gatsby'

export default function Footer() {
    return (
        <footer className={styles.Footer}>
            <section>
                Copyright &copy; {new Date().getFullYear()}            
            </section>
            <section>
            <a href="https://github.com/tiyagallegos" target="_blank">
                <FontAwesomeIcon icon={faGithub}/></a>
                <a href="https://www.linkedin.com/in/tiya-gallegos/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin}/></a>
                <a className={styles.contactlinks} href="https://www.instagram.com/tntech01/" target="_blank">
                <FontAwesomeIcon icon={faInstagram}/></a>
            </section>
        </footer>
    )
}