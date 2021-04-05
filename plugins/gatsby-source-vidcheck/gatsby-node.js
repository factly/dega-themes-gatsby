// const axios = require('axios');
// const { ApolloClient } = require('apollo-client');
// const { InMemoryCache } = require('apollo-cache-inmemory');
// const { split } = require('apollo-link');
// const { HttpLink } = require('apollo-link-http');
// const { WebSocketLink } = require('apollo-link-ws');
// const { getMainDefinition } = require('apollo-utilities');
const fetch = require('node-fetch');
// const gql = require('graphql-tag');
// const WebSocket = require('ws');

exports.onPreInit = () => console.log('loaded vidcheck plugin');

const VIDCHECK_NODE_TYPE = 'Vidcheck';

// const client = new ApolloClient({
//   link: split(
//     ({ query }) => {
//       const definition = getMainDefinition(query);
//       return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
//     },
//     new WebSocketLink({
//       uri: `ws://127.0.0.1:4455/.factly/vidcheck/server/videos/embed`, // or `ws://gatsby-source-plugin-api.glitch.me/`
//       headers: { 'X-Space': 1 },
//       options: {
//         reconnect: true,
//       },
//       webSocketImpl: WebSocket,
//     }),
//     new HttpLink({
//       uri: 'http://127.0.0.1:4455/.factly/vidcheck/server/videos/embed', // or `https://gatsby-source-plugin-api.glitch.me/`
//       headers: {
//         'X-Space': 1,
//       },
//       fetch,
//     }),
//   ),
//   cache: new InMemoryCache(),
// });

exports.sourceNodes = async ({ actions, createContentDigest, createNodeId, getNodesByType }) => {
  const { createNode } = actions;

  // const { data } = await client.query({
  //   query: gql`
  //     query {
  //       allVidcheck {
  //         totalCount
  //         nodes {
  //           video {
  //             created_at
  //             id
  //             space_id
  //             status
  //             summary
  //             title
  //             total_duration
  //             updated_at
  //             url
  //             video_type
  //           }
  //           analysis {
  //             checked_date
  //             claim
  //             claim_date
  //             video_id
  //             updated_at
  //             start_time
  //             review_sources
  //             rating_id
  //             is_claim
  //             id
  //             fact
  //             end_time
  //             created_at
  //             claimant_id
  //             description
  //             claimant {
  //               created_at
  //               id
  //               name
  //               slug
  //               space_id
  //               tag_line
  //               updated_at
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `,
  // });

  const data = await fetch('http://127.0.0.1:4455/.factly/vidcheck/server/videos/embed', {
    headers: { 'X-Space': 1 },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
  data.nodes.forEach((vidcheck) => {
    createNode({
      ...vidcheck,
      id: createNodeId(`${VIDCHECK_NODE_TYPE}-${vidcheck.video.id}`),
      parent: null,
      children: [],
      internal: {
        type: VIDCHECK_NODE_TYPE,
        content: JSON.stringify(vidcheck),
        contentDigest: createContentDigest(vidcheck),
      },
    });
  });
};

// exports.schemaCustomization = ({ actions }) => {
//   const { createTypes } = actions;
//   createTypes(`
//   type VidCheck implements Node {
//     video: Video!
//     analysis: Analysis!
//   }
//   type Video implements Node {
//     id: ID!
//   }
//   type Analysis implements Node {
//     id: ID!
//   }
//   `);
// };
