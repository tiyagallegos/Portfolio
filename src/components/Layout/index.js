import React, { Fragment } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Head from '../Head'
import Header from '../Header'
import Footer from '../Footer'
import '../../styles/reset.scss'
import styles from './Layout.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css'


export default function Layout({ pageTitle, children }) {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    author
                    theGoat
                    keywords
               }
            }
        }
    `)

    
    return(
        <Fragment>
            <Head title={data.site.siteMetadata.title}
                  keywords={data.site.siteMetadata.keywords}
                  pageTitle={pageTitle}
            />
            <div className={styles.Layout}>
                <Header title={data.site.siteMetadata.title}/>
                    <main>
                    {children}
                    </main>
                <Footer /> 
            </div>
        </Fragment>
    )
}