import React from 'react'
import { Link } from 'gatsby'
import '../styles/index.scss'

import Layout from '../components/layout'

const IndexPage = () => {
    return (
        <Layout>
            <h1>Hello.</h1>
            <h2>I'm Reza, a front-end developer living in Hyderabad, India.</h2>
            <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
        </Layout>
    )
}

export default IndexPage