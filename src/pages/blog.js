import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import * as blogStyles from './blog.module.scss'



const BlogPage = () => {

    const data = useStaticQuery(graphql`
        query{
            allContentfulProjects(
                sort:{
                  fields:publishedDate
                  order: ASC
                  }
              ){
                edges{
                  node{
                    title
                    shortDescription
                    publishedDate(formatString:"MMMM Do, YYYY")
                    viewProject
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
                            <>
                            <ul className={blogStyles.grid}>
                                <li className={blogStyles.post}>
                                    <div className={blogStyles.postContent}>
                                        <h3>{edge.node.title}</h3>
                                        <p>{edge.node.publishedDate}</p>
                                    </div>
                                    <div className={blogStyles.postHover}>
                                        <h5>{edge.node.shortDescription}</h5>
                                        <p className={blogStyles.postIcons}>
                                        <a href='https://github.com/reza-hussain'target="_blank"><i className='bi bi-github'/></a>
                                            <i className='bi bi-globe'></i>
                                        </p>
                                    </div>
                                </li>
                            </ul>
                            </>
                        )
                    })}
                </ol>
            </>
        </Layout>
    )
}
export default BlogPage