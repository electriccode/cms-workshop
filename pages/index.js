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
      pageCollection(where: {
        slug_exists: false
      }){
      items {
        name
        title
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
