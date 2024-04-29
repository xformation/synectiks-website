import React from "react";
import Layout from "../../components/layout.js";
import styled from "styled-components";
import MobTabs from "../../pages/Company/MobTab.js";
import Tabs from "../Home/Tabs";
import SEO from "../../components/seo.js";
import BreadCrumbs from "../../components/Home/Breadcrumbs.js";
import { Helmet } from "react-helmet";
const AreaOfExpertise = ({ location }) => {
  return (
    <Layout>
      <Helmet>
        <meta
          name="description"
          content="Across our outcome-driven consulting and managed services, it&#39;s our open product driven software solutions, our deep expertise on modern application architecture and our cloud culture that makes the difference."
        />
        <link
          rel="canonical"
          href="https://synectiks.com/area-expertise/index.html"
        />
      </Helmet>
      <SEO title="What We Do" />
      <div className="d-block w-100 py-3 px-md-5">
        <div className="container-fluid">
          <BreadCrumbs title="Home" subtitle="What We Do" />
          <h1>What We Do</h1>
          <div className="my-4">
            <p>
              Cloud - an opportunity to envision possibilities, Power to
              Transform!
              <br />
              <br />
              To make you realize this: We at SYNECTIKS - design and build
              scalable technology solutions, perform digital transformation at
              speed and scale, bring together applications, infrastructure, and
              security to leverage the full potential of cloud, automate to
              DevOps and PODS, migrate and modernize, optimize and simplify
              cloud management.
            </p>
          </div>
          <div className="my-2 my-md-4">
            <h5 className="text-center my-2 my-md-4 py-2 py-md-4 ft">
              Area of Expertise for Outcome-based Solution offerings
            </h5>
            {/* <HomeTabs /> */}
            <MobTabs />
            <Tabs />
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default AreaOfExpertise;
