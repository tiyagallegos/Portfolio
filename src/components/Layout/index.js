import React, { Fragment } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Head from '../Head'
import Header from '../Header'
import Footer from '../Footer'
import '../../styles/reset.scss'
import styles from './Layout.module.scss'



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
                    <div className={styles.requests}>
                    <div> Request 1</div>
                    <div> Request 2</div>
                    <div> Request 3</div>
                    <div> Request 4</div>
                    <div> Request 5</div>
                    <div> Request 6</div>
                    </div>
                    <section> User: Tiya <br/>
                            Active: yes<br/>
                            Details: efqeqefqf<br/>
                    </section>
                    <div className={styles.images}>
                    <img src="https://i.imgur.com/TUQvrsV.jpg"></img>
                    <img src="https://i.imgur.com/WRoLdLW.jpeg"></img>
                    <img src="https://i.imgur.com/TUQvrsV.jpg"></img>
                    <img src="https://i.imgur.com/WRoLdLW.jpeg"></img>
                    <img src="https://i.imgur.com/TUQvrsV.jpg"></img>
                    <img src="https://i.imgur.com/WRoLdLW.jpeg"></img>
                    <img src="https://i.imgur.com/TUQvrsV.jpg"></img>
                    <img src="https://i.imgur.com/WRoLdLW.jpeg"></img>
                    <img src="https://i.imgur.com/TUQvrsV.jpg"></img>
                    <img src="https://i.imgur.com/WRoLdLW.jpeg"></img>
                    </div>
                <Footer /> 
            </div>
        </Fragment>
    )
}