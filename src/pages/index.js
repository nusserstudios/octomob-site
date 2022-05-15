import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    
    <div class="flex justify-center items-center align-top">
      <div style={{margin: `0px` }}>
        <StaticImage
          src="../images/octomob-home-hero.png"
          alt="OctoMob"
        />
      </div>
    </div>
    <div class="bg-gradient-to-t from-red-700 to-orange-500">
      <div class="container mx-auto py-14">
        <h1 class="text-center uppercase text-white font-black xl:text-8xl lg:text-8xl md:text-6xl text-5xl drop-shadow">The Octomob</h1>
        <h2 class="text-center text-white font-thin text-4xl pt-3">Welcome to the Family</h2>
        <p class="text-center max-w-4xl mx-auto py-4 text-2xl px-4 font-extralight">
        The Family grows together, works together, and most importantly eats together. Respects will always be paid, & the ones who came before us must never be forgotten. As we continue to build out our community of DeFi All-stars, you're going to be my right-hand men. If we are going to make it, we are going to make it together. That's no reflection on any individual, it's just the way it is.
        </p>
      </div>
    </div>
    
    <div class="container mx-auto pt-14 px-4">
      <div class="flex flex-row text-gray-300 grid grid-cols-2 gap-4">
        <div>
          <StaticImage
            src="../images/made-men-logo.png"
            alt="OctoMob Made Men Logo"
            class="rounded-lg"
          /> 
        </div>
        <div class="md:pl-8">
          <h2 class="uppercase text-5xl pb-4 font-black">Genesis: OG MadeMen</h2>
          <p class="leading-8">The OctoMob OG Collection is max supply of 99 NFT's that will become "Made Men". The Family will continue to handpick members who practice what we preach already. As of right now, there are about 30 OG's left that will be auctioned on OpenSea, or you can contact us and will will create a custom OG "Made Man" just for you to diamond hand as long as you want. The Family is excited to see who rises to the top.</p>
          <p class="pt-3 leading-8">Each OG OctoMob NFT will include claimable airdrops twice over. One of these airdrops must be given/traded/sold to a trusted member to join the Family ranks, and also have the opportunity to move up the ranks through some very cool, cutting edge ideas that will be laid out Discord.</p>
          <p class="pt-3 leading-8">Connect with the DonFather to arrange your custom PFP, while you still have a shot pisan.</p>
        </div>
      </div>
    </div>

    <div class="container mx-auto pt-14 px-4">
      <div class="flex flex-row text-gray-300 grid grid-cols-2 gap-4">
        <div class="self-center">
          <StaticImage
            src="../images/hitmen-logo.png"
            alt="OctoMob"
            class="rounded-lg"
          />   
        </div>
        <div class="md:pl-8">
          <h2 class="uppercase text-5xl pb-4 font-black">Upcoming Mint: Hitmen</h2>
          <p class="leading-8">We are proud to announce "The OctoMob Hitmen" collection. This collection will be a series of 777 generative NFT PFP's. Our Partenerships include: Concave, Olympus Odyssey, Bad Bitches, Anata NFT, and more. Currently we have not set a date for the mint, but keep an eye on our Discord and Twitter for alfa on the drop.</p>
          <p class="leading-8 pt-3 ">We are excited to bring in new members to the family. We welcome you, and hope you will enjoy building the fam, and build an exciing community as we work together to make Web3 and the metaverse the decentralized and open community that it should be. Our vision is to work with the family to build something special in both the short and long term.</p>
          <p class="leading-8 pt-3 ">Coming Soon. Be on the lookout and become a part of the OctoMob family.</p>
        </div>
      </div>
    </div>

    <div class="container mx-auto pt-14 pb-14 px-4">
      <div class="flex flex-row text-gray-300 grid grid-cols-2 gap-4">
        <div class="self-center">
        <StaticImage
            src="../images/events-mob.png"
            alt="OctoMob Event Hosting"
            class="rounded-lg border-solid border-2 border-gray-600"
          />     
        </div>
        <div class="md:pl-8">
          <h2 class="uppercase text-5xl pb-4 font-black">Metaverse Event Hosting</h2>
          <p class="leading-8">Need a digital space for your commmunity? Listen close anon, we have an offer you can't refuse. Our extensive partnerships have allowed us to control the event space like we do the unions.</p>
          <p class="leading-8 pt-3 ">The OctoMob Board Room will allow you to host both public and private events. We can even provide you with a live DJ, planning and scheduling your event in our exclusive gather.town location. We even have a casino so your community can vibe and chill at the poker tables while you give your community the low-down with the latest happenings on your project. Weather it's an AMA, or a community night, we got you covered anon.</p>
          <p class="leading-8 pt-3 ">Let's get the good vibe going, and a place where we can all get together and enjoy DeFi and NFT's in the metaverse.</p>
        </div>
      </div>
    </div>
    <div class="bg-gradient-to-t from-red-700 to-orange-500">
      <div class="container mx-auto pt-12 pb-12 flex justify-center items-center">
          <div>
            <iframe src="https://player.twitch.tv/?video=1481348381&parent=octomob.xyz" frameborder="0" allowfullscreen="true" scrolling="no" height="915" width="1500"></iframe>
          </div>
      </div>
    </div>


  </Layout>
)

export default IndexPage
