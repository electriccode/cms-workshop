const fs = require("fs");
const { runMigration } = require("contentful-migration");

const indexOfMigrationNameOption = process.argv.indexOf("-n");
const filename = process.argv[indexOfMigrationNameOption + 1];

const indexOfEnvironmentOption = process.argv.indexOf("-e");
const environment =
  process.argv[indexOfEnvironmentOption + 1] ||
  process.env.CONTENTFUL_ENVIRONMENT_ID ||
  "master";

if (!filename || filename === "exec")
  throw new Error("Filename not provided or invalid");

const filePath = `${__dirname}/${filename}.js`;

if (fs.existsSync(filePath)) {
  const options = {
    filePath,
    spaceId: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_MANAGEMENT_API_KEY,
    environmentId: environment,
    yes: true
  };
  runMigration(options)
    .then(() => console.log("Migration Done!"))
    .catch((e) => console.error(e));
} else {
  throw new Error(`Can't read ${filePath}`);
}
