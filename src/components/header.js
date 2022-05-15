import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <nav className="flex flex-wrap items-center justify-between p-6 mb-0 bg-black">
      <div className="flex items-center flex-shrink-0 mr-6 text-white">
        <StaticImage
          src="../images/logo-octomob.svg"
          alt="OctoMob"
        />
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => toggleExpansion(!isExpanded)}
          className="flex items-center px-3 py-2 text-white border border-white rounded hover:text-white hover:border-white"
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isExpanded ? `block` : `hidden`
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-lg lg:flex-end ml-auto">
          <Link
            to={`https://theoctomobfam.medium.com/`}
            target={`_blank`}
            className="inline-block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-white"
          >
            <div style={{ maxWidth: `65px`, margin: `0 0.5rem` }}>
              <StaticImage
                src="../images/logo-medium.svg"
                alt="OctoMob"
              />
            </div>
          </Link>
          <Link
            to={`https://www.twitch.tv/videos/1481348381`}
            target={`_blank`}
            className="inline-block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-white"
          >
            <div style={{ maxWidth: `65px`, margin: `0 0.5rem` }}>
              <StaticImage
                src="../images/logo-twitch.svg"
                alt="OctoMob"
              />
            </div>
          </Link>
          <Link
            to={`https://opensea.io/collection/the-octomob-family`}
            target={`_blank`}
            className="inline-block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-white"
          >
            <div style={{ maxWidth: `65px`, margin: `0 0.5rem` }}>
              <StaticImage
                src="../images/logo-opensea.svg"
                alt="OctoMob"
              />
            </div>
          </Link>
          <Link
            to={`https://discord.gg/EPNMXpHWsf`}
            target={`_blank`}
            className="inline-block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-white"
          >
            <div style={{ maxWidth: `65px`, margin: `0 0.5rem` }}>
              <StaticImage
                src="../images/logo-discord.svg"
                alt="OctoMob"
              />
            </div>
          </Link>
        </div>

      </div>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
