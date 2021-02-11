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
        avatar: "//img.nworm.icu/avatar.jpg",
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
        {
            resolve: "gatsby-plugin-feed",
            options: {
                query: `
                    {
                        site {
                            siteMetadata {
                                url
                                title
                                description
                            }
                        }
                    }
                `,
                feeds: [
                    {
                        serialize: ({ query: { site, allMarkdownRemark } }) => {
                            return allMarkdownRemark.edges.map(edge => {
                                return Object.assign({}, edge.node.frontmatter, {
                                    description: edge.node.excerpt,
                                    date: edge.node.frontmatter.date,
                                    url: site.siteMetadata.url + edge.node.fields.slug,
                                    guid: site.siteMetadata.url + edge.node.fields.slug,
                                    custom_elements: [{ "content:encoded": edge.node.html }],
                                });
                            });
                        },
                        query: `
                            {
                                allMarkdownRemark(
                                    sort: { order: DESC, fields: [frontmatter___date] },
                                    filter: {fileAbsolutePath: {regex: "/(?<!about)\\\\.md$/"}}
                                ) {
                                    edges {
                                        node {
                                            excerpt
                                            html
                                            fields { 
                                                slug 
                                            }
                                            frontmatter {
                                                title
                                                date
                                            }
                                        }
                                    }
                                }
                            }
                        `,
                        output: "/rss.xml",
                        title: "Nworm",
                        match: "^/post/",
                    },
                ],
            },
        }
    ],
};
