import React from "react"
import Layout from '../components/Layout'
import profile from './profile.jpg'
import styles from '../components/Layout/Layout.module.scss'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faJsSquare, faCss3Alt, faNode, faPython, faAws, faHtml5 } from '@fortawesome/free-brands-svg-icons'



export default function Home() {
  return( 
    <Layout pageTitle="Home">
      <div className={styles.indexcontainer}>
      <div className={styles.profileheader}>
      <h1>Tiya Gallegos</h1>
      </div>
    
      <Link to="/about"><img className={styles.profilepic} src={profile} alt="profile pic"/></Link> 
      
      <div classname={styles.h2index}>
      <h2>Full Stack Developer</h2>
      </div>
      <div classname={styles.profblurb}>
      <p>A data centric developer with a detail-oriented lens. I blend innovation and creativity with functionality to find effective solutions to large-scale problems.</p>
      </div>
      <h3>Technologies:</h3>
      <p>React, JavaScript, CSS, HTML, Node.js, Express, MongoDB, Python, AWS, Django, Flask, jQuery, PostgreSQL</p>
    </div>
    </Layout>

  )
}
