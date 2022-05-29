# CMS Workshop

# Prerequisites

1. Create an account at codesandbox.io.
2. Create an account at contentful.com as well.

# Create a static homepage

1. Open this (sandbox)[https://codesandbox.io/s/github/electriccode/cms-workshop/tree/1-static-homepage] and fork it.
2. You'll see a page very similar to current chegg.com homepage. It's responsive as well.

# Getting data from Contentful

1. You need to (generate Contentful API keys)[https://www.contentful.com/developers/docs/references/authentication/] to access and modify data on Contentful. Contetful delivery API key will be used to read data from Contentful. Contentful Management API key will be used to create data inside Contentful using scripts. Copy these keys to a safe place.
2. Open this (sandbox)[https://codesandbox.io/s/github/electriccode/cms-workshop/tree/2-getting-data-from-contentful] and fork it.
3. (Add secrets)[https://codesandbox.io/docs/secrets] to your Codesandbox application. `CONTENTFUL_DELIVERY_API_KEY` and `CONTENTFUL_MANAGEMENT_API_KEY` will be set to the values you saved in step 1.
4. Set `CONTENTFUL_SPACE_ID` to your space id which is there in Contentful URL `https://app.contentful.com/spaces/{spaceID)/suburl` when you login. eg `078yx5412bz7`.
5. Set `CONTENTFUL_ENVIRONMENT_ID` to string `master`
6. To create Page content model and page entry run this command `npm run migrate -- -n 1-create-page && npm run migrate -- -n 2-create-homepage`
