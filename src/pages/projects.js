import React from "react"
import Layout from '../components/Layout'
import styles from '../components/Layout/Layout.module.scss'




export default function Projects() {
  return( 
    <Layout pageTitle="Projects">
      <h1>Projects</h1>
      <div className={styles.projectcontainer}>
      <h4 className={styles.projects}>Exchange
      <a className={styles.projectbutton} href="https://cyberpunk-exchange.herokuapp.com/" target="_blank">View</a>
      </h4>
      <h4 className={styles.projects}>GYB
      <a className={styles.projectbutton} href="https://got-yo-back-p3.herokuapp.com/" target="_blank">View</a></h4>
      <h4 className={styles.projects}>Rooting For You
      <a className={styles.projectbutton} href="https://github.com/tiyagallegos/Rooting-for-You" target="_blank">View</a>
      </h4>
      <h4 className={styles.projects}>Star Wars React
      <a className={styles.projectbutton} href="https://github.com/tiyagallegos/react-star-wars">View</a>
      </h4>
      <h4 className={styles.projects}>Yummy!
      <a className={styles.projectbutton} href="https://p2-yummy.herokuapp.com/">View</a>
      </h4>
      <h4 className={styles.projects}>RiRi on Reapeat
      <a className={styles.projectbutton} href="https://github.com/tiyagallegos/tiyagallegos.github.io">View</a>
      </h4>
      </div>
    </Layout>
  )
}
