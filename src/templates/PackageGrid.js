import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

const PackageGrid = ({ data }) => {
  const { title, description, image, tags } = data.contentfulPackageGrid;
  return (
    <Layout>
      <SEO title={title} />
      <div className="blogpost">
        <h1>{title}</h1>
        <img alt={title} src={image.file.url} />
        <div className="tags">
          {tags && tags.map(tag => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <p className="body-text">{description}</p>
        <Link to="/PackageGrids">View more posts</Link>
        <Link to="/">Back to Home</Link>
      </div>
    </Layout>
  );
};
export default PackageGrid;
export const pageQuery = graphql`
  query($slug: String!) {
    contentfulPackageGrid(slug: { eq: $slug }) {
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
`;