import React from 'react'
import { Link } from 'gatsby'
import '../styles/index.scss'

import * as indexStyles from './index.module.scss'

const IndexPage = () => {
    return (
        <>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"></link>
        <div className={indexStyles.main}>
            <div className={`${indexStyles.column} ${indexStyles.leftCol}`}>
                <h1>Reza</h1>
                <h2>Hussain</h2>
                <p>I'm a freelance front-end developer living in India</p>
                <p className={indexStyles.icons}>
                    <i className="bi bi-github"></i>
                    <i className="bi bi-twitter"></i>
                </p>
            </div>

            <div className={`${indexStyles.column} ${indexStyles.rightCol}`}>
                <h1><i className={indexStyles.projects}></i></h1>
                <h1><i className={indexStyles.about}></i></h1>
                <h1><i className={indexStyles.envelope}></i></h1>
            </div>
        </div>
        </>
    )
}

export default IndexPage