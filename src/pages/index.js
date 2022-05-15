import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class="flex justify-center items-center align-top py-8">
      <div style={{margin: `0 0 20px` }}>
        <StaticImage
          src="../images/octomob-home-hero.png"
          alt="OctoMob"
        />
      </div>
    </div>
    <div class="container mx-auto">
      <div class="grid grid-cols-2 gap-4 text-white text-center text-2xl">
        <div>01</div>
        <div>02</div>
      </div>
      <p><Link to="/page-2/">Go to page 2</Link></p>
      <p><Link to="/using-typescript/">Go to "Using TypeScript"</Link></p>
    </div>
  </Layout>
)

export default IndexPage
