const { getManagementEnvironment } = require("./utils");

module.exports = async function (_, { accessToken, spaceId, environmentId }) {
  const environment = await getManagementEnvironment({
    accessToken,
    spaceId,
    environmentId
  });
  const urlCSInterstitial = await createUrl(
    environment,
    "Chegg Study Interstitial",
    "https://www.chegg.com/auth?redirect=%2Fcspofferinterstitial%2Fib%3FproductType%3DCHEGG_STUDY%26checkoutFlowType%3DSINGLE_ITEM_PURCHASE%26data%3DeyJpdGVtcyI6W3siY2F0YWxvZ0l0ZW1JZCI6IjkxNDYiLCJwcmljaW5nSWQiOiI1MzA1ZTU5YS04Mzk3LTM5OGYtOTY2Mi05NWEyNzA2Njc0M2IiLCJxdWFudGl0eSI6MSwiY2F0YWxvZ0l0ZW1Tb3VyY2UiOiJORVRTVUlURSIsImFubm90YXRpb25zIjp7fX1dLCJob3N0QW5ub3RhdGlvbnMiOnt9LCJzdWNjZXNzVXJsIjoiLyIsImVycm9yVXJsIjoiLyJ9%26originalSource%3DCONTENTFUL&action=signup&type=simplifiedstudy"
  );
  const linkCSInterstitial = await createLink(
    environment,
    "Get started -> Chegg Study Interstitial",
    "Get Started",
    createLinkRef(urlCSInterstitial.sys.id)
  );
  const imageHero = await createAsset(
    environment,
    "Student with curly hairs using mobile",
    "https://assets.chegg.com/image/upload/c_scale,f_auto,q_auto,w_1200/site-assets/marketing/landing-pages/Cheggcom/optimized/full-hero-sohp-s.jpg"
  );
  const valueProp = await createValueProp(
    environment,
    "1. Hero | Learn with Chegg",
    "Learn with Chegg",
    createDocumentNode([
      createParaNode(
        "From first day to finals, get homework help, exam prep & writing support—tailored to your courses."
      )
    ]),
    createLinkRef(linkCSInterstitial.sys.id),
    createLinkRef(imageHero.sys.id, "Asset"),
    "24/7 Course Help"
  );
  const heading = await createHeading(
    environment,
    "2. Here for every moment",
    "Here for every moment"
  );
  const urlHwh = await createUrl(
    environment,
    "URL / Homework Help",
    "https://www.chegg.com/homework-help"
  );
  const linkHwh = await createLink(
    environment,
    "Link / Learn more -> Homework help",
    "Learn more",
    createLinkRef(urlHwh.sys.id),
    "Link"
  );
  const imageHwh = await createAsset(
    environment,
    "Homeworkhelp Books",
    "https://assets.chegg.com/image/upload/c_scale,f_auto,q_auto,w_600/site-assets/marketing/landing-pages/Study/tile-homework-m.png"
  );
  const cardHwh = await createValueProp(
    environment,
    "Card | Homework Help",
    "Homework Help",
    createDocumentNode([
      createParaNode(
        "Study with 55+ million step-by-step explanations, Expert Q&As & math support."
      )
    ]),
    createLinkRef(linkHwh.sys.id),
    createLinkRef(imageHwh.sys.id, "Asset"),
    "",
    "Card"
  );
  const urlPrep = await createUrl(
    environment,
    "URL | Prep",
    "https://www.chegg.com/prep-for-an-exam"
  );
  const linkPrep = await createLink(
    environment,
    "Link | Learn more -> Prep",
    "Learn more",
    createLinkRef(urlPrep.sys.id),
    "Link"
  );
  const imagePrep = await createAsset(
    environment,
    "Image | Prep Papers",
    "https://assets.chegg.com/image/upload/c_scale,f_auto,q_auto,w_600/site-assets/marketing/landing-pages/Study/tile-exam-m.png"
  );
  const cardExamPrep = await createValueProp(
    environment,
    "Card | Prep",
    "Exam prep & practice",
    createDocumentNode([
      createParaNode(
        "Figure out what you don’t know & get ready for test day with practice exams."
      )
    ]),
    createLinkRef(linkPrep.sys.id),
    createLinkRef(imagePrep.sys.id, "Asset"),
    "",
    "Card"
  );
  const urlLearnTopic = await createUrl(
    environment,
    "URL | Learn Topic",
    "https://www.chegg.com/understand-a-topic"
  );
  const linkLearnTopic = await createLink(
    environment,
    "Link | Learn more -> Learn Topic",
    "Learn more",
    createLinkRef(urlLearnTopic.sys.id),
    "Link"
  );
  const imageLearnTopic = await createAsset(
    environment,
    "Image | Learn Topic List",
    "https://assets.chegg.com/image/upload/c_scale,f_auto,q_auto,w_600/site-assets/marketing/landing-pages/Study/tile-topics-m.png"
  );
  const cardLearnTopic = await createValueProp(
    environment,
    "Learn Topic",
    "Understand a topic",
    createDocumentNode([
      createParaNode(
        "Simplify the toughest concepts with digestible topic breakdowns & videos."
      )
    ]),
    createLinkRef(linkLearnTopic.sys.id),
    createLinkRef(imageLearnTopic.sys.id, "Asset"),
    "",
    "Card"
  );
  const urlWriting = await createUrl(
    environment,
    "URL | Writing",
    "https://www.chegg.com/writing"
  );
  const linkWriting = await createLink(
    environment,
    "Link | Learn more -> Writing",
    "Learn more",
    createLinkRef(urlWriting.sys.id),
    "Link"
  );
  const imageWritingCitations = await createAsset(
    environment,
    "Citations and writing",
    "https://assets.chegg.com/image/upload/c_scale,f_auto,q_auto,w_600/site-assets/marketing/landing-pages/Study/tile-writing-m.png"
  );
  const cardWriting = await createValueProp(
    environment,
    "Card | Writing & citation",
    "Writing & citation",
    createDocumentNode([
      createParaNode(
        "Strengthen your writing with plagiarism checks, expert proofreading & instant citations."
      )
    ]),
    createLinkRef(linkWriting.sys.id),
    createLinkRef(imageWritingCitations.sys.id, "Asset"),
    "",
    "Card"
  );
  const cardsProducts = await createRow(environment, "Cards | Products", {
    "en-US": [
      createLinkRef(cardHwh.sys.id),
      createLinkRef(cardExamPrep.sys.id),
      createLinkRef(cardLearnTopic.sys.id),
      createLinkRef(cardWriting.sys.id)
    ]
  });
  const linkSignup = await createLink(
    environment,
    "Button | Sign up -> CS Interstitial",
    "Sign up",
    createLinkRef(urlCSInterstitial.sys.id)
  );
  const pricingValueProp = await createValueProp(
    environment,
    "Pricing Chegg Study",
    "",
    createDocumentNode([
      createParaNode("Prices starting at USD $6.79/mo., cancel anytime")
    ]),
    createLinkRef(linkSignup.sys.id)
  );
  const headingCustomerSatisfaction = await createHeading(
    environment,
    "Heading Customer Satisfaction",
    "94% of Chegg customers say they get better grades when they use Chegg to understand their coursework2"
  );
  const booksUrl = await createUrl(
    environment,
    "Books URL",
    "https://www.chegg.com/books"
  );
  const findBooksButton = await createLink(
    environment,
    "Find books Button",
    "Find your books",
    createLinkRef(booksUrl.sys.id)
  );
  const booksHeroImage = await createAsset(
    environment,
    "Student lying on sofa and reading a book",
    "https://assets.chegg.com/image/upload/c_scale,f_auto,q_auto,w_1200/site-assets/marketing/landing-pages/Cheggcom/optimized/panel-expertmade-s.jpg"
  );
  const textbooksValueProp = await createValueProp(
    environment,
    "Hero | Textbooks",
    "Save up to 90% off textbooks",
    createDocumentNode([
      createParaNode("The smartest way to rent or buy textbooks. Period.")
    ]),
    createLinkRef(findBooksButton.sys.id),
    createLinkRef(booksHeroImage.sys.id, "Asset")
  );
  const support24x7ValueProp = await createValueProp(
    environment,
    "24x7 Support",
    "Study time, crunch time, anytime",
    createDocumentNode([
      createParaNode(
        "Explore some of our best study tools & get 24/7 support for your assignments"
      )
    ])
  );
  const urlPrepForAnExam = await createUrl(
    environment,
    "URL | Prep for an exam",
    "https://www.chegg.com/prep-for-an-exam"
  );
  const linkPrepForAnExam = await createLink(
    environment,
    "Link | Learn more -> Prep for an exam",
    "Learn more",
    createLinkRef(urlPrepForAnExam.sys.id),
    "Link"
  );
  const imagePrepForAnExam = await createAsset(
    environment,
    "Objective question screenshot",
    "https://assets.chegg.com/image/upload/c_scale,f_auto,q_auto,w_600/site-assets/marketing/landing-pages/Study/optimized-V4.1/card-test-prep-xl.png"
  );
  const cardTestPrep = await createValueProp(
    environment,
    "Card | Test prep",
    "Test prep, simplified",
    createDocumentNode([
      createParaNode(
        "Check your knowledge with practice problems, quizzes, and more."
      )
    ]),
    createLinkRef(linkPrepForAnExam.sys.id),
    createLinkRef(imagePrepForAnExam.sys.id, "Asset"),
    "",
    "Card"
  );

  const urlQaExperts = await createUrl(
    environment,
    "URL | Expert QA",
    "https://www.chegg.com/study/qa"
  );
  const linkQaExpertsLearnMore = await createLink(
    environment,
    "Link | Learn more -> QA Expert",
    "Learn more",
    createLinkRef(urlQaExperts.sys.id),
    "Link"
  );
  const imageScanQuestionFromMobile = await createAsset(
    environment,
    "Scan Question from mobile",
    "https://assets.chegg.com/image/upload/c_scale,f_auto,q_auto,w_600/site-assets/marketing/landing-pages/Study/optimized-V4.1/card-snap-a-pic-xl.png"
  );
  const cardQaExpert = await createValueProp(
    environment,
    "Card | QA Expert",
    "Experts by your side",
    createDocumentNode([
      createParaNode(
        "Have millions of explanations at your fingertips. Plus, snap a pic to get an expert answer."
      )
    ]),
    createLinkRef(linkQaExpertsLearnMore.sys.id),
    createLinkRef(imageScanQuestionFromMobile.sys.id, "Asset"),
    "",
    "Card"
  );

  const urlProofreading = await createUrl(
    environment,
    "URL | Proofreading",
    "https://www.chegg.com/writing/features/proofreading"
  );
  const linkProofreadingLearnMore = await createLink(
    environment,
    "Link | Learn more -> Proofreading",
    "Learn more",
    createLinkRef(urlProofreading.sys.id),
    "Link"
  );
  const imageGrammarCheckScoreCardScreenshot = await createAsset(
    environment,
    "Grammar check score card screenshot",
    "https://assets.chegg.com/image/upload/c_scale,f_auto,q_auto,w_600/site-assets/marketing/landing-pages/Study/optimized-V4.1/card-feedback-xl.png"
  );
  const cardProofreading = await createValueProp(
    environment,
    "Card | Proofreading",
    "Professional proofreading",
    createDocumentNode([
      createParaNode(
        "Receive detailed comments from real writing experts on your assignment’s thesis, style, and more—within 48 hours."
      )
    ]),
    createLinkRef(linkProofreadingLearnMore.sys.id),
    createLinkRef(imageGrammarCheckScoreCardScreenshot.sys.id, "Asset"),
    "",
    "Card"
  );

  const cardsOtherProducts = await createRow(
    environment,
    "Cards | Other products",
    {
      "en-US": [
        createLinkRef(cardTestPrep.sys.id),
        createLinkRef(cardQaExpert.sys.id),
        createLinkRef(cardProofreading.sys.id)
      ]
    }
  );

  const urlCareers = await createUrl(
    environment,
    "URL | Careers",
    "https://www.chegg.com/career"
  );
  const linkExploreCareersAndInternships = await createLink(
    environment,
    "Link | Learn more -> Careers",
    "Explore Careers & Internships",
    createLinkRef(urlCareers.sys.id),
    "Link"
  );
  const imageStudentConsultation = await createAsset(
    environment,
    "Student Consultation",
    "https://assets.chegg.com/image/upload/c_scale,f_auto,q_auto,w_1200/site-assets/marketing/landing-pages/Cheggcom/panel-careers-m.jpg"
  );
  const cardInternships = await createValueProp(
    environment,
    "Card | Careers & Interships",
    "Make your dream job a reality",
    createDocumentNode([
      createParaNode("Grow your skills and find opportunities.")
    ]),
    createLinkRef(linkExploreCareersAndInternships.sys.id),
    createLinkRef(imageStudentConsultation.sys.id, "Asset"),
    "",
    "Card"
  );

  const urlLife = await createUrl(
    environment,
    "URL | Life",
    "https://www.chegg.com/introducing-chegg-life"
  );
  const linkExploreLife = await createLink(
    environment,
    "Link | Learn more -> Explore Life",
    "Explore Life",
    createLinkRef(urlLife.sys.id),
    "Link"
  );
  const imageMotherAndChildDoingYoga = await createAsset(
    environment,
    "Mother And Child Doing Yoga",
    "https://assets.chegg.com/image/upload/c_scale,f_auto,q_auto,w_1200/site-assets/marketing/landing-pages/Cheggcom/panel-life-m.jpg"
  );
  const cardBalanceLife = await createValueProp(
    environment,
    "Card | Balance Life",
    "Balance more than just classes",
    createDocumentNode([createParaNode("Navigate life and money matters.")]),
    createLinkRef(linkExploreLife.sys.id),
    createLinkRef(imageMotherAndChildDoingYoga.sys.id, "Asset"),
    "",
    "Card"
  );

  const cardsCareerAndLife = await createRow(
    environment,
    "Cards | Other products",
    {
      "en-US": [
        createLinkRef(cardInternships.sys.id),
        createLinkRef(cardBalanceLife.sys.id)
      ]
    }
  );

  // Update page
  let page = await environment.getEntries({
    content_type: "page",
    "fields.slug[exists]": false
  });
  page.items[0].fields.components = {
    "en-US": [
      createLinkRef(valueProp.sys.id),
      createLinkRef(heading.sys.id),
      createLinkRef(cardsProducts.sys.id),
      createLinkRef(pricingValueProp.sys.id),
      createLinkRef(headingCustomerSatisfaction.sys.id),
      createLinkRef(textbooksValueProp.sys.id),
      createLinkRef(support24x7ValueProp.sys.id),
      createLinkRef(cardsOtherProducts.sys.id),
      createLinkRef(pricingValueProp.sys.id),
      createLinkRef(cardsCareerAndLife.sys.id)
    ]
  };
  console.dir({ page: page.items[0].fields }, { depth: 5 });
  await page.items[0].update();
  page = await environment.getEntries({
    content_type: "page",
    "fields.slug[exists]": false
  });
  await page.items[0].publish();
};

function createLinkRef(id = "", linkType = "Entry") {
  return { sys: { type: "Link", linkType, id } };
}

function createDocumentNode(content) {
  return {
    data: {},
    content,
    nodeType: "document"
  };
}

function createParaNode(text = "") {
  return {
    data: {},
    content: [
      {
        data: {},
        marks: [],
        value: text,
        nodeType: "text"
      }
    ],
    nodeType: "paragraph"
  };
}

async function createRow(environment, name = "", components = { "en-US": [] }) {
  const entry = await environment.createEntry("section", {
    fields: {
      internalName: {
        "en-US": name
      },
      components
    }
  });
  return await entry.publish();
}

async function createAsset(environment, title = "", imageUrl = "") {
  const url = new URL(imageUrl);
  let entry = await environment.createAsset({
    fields: {
      title: {
        "en-US": title
      },
      file: {
        "en-US": {
          contentType: "image/jpeg",
          fileName: url.pathname.split("/").pop(),
          upload: imageUrl
        }
      }
    }
  });
  await entry.processForAllLocales();
  entry = await environment.getAsset(entry.sys.id);
  return await entry.publish();
}

async function createValueProp(
  environment,
  name,
  title,
  description,
  cta,
  image,
  overline = "",
  type = "Hero"
) {
  const entry = await environment.createEntry("valueProp", {
    fields: {
      internalName: {
        "en-US": name
      },
      title: {
        "en-US": title
      },
      description: {
        "en-US": description
      },
      cta: {
        "en-US": cta
      },
      image: {
        "en-US": image
      },
      overline: {
        "en-US": overline
      },
      type: {
        "en-US": type
      }
    }
  });
  return await entry.publish();
}

async function createLink(
  environment,
  name = "",
  text = "",
  url = {},
  appearance = "Button"
) {
  const entry = await environment.createEntry("link", {
    fields: {
      internalName: {
        "en-US": name
      },
      text: {
        "en-US": text
      },
      url: {
        "en-US": url
      },
      appearance: {
        "en-US": appearance
      }
    }
  });
  return await entry.publish();
}

async function createUrl(environment, name = "", url = "") {
  const entry = await environment.createEntry("url", {
    fields: {
      internalName: {
        "en-US": name
      },
      url: {
        "en-US": url
      }
    }
  });
  return await entry.publish();
}

async function createHeading(
  environment,
  name = "",
  title = "",
  seoHeadingLevel = "h2",
  size = "XL"
) {
  const entry = await environment.createEntry("heading", {
    fields: {
      internalName: {
        "en-US": name
      },
      title: {
        "en-US": title
      },
      seoHeadingLevel: {
        "en-US": seoHeadingLevel
      },
      size: {
        "en-US": size
      }
    }
  });
  return await entry.publish();
}
