import React from "react"

import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

export default ({ data }) => {
  return (
    <Layout>
      <div>
        <h1>
          Two Fish Travel Company
        </h1>

        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
          <Link
            to={node.fields.slug}
          >
             <p>{node.frontmatter.title}</p>
             </Link>
             </div>
              ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          frontmatter { title }
          id
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`