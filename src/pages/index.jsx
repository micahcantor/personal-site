import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo.js"
import Header from "../components/header.jsx"
import Layout from "../components/layout.jsx"

const BlogPage = ({ data }) => {
  const {
    allMarkdownRemark: { edges },
  } = data
  const blogPosts = edges.map(({ node }) => {
    const { frontmatter } = node
    const { title, date, draft, description, slug } = frontmatter
    if (!draft) return (
      <BlogItem
        title={title}
        date={date}
        description={description}
        slug={slug}
        key={node.id}
      />
    )
    else return null
  })

  return (
    <div className="h-screen">
      <SEO title="Blog" />
      <Layout>
        <Header onBlog={true} />
        <div className="flex flex-col w-full h-full space-y-3">
          <span className="text-4xl font-bevan font-semibold">Blog</span>
          <div className="space-y-5 pb-6">{blogPosts}</div>
        </div>
      </Layout>
    </div>
  )
}

const BlogItem = ({ title, date, description, slug }) => {
  return (
    <Link
      className="bg-white border-textColor border-t-8 shadow-md rounded-md p-4 flex flex-col"
      to={slug}
    >
      <span className="text-2xl">{title}</span>
      <span className="">{date}</span>
      <span className="text-xl font-light">{description}</span>
    </Link>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            draft
            title
            description
          }
        }
      }
    }
  }
`

export default BlogPage
