import Head from "next/head";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Heading from "../components/Heading";
import Hero from "../components/Hero";
import Row from "../components/Row";

export default function Home(props) {
  console.log(props);
  const pageData = props?.data?.pageCollection?.items?.[0];
  if (!pageData) return "Page not found 404";
  return (
    <div>
      <Head>
        <title>{pageData.title}</title>
      </Head>
      <main>
        <Header />
        {pageData.componentsCollection.items.map((item) => {
          let Component = null;
          let props = {};
          console.log(item.__typename, item.type);
          switch (item.__typename) {
            case "ValueProp":
              if (item.type === "Hero") {
                const { title, description, overline, cta, image } = item;
                const heroProps = {
                  title,
                  description: JSON.stringify(description),
                  overline
                };
                if (cta) {
                  const {
                    text,
                    url: { url: ctaUrl }
                  } = cta;
                  heroProps.cta = {
                    title: text,
                    url: ctaUrl
                  };
                }
                if (image) {
                  const { title: imageTitle, url: imageUrl } = image;
                  heroProps.image = {
                    title: imageTitle,
                    url: imageUrl
                  };
                }
                Component = Hero;
                props = heroProps;
              } else if (item.type === "Card") {
              }
              break;
            default:
              void 0;
          }
          return Component && <Component {...props} />;
        })}
        <Hero />
        <Heading />
        <Row>
          <Card />
          <Card />
          <Card />
          <Card />
        </Row>
        <Hero />
        <Heading />
        <Hero />
        <Hero />
        <Row>
          <Card />
          <Card />
          <Card />
        </Row>
        <Row>
          <Card />
          <Card />
        </Row>
      </main>
      <Footer />
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const results = {
    props: {}
  };
  const gql = `{
    pageCollection(where: { slug_exists: false }, limit: 1) {
      items {
        title
        componentsCollection(limit: 50) {
          items {
            __typename
            ... on ValueProp {
              type
              title
              description {
                json
              }
              image {
                url
                title
              }
              overline
              cta {
                text
                url {
                  url
                }
              }
            }
            ... on Heading {
              title
              seoHeadingLevel
              size
            }
            ... on Section {
              componentsCollection(limit: 6) {
                items {
                  __typename,
                  ... on ValueProp {
                    type
                    title
                    description {
                      json
                    }
                    image {
                      title
                      fileName
                    }
                    cta {
                      text
                      url {
                        url
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }`.replace(/[\n ]+/g, " ");
  try {
    const data = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT_ID}`,
      {
        headers: {
          authorization: `Bearer ${process.env.CONTENTFUL_DELIVERY_API_KEY}`,
          "content-type": "application/json"
        },
        body: `{"operationName":null,"variables":{},"query":"${gql}"}`,
        method: "POST"
      }
    );
    results.props = await data.json();
    console.log(results.props);
  } catch (e) {
    console.trace(e);
  }

  return results;
};
