import React from "react"
import SEO from "../components/seo.js"
import Header from "../components/header.jsx"


const IndexPage = () => {
  return (
    <>
      <SEO title="Home"/>
      <div className="bg-bgDark text-textColor flex flex-co h-screen">
        <div className="flex flex-col container items-center mx-auto md:w-3/4 lg:w-1/2 px-4 pt-4 pb-8">
          <Header />
          <div className="flex flex-col items-center justify-center h-full mb-32 leading-none space-y-6">
            <span className="text-5xl md:text-6xl font-bold">Micah Cantor</span>
            <span className="text-2xl md:text-3xl text-center">CS Student at Grinnell College</span>
            <Icons />
          </div>
        </div>
      </div>
    </>
  )
}

const Icons = () => {
  return (
    <div className="flex justify-center items-center space-x-2">
      <div className="flex items-center">
        <a href="mailto:micahcantor01@gmail.com">
          <svg className="w-8 h-8 stroke-current hover:stroke-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
        </a>
      </div>
      <div className="flex items-center">
        <a href="https://github.com/micahcantor">
          <svg className="w-8 h-8 fill-current hover:fill-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        </a>
      </div>
    </div>
  )
}

export default IndexPage
