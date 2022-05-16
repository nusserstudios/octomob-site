import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="OctoMob Family NFT" />
    
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
      <div class="flex flex-row text-gray-300 grid md:grid-cols-2 grid-cols-1 gap-4">
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
      <div class="flex flex-row text-gray-300 grid md:grid-cols-2 grid-cols-1 gap-4">
        <div class="self-center">
          <StaticImage
            src="../images/hitmen-logo.png"
            alt="OctoMob"
            class="rounded-lg"
          />   
        </div>
        <div class="md:pl-8">
          <h2 class="uppercase text-5xl pb-4 font-black">Upcoming Mint: Hitmen</h2>
          <p class="leading-8">We are proud to announce "The OctoMob Hitmen" collection. This collection will be a series of 777 generative NFT PFP's. Our Partenerships include: Concave, Olympus Odyssey, Redacted Cartel, Bad Bitches, Anata NFT, and more. Currently we have not set a date for the mint, but keep an eye on our Discord and Twitter for alfa on the drop.</p>
          <p class="leading-8 pt-3 ">We are excited to bring in new members to the family. We welcome you, and hope you will enjoy building the fam, and build an amazing community as we work together to make Web3 and the metaverse the decentralized and open community that it should be. Our vision is to work with the family to build something special in both the short and long term.</p>
          <p class="leading-8 pt-3 ">Coming Soon. Be on the lookout and become a part of the OctoMob family.</p>
        </div>
      </div>
    </div>

    <div class="container mx-auto pt-14 pb-14 px-4">
      <div class="flex flex-row text-gray-300 grid md:grid-cols-2 grid-cols-1 gap-4">
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
    <div class="bg-gradient-to-t from-zinc-900 to-black">
      <div class="container mx-auto py-7">
        <h2 class="uppercase text-5xl pb-4 font-black text-center align-middle">New Weekly vCasts</h2>
      </div>
    </div>
    <div class="bg-gradient-to-t from-pink-900 to-purple-500">
      <div class="flex flex-row max-w-screen-2xl mx-auto grid grid-cols-1 gap-4 pt-16 pb-0">
        <div class="px-4">
          <StaticImage
            src="../images/mob-ties-featured.png"
            alt="OctoMob Event Hosting"
            class="rounded-lg border-solid border-2 border-white-400"
          />  
        </div>
        <div class="flex mx-auto mt-6">
          <div class="bg-gradient-to-b from-black to-transparent p-8 border-solid border-2 border-white-400 rounded-lg max-w-screen-xl m-4">
            <h2 class="uppercase text-5xl pb-4 font-black drop-shadow text-center">Mob Ties AnataCast</h2>
              <p class="leading-7 text-lg mb-6 text-center">MobTies AnataCast, is OctoMob's new weekly vCast. Come chill with the host lilbobross_ and co-host Mad Matty. We cover everything from crypto, blockchain tech, decentralized finance, NFT's, and much more. We've been building this up and our first episode with DCFGod was a hit! MobTies will be running every week. If you are a buildooor, or would like to be on the show, reach out on Discord. If you're interested in contributing reach out, we would love to work with you. Let us know, as our guest list is filling up rather quickly.</p>
              <div class="flex items-center">
                <div class="mx-auto">
                  <a href="https://www.twitch.tv/videos/1481348381?collection=47fzRHoy7hZWYA" target="_blank" rel="noreferrer" class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 text-2xl font-bold">
                      Watch Now
                    </span>
                  </a>
                </div>
              </div>
          </div>
        </div>
        <div class="p-4 md:mb-16 mb-4">
          <div class="flex flex-row max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
            <div class="items-center text-center">
              <StaticImage
                src="../images/profile-lil-bob-ross.png"
                alt="The DonFather"
                class="rounded-lg border-solid border-2 border-white-400"
                />  
              <h2 class="text-center font-light pt-2 text-3xl mt-4">Host</h2>
              <h3 class="text-center font-extrabold pt-2 mb-4 text-3xl">lilbobross</h3>
              <a href="https://twitter.com/serbobross" target="_blank" rel="noreferrer" class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 text-2xl font-bold">
                  Follow Now
                </span>
              </a>
            </div>
            <div class="items-center text-center">
              <StaticImage
                src="../images/profile-mad-matty.png"
                alt="El Nusserino"
                class="rounded-lg border-solid border-2 border-white-400"
              /> 
              <h2 class="text-center font-light pt-2 text-3xl mt-4">Co-Host</h2>
              <h3 class="text-center font-extrabold pt-2 mb-4 text-3xl">Mad Matty</h3>
              <a href="https://twitter.com/Mad_matty_" target="_blank" rel="noreferrer" class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 text-2xl font-bold">
                  Follow Now
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-gradient-to-b from-zinc-900 to-black">
      <div class="container mx-auto pt-9 pb-4">
        <h2 class="uppercase text-5xl pb-4 font-black text-center align-middle">The OctoMob Team</h2>
      </div>
    </div>
    <div class="flex">
      <div class="grid md:grid-cols-3 grid-cols-1 gap-4 mx-auto max-w-screen-2xl p-4">
        <div class="items-center text-center">
          <StaticImage
            src="../images/profile-donfather.png"
            alt="The DonFather"
            class="rounded-lg border-solid border-2 border-gray-600"
          />  
          <h2 class="text-center font-light mt-6 mb-4 text-3xl">Project Lead</h2>
          <h3 class="text-center font-extrabold mb-6 text-3xl">The DonFather</h3>
          <a href="https://twitter.com/The_DonFather_" target="_blank" rel="noreferrer" class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 text-2xl font-bold">
              Follow Now
            </span>
          </a>
        </div>
        <div class="items-center text-center">
          <StaticImage
            src="../images/profile-nussy.png"
            alt="El Nusserino"
            class="rounded-lg border-solid border-2 border-gray-600"
          /> 
          <h2 class="text-center font-light mt-6 mb-4 text-3xl">Artist</h2>
          <h3 class="text-center font-extrabold mb-6 text-3xl">El Nusserino</h3>
          <a href="https://twitter.com/elNusserino" target="_blank" rel="noreferrer" class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 text-2xl font-bold">
              Follow Now
            </span>
          </a>
        </div>
        <div class="items-center text-center">
          <StaticImage
            src="../images/profile-noosh.png"
            alt="Noosh"
            class="rounded-lg border-solid border-2 border-gray-600"
          /> 
          <h2 class="text-center font-light mt-6 mb-4 text-3xl">Dev</h2>
          <h3 class="text-center font-extrabold mb-6 text-3xl">Noosh</h3>
          <a href="https://twitter.com/nooshzilla" target="_blank" rel="noreferrer" class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 text-2xl font-bold">
              Follow Now
            </span>
          </a>
        </div>
      </div>
    </div>

    <div class="flex items-center">
      <div class="mx-auto pt-8 px-4">
          <StaticImage
            src="../images/mob-logo-footer.svg"
            alt="LFG MoB"
          />
      </div>
    </div>

  </Layout>
)

export default IndexPage
