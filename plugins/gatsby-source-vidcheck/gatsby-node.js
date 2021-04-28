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
const VIDCHECK_ANALYSIS_NODE_TYPE = 'VidCheckAnalysis';
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

  const data = await fetch('http://127.0.0.1:4455/.factly/vidcheck/server/videos/embed', {
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
    // console.log(vidcheck.video);
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
    vidcheck.analysis.forEach((analysis) => {
      createNode({
        ...analysis,
        id: createNodeId(`${VIDCHECK_ANALYSIS_NODE_TYPE}-${analysis.id}`),
        parent: null,
        children: [],
        internal: {
          type: VIDCHECK_ANALYSIS_NODE_TYPE,
          content: JSON.stringify(analysis),
          contentDigest: createContentDigest(analysis),
        },
      });
    });
  });
  const ratings = await fetch('http://127.0.0.1:4455/.factly/vidcheck/server/ratings/embed', {
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
  type VidCheck implements Node {
    id: ID
    video: VidCheckVideo! 
    analysis: [VidCheckAnalysis] 
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
  type VidCheckAnalysis implements Node {
    id: ID!
    checked_date: Date @dateformat
    claim: String
    claim_date: Date @dateformat
    video_id: String
    updated_at: Date @dateformat
    start_time: String
    review_sources: String
    rating: VidCheckRating
    rating_id: String
    is_claim: String
    fact: String
    end_time: String
    created_at: Date @dateformat
    claimant_id: String
    description: JSON
    claimant: Claimant 
    deleted_at: Date @dateformat
    video: JSON
    HTML: String
    claim_sources: String
    end_time_fraction: String
  }
  type Claimant implements Node {
    created_at: Date @dateformat
    id: ID
    name: String
    slug: String
    space_id: String
    tag_line: String
    updated_at: Date @dateformat
    description: String
    deleted_at: String
  }
  type VidCheckRating implements Node {
    id: ID,
    created_at: Date @dateformat
    updated_at: Date @dateformat
    deleted_at: Date @dateformat
    name: String
    slug: String
    description: String
    numeric_value: Int
    colour: JSON
    space_id: String
  }
  `);
};
// ? Create filters on vidcheck for videos and analysis
