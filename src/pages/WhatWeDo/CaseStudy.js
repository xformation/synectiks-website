import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { MdArrowForward, MdArrowBack } from "react-icons/md";
import SM from "../../images/case/CS_Software_Migration.jpg";
import RM from "../../images/case/CS_Realtime_Monitoring.jpg";
import SDFT from "../../images/case/CS_SoftwareDefinedTransformation.jpg";
import ND from "../../images/case/CS_NetworkDesign.jpg";
import ST from "../../images/case/CS_StorageTier.jpg";
import DR from "../../images/case/CS_DisasterRecovery.jpg";
import Layout from "../../components/layout.js";
import SEO from "../../components/seo.js";
import BreadCrumbs from "../../components/Home/Breadcrumbs.js";

const CaseStudy = () => {
  return (
    <Layout>
      <SEO title="Case Studies" />
      <Helmet>
        <link
          rel="canonical"
          href="https://synectiks.com/casestudy/index.html"
        />
      </Helmet>
      <div className="d-block w-100 py-3 px-md-5">
        <div className="container-fluid">
          <BreadCrumbs
            title="Home"
            subtitle="Resources"
            pageTitle="Case Studies"
          />
          <h1 className="mt-4 mb-3">Case Studies</h1>
          <div className="row flex-wrap mb-2 mb-md-5">
            <div className="col-md-4 col-sm-6 col-12 mb-4">
              <a href="/software-defined/index.html">
                <div className="d-block w-100 h-100 box-shadow bgWhite">
                  <img src={SDFT} alt="Software Defined" />
                  <div className="text-group align-self-center p-3 bgWhite">
                    <h3 className="textColor">
                      Software Defined Transformation
                    </h3>
                    <p className="textColor">
                      AWS Cloud migration for a large motor industry.
                    </p>
                    <span className="mt-2 d-block">
                      Read More <i className="fa fa-arrow-right" />
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-4 col-sm-6 col-12 mb-4">
              <a href="/realtime/index.html">
                <div className="d-block w-100 h-100 box-shadow bgWhite">
                  <img src={RM} alt="Realtime" />
                  <div className="text-group align-self-center p-3 bgWhite">
                    <h3 className="textColor">Realtime Monitoring</h3>
                    <p className="textColor">
                      Highly Scalable extremely customizable realtime monitoring
                      platform.
                    </p>
                    <span className="mt-2 d-block">
                      Read More <i className="fa fa-arrow-right" />
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-4 col-sm-6 col-12 mb-4">
              <a href="/storage-migration/index.html">
                <div className="d-block w-100 h-100 box-shadow bgWhite">
                  <img src={SM} alt="Storage Migration" />
                  <div className="text-group align-self-center p-3 bgWhite">
                    <h3 className="textColor">Storage Migration</h3>
                    <p className="textColor">
                      Petabytes of storage migration for a large financial
                      company with zero down.
                    </p>
                    <span className="mt-2 d-block">
                      Read More <i className="fa fa-arrow-right" />
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-4 col-sm-6 col-12 mb-4">
              <a href="/network-design/index.html">
                <div className="d-block w-100 h-100 box-shadow bgWhite">
                  <img src={ND} alt="Network Design" />
                  <div className="text-group align-self-center p-3 bgWhite">
                    <h3 className="textColor">Network Design</h3>
                    <p className="textColor">
                      Complete network Backbone design with highest security for
                      retail.
                    </p>
                    <span className="mt-2 d-block">
                      Read More <i className="fa fa-arrow-right" />
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-4 col-sm-6 col-12 mb-4">
              <a href="/storage-tier/index.html">
                <div className="d-block w-100 h-100 box-shadow bgWhite">
                  <img src={ST} alt="Storage Tier" />
                  <div className="text-group align-self-center p-3 bgWhite">
                    <h3 className="textColor">Storage Tier</h3>
                    <p className="textColor">
                      Moving Bigdata workloads to aggregated platform for a
                      large telco.
                    </p>
                    <span className="mt-2 d-block">
                      Read More <i className="fa fa-arrow-right" />
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-4 col-sm-6 col-12 mb-4">
              <a href="/disaster-recovery/index.html">
                <div className="d-block w-100 h-100 box-shadow bgWhite">
                  <img src={DR} alt="Disaster Recovery" />
                  <div className="text-group align-self-center p-3 bgWhite">
                    <h3 className="textColor">Disaster Recovery</h3>
                    <p className="textColor">
                      Lightweight disaster recovery platform for indian Defense.
                    </p>
                    <span className="mt-2 d-block">
                      Read More <i className="fa fa-arrow-right" />
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default CaseStudy;
