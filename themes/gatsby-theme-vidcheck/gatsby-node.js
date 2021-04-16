exports.createPages = async ({ graphql, actions, store, reporter }) => {
  const { createPage } = actions;
  const videos = await graphql(`
    query VideosQuery {
      allVidCheck {
        nodes {
          video {
            id
          }
        }
      }
    }
  `);
  videos.data.allVidCheck.nodes.map((vidCheck) => {
    createPage({
      path: `/video/${vidCheck.video.id}`,
      component: require.resolve('./src/templates/video.js'),
      context: {
        id: `/${vidCheck.video.id}/`,
      },
    });
  });
};
