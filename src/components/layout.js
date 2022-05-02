import React from 'react'

import Header from './header'
import Footer from './footer'

import * as layoutStyles from './layout.module.scss'
const Layout = (props) => {
    return (
        <div>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"></link>
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
                <Header />
                {props.children}
            </div>
            <Footer />
        </div>
        </div>
    )
}

export default Layout