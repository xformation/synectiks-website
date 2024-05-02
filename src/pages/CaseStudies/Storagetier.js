import * as React from "react";
import { Helmet } from "react-helmet";
import st from "../../images/case/StorageTier_CS.jpg";
import Layout from "../../components/layout";
import SEO from "../../components/seo.js";

import CaseBreadCrumbs from "../../components/Home/CasestudiesBreads.js";
const Storagetier = () => {
  return (
    <Layout>
      <Helmet>
        <link
          rel="canonical"
          href="https://www.synectiks.com/storage-tier/index.html"
        />
      </Helmet>
      <SEO title="Storagetier" />
      <div className="d-block w-100 py-3 px-md-5">
        <div className="container-fluid">
          <div className="softwareDefined_wrap">
            <CaseBreadCrumbs
              title="Home"
              casetitle="Resources"
              subtitle="Case Studies"
              pageTitle="Storage Tier"
            />
            <h1 className="mt-4">Storage Tier</h1>
            <div className="softwareDefined_image">
              <h5 className="ft mb-4">Indian Meteorology Department - Case Study</h5>
              <p className="blueBorder ps-3 ps-md-5 py-1 py-3">
                Indian Meteorology Department is an agency of the Ministry of
                Earth Sciences of the Government of India. The agency harvests
                the meteorological observations, weather forecasting and
                seismology reports and also responsible for communicating and
                forecasting weather services.
              </p>
              <img src={st} alt="Storage Tier" className="w-100 my-4" />
            </div>
            <div className="softwareDefined_div d-flex flex-column flex-md-row justify-content-around">
              <div className="column w-100 px-3 px-md-5 mb-3 orangeBorder">
                <h5 className="ft">Industry</h5>
                <p>Automobiles</p>
              </div>
              <div className="column w-100 px-3 px-md-5 mb-3 blueBorder">
                <h5 className="ft">Business Objective</h5>
                <p>
                  Transformation towards becoming hardware / Os / Vender /
                  Operation agnostic. Make everything software defined.
                </p>
              </div>
              <div className="column w-100 px-3 px-md-5 mb-3 redBorder">
                <h5 className="ft">Technologies</h5>
                <p> AWS, Infrastructure as a code, microservices, DevOps</p>
              </div>
            </div>
            <div>
              <h5 className="ft mt-4 mb-2">Overview</h5>
              <p>
                Background- Indian Meteorology Department is an agency of the
                Ministry of Earth Sciences of the Government of India. The
                agency harvests the meteorological observations, weather
                forecasting and seismology reports and also responsible for
                communicating and forecasting weather services.
              </p>
              <h5 className="ft mt-4 mb-2">Challenges</h5>
              <p>
                They wanted a lightweight script that must integrate into their
                existing application environment which is Java Based Image
                Processing UI. The solution must cater multi-staging data
                protection(D2D2T). The backup storage should scale out low-cost
                NAS storage.
              </p>
            </div>
            <div>
              <h5 className="ft mt-4 mb-2">Solutions</h5>
              <ul>
                <li>
                  After analyzing and understanding their core problem, we
                  initiated our process with the help of Alfresco Content
                  Management solution.
                </li>
                <li>
                  This management tool stores all the files and allows to search
                  all the multiple folders for content.
                </li>
                <li>
                  The next step is to map the different tiers of storage to
                  separate folder and write automation script.
                </li>
                <li>
                  This automation script checks the capacity of primary storage
                  periodically and moves data to secondary storage based on some
                  rules.
                </li>
                <li>
                  We integrated the original data processing application with
                  Alfresco API, to store and access the data.
                </li>
                <li>
                  We rebuilt and revamped the existing applications to meet
                  today’s agility and scalability demands in the market.
                </li>
                <li>
                  This automation script checks the capacity of primary storage
                  periodically and moves data to secondary storage based on some
                  rules.
                </li>
              </ul>
            </div>
            <div className="mb-4">
              <h5 className="ft mt-4 mb-2">
                Mapping a Multi-Tier data staging solution with incredible ease.
              </h5>
              <p>
                “Stop looking at the problem like a problem” sounds great but
                the sentence proved correct when we implemented the same.
                Understanding the problem and getting to the roots of it fetched
                excellent results. IMD leveraged our strategic solutions to fast
                forward their current scenario into a better vision that became
                a reality by embracing our services. IMD wanted an answer to
                stage large volume of satellite data staging in multi-tiered
                storage as per customers configurable SLA (if the capacity &gt;
                70% move to next tier). Also, the respective application server
                should find the data automatically in case they get staged to a
                net tier. Not to mention that need a specific solution which is
                lightweight, simple and open. After digesting the requirements,
                what our technical connoisseurs did was something incredible. We
                used Alfresco Content Management solution to store all the
                files. The management solution puts the business flow in a fast
                track mode and integrates very intelligently. We mapped the
                different tiers of storage to a different folder and penned an
                automation script to check the capacity of primary storage to
                secondary periodically. Then we integrated the original data
                processing application with Alfresco API, to store and access
                data.
              </p>
              <h5 className="ft mt-4 mb-2">OUTCOME</h5>
              <p>
                The resulted solution helped IMD to save cost on primary storage
                by 50%. They also reduced 90% operations job of moving data in
                different storage tiers. We helped them stage huge data without
                changing any of their existing application. The entire
                infrastructure is maintained with the code that we created and
                tailored as per their business requests. The final product is a
                lightweight solution that is easy and open.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Storagetier;
