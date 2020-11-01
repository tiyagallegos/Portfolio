import React from "react"
import Layout from '../components/Layout'
import styles from '../components/Layout/Layout.module.scss'
import { Carousel } from 'react-bootstrap' 
import yummy1 from "./yummy1.png"
import exchange from "./exchange.png"
import gyb from "./GYB1.png"
import r4u from "./r4u.png"
import sw from "./sw1.png"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"



const Projects =(props) => {
  return( 
    <Layout pageTitle="Projects">
      <h1 className={styles.projectsh1}>Projects</h1>
      <Carousel>
        <Carousel.Item>
        <img src={yummy1} alt="SW starship indexPage"/>
        <Carousel.Caption>
          <h2>Yummy!</h2>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>Exchange
          <img src={exchange} alt="This is exchange home page"/>
        </Carousel.Item>
        <Carousel.Item>GYB<img src={gyb} alt="GYB Landing Page"/></Carousel.Item>
        <Carousel.Item>Rooting For You<img src={r4u} alt="Rooting for you Landing Page"/></Carousel.Item>
        <Carousel.Item>Star Wars<img src={sw} alt="SW starship indexPage"/></Carousel.Item>
      </Carousel>

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