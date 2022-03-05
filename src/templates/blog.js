import { graphql } from 'gatsby'
import React from 'react'

import Layout from '../components/layout'

export const query = graphql`
  query($shortDescription: String!){
    contentfulProjects(shortDescription:{eq:$shortDescription}){
      title,
      publishedDate(formatString: "MMMM Do, YYYY")
    }
  }
`

const Blog = (props) => {
  return (
    <Layout>
        <h1>{props.data.contentfulProjects.title}</h1>
        <p>{props.data.contentfulProjects.publishedDate}</p>
    </Layout>
  )
}

export default Blog