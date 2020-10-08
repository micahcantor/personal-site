import React from "react"
import {graphql} from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo.js"
import Header from "../components/header.jsx"

const ProjectsPage = ({ data }) => {
  return (
    <>
      <SEO title="Projects" />
      <div className="bg-bgDark text-textColor flex flex-col w-full h-full">
        <div className="flex flex-col container items-center mx-auto md:w-3/4 lg:w-1/2 px-4 pt-4 pb-8">
          <Header onBlog={false}/>
          <div className="flex flex-col w-full h-full space-y-3">
            <span className="text-4xl font-semibold">Projects</span>
            <div className="overflow-y-auto w-full h-full">
              <ProjectsList data={data}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const ProjectsList = ({ data }) => {
  const items = ProjectsData(data).projects.map((project, index) => 
    <li key={index}>
      <ProjectItem title={project.title} image={project.image} description={project.description} tech={project.tech} links={project.links}></ProjectItem>
    </li>
  )
  return <ul className="space-y-3">{items}</ul>
}

const ProjectItem = ({image, title, description, tech, links}) => {
  const linkItems = links.map((item, index) =>
    <li key={index}>
      <a className="hover:text-primary text-sm text-gray-700 font-semibold" href={item.href}>{item.type}</a>
    </li>
  )
  const techPills = tech.map((name, index) =>
    <li key={index}>
      <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">{name}</div>
    </li>
  )
  return (
    <div className="max-w-sm w-full md:max-w-full md:flex">
      <Img fluid={image}
        className="bg-white h-48 md:h-auto md:w-48 flex-none bg-cover rounded-t md:rounded-t-none md:rounded-l text-center overflow-hidden" >
      </Img>
      <div className="bg-white space-y-3 rounded-b md:rounded-b-none lg:rounded-r py-4 px-5 flex flex-col justify-between leading-normal">
        <div className="flex justify-between items-center">
          <div className="text-gray-900 font-bold text-lg">{title}</div>
          <ul className="flex items-center space-x-2 uppercase">{linkItems}</ul>
        </div>
        <p className="text-gray-700 text-base">{description}</p>
        <ul className="flex items-center space-x-2">{techPills}</ul>
      </div>
    </div>
  )
}

const ProjectsData = (data) => {
  return { projects: [
    {
      title: "Duotonic",
      description: `A full stack web application that enables users to synchronously listen to Spotify and 
        chat with a group of people. Node.js backend communicates with the Spotify API to play music in the 
        user's browser and respond to song search requests. Listeners are connected via web sockets which communicate 
        playback updates and chat messages to those who are listening together.`,
      image: data.duotonic.childImageSharp.fluid,
      tech: ["React", "Gatsby", "Node.js", "MongoDB"],
      links: [
        { type: "website", href: "https://duotonic.co" },
        { type: "app", href: "https://app.duotonic.co"},
        { type: "github", href: "https://github.com/micahcantor/duotonic" }
      ]
    },
    {
      title: "Search Bar for Classroom",
      description: `A Chrome extension that allows teachers and students to search the Google Classroom coursework stream. 
        Once authorized by the user using an OAuth2 flow conducted on the backend, it pulls user data from the Classroom API.`,
      image: data.searchbar.childImageSharp.fluid,
      tech: ["Chrome Extension", "JS", "HTML/CSS"],
      links: [
        { type: "website", href: "https://chrome.google.com/webstore/detail/search-bar-for-classroom/dmlfplbdckbemkkhkojekbagnpldghnc"},
        { type: "github", href: "https://github.com/micahcantor/SearchBarForClassroom"}
      ]
    },
    {
      title: "Dailypapers",
      description: `A Chrome extension that changes the user's Chrome wallpaper to a top post from Reddit every day. The extension connects to a Go backend that pulls
        the photo from Reddit, resizes it using a content aware image resizing library, then uploads relevant data to Amazon S3 and a Mongo database.`,
      image: data.daily.childImageSharp.fluid,
      tech: ["Chrome Extension", "Go", "MongoDB"],
      links: [
        { type: "website", href: "https://chrome.google.com/webstore/detail/dailypapers/ipodddjpoagkaecbkadidoiedjkomghp"},
        { type: "github", href: "https://github.com/micahcantor/dailypapers"}
      ]
    },
    {
      title: "Personal Website",
      description: `A simple website to host my personal projects and blog. Built with Tailwind CSS and React/Gatsby.`,
      image: data.personal.childImageSharp.fluid,
      tech: ["React", "Gatsby", "Tailwind"],
      links: [
        { type: "website", href: "/"},
        { type: "github", href: "https://github.com/micahcantor/PersonalHomepage"}
      ]
    }
  ]}
}

export const imagesQuery = graphql`{
  duotonic: file(relativePath: {eq: "duotonic.png"}) {
    childImageSharp {
      fluid(maxWidth: 500, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  },
  searchbar: file(relativePath: {eq: "SearchbarScreenshot1.png"}) {
    childImageSharp {
      fluid(maxWidth: 500, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  },
  daily: file(relativePath: {eq: "daily.png"}) {
    childImageSharp {
      fluid(maxWidth: 500, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  },
  personal: file(relativePath: {eq: "PersonalSite.png"}) {
    childImageSharp {
      fluid(maxWidth: 500, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  },
}`

export default ProjectsPage
