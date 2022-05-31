module.exports = async function (migration) {
  createHeading(migration);
  createUrl(migration);
  createLink(migration);
  createValueProp(migration);
  createSection(migration);
  updatePage(migration);
};

function createHeading(migration) {
  const heading = migration
    .createContentType("heading")
    .name("Heading")
    .description("")
    .displayField("internalName");
  heading
    .createField("internalName")
    .name("Internal Name")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  heading
    .createField("title")
    .name("Title")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  heading
    .createField("seoHeadingLevel")
    .name("SEO Heading Level")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([
      {
        in: ["h1", "h2", "h3", "h4", "h5", "h6"]
      }
    ])
    .disabled(false)
    .omitted(false);

  heading
    .createField("size")
    .name("Size")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([
      {
        in: ["XXL", "XL", "L", "M", "S", "XS"]
      }
    ])
    .defaultValue({
      "en-US": "XL"
    })
    .disabled(false)
    .omitted(false);

  heading.changeFieldControl("internalName", "builtin", "singleLine", {});
  heading.changeFieldControl("title", "builtin", "singleLine", {});
  heading.changeFieldControl("seoHeadingLevel", "builtin", "dropdown", {});
  heading.changeFieldControl("size", "builtin", "dropdown", {});
}

function createUrl(migration) {
  const url = migration
    .createContentType("url")
    .name("URL")
    .description("")
    .displayField("internalName");
  url
    .createField("internalName")
    .name("Internal Name")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  url
    .createField("url")
    .name("URL")
    .type("Text")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  url.changeFieldControl("internalName", "builtin", "singleLine", {});
  url.changeFieldControl("url", "builtin", "singleLine", {});
}

function createLink(migration) {
  const link = migration
    .createContentType("link")
    .name("Link")
    .description("")
    .displayField("internalName");
  link
    .createField("internalName")
    .name("Internal Name")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  link
    .createField("text")
    .name("Text")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  link
    .createField("url")
    .name("URL")
    .type("Link")
    .localized(false)
    .required(false)
    .validations([
      {
        linkContentType: ["url"]
      }
    ])
    .disabled(false)
    .omitted(false)
    .linkType("Entry");

  link
    .createField("appearance")
    .name("Appearance")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([
      {
        in: ["Link", "Button"]
      }
    ])
    .defaultValue({
      "en-US": "Link"
    })
    .disabled(false)
    .omitted(false);

  link.changeFieldControl("internalName", "builtin", "singleLine", {});
  link.changeFieldControl("text", "builtin", "singleLine", {});
  link.changeFieldControl("url", "builtin", "entryLinkEditor", {});
  link.changeFieldControl("appearance", "builtin", "radio", {});
}

function createValueProp(migration) {
  const valueProp = migration
    .createContentType("valueProp")
    .name("ValueProp")
    .description("")
    .displayField("internalName");
  valueProp
    .createField("internalName")
    .name("Internal Name")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  valueProp
    .createField("title")
    .name("Title")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  valueProp
    .createField("description")
    .name("Description")
    .type("RichText")
    .localized(false)
    .required(false)
    .validations([
      {
        enabledMarks: ["bold", "italic", "underline"],
        message: "Only bold, italic, and underline marks are allowed"
      },
      {
        enabledNodeTypes: ["ordered-list", "hyperlink"],
        message: "Only ordered list and link to Url nodes are allowed"
      },
      {
        nodes: {}
      }
    ])
    .disabled(false)
    .omitted(false);

  valueProp
    .createField("cta")
    .name("CTA")
    .type("Link")
    .localized(false)
    .required(false)
    .validations([
      {
        linkContentType: ["link"]
      }
    ])
    .disabled(false)
    .omitted(false)
    .linkType("Entry");

  valueProp
    .createField("image")
    .name("Image")
    .type("Link")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false)
    .linkType("Asset");
  valueProp
    .createField("overline")
    .name("Overline")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  valueProp
    .createField("type")
    .name("Type")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([
      {
        in: ["Hero", "Card"]
      }
    ])
    .defaultValue({
      "en-US": "Hero"
    })
    .disabled(false)
    .omitted(false);

  valueProp.changeFieldControl("internalName", "builtin", "singleLine", {});
  valueProp.changeFieldControl("title", "builtin", "singleLine", {});
  valueProp.changeFieldControl("description", "builtin", "richTextEditor", {});
  valueProp.changeFieldControl("cta", "builtin", "entryLinkEditor", {});
  valueProp.changeFieldControl("image", "builtin", "assetLinkEditor", {});
  valueProp.changeFieldControl("overline", "builtin", "singleLine", {});
  valueProp.changeFieldControl("type", "builtin", "radio", {});
}

function updatePage(migration) {
  const page = migration.editContentType("page");
  page
    .editField("components")
    .type("Array")
    .items({
      type: "Link",

      validations: [
        {
          linkContentType: ["heading", "valueProp", "section"]
        }
      ],

      linkType: "Entry"
    });
}

function createSection(migration) {
  const section = migration
    .createContentType("section")
    .name("Section")
    .description("Generic container element for multiple UI components")
    .displayField("internalName");
  section
    .createField("internalName")
    .name("Internal Name")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  section
    .createField("components")
    .name("Components")
    .type("Array")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false)
    .items({
      type: "Link",

      validations: [
        {
          linkContentType: ["valueProp"]
        }
      ],

      linkType: "Entry"
    });

  section.changeFieldControl("internalName", "builtin", "singleLine", {});
  section.changeFieldControl("components", "builtin", "entryCardsEditor", {});
}
