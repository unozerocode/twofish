import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
export default ({data}) => {
  const tour = data.markdownRemark
  return (
    <Layout>
      <div>
       
        <div dangerouslySetInnerHTML={{ __html: tour.html }} />
      </div>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`