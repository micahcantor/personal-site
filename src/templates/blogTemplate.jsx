import React from "react"
import "../components/markdown-styles.css"
import Header from "../components/header"
import SEO from "../components/seo"
import { graphql } from "gatsby"

export default function Template({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  console.log(markdownRemark)
  const { frontmatter, html } = markdownRemark
  return (
    <>
      <SEO title={frontmatter.title} />
      <div className="bg-bgDark text-textColor flex flex-col w-full h-screen">
        <div className="flex flex-col container items-center mx-auto md:w-3/4 lg:w-1/2 px-4 pt-4 pb-8">
          <Header />
          <main className="w-full overflow-hidden px-4 pb-4">
            <div
              className="markdown"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </main>
        </div>
      </div>
    </>
  )
}
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`