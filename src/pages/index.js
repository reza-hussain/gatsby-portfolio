import React from "react"
import { Helmet } from "react-helmet"
import "../styles/index.scss"
import Layout from "../components/layout"

import * as indexStyles from "./index.module.scss"

const IndexPage = () => {
  return (
    <div>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"
        ></link>
      </Helmet>
      <Layout>
        <div className={indexStyles.main}>
          <div className={`${indexStyles.column} ${indexStyles.leftCol}`}>
            <h1>Reza Hussain</h1>
            <p>I build pixel-perfect and scalabale web applications</p>
            <p className={indexStyles.icons}>
              <a
                target="_blank"
                href="https://github.com/reza-hussain"
                rel="noreferrer"
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                target="_blank"
                href="https://linkedin.com/in/arezahussain"
                rel="noreferrer"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </p>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default IndexPage
