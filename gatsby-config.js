module.exports = {
  siteMetadata: {
    title: `Yura Sherman's Gatsby blog`,
    name: `Narative`,
    siteUrl: `https://yurasherman.com`,
    description: `Yura Sherman's dev blog`,
    hero: {
      heading: `Hey, it's Yura - welcome to my blog!`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/yurasherman`,
      },
      {
        name: `github`,
        url: `https://github.com/borxes`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/yuradmt`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/yurra`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
  ],
};
