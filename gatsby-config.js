module.exports = {
  siteMetadata: {
    siteUrl: 'https://thomasjamesfrancis.com/',
    title: 'Thomas James Francis'
  },
  plugins: [
    'gatsby-plugin-postcss',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/data/`,
      }
    }
  ]
};
