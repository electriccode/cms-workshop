const { getManagementEnvironment } = require("./utils");

module.exports = async function (_, { accessToken, spaceId, environmentId }) {
  const environment = await getManagementEnvironment({
    accessToken,
    spaceId,
    environmentId
  });
  const entry = await environment.createEntry("page", {
    fields: {
      name: {
        ["en-US"]: "Home page"
      },
      title: {
        ["en-US"]: "Chegg - Get 24/7 Homework Help | Rent Textbooks"
      }
    }
  });
  await entry.publish();
};
