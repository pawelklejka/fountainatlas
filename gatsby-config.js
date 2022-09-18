
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `fountainatlas`,
    siteUrl: `https://fountainatlas.com`,
    languages: {
      langs: ['en', 'pl'],
      defaultLangKey: 'en'
    }
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", 
  {
    resolve: "gatsby-plugin-sass",
    options: {
      sassOptions: {
        includePaths: ["./src/assets/css/"]
      }
    }
  },
  {
    resolve: 'gatsby-source-contentful',
    options: {
      spaceId: `ijw420xqp37t`,
      accessToken: process.env.API_KEY,
      forceFullSync: true,
    },
  },
  {
    resolve: 'gatsby-plugin-i18n',
    options: {
      langKeyForNull: 'any',
      langKeyDefault: {
        langs: ['en', 'pl'],
        defaultLangKey: 'en'
      },
      useLangKeyLayout: false,
      prefixDefault: false,
    }
  },
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/assets/images/icon.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", 
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: './src/assets/images/',
    },
    __key: 'images',
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `styles`,
      path: `${__dirname}/src/assets/css`,
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'pages',
      path: './src/pages/',
    },
    __key: 'pages',
  },
  {
    resolve: 'gatsby-plugin-react-svg',
    options: {
      rule: {
        include: /svg/
      }
    }
  }

]
};