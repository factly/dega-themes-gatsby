const { ApolloClient, InMemoryCache, ApolloLink, HttpLink, gql, from } = require('@apollo/client');

const { RetryLink } = require('@apollo/client/link/retry');
const { onError } = require('@apollo/client/link/error');
const { fetchWrapper } = require('./fetch');
const fetch = require('node-fetch');
const {
  getTotalQuery,
  getPostsQuery,
  getCategoriesQuery,
  getTagsQuery,
  getFormatsQuery,
  getClaimantsQuery,
  getRatingsQuery,
  getClaimsQuery,
  getMenuQuery,
  getSpaceQuery,
  getUsersQuery,
} = require('./queries');
const { createSchemaCustomization } = require('./createSchemaCustomization');

exports.createSchemaCustomization = createSchemaCustomization;
exports.onPreInit = () => console.log('loaded dega plugin');

//! add plugin validation
// exports.pluginOptionsSchema = ({ Joi }) => {
//   return Joi.object({
//     optionA: Joi.boolean().required().description(`Enables optionA.`),
//     message: Joi.string()
//       .required()
//       .description(`The message logged to the console.`),
//     optionB: Joi.boolean().description(`Enables optionB.`),
//   })
// }
const POST_NODE_TYPE = `DegaPost`;
const CATEGORY_NODE_TYPE = `DegaCategory`;
const TAG_NODE_TYPE = `DegaTag`;
const FORMAT_NODE_TYPE = `DegaFormat`;
const USER_NODE_TYPE = `DegaUser`;
const CLAIM_NODE_TYPE = `DegaClaim`;
const CLAIMANT_NODE_TYPE = `DegaClaimant`;
// const SITEMAP_NODE_TYPE = `DegaSitemap`;
const SPACE_NODE_TYPE = `DegaSpace`;
const RATING_NODE_TYPE = `DegaRating`;
const MENU_NODE_TYPE = `DegaMenu`;

exports.sourceNodes = async (
  { actions, createContentDigest, createNodeId, getNodesByType, reporter },
  { spaceId, accessToken, uri },
) => {
  if (!spaceId) {
    reporter.panic('space id is not provided. please provide space id');
  }
  if (!accessToken) {
    reporter.panic('access token is not provided. please provide access token');
  }
  const retryLink = new RetryLink({
    delay: {
      initial: 200,
      max: Infinity,
      jitter: true,
    },
    attempts: {
      max: 5,
      retryIf: (error, _operation) => !!error,
    },
  });

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.forEach(({ message, locations, path }) =>
        console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`),
      );

    if (networkError) console.log(`[Network error]: ${networkError}`);
  });

  const httpLink = new HttpLink({
    uri,
    // uri: 'http://dega-api.factly.org/query',
    fetch: fetchWrapper,
    headers: {
      'X-Space': spaceId,
      Authorization: accessToken,
    },
  });

  const cache = new InMemoryCache({
    typePolicies: {
      FormatsPaging: {
        fields: {
          formats: {
            merge(existing, incoming) {
              // Better, but not quite correct.
              return { ...existing, ...incoming };
            },
          },
        },
      },
      MenusPaging: {
        fields: {
          menu: {
            merge(existing, incoming) {
              // Better, but not quite correct.
              return { ...existing, ...incoming };
            },
          },
        },
      },
    },
  });

  const client = new ApolloClient({
    // Provide required constructor fields
    cache: cache,
    //  uri: 'http://dega-api.factly.org/query',
    link: from([retryLink, errorLink, httpLink]),
  });
  const { createNode } = actions;

  const LIMIT = 100;
  // total
  const getTotal = async () => {
    const totalResp = await client.query({
      query: getTotalQuery(),
    });
    return totalResp;
  };
  const { data: totalCount } = await getTotal();
  console.log({ totalCount });

  // posts
  // const getPosts = async ({ total = LIMIT }) => {
  //   let allPosts = [];
  //   if (total <= LIMIT) {
  //     const postsResp = await client.query({
  //       query: getPostsQuery({ spaceId, limit: LIMIT, page: 1 }),
  //     });
  //     allPosts = [...allPosts, ...postsResp.data.posts.nodes];
  //   } else if (total > LIMIT) {
  //     const pageCount = Math.ceil(total / LIMIT);
  //     for (let page = 1; page <= pageCount; page++) {
  //       const postsResp = await client.query({
  //         query: getPostsQuery({ spaceId, limit: LIMIT, page }),
  //       });
  //       allPosts = [...allPosts, ...postsResp.data.posts.nodes];
  //       // allPosts = [...allPosts, ...(await postsResp)];
  //     }
  //   }
  //   return allPosts;
  // };
  // const posts = await getPosts({ total: totalCount.posts.total });

  //! add page param to query when limit is reached
  const getData = async ({ query, total = LIMIT, type }) => {
    let allData = [];
    if (total <= LIMIT) {
      const resp = await client.query({
        query,
      });
      allData = [...allData, ...resp.data[type].nodes];
    } else if (total > LIMIT) {
      const pageCount = Math.ceil(total / LIMIT);
      for (let page = 1; page <= pageCount; page++) {
        const resp = await client.query({
          query,
        });
        allData = [...allData, ...resp.data[type].nodes];
      }
    }
    return allData;
  };

  const posts = await getData({
    query: getPostsQuery({ limit: LIMIT, page: 1 }),
    total: totalCount.posts.total,
    type: 'posts',
  });
  posts.forEach((post) => {
    // console.log({ post });
    createNode({
      ...post,
      id: createNodeId(`${POST_NODE_TYPE}-${post.id}`),
      parent: null,
      children: [],
      internal: {
        type: POST_NODE_TYPE,
        content: JSON.stringify(post),
        contentDigest: createContentDigest(post),
      },
    });
  });

  // categories
  const categories = await getData({
    query: getCategoriesQuery({ limit: LIMIT, page: 1 }),
    total: totalCount.categories.total,
    type: 'categories',
  });
  categories.forEach((category) => {
    // console.log({ category });
    createNode({
      ...category,
      id: createNodeId(`${CATEGORY_NODE_TYPE}-${category.id}`),
      parent: null,
      children: [],
      internal: {
        type: CATEGORY_NODE_TYPE,
        content: JSON.stringify(category),
        contentDigest: createContentDigest(category),
      },
    });
  });

  // tags
  const tags = await getData({
    query: getTagsQuery({ limit: LIMIT, page: 1 }),
    total: totalCount.tags.total,
    type: 'tags',
  });
  tags.forEach((tag) => {
    // console.log({ tag });
    createNode({
      ...tag,
      id: createNodeId(`${TAG_NODE_TYPE}-${tag.id}`),
      parent: null,
      children: [],
      internal: {
        type: TAG_NODE_TYPE,
        content: JSON.stringify(tag),
        contentDigest: createContentDigest(tag),
      },
    });
  });

  // formats
  const formats = await getData({
    query: getFormatsQuery(),
    total: totalCount.formats.total,
    type: 'formats',
  });
  formats.forEach((format) => {
    // console.log({ format });
    createNode({
      ...format,
      id: createNodeId(`${FORMAT_NODE_TYPE}-${format.id}`),
      parent: null,
      children: [],
      internal: {
        type: FORMAT_NODE_TYPE,
        content: JSON.stringify(format),
        contentDigest: createContentDigest(format),
      },
    });
  });
  // ratings
  const ratings = await getData({
    query: getRatingsQuery({ limit: LIMIT, page: 1 }),
    total: totalCount.ratings.total,
    type: 'ratings',
  });
  ratings.forEach((rating) => {
    //  console.log({ rating });
    createNode({
      ...rating,
      id: createNodeId(`${RATING_NODE_TYPE}-${rating.id}`),
      parent: null,
      children: [],
      internal: {
        type: RATING_NODE_TYPE,
        content: JSON.stringify(rating),
        contentDigest: createContentDigest(rating),
      },
    });
  });

  // claims
  const claims = await getData({
    query: getClaimsQuery({ limit: LIMIT, page: 1 }),
    total: totalCount.claims.total,
    type: 'claims',
  });
  claims.forEach((claim) => {
    // console.log({ claim });
    createNode({
      ...claim,
      id: createNodeId(`${CLAIM_NODE_TYPE}-${claim.id}`),
      parent: null,
      children: [],
      internal: {
        type: CLAIM_NODE_TYPE,
        content: JSON.stringify(claim),
        contentDigest: createContentDigest(claim),
      },
    });
  });

  // claimants
  const claimants = await getData({
    query: getClaimantsQuery({ limit: LIMIT, page: 1 }),
    total: totalCount.claimants.total,
    type: 'claimants',
  });
  claimants.forEach((claimant) => {
    // console.log({ claimant });
    createNode({
      ...claimant,
      id: createNodeId(`${CLAIMANT_NODE_TYPE}-${claimant.id}`),
      parent: null,
      children: [],
      internal: {
        type: CLAIMANT_NODE_TYPE,
        content: JSON.stringify(claimant),
        contentDigest: createContentDigest(claimant),
      },
    });
  });

  // menu
  const getMenus = async () => {
    const menus = await client.query({
      query: getMenuQuery(),
    });
    return menus;
  };
  const { data: menus } = await getMenus();
  // const menus = await getData({
  //   query: getMenuQuery(),
  //   total: totalCount.menu.total,
  //   type: 'menu',
  // });
  menus.menu.nodes.forEach((menu) => {
    // console.log({ menu });
    createNode({
      ...menu,
      id: createNodeId(`${MENU_NODE_TYPE}-${menu.id}`),
      parent: null,
      children: [],
      internal: {
        type: MENU_NODE_TYPE,
        content: JSON.stringify(menu),
        contentDigest: createContentDigest(menu),
      },
    });
  });

  const getSpace = async () => {
    const space = await client.query({
      query: getSpaceQuery(),
    });
    return space;
  };
  const spaceData = await getSpace();
  const space = spaceData.data.space;
  // console.log({ space });
  createNode({
    ...space,
    id: createNodeId(`${SPACE_NODE_TYPE}-${space.id}`),
    parent: null,
    children: [],
    internal: {
      type: SPACE_NODE_TYPE,
      content: JSON.stringify(space),
      contentDigest: createContentDigest(space),
    },
  });

  // users
  const users = await getData({
    query: getUsersQuery({ limit: LIMIT, page: 1 }),
    total: totalCount.users.total,
    type: 'users',
  });
  users.forEach((user) => {
    // console.log({ user });
    createNode({
      ...user,
      id: createNodeId(`${USER_NODE_TYPE}-${user.id}`),
      parent: null,
      children: [],
      internal: {
        type: USER_NODE_TYPE,
        content: JSON.stringify(user),
        contentDigest: createContentDigest(user),
      },
    });
  });
  // console.log(JSON.stringify(posts));
  // console.log(posts);
  // space
  // const {
  //   data: { space },
  // } = await client.query({
  //   query: gql`
  //     query {
  //       space {
  //         id
  //         created_at
  //         updated_at
  //         name
  //         slug
  //         site_title
  //         tag_line
  //         description
  //         site_address
  //         logo {
  //           id
  //         }
  //         logo_mobile {
  //           id
  //         }
  //         fav_icon {
  //           id
  //         }
  //         mobile_icon {
  //           id
  //         }
  //         verification_codes
  //         social_media_urls
  //         contact_info
  //       }
  //     }
  //   `,
  // });

  // menu
  // const {
  //   data: { menu },
  // } = await client.query({
  //   query: gql`
  //     query {
  //       menu {
  //         nodes {
  //           id
  //           created_at
  //           updated_at
  //           name
  //           slug
  //           menu
  //           space_id
  //         }
  //       }
  //     }
  //   `,
  // });

  // formats
  // const {
  //   data: { formats },
  // } = await client.query({
  //   query: gql`
  //     query {
  //       formats {

  //       }
  //     }
  //   `,
  // });

  // tags
  // const {
  //   data: { tags },
  // } = await client.query({
  //   query: gql`
  //     query {
  //       tags {

  //       }
  //     }
  //   `,
  // });

  // categories
  // const {
  //   data: { categories },
  // } = await client.query({
  //   query: gql`
  //     query {
  //       categories {

  //       }
  //     }
  //   `,
  // });

  // users
  // const {
  //   data: { users },
  // } = await client.query({
  //   query: gql`
  //     query {
  //       users {

  //       }
  //     }
  //   `,
  // });

  // sitemap

  // const {
  //   data: { sitemap },
  // } = await client.query({
  //   query: gql`
  //     query {
  //       sitemap {
  //         users {
  //           created_at
  //           id
  //           slug
  //         }
  //         tags {
  //           created_at
  //           id
  //           slug
  //         }
  //         ratings {
  //           created_at
  //           id
  //           slug
  //         }
  //         posts {
  //           created_at
  //           id
  //           slug
  //         }
  //         formats {
  //           created_at
  //           id
  //           slug
  //         }
  //         claims {
  //           created_at
  //           id
  //           slug
  //         }
  //         claimants {
  //           created_at
  //           id
  //           slug
  //         }
  //         categories {
  //           created_at
  //           id
  //           slug
  //         }
  //       }
  //     }
  //   `,
  // });

  //   const data = await fetch('http://127.0.0.1:4455/.factly/vidcheck/server/videos/embed', {
  //     headers: { 'X-Space': spaceId },
  //   })
  //     .then((res) => res.json())
  //     .catch((err) => console.log(err));

  //! drsfgdfgfggg rgfsgrgafgragrga rgrgrgrsgrga g
  //   posts.nodes.forEach((post) => {
  //     createNode({
  //       ...post,
  //       id: createNodeId(`${POST_NODE_TYPE}-${post.id}`),
  //       parent: null,
  //       children: [],
  //       internal: {
  //         type: POST_NODE_TYPE,
  //         content: JSON.stringify(post),
  //         contentDigest: createContentDigest(post),
  //       },
  //     });
  //   });
  return;
};

// exports.createResolvers = ({ createResolvers }) => {
//   const resolvers = {
//     VidCheck: {
//       video: {
//         args: { videoId: 'String' },
//         resolve: (source, args, context, info) => {
//           console.log({ args, source, context, info });
//           const allVidChecks = info.originalResolver(source, args, context, info) || [];
//           // return args.videoId
//           //   ? allVidChecks.filter((vidcheck) => vidcheck.video.id === args.videoId)
//           //   : allVidChecks;
//         },
//       },
//     },
//   };
//   createResolvers(resolvers);
// };
