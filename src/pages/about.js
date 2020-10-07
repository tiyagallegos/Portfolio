import React from 'react'
import Layout from '../components/Layout'
import Img from 'gatsby-image'

export default function About() {
    return <Layout pageTitle="About">
        <h1>About Me</h1>
        <p>I'm a full stack developer with a background in speech pathology: pediatric feeding and complex medical cases.
        I take a data centric approach to my work and focus diagnostics in the form of long-term solutions and finding the root cause.
        I enjoy building real-world, user-friendly applications that create large scale impact. My other hobbies include hiking and kayaking
        with my dog Zorrito, playing instruments including guitar, bass, and saxophone, and playing soccer. 
        </p>
        <Img title="zo picture" alt="zorrito on a kayak"src={'/img1.jpg'}></Img> />
        <img title="zo picture" alt="zorrito on a kayak"src='/static/img1.jpg' />

        </Layout>
}