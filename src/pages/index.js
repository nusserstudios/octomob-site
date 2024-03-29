import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import Layout from "../components/layout"
import PageSEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <PageSEO title="OctoMob Family NFT" />

    <div class="flex justify-center items-center align-top">
      <div style={{ margin: `0px` }}>
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
      <div class="flex items-center flex-row text-gray-300 grid md:grid-cols-2 grid-cols-1 gap-4">
        <div class="items-center self-center">
          <StaticImage
            src="../images/made-men-logo.svg"
            alt="OctoMob Made Men Logo"
            class="rounded-lg"
          />
          <div class="flex">
            <div class="mx-auto">
              <a href="https://opensea.io/collection/the-octomob-family" target="_blank" rel="noreferrer" class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800" diabled>
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 text-2xl font-bold">
                  OpenSea
                </span>
              </a>
            </div>
          </div>
        </div>
        <div class="md:pl-8">
          <h2 class="uppercase text-5xl pb-4 font-black md:pt-10">Genesis Collection: (OG's) MadeMen</h2>
          <p class="leading-8">The OctoMob OG Collection is max supply of 99 NFT's that are the backbone of our community - "Made Men". Our Made Men collection is a combination of Hand picked Custom NFT's, Custom Partner themed NFT's & HandDrawn OctoMobsters whos lore spreads far beyond the depths of the omniverse  There will be Made Men auctioned OpenSea, or you can contact us and will will create a custom OG "Made Man" just for you to diamond hand as long as you want. The Family is excited to see who rises to the top.</p>
          <p class="pt-3 leading-8">Each OG OctoMob NFT will include claimable airdrops twice over each follow on collection. One of these airdrops must be given/traded/sold to a trusted member to join the Family ranks. We like to call if Proof of Trust. With combining Proof of Trust w/ Proof of Work, HitMen & subsequent drops will have the opportunity to move up the ranks through some very cool, cutting edge ideas that will be laid out soon (devs???) & certainly will not include any MobCoins that can be used in our First of its kind - Metaverse Casino/Sportsbook. We can't drop too much alfa, but OG's always eat first.</p>
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
          <div class="flex items-center">
            <div class="mx-auto">
              <button disabled class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-gray-900 rounded-lg group bg-gradient-to-br from-orange-500 to-yellow-500 group-hover:from-orange-500 group-hover:to-yellow-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-orange-200 dark:focus:ring-orange-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 text-2xl font-bold">
                  Mint - Coming Soon
                </span>
              </button>
            </div>
          </div>
        </div>
        <div class="md:pl-8 md:pt-16">
          <h2 class="uppercase text-5xl pb-4 font-black">Upcoming Mint: Hitmen</h2>
          <p class="leading-8">We are proud to announce "The OctoMob Hitmen" collection. This collection will be a series of 999 generative NFT PFP's. HitMen will join The Family with utility from day 1 - Family. Claimable airdrops. Custom Merch. An opportunity to move up the ranks (certainly not a MobToken) and eat like an OG.</p>
          <p class="leading-8 pt-3 ">We are excited to bring on new members to the family. We welcome you, and hope you will enjoy building the fam, and building an amazing community as we work together venturing into a fully operational Web3 metaverse that will CERTAINLY not include poker/cards/sports/e-sports. What happens in The Family stays in The Family. We will never give financial advice but we do like to keep a tight knit group who backs each other. </p>
          <p class="leading-8 pt-3 ">Coming Soon. Be on the lookout and become a part of the OctoMob family.</p>
        </div>
      </div>
    </div>

    <div class="container mx-auto pt-14 pb-14 px-4">
      <div class="flex flex-row text-gray-300 grid md:grid-cols-2 grid-cols-1 gap-4">
        <div class="self-center">
          <StaticImage
            src="../images/events-casino.png"
            alt="OctoMob Event Hosting - Casino"
            class="rounded-lg border-solid border-2 border-gray-600 mb-6"
          />
          <StaticImage
            src="../images/events-board-room.png"
            alt="OctoMob Event Hosting - OctoMob Board Room"
            class="rounded-lg border-solid border-2 border-gray-600"
          />
        </div>
        <div class="md:pl-8 md:pt-24">
          <h2 class="uppercase text-5xl pb-4 font-black">Metaverse Event Hosting</h2>
          <p class="leading-8">Need a digital space for your community? Existing projects, New projects, Those looking to give their community a true Metaverse experience, we have an offer you can't refuse. Our extensive partnerships have allowed us to control the event space like we do the unions. You tell us what you need, & we'll make it happen. No questions asked. We even have a Zen Yoga studio in our space to keep our minds sharp.</p>
          <p class="leading-8 pt-3 ">The OctoCave & VIP Board Room will allow you to host both public and private events. Whether looking for a Metaverse AMA, A launch party, A community event, etc... We can host all of these w/ giveaways, poker tournaments, auctions, karaoke, or streaming a PPV event for your community to chill & watch, The OctoMob can make it happen. An event w/ a live DJ set? Done. Leave planning and scheduling your event up to us in our exclusive Metaverse locations in ConcaveWorld.</p>
          <p class="leading-8 pt-3 ">Our Casino gives options to your community, and we will assist keeping vibes strong while you give your community the low-down with the latest happenings on your project. You focus on getting your content out there while we focus on throwing a bash your community will be talking about until we see you again.</p>
          <p class="leading-8 pt-3 ">Let's get the good vibes going, and a place where we can all get together and enjoy DeFi and NFT's in the Metaverse.</p>
        </div>
      </div>
    </div>

    <div class="bg-gradient-to-b from-zinc-900 to-black">
      <div class="container mx-auto pt-9 pb-4">
        <h2 class="uppercase text-5xl pb-4 font-black text-center align-middle">The OctoMob Team</h2>
      </div>
    </div>
    <div class="flex md:pb-8">
      <div class="grid md:grid-cols-2 grid-cols-1 gap-4 mx-auto max-w-screen-2xl p-4">
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
      </div>
    </div>

    <div class="bg-gradient-to-b from-zinc-900 to-black">
      <h2 class="uppercase text-5xl py-8 font-black text-center align-middle">Partnerships</h2>
    </div>
    <div class="container max-w-4xl mx-auto py-6">
      <div class="grid md:grid-cols-4 grid-cols-2 gap-4">
        <div class="item-center">
          <Link
            to={`https://concave.lol`}
            target={`_blank`}
            className="inline-block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-white"
          >
            <StaticImage
              src="../images/logo-concave.png"
              alt="Concave"
            />
          </Link>
        </div>
        <div class="item-center">
          <Link
            to={`https://app.gather.town/app/eEbXVOGSXhce8NCw/ConcaveCommunity`}
            target={`_blank`}
            className="inline-block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-white"
          >
            <StaticImage
              src="../images/logo-concave_world.png"
              alt="Concave World"
            />
          </Link>
        </div>
        <div class="item-center">
          <Link
            to={`https://linktr.ee/anatanft`}
            target={`_blank`}
            className="inline-block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-white"
          >
            <StaticImage
              src="../images/logo-anata.png"
              alt="Anata"
            />
          </Link>
        </div>
        <div class="item-center">
          <Link
            to={`https://twitter.com/BadBitchesDAO`}
            target={`_blank`}
            className="inline-block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-white"
          >
            <StaticImage
              src="../images/logo-bad_bitches_dao.png"
              alt="Bad Bitches DAO"
            />
          </Link>
        </div>
        <div class="item-center">
          <Link
            to={`https://twitter.com/OdysseyOlympus`}
            target={`_blank`}
            className="inline-block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-white"
          >
            <StaticImage
              src="../images/logo-odyssey.png"
              alt="Olympus Odyssey"
            />
          </Link>
        </div>
        <div class="item-center">
          <Link
            to={`https://www.redactedcartel.xyz/`}
            target={`_blank`}
            className="inline-block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-white"
          >
            <StaticImage
              src="../images/logo-redacted.png"
              alt="Redacted Cartel"
            />
          </Link>
        </div>
        <div class="item-center">
          <Link
            to={`https://tracer.finance/`}
            target={`_blank`}
            className="inline-block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-white"
          >
            <StaticImage
              src="../images/logo-tracer_dao.png"
              alt="Tracer DAO"
            />
          </Link>
        </div>
        <div class="item-center">
          <Link
            to={`https://twitter.com/AlphawolvesDAO`}
            target={`_blank`}
            className="inline-block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-white"
          >
            <StaticImage
              src="../images/logo-alpha-wolf-dao.svg"
              alt="Alpha Wolves DAO"
            />
          </Link>
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
