import React from 'react'
import { Link } from 'gatsby'
import styles from './Header.module.scss'

export default function Header({ title }) {
    return(
        <header className={styles.Header}>
            <h1>{ title }</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    )
}