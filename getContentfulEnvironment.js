const contentfulManagement = require("contentful-management")

module.exports = function () {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: process.env.CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN,
  })

  return contentfulClient
    .getSpace(process.env.CONTENTFUL_SPACE_ID)
    .then((space) =>
      space.getEnvironment(process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT)
    )
}
