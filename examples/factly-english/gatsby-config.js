require("dotenv").config({
  path: `.env`,
})

module.exports = {
  plugins: [
    {
      resolve: "@factly/gatsby-theme-factly",
      options: {
        client: 1,
        api: "http://127.0.0.1:9001/query",
        youtube_api_key: process.env.GOOGLE_PRIVATE_KEY,
        channel_id: process.env.CHANNEL_ID,
      },
    },
  ],
}
