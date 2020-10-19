import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo.js"
import Header from "../components/header.jsx"

const BlogPage = ({ data }) => {
  const { allMarkdownRemark: { edges } } = data;
  const blogPosts = edges.map(({ node }) => {
    const { frontmatter } = node;
    const {title, date, description, slug} = frontmatter;
    return <BlogItem title={title} date={date} description={description} slug={slug} key={node.id}/>
  }); 

  return (
    <>
      <SEO title="Blog" />
      <div className="bg-bgDark text-textColor flex flex-col w-full h-screen">
        <div className="flex flex-col container items-center mx-auto h-full lg:w-3/4 xl:w-1/2 px-4 pt-4 pb-8">
          <Header onBlog={true}/>
          <div className="flex flex-col w-full h-full space-y-3">
            <span className="text-4xl font-semibold">Blog</span>
            <div className="overflow-y-auto space-y-5">
              {blogPosts}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const BlogItem = ({title, date, description, slug}) => {
  return (
    <Link className="bg-white border-textColor border-t-8 shadow-md rounded-md p-4 flex flex-col" to={slug}>
      <span className="text-2xl">{title}</span>
      <span className="">{date}</span>
      <span className="text-xl font-light">{description}</span>
    </Link>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date]}) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            description
          }
        }
      }
    }
  }
`

export default BlogPage
