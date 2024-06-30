import React from "react"

import Layout from "../components/layout"

const ContactPage = () => {
  return (
    <Layout>
      <h1 style={{ color: "#7C99AC" }}>Contact</h1>
      <p>
        The best way to reach me is via &nbsp;
        <a
          href="https://www.linkedin.com/in/arezahussain/"
          rel="noreferrer"
          target="_blank"
        >
          @arezahussain
        </a>
        &nbsp;on LinkedIn!
      </p>
      <p>
        I am also on WhatsApp. Let's chat &nbsp;
        <a href="https://wa.me/+917995449754" rel="noreferrer">
          here
        </a>
      </p>

      <p>
        Emails work too. You can hit me up at&nbsp;
        <a href="mailto:alirezaa08@gmail.com">alirezaa08@gmail.com</a>
      </p>
    </Layout>
  )
}

export default ContactPage
