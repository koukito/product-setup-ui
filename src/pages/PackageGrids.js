import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
const PackageGrids = ({ data }) => {
  const PackageGrids = data.allContentfulPackageGrid.edges;
  return (
    <Layout>
      <SEO title="Blog posts" />
      <h1>{"Here's a list of all packages!"}</h1>
      <div className="blogposts">
        {PackageGrids.map(({ node: post }) => (
          <div key={post.id}>
            <Link to={`/PackageGrid/${post.slug}`}>{post.title}</Link>
          </div>
        ))}
        <span className="mgBtm__24" />
        <Link to="/">Go back to the homepage</Link>
      </div>
    </Layout>
  );
};
export default PackageGrids;

export const query = graphql`
  query PackageGridPageQuery {
    allContentfulPackageGrid(limit: 1000) {
      edges {
        node {
          id
          title
          slug
          description 
          image {
            file {
              url
            }
          }
          tags
        }
      }
    }
  }
`;