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
      <div className="bg-bgDark text-textColor flex flex-col w-full h-screen overflow-y-auto">
        <div className="flex flex-col container mx-auto lg:w-3/4 xl:w-1/2 px-4 pt-4 pb-8">
          <Header onBlog={true}/>
          <main className="w-full overflow-hidden pb-4">
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