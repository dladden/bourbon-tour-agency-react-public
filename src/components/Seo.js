import React from "react";
// import styled from "styled-components";
import { Helmet } from "react-helmet-async";
//To fill-out all SEO Content search in the global search: "SEO Content". Fill-out all the SEO content in each page. Pages can also be found in pages folder.
// example:
/* <Helmet title="About">
  <meta
    name="description"
    content="Since 2020 Static Web Application has provided touring on a trail to all distillers around Kentucky. If you are curious about the distilling process as we are, contact us."
  />
  <link rel="canonical" href="/about" />
</Helmet>; */
//SEO takes on 3 prop values to be injected in each page the "title", "content" aka
//the content of the description and href of the page which then renders in the pages HTML.
//This SEO component is used in every page that the project has.
//Link and meta use an object to set up the content description and href tag
const Seo = ({ title, robots, content, href }) => {
  return (
    <Helmet
      title={title}
      meta={[
        { name: `description`, content: content },
        { name: `robots`, content: robots },
      ]}
      link={[{ rel: `canonical`, href: href }]}
    ></Helmet>
  );
};

// const Wrapper = styled.section``;

export default Seo;
