import React from "react"
import Layout from '../components/Layout'
import Resume from '../../public/static/pdf/Resume.pdf'
import gcap from '../../public/static/images/gcap.jpg'
import styles from '../components/Layout/Layout.module.scss'

export default function Home() {
  return( 
    <Layout pageTitle="Home">
      <a className={styles.resumebutton} href={Resume}>Download Resume</a><br></br>
      <div className={styles.resumecontainer}>
      <div className={styles.resumehead}>
      <h1>Resume & Education</h1>
      <h2>Tiya Gallegos</h2>
      <h3>Full Stack Developer</h3>
      <h3>Denver, CO </h3>
      </div>
      <img className={styles.gradpic} src={gcap} alt="grad pic"/>
      </div> 
      <div className={styles.resumebox}>
      <h4><u>TECHNICAL SKILLS</u>:</h4>
        <p><strong>Front-End Development:</strong> HTML, CSS, JavaScript, SASS, SCSS, ES6<br></br>
        <strong>JavaScript Ecosystem:</strong> Webpack, NPM, Gatsby, Netlify, Firebase, Heroku<br></br>
        <strong>Backend Development:</strong> Node, MongoDB, PostgreSQL, Python, Django, Flask<br></br>
        <strong>JavaScript Frameworks/Libraries:</strong> React, Express, React Router, Dom, Bulma, Bootstrap, Materialize, Mongoose, Axios, jQuery<br></br>
        <strong>Version Control:</strong> Git, Github<br></br>
        <strong>Tools:</strong> AWS, Stripe, WebSocket, bCrypt, codepen, visual studio code, Atlas<br></br>
        </p>
        <h4><u>WORK EXPERIENCE</u>:</h4>
        <p><strong>Solace Home Healthcare (SLP & Clinical Mentor)</strong>Denver, CO June 2018-Present
            <ul>
                <li>Provided speech and language services through consultation, inclusion support, and individual instruction</li>
                <li>Administered individual evaluations, developed treatment plans, and carried out treatment plans in individual settings</li>
                <li>Clinical Mentor - Facilitated meetings involving chart audits, clinician support, and collaborative multidisciplinary problem solving</li>
            </ul>
        </p>
        <p><strong>Let’s Talk Therapy Clinical Manager (Management & SLP Supervisor)</strong>Duluth, GA June 2016-May 2018
            <ul>
                <li>Provided speech and language services through consultation, inclusion support, and individual instruction</li>
                <li>Administered individual evaluations, developed treatment plans, and carried out treatment plans in individual settings</li>
                <li>Management duties: scheduling, insurance correspondence, evaluation/plan of care coordinator, supervision of SLPA, and clinical fellow, consults, new hire orientation, hiring/applicant process/interviews</li>
                <li>Pediatric Feeding Clinic: developed policy and procedures for LTT feeding clinic, pediatric feeding mentor/supervisor</li>
                <li>In-service coordinator and presenter; Community outreach consultant and coordinator</li>
            </ul>
        </p>
        <p><strong>Denver Public Schools (Full Time SLP and Supervisor)</strong>Denver, CO July 2015-June 2016
            <ul>
                <li>Provided speech and language services through consultation, inclusion support, small group and individual instruction</li>
                <li>Administered individual evaluations, developed treatment plans, and carried out treatment plans in group/individual settings</li>
                <li>Attended and participated in IEP meetings; Case management; Experience with Medicaid documentation in school settings</li>
                <li>Managed and mentored SLPA</li>
            </ul>
        </p>
        <h4><u>EDUCATION & CERTIFICATES</u>:</h4>
        <p>Software Immersive Engineering, General Assembly<br></br>
            M.S., Speech Language Pathology, Boston University<br></br>
            B.S., Speech, Language and Hearing Sciences, Boston University<br></br>
            Professional Women’s Soccer 2012-2014</p>
    </div>

    </Layout>
  )
}
