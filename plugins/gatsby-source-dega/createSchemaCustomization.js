exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
  type DegaPost implements Node @dontInfer {
    id: Int!
    gid: ID!
    categories: [DegaCategory]
    claims: [DegaClaim]
    created_at: Date @dateformat
    description: JSON
    excerpt: String
    format: DegaFormat
    html_description: String
    is_featured: Boolean
    is_highlighted: Boolean
    is_sticky: Boolean
    medium: DegaMedium
    published_date: Date @dateformat
    schemas: JSON
    slug: String
    space_id: Int!
    status: String
    subtitle: String
    tags: [DegaTag]
    title: String
    updated_at: Date @dateformat
    users: [DegaUser]
  }
  type DegaMedium {
    id: Int!
    gid: ID!
    alt_text: String
    caption: String
    created_at: Date @dateformat
    description: String
    dimensions: String
    file_size: Int
    name: String
    slug: String
    space_id: Int!
    title: String
    type: String
    updated_at: Date @dateformat
    url: JSON
  }
  type DegaCategory implements Node {
    id: Int!
    gid: ID!
    created_at: Date @dateformat
    description: JSON
    html_description: String
    medium: DegaMedium
    meta_fields: JSON
    name: String
    parent_id: Int
    slug: String
    space_id: Int!
    updated_at: Date @dateformat
  }
  type DegaTag implements Node @dontInfer{
    id: Int!
    gid: ID!
    created_at: Date @dateformat
    description: String
    html_description: String
    name: String
    slug: String
    space_id: Int!
    updated_at: Date @dateformat
  }
  type DegaUser implements Node @dontInfer{
    id: Int!
    gid: ID!
    updated_at: Date @dateformat
    social_media_urls: JSON
    slug: String
    medium: DegaMedium
    last_name: String
    gender: String
    first_name: String
    email: String
    display_name: String
    description: String
    created_at: Date @dateformat
    birth_date: String
  }
  type DegaSpace implements Node @dontInfer{
    id: Int!
    gid: ID!
    contact_info: JSON
    created_at: Date @dateformat
    description: String
    fav_icon: DegaMedium
    logo: DegaMedium
    logo_mobile: DegaMedium
    mobile_icon: DegaMedium
    name: String
    site_address: String
    site_title: String
    slug: String
    social_media_urls: JSON
    tag_line: String
    updated_at: Date @dateformat
    verification_codes: JSON
  }
  type DegaSitemap implements Node {
    users: DegaSitemapField
    tags: DegaSitemapField
    ratings: DegaSitemapField
    posts: DegaSitemapField
    formats: DegaSitemapField
    claims: DegaSitemapField 
    claimants: DegaSitemapField 
    categories: DegaSitemapField 
  }
  type DegaSitemapField {
    id: Int
    gid: ID
    created_at: Date @dateformat
    slug: String
  }
  type DegaRating implements Node @dontInfer {
    id: Int!
    gid: ID!
    background_colour: JSON
    created_at: Date @dateformat
    description: JSON
    html_description: String
    medium: DegaMedium
    name: String
    numeric_value: Int
    slug: String
    space_id: Int!
    text_colour: JSON
    updated_at: Date @dateformat
  }
  type DegaMenu implements Node @dontInfer {
    id: Int!
    gid: ID!
    created_at: Date @dateformat
    menu: JSON
    name: String
    slug: String
    space_id: Int!
    updated_at: Date @dateformat
  }
  type DegaFormat implements Node @dontInfer {
    id: Int!
    gid: ID!
    created_at: Date @dateformat
    description: String
    name: String
    slug: String
    space_id: Int!
    updated_at: Date @dateformat
  }
  type DegaClaim implements Node @dontInfer {
    id: Int!
    gid: ID!
    checked_date: Date @dateformat
    claim: String
    claim_date: Date @dateformat
    claim_sources: JSON
    claimant: DegaClaimant
    created_at: Date @dateformat
    description: JSON
    fact: String
    html_description: String
    rating: DegaRating
    review_sources: JSON
    slug: String
    space_id: Int!
    updated_at: Date @dateformat
  }
  type DegaClaimant implements Node @dontInfer{
    id: Int!
    gid: ID!
    created_at: Date @dateformat
    description: JSON
    html_description: String
    medium: DegaMedium
    name: String
    slug: String
    space_id: Int!
    tag_line: String
    updated_at: Date @dateformat
  }
  `;
  createTypes(typeDefs);
};
