import React from "react"
import * as BlogStyles from "./BlogPost.module.scss"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

function BlogPost({ edge }) {
  const image = getImage(edge.node.projectImage)
  return (
    <div className={BlogStyles.main}>
      <GatsbyImage image={image} />
      <div className={BlogStyles.description}>
        <h4>{edge.node.title}</h4>
        <p>{edge.node.shortDescription}</p>
        <div className={BlogStyles.icons}>
          <a href={edge.node.githubLink} target="_blank" rel="noreferrer">
            <i className="bi bi-github" />
          </a>
          <a href={edge.node.viewProject} target="_blank" rel="noreferrer">
            <i className="bi bi-globe" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default BlogPost
