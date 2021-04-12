exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
  type Channel implements Node {
    id: ID!
    local: File @link
    kind: String
    etag: String
    snippet: ChannelSnippet
    contentDetails: ChannelContentDetails
    statistics: ChannelStatistics
    channelId: String
    file: File
    parent: Node
    children: [Node!]!
    internal: Internal!
  }
  type Playlist implements Node {
    id: ID!
    local: File @link
    videos: [Video] @link
    kind: String
    etag: String
    snippet: PlaylistSnippet
    contentDetails: ContentDetails
    playlistId: String
    file: File
    list: Boolean
    parent: Node
    children: [Node!]!
    internal: Internal!
  }
  type PlaylistSnippet {
    publishedAt: Date @dateformat
    channelId: String
    title: String
    description: String
    thumbnails: SnippetThumbnails
    channelTitle: String
    localized: Localized
  }
  type ChannelSectionsPlaylist {
    id: String
    list: Boolean
    snippet: ChannelSectionsPlaylistSnippet
    contentDetails: ContentDetails
    videos: [String]
    playlistId: String
    kind: String
    etag: String
  }
  type ChannelSectionsPlaylistSnippet {
    title: String
    channelTitle: String
    publishedAt: Date @dateformat
    channelId: String
    description: String
    thumbnails: Thumbnails
    localized: Localized
  }
  type ContentDetails {
    itemCount: Int
  }
  type Video implements Node {
    id: ID!
    local: File @link
    playlistIds: [String]
    positions: [VideoPositions]
    kind: String
    etag: String
    snippet: VideoSnippet
    contentDetails: VideoContentDetails
    file: File
    parent: Node
    children: [Node!]!
    internal: Internal!
  }

  type ChannelSections implements Node {
    id: ID!
    videos: [Video] @link
    kind: String
    etag: String
    snippet: ChannelSectionsSnippet
    playlist: ChannelSectionsPlaylist
    contentDetails: ContentDetails
    parent: Node
    children: [Node!]!
    internal: Internal!
  }
  type ChannelSectionsSnippet {
    type: String
    style: String
    channelId: String
    position: Int
  }
  type ChannelSnippet {
    title: String
    description: String
    customUrl: String
    publishedAt: Date @dateformat
    thumbnails: ChannelSnippetThumbnails
    localized: Localized
    country: String
  }
  type ChannelSnippetThumbnails {
    default: Thumbnails
    medium: Thumbnails
    high: Thumbnails
  }
  type Localized {
    title: String
    description: String
  }
  type ChannelContentDetails {
    relatedPlaylists: ChannelContentDetailsRelatedPlaylists
  }
  type ChannelContentDetailsRelatedPlaylists {
    likes: String
    favorites: String
    uploads: String
  }
  type ChannelStatistics {
    viewCount: String
    subscriberCount: String
    hiddenSubscriberCount: Boolean
    videoCount: String
  }
  type VideoPositions {
    position: Int
    playlist: String
  }
  type VideoSnippet {
    publishedAt: Date @dateformat
    channelId: String
    title: String
    description: String
    thumbnails: SnippetThumbnails
    channelTitle: String
    playlistId: String
    position: Int
    resourceId: VideoSnippetResourceId
  }
  type VideoContentDetails {
    videoId: String
    videoPublishedAt: Date @dateformat
  }
  type SnippetThumbnails {
    default: Thumbnails
    medium: Thumbnails
    high: Thumbnails
    standard: Thumbnails
    maxres: Thumbnails
  }
  type Thumbnails {
    url: String
    width: Int
    height: Int
  }
  type VideoSnippetResourceId {
    kind: String
    videoId: String
  }
`;
  createTypes(typeDefs);
};
