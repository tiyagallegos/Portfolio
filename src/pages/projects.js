import React from "react"
import Layout from '../components/Layout'
import styles from '../components/Layout/Layout.module.scss'
import { Carousel } from 'react-bootstrap' 
import yummy1 from "./yummy1.png"
import exchange from "./exchange.png"
import gyb from "./GYB1.png"
import r4u from "./r4u.png"
import sw from "./sw1.png"
import riri from "./riri2.png"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"



const Projects =(props) => {
  return( 
    <Layout pageTitle="Projects">
      <h1 className={styles.projectsh1}>Projects</h1>
     
      <div class={styles.container}>

      <div class={styles.container2}>
        <a href="https://cyberpunk-exchange.herokuapp.com/" target="_blank" className={styles.item}><img src={exchange} alt="Exchange Landing Page"/></a>
        <h2>Exchange</h2>
        <h4>Technology: HTML, CSS, Python, Django, PostgreSQL, Bulma, Sripe, AWS</h4>
        <p>This app was designed to serve as a community-focused e-commerce marketplace. We are guided by four key principles: safety, simplicity, efficiency, and user-friendly experience. The app is intended
          to provide a comfortable and easy buying and selling experience with optimal communication amongst users.</p>
        <a className={styles.projectbutton} href="https://github.com/guyett92/monetizico">View Github Code</a><a className={styles.projectbutton} href="https://cyberpunk-exchange.herokuapp.com/">Exchange</a>
     </div>
    
     <div class={styles.container2}>
        <a href="https://github.com/tiyagallegos/Rooting-for-You" target="_blank" className={styles.item}><img src={r4u} alt="R4u Landing Page"/></a>
        <h2>Rooting For You</h2>
        <h4>Technology: Python, Django, XML, CSS, JavaScript, Materialize</h4>
        <p>This app was designed to track, and manage plants for any level grower. The app allows for tracking of plants, pot idenfication, and watering and fertilziation logs. Picture uploads are also a feature. The app is targeted
          at urban gardeners to help with monitoring plants and the increase longevity of plant life in homes. 
        </p>
        <a className={styles.projectbutton} href="https://github.com/tiyagallegos/Rooting-for-You">View Github Code</a><a className={styles.projectbutton} href="https://github.com/tiyagallegos/Rooting-for-You">Rooting For You</a>
     </div>

     <div class={styles.container2}>
        <a href="https://got-yo-back-p3.herokuapp.com/" target="_blank" className={styles.item}><img src={gyb} alt="GYB Landing Page"/></a>
        <h2>GYB/ Got Yo Back</h2>
        <h4>Technology: Html, MongoDB, Mongoose, Express, React, Node, CSS, Google Fonts, JavaScript</h4>
        <p>This app is a community-based communication app. It provides the following features: Resources and information about the rationale of the app, a description of the app, and a donation page. The app contains restricted features for signed in users(token based) incuding creating, editing, deleting and displaying posts to request and/or be a homie.</p>
        <a className={styles.projectbutton} href="https://github.com/tiyagallegos/GYB">View Github Code</a><a className={styles.projectbutton} href="https://got-yo-back-p3.herokuapp.com/">GYB</a>
     </div>

     <div class={styles.container2}>
        <a href="https://p2-yummy.herokuapp.com/" target="_blank" className={styles.item}><img src={yummy1} alt="Yummy Landing Page"/></a>
        <h2>Yummy!</h2>
        <h4>Technology: Html, Mongoose, MongoDB, CSS, Google Fonts, Materialize, NodeJs, JavaScript, Express</h4>
        <p>This app was designed by a pediatric feeding speech langauge pathogist to provide a user friendly solution for visualtion and interpretation of feeding data and tracking progress of multiple patients on a single platform. With a clean and simple UI, Yummy! is efficient and accessible for people of all levels of tech proficiency. It is inteded to be a tool for both caregivers and therapists.</p>
        <a className={styles.projectbutton} href="https://github.com/tiyagallegos/Project2">View Github Code</a><a className={styles.projectbutton} href="https://p2-yummy.herokuapp.com/">Yummy!</a>
     </div>

     <div class={styles.container2}>
        <a href="https://github.com/tiyagallegos/react-star-wars" target="_blank" className={styles.item}><img src={sw} alt="SW React Landing Page"/></a>
        <h2>Star Wars: React</h2>
        <h4>Technology: XML, React, Star Wars API, Google Fonts, CSS</h4>
        <p>This app was designed as an exercise in demosntrating use of react, while implementing an API. It is a fun app for avid Star wars fans to test their knowledge of starship and planet facts.</p>
        <a className={styles.projectbutton} href="https://github.com/tiyagallegos/react-star-wars">View Github Code</a><a className={styles.projectbutton} href="https://github.com/tiyagallegos/react-star-wars">Star Wars:React</a>
     </div>

     <div class={styles.container2}>
        <a href="https://github.com/tiyagallegos/tiyagallegos.github.io" target="_blank" className={styles.item}><img src={riri} alt="Riri Landing Page"/></a>
        <h2>RiRi on Repeat</h2>
        <h4>Technology: HTML, JavaScript, CSS, JQuery, Google Fonts, API: Deezer Music</h4>
        <p>This app was designed to demonstrate the impmlentation of an API while providing audio clips of your favorite Rihanna songs as well as cover photos, and updates on press, Savage X Fenty, Fenty Beauty, and community service.</p>
        <a className={styles.projectbutton} href="https://github.com/tiyagallegos/tiyagallegos.github.io">View Github Code</a><a className={styles.projectbutton} href="https://github.com/tiyagallegos/tiyagallegos.github.io">RiRi on Repeat</a>
     </div>
  
  
</div>



    </Layout>
  )
}
export default Projects
export const query = graphql `
  query {
    exchangeql: file(relativePath: { eq: "exchange.png"}) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }`