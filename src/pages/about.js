import React from 'react'
import Layout from '../components/Layout'
import kayak from '../../public/static/images/zokayak.jpg'
import shot from '../../public/static/images/shot.jpg'
import plant from '../../public/static/images/plant.jpg'
import styles from '../components/Layout/Layout.module.scss'


export default function About() {
    return <Layout pageTitle="About">
        <div className={styles.about}>
        <h1>About Me</h1>
        <p>I'm a full stack developer with a background in speech pathology: pediatric feeding and complex medical cases.
        I take a data centric approach to my work focusing on long-term solutions, efficiency, and scalability.
        I enjoy building real-world, user-friendly applications that create large scale impact. My other hobbies include hiking and kayaking
        with my dog Zorrito, playing guitar, growing my urban garden, and playing soccer. 
        </p>
        </div>
        <div className={styles.pictainer}>
        <img className={styles.aboutpic} src={kayak} alt="zo"  />
        <img className={styles.aboutpic} src={shot} alt="soccer" />
        <img className={styles.aboutpic} src={plant} alt="s2" />
        </div>
        </Layout>
}