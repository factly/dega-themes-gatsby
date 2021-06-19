const axios = require('axios');
const { ApolloClient } = require('apollo-client');
const { InMemoryCache } = require('apollo-cache-inmemory');
const { split } = require('apollo-link');
const { HttpLink } = require('apollo-link-http');
const { WebSocketLink } = require('apollo-link-ws');
const { getMainDefinition } = require('apollo-utilities');
const fetch = require('node-fetch');
const gql = require('graphql-tag');
const WebSocket = require('ws');

exports.onPreInit = () => console.log('loaded vidcheck plugin');

const VIDCHECK_NODE_TYPE = 'VidCheck';
const VIDCHECK_VIDEO_NODE_TYPE = 'VidCheckVideo';
const VIDCHECK_CLAIM_NODE_TYPE = 'VidCheckClaim';
const VIDCHECK_RATING_NODE_TYPE = 'VidCheckRating';

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
//         reconnect: false,
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

exports.sourceNodes = async (
  { actions, createContentDigest, createNodeId, getNodesByType, reporter },
  { spaceId },
) => {
  if (!spaceId) {
    reporter.panic('space id is not provided. please provide space id');
  }
  const { createNode } = actions;

  // const { data } = await client.query({
  //   query: gql`
  //     query {
  //       totalCount
  //       nodes {
  //         video {
  //           created_at
  //           id
  //           space_id
  //           status
  //           summary
  //           title
  //           total_duration
  //           updated_at
  //           url
  //           video_type
  //         }
  //         analysis {
  //           checked_date
  //           claim
  //           claim_date
  //           video_id
  //           updated_at
  //           start_time
  //           review_sources
  //           rating_id
  //           is_claim
  //           id
  //           fact
  //           end_time
  //           created_at
  //           claimant_id
  //           description
  //           claimant {
  //             created_at
  //             id
  //             name
  //             slug
  //             space_id
  //             tag_line
  //             updated_at
  //           }
  //         }
  //       }
  //     }
  //   `,
  // });

  // const data = await fetch('http://127.0.0.1:4455/.factly/vidcheck/server/videos/embed', {
  //   headers: { 'X-Space': spaceId },
  // })
  const data = await fetch('http://vidcheck-server.factly.org/videos/embed', {
    headers: { 'X-Space': spaceId },
  })
  
    .then((res) => res.json())
    .catch((err) => console.log(err));

  data.nodes.forEach((vidcheck) => {
    // console.log(JSON.stringify(vidcheck));
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
    createNode({
      ...vidcheck.video,
      id: createNodeId(`${VIDCHECK_VIDEO_NODE_TYPE}-${vidcheck.video.id}`),
      parent: null,
      children: [],
      internal: {
        type: VIDCHECK_VIDEO_NODE_TYPE,
        content: JSON.stringify(vidcheck.video),
        contentDigest: createContentDigest(vidcheck.video),
      },
    });
    vidcheck.claims.forEach((claim) => {
      createNode({
        ...claim,
        id: createNodeId(`${VIDCHECK_CLAIM_NODE_TYPE}-${claim.id}`),
        parent: null,
        children: [],
        internal: {
          type: VIDCHECK_CLAIM_NODE_TYPE,
          content: JSON.stringify(claim),
          contentDigest: createContentDigest(claim),
        },
      });
    });
  });
  // const ratings = await fetch('http://127.0.0.1:4455/.factly/vidcheck/server/ratings/embed', {
  //   headers: { 'X-Space': spaceId },
  // })
  const ratings = await fetch('http://vidcheck-server.factly.org/ratings/embed', {
    headers: { 'X-Space': spaceId },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));

  ratings.nodes.forEach((rating) => {
    createNode({
      ...rating,
      id: createNodeId(`${VIDCHECK_RATING_NODE_TYPE}-${rating.id}`),
      parent: null,
      children: [],
      internal: {
        type: VIDCHECK_RATING_NODE_TYPE,
        content: JSON.stringify(rating),
        contentDigest: createContentDigest(rating),
      },
    });
  });
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  createTypes(`
  type VidCheck implements Node @dontInfer {
    id: ID!
    video: VidCheckVideo!
    claims: [VidCheckClaim]
  }
  type VidCheckVideo implements Node {
    id: ID!
    created_at : Date @dateformat
    space_id : String
    status : String
    summary : String
    title : String
    total_duration : String
    updated_at : Date @dateformat
    url : String
    video_type : String
    deleted_at: Date @dateformat
  }
  type VidCheckClaim implements Node {
    id: String
    checked_date: Date @dateformat
    claim: String
    claim_date: Date @dateformat
    video_id: String
    updated_at: Date @dateformat
    start_time: String
    review_sources: JSON
    rating: VidCheckRating
    rating_id: String
    is_claim: String
    fact: String
    end_time: String
    created_at: Date @dateformat
    claimant_id: String
    description: JSON
    claimant: VidcheckClaimant 
    deleted_at: Date @dateformat
    video: JSON
    HTML: String
    claim_sources: String
    end_time_fraction: String
  }
  type VidcheckClaimant implements Node {
    created_at: Date @dateformat
    id: ID!
    name: String
    slug: String
    space_id: String
    tag_line: String
    updated_at: Date @dateformat
    description: JSON
    deleted_at: String
  }
  type VidCheckRating implements Node @dontInfer {
    id: ID!
    created_at: Date @dateformat
    updated_at: Date @dateformat
    deleted_at: Date @dateformat
    name: String
    slug: String
    description: JSON
    numeric_value: Int
    colour: JSON
    background_colour: JSON
    text_colour: JSON
    space_id: String
  }
  `);
};

// ! remove color from rating schema
// ? Create filters on vidcheck for videos and analysis
