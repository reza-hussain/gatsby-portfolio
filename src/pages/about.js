import React from 'react'
import { Link } from 'gatsby'

import Layout from "../components/layout"

const AboutPage = () => {
    return (
        <Layout>
            <h1 style={{color: "#7C99AC"}}>About Me</h1>
            <p style={{color: "#444444"}}>I currently freelance as a front-end developer full-time.</p>
            <h2 style={{color: "#7C99AC"}}>Skills</h2>
            <p style={{color: "#444444"}}>ReactJS / GatsbyJS / HTML / CSS / JavaScript</p>
            <p><Link to="/contact">Want to work with me? Reach out.</Link></p>
        </Layout>
    )
}

export default AboutPage