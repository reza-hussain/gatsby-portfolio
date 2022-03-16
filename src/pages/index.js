import React from 'react'
import { Link } from 'gatsby'
import '../styles/index.scss'
import Layout from '../components/layout'

import * as indexStyles from './index.module.scss'

const IndexPage = () => {
    return (
        <>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"></link>
        <Layout>
        <div className={indexStyles.main}>
            <div className={`${indexStyles.column} ${indexStyles.leftCol}`}>
                <h1>Reza Hussain</h1>
                <p>I'm a freelance front-end developer living in India</p>
                <p className={indexStyles.icons}>
                    <i className="bi bi-github"></i>
                    <i className="bi bi-twitter"></i>
                </p>
            </div>
        </div>
        </Layout>
        </>
    )
}

export default IndexPage