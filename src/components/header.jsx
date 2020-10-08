import React from "react"
import { Link } from "gatsby"

export default () => {
  return (
    <div className="flex flex-col justify-center text-2xl w-full pb-4">
      <span className="font-semibold">Micah Cantor</span>
      <div className={`flex space-x-4 justify-start`}>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/projects">Projects</Link>
      </div>
    </div>
  )
}
