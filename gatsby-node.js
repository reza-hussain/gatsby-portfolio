const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogTemplate = path.resolve('./src/templates/blog.js')
    const res = await graphql(`
        query{
            allContentfulProjects{
                edges{
                  node{
                    shortDescription
                  }
                }
              }
        }
    `)
    
    res.data.allContentfulProjects.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.shortDescription}`,
            context: {
                shortDescription: edge.node.shortDescription
            }
        })
    } )
}