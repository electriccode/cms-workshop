const cma = require("contentful-management");

module.exports = {
  getManagementEnvironment: async function ({
    accessToken,
    spaceId,
    environmentId
  }) {
    const client = cma.createClient({
      host: "api.contentful.com",
      accessToken
    });
    const space = await client.getSpace(spaceId);
    const environment = await space.getEnvironment(environmentId);
    return environment;
  }
};
