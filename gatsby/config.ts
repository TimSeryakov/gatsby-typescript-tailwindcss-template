/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

export default {
    /* Your site config here */
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/..`
            }
        },
        `gatsby-plugin-postcss`,
        `gatsby-transformer-remark`
    ]
}