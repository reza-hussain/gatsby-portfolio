import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import * as styles from "./about.module.scss"

const AboutPage = () => {
  return (
    <Layout>
      <h1 style={{ color: "#7C99AC" }}>About Me</h1>
      <p style={{ color: "#444444" }}>
        After the lockdown hit, I started to use my free time to code. React was
        something that caught my interest and I decided to give it a try.
        Fast-forward to today, I have over 2 years of experience building
        products for tech companies. I am well-versed in MERN, Next.js and I'm
        starting to get better at Typescript. <br />
        <br /> I enjoy UI development especially the animations. Writing complex
        logic to achieve certain interactions is what my brain loves to do.{" "}
        <br />
        <br />
        When I'm not on my computer, I am mostly travelling, playing badminton
        or hanging out with my cousins. I am a cat person 🐾
      </p>
      <h2 style={{ color: "#7C99AC" }}>Skills</h2>
      <ul className={styles.list} style={{ color: "#444444" }}>
        <li>React JS</li>
        <li>Next JS</li>
        <li>MongoDB</li>
        <li>Express</li>
        <li>Node JS</li>
        <li>Typescript</li>
        <li>VueJS</li>
        <li>Redux</li>
        <li>Figma</li>
        <li>Javscript</li>
      </ul>
      <p>
        <Link to="/contact">Want to work with me? Reach out.</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
