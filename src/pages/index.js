import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class="bg-gradient-to-r from-purple-500 to-pink-500 flex justify-center items-center align-top py-8">
      <div style={{ maxWidth: `2000px`, margin: `0 1rem` }}>
        <StaticImage
          src="../images/mob-logo-hero.svg"
          alt="OctoMob"
        />
      </div>
    </div>
      <div class="grid grid-cols-3 gap-4 text-white text-center text-2xl">
        <div>01</div>
        <div>02</div>
        <div>03</div>
        <div>04</div>
        <div>05</div>
        <div>06</div>
        <div>07</div>
        <div>08</div>
        <div>09</div>
      </div>
  </Layout>
)

export default IndexPage
