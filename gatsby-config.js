module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        contentPath: `${__dirname}/contents`,
        rootNote: `/hello`,
      },
    },
  ],
  siteMetadata: {
    title: `yeonseong second brain`,
  },
}