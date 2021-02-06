import { graphql, Link, PageProps } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import { MarkdownRemark } from "../entities/markdown-remark"

type GraphQLData = {
    allMarkdownRemark: AllMarkdownRemark;
}

export type AllMarkdownRemark = {
    totalCount: number;
    edges: {
        node: MarkdownRemark
    }[]
}

const Home: React.FC<PageProps<GraphQLData>> = ({
                                                    data
                                                }) => {
    return (
      <Layout>
          <div>
              <h1>
                  Amazing Pandas Eating Things
              </h1>
              <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <div key={node.id}>
                    <Link
                      to={node.fields.slug}
                    >
                        <h3>
                            {node.frontmatter.title}{" "}
                            <span>
                                — {node.frontmatter.date}
                            </span>
                        </h3>
                    </Link>
                    <p>{node.excerpt}</p>
                </div>
              ))}
          </div>
      </Layout>
    )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`

export default Home