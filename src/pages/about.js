import React from 'react'
import Layout from '../components/Layout'
import zo from '../../public/static/images/zo.jpg'
import shot from '../../public/static/images/shot.jpg'
import s2 from '../../public/static/images/s2.jpg'

export default function About() {
    return <Layout pageTitle="About">
        <h1>About Me</h1>
        <p>I'm a full stack developer with a background in speech pathology: pediatric feeding and complex medical cases.
        I take a data centric approach to my work and focusing on long-term solutions, efficiency, and scalability.
        I enjoy building real-world, user-friendly applications that create large scale impact. My other hobbies include hiking and kayaking
        with my dog Zorrito, playing instruments including guitar, bass, and saxophone, and playing soccer. 
        </p>
        <img src={zo} alt="zo"  />
        <img src={shot} alt="soccer" />
        <img src={s2} alt="s2" />

        </Layout>
}