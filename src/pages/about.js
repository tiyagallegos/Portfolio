import React from 'react'
import Layout from '../components/Layout'
import kayak from './zokayak.jpg'
import guitar from './guitar.jpg'
import garden from './garden.jpg'
import styles from '../components/Layout/Layout.module.scss'


export default function About() {
    return <Layout pageTitle="About">
        <div className={styles.about}>
        <h1>About Me</h1>
        <p>I am a full stack developer with a background in speech pathology specializing in pediatric feeding and complex medical cases.
        I take a data-centric approach to my work focusing on long-term solutions, efficiency, and scalability.
        I enjoy building user-friendly applications that create large-scale impact across all populations. My hobbies include kayaking
        with my dog Zorrito, playing guitar, growing my urban garden, and playing soccer. 
        </p>
        </div>
        <div className={styles.pictainer}>
        <img className={styles.aboutpic} src={kayak} alt="zo"/>
        <img className={styles.aboutpic} src={garden} alt="garden"/>
        <img className={styles.aboutpic} src={guitar} alt="guitar"/>
        </div>
        </Layout>
}