import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import BlogPost from '../components/BlogPost'
import Layout from '../components/layout'
import * as blogStyles from './blog.module.scss'



const BlogPage = () => {

    const data = useStaticQuery(graphql`
        query{
            allContentfulProjects(
                sort:{
                  fields:publishedDate
                  order: DESC
                  }
              ){
                edges{
                  node{
                    projectImage{
                        gatsbyImageData(
                            layout:CONSTRAINED
                            width: 500
                        )
                    }
                    title
                    shortDescription
                    publishedDate(formatString:"MMMM Do, YYYY")
                    viewProject
                    githubLink
                  }
                }
            }
        }
    `)

    console.log(data);

    return (
        <Layout>
            <>
                <h1>Projects</h1>
                <ol className={blogStyles.posts}>
                    {data.allContentfulProjects.edges.map((edge) => {
                        return(
                            <BlogPost edge={edge} />
                        )
                    })}
                </ol>
            </>
        </Layout>
    )
}
export default BlogPage
