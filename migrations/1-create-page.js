module.exports = async function (migration) {
  createPageModel(migration);
};

function createPageModel(migration) {
  const page = migration
    .createContentType("page")
    .name("Page")
    .description("")
    .displayField("name");
  page
    .createField("name")
    .name("Name")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  page
    .createField("title")
    .name("Title")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  page
    .createField("slug")
    .name("Slug")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([
      {
        unique: true
      }
    ])
    .disabled(false)
    .omitted(false);

  page
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
      validations: [],
      linkType: "Entry"
    });

  page.changeFieldControl("name", "builtin", "singleLine", {});
  page.changeFieldControl("title", "builtin", "singleLine", {});
  page.changeFieldControl("slug", "builtin", "urlEditor", {});
  page.changeFieldControl("components", "builtin", "entryLinksEditor", {});
}
