import React from 'react'   
import styles from './Footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faLine } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'gatsby'

export default function Footer() {
    return (
        <footer className={styles.Footer}>
            <section>
                Copyright &copy; {new Date().getFullYear()}            
            </section>
            <section>
            <a href="https://github.com">
                <FontAwesomeIcon icon={faGithub} /></a>
                <a href="htpps://Linkedin.com">
                <FontAwesomeIcon icon={faLinkedin} /></a>
            </section>
        </footer>
    )
}