import React from "react"
import Layout from '../components/Layout'
import profile from '../../public/staticfiles/images/profile.jpg'


export default function Home() {
  return( 
    <Layout pageTitle="Home">
      <img src={profile} alt="profile pic"/>
      <h1>Tiya Gallegos</h1>
      <h2>Full Stack Developer</h2>
      <p>A data centric developer with a detail-oriented lens and a passion for art across multiple mediums. I blend innovation and creativity with functionality to find effective solutions to large-scale problems.</p>
    </Layout>

  )
}
