import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
// ...GatsbyImageSharpFluid

const Hero = () => {
  return <header>
    <div className="section-center hero-center">
      <article className="hero-info">
        <h1>Hi, I'm Winston</h1>
        <h4>Application Engineer</h4>
        <Link to='/contact' className="btn">
          Contact Me
        </Link>
        <SocialLinks/>
      </article>
    </div>
  </header>
}

export default Hero
