import React from "react"
import Layout from '../components/Layout'
import profile from './profile.jpg'
import styles from '../components/Layout/Layout.module.scss'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faJsSquare, faCss3Alt, faNode, faPython, faAws, faHtml5, faJs, faNodeJs } from '@fortawesome/free-brands-svg-icons'
import { FaFlask} from 'react-icons/fa'
import { DiDjango, DiRuby, DiPostgresql, DiSass } from 'react-icons/di'
import { SiJavascript,SiMongodb, SiPython, SiPostgresql, SiDjango, SiJava, SiSass} from 'react-icons/si'
import { GrStripe} from 'react-icons/gr'



export default function Home() {
  return( 
    <Layout pageTitle="Home">
      <div className={styles.indexcontainer}>
      <div className={styles.profileheader}>
      <h2 className={styles.name}>Tiya Gallegos</h2>
      </div>
    
      <Link to="/about"><img className={styles.profilepic} src={profile} alt="profile pic"/></Link> 
      
      <div classname={styles.h2index}>
      <h2>Full Stack Developer</h2>
      </div>
      <div>
      <p className={styles.blurb}>As a data-centric developer, I blend innovation and creativity with functionality to find effective solutions to large-scale problems.</p>
      </div>
      <h2>Technologies:</h2>
      <section className={styles.skills}>
      <div className={styles.tech}><FontAwesomeIcon icon={faReact}/></div>
      <div className={styles.tech}><SiJavascript/></div>
      <div className={styles.tech}><FontAwesomeIcon icon={faCss3Alt}/></div>
      <div className={styles.tech}><FontAwesomeIcon icon={faHtml5}/></div>
      <div className={styles.tech}><FontAwesomeIcon icon={faNodeJs}/></div>
      <div className={styles.tech}><FontAwesomeIcon icon={faNode}/></div>
      <div className={styles.tech}><FontAwesomeIcon icon={faPython}/></div>
      <div className={styles.tech}><FontAwesomeIcon icon={faAws}/></div>
      <div className={styles.tech}><FaFlask/></div>
      <div className={styles.tech}><DiDjango/></div>
      <div className={styles.tech}><DiSass/></div>
      <div className={styles.tech}><SiDjango/></div>
      <div className={styles.tech}><SiPostgresql/></div>
      <div className={styles.tech}><SiMongodb/></div>
      <div className={styles.tech}><GrStripe/></div>
      </section>
    </div>
    </Layout>

  )
}
