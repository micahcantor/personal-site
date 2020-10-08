import React from "react"
import {Link} from "gatsby"
import SEO from "../components/seo.js"
import Header from "../components/header.jsx"

const BlogPage = () => {
  return (
    <>
      <SEO title="Blog" />
      <div className="bg-bgDark text-textColor flex flex-col w-full h-screen">
        <div className="flex flex-col container items-center mx-auto md:w-3/4 lg:w-1/2 px-4 pt-4 pb-8">
          <Header onBlog={true}/>
          <div className="flex flex-col w-full h-full space-y-3">
            <span className="text-4xl font-semibold">Blog</span>
            <div className="overflow-y-auto">
              <BlogItem title="Parsing propositional logic in 30 lines of Racket" date="Oct 6, 2020" description="hello there" slug="racket-parser"></BlogItem>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const BlogItem = ({title, date, description, slug}) => {
  return (
    <Link className="bg-white rounded-md p-4 flex flex-col" to={`/blog/${slug}`}>
      <span className="text-2xl">{title}</span>
      <span className="">{date}</span>
      <span className="text-xl font-light">{description}</span>
    </Link>
  )
}

export default BlogPage
