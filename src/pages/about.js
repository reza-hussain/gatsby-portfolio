import React from 'react'
import { Link } from 'gatsby'

import Layout from "../components/layout"

const AboutPage = () => {
    return (
        <Layout>
            <h1>About Me</h1>
            <p>I currently freelance as a front-end developer full-time.</p>
            <h2>Skills</h2>
            <p>ReactJS / GatsbyJS / HTML / CSS / JavaScript</p>
            <p><Link to="/contact">Want to work with me? Reach out.</Link></p>
        </Layout>
    )
}

export default AboutPage