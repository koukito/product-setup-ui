const path = require(`path`);
const slash = require(`slash`);
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  // we use the provided allContentfulPackageGrid query to fetch the data from Contentful
  return graphql(
    `
      {
        allContentfulPackageGrid {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `
  ).then(result => {
      if (result.errors) {
        console.log("Error retrieving contentful data",      result.errors);
      }
      // Resolve the paths to our template
      const packageGridPath = path.resolve("./src/templates/PackageGrid.js");
      // Then for each result we create a page.
      result.data.allContentfulPackageGrid.edges.forEach(edge => {
        createPage({
          path: `/PackageGrid/${edge.node.slug}/`,
          component: slash(packageGridPath),
          context: {
	    slug: edge.node.slug,
            id: edge.node.id
          }
        });
      });
    })
    .catch(error => {
      console.log("Error retrieving contentful data", error);
    });
};