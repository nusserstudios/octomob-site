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
        <p class="text-center max-w-4xl mx-auto py-4 text-2xl px-4 font-extralight">The Family grows together, works together, and most importantly eats together. Respects will always be paid, & the ones who came before us must never be forgotten. As we continue to build out our community of DeFi All-stars, we continue to focus on our defining principles - Trust, Transparency, Loyalty & above all else, Family. If we are going to make it, we are going to make it together. That's no reflection on any individual, it's just the way it is.</p>
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
          <h2 class="uppercase text-5xl pb-4 font-black">Genesis Collection: (OG's) MADEMEN</h2>
          <p class="leading-8">The OctoMob OG Collection is max supply of 99 NFT's that are the backbone of our community - "Made Men".  Our Made Men collection is a combination of Hand picked Custom NFT's, Custom Partner themed NFT's & HandDrawn OctoMobsters whos lore spreads far beyond the depths of the omniverse   There will be Made Men auctioned OpenSea, or you can contact us and will will create a custom OG "Made Man" just for you to diamond hand as long as you want. The Family is excited to see who rises to the top.</p>
          <p class="pt-3 leading-8">Each OG OctoMob NFT will include claimable airdrops twice over each follow on collection. One of these airdrops must be given/traded/sold to a trusted member to join the Family ranks.  We like to call if Proof of Trust.  With combining Proof of Trust w/ Proof of Work, HitMen & subsequent drops will have the opportunity to move up the ranks through some very cool, cutting edge ideas that will be laid out soon (devs???) & certainly will not include any MobCoins that can be used in our First of its kind - Metaverse Casino/Sportsbook.  We can't drop too much alfa, but OG's always eat first.</p>
          <p class="pt-3 leading-8">Connect with the DonFather to arrange your custom PFP, while you still have a shot paisan.</p>
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
          <h2 class="uppercase text-5xl pb-4 font-black">UPCOMING MINT: HITMEN</h2>
          <p class="leading-8">We are proud to announce "The OctoMob Hitmen" collection. This collection will be a series of 777 generative NFT PFP's.  HitMen will join The Family with utility from day 1 - Family.  Claimable airdrops.  Custom Merch. An opportunity to move up the ranks (certainly not a MobToken)  and eat like an OG.</p>
          <p class="leading-8 pt-3 ">We are excited to bring on new members to the family. We welcome you, and hope you will enjoy building the fam, and building an amazing community as we work together venturing into a fully operational Web3 metaverse that will CERTAINLY not include poker/cards/sports/e-sports.  What happens in The Family stays in The Family.  We will never give financial advice but we do like to keep a tight knit group who backs each other. </p>
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
          <h2 class="uppercase text-5xl pb-4 font-black">METAVERSE EVENT HOSTING</h2>
          <p class="leading-8">Need a digital space for your community? Existing projects, New projects, Those looking to give their community a true Metaverse experience, we have an offer you can't refuse. Our extensive partnerships have allowed us to control the event space like we do the unions.  You tell us what you need, & we'll make it happen.  No questions asked.  We even have a Zen Yoga studio in our space to keep our minds sharp.</p>
          <p class="leading-8 pt-3 ">The OctoCave & VIP Board Room will allow you to host both public and private events. Whether looking for a Metaverse AMA, A launch party, A community event, etc... We can host all of these w/ giveaways, poker tournaments, auctions, karaoke, or streaming a PPV event for your community to chill & watch, The OctoMob can make it happen.  An event w/ a live DJ set? Done.  Leave planning and scheduling your event up to us in our exclusive Metaverse locations in ConcaveWorld.</p>
	  <p class="leading-8 pt-3 ">Our Casino gives options to your community, and we will assist keeping vibes strong while you give your community the low-down with the latest happenings on your project. You focus on getting your content out there while we focus on throwing a bash your community will be talking about until we see you again.</p>
          <p class="leading-8 pt-3 ">Let's get the good vibes going, and a place where we can all get together and enjoy DeFi and NFT's in the Metaverse.</p>
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
              <p class="leading-7 text-lg mb-6 text-center">MobTies AnataCast, is OctoMob's new weekly vCast. Come kick it with Hosts & Members of The OctoMob Family, lilbobross and Mad Matty, covering everything crypto, gaming, blockchain tech, decentralized finance, NFT's, & much more.  The OctoMob Family being at the center of it all.</p>
	      <p class="leading-7 text-lg mb-6 text-center">As we've been defining & growing our community, we noticed a pattern - those who joined The Family - were leaders/buildors/creators/investors & founders!  What better way to continue to attract members, than to support our community & build each other up.</p>
	      <p class="leading-7 text-lg mb-6 text-center">One of the first Honorary members of The OctoMob was DCFGod, Co-Founder of the Anata NFT project.   In turn, DCF was our first guest on MobTies, and our defining principles showed through - Supporting The Family.</p>
	      <p class="leading-7 text-lg mb-6 text-center">MobTies will be running on Wednesdays every week.  If you are a buildooor, or would like to be on the show, reach out to TheDonFather and we will look to get you on. If you're interested in contributing reach out, we would love to work with you. Let us know, as our guest list is filling up rather quickly.</p>
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
