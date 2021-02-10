/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
/* eslint-disable no-undef */

module.exports = {
    siteMetadata: {
        url: "https://nworm.icu",
        title: "Nworm",
        author: "nworm",
        description: "一条咸鱼",
        since: "2019-06-21T11:30:00.000Z",
        avatar: "//q1.qlogo.cn/g?b=qq&nk=1574242600&s=640",
        contacts: [
            { name: "github", id: "1574242600" },
            { name: "telegram", id: "nworm1574" },
            { name: "qq", id: "1574242600" },
            { url: "null" }
        ],
        comment: { type: "disqus", id: "nworm" }
    },
    plugins: [
        { resolve: "gatsby-theme-yoshino", options: {}},
    ],
};
