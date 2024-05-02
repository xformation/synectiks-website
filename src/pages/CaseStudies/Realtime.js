import * as React from "react";
import { Helmet } from "react-helmet";
import Layout from "../../components/layout";
import rjc from "../../images/case/RelianceJioCasestudy.jpg";
import SEO from "../../components/seo.js";
import CaseBreadCrumbs from "../../components/Home/CasestudiesBreads.js";

const Realtime = () => {
  return (
    <Layout>
      <Helmet>
        <link
          rel="canonical"
          href="https://www.synectiks.com/realtime/index.html"
        />
      </Helmet>
      <SEO title="Realtime" />
      <div className="d-block w-100 py-3 px-md-5">
        <div className="container-fluid">
          <CaseBreadCrumbs
            title="Home"
            casetitle="Resources"
            subtitle="Case Studies"
            pageTitle="Realtime"
          />
          <h1 className="mt-4">Realtime Monitoring</h1>
          <div className="realTime_image">
            <h5 className="ft mb-4">Reliance Jio Case study</h5>
            <p className="blueBorder ps-3 ps-md-5 py-1 py-3">
              The leadership took a decision to become
              hardware/OS/Operation/vendor agnostic and achieve scalability and
              reliability across the organization. We helped them with all the
              technologies, training to make that happen. Our open platform
              helped them to become complete software defined, automate all
              operations. We helped them to learn to manage IT in most modern
              way.
            </p>
            <img src={rjc} alt="Network Design" className="w-100 mt-4" />
          </div>
          <div className="realTime_div d-flex flex-column flex-md-row justify-content-around py-4 py-md-5">
            <div className="column w-100 px-3 px-md-5 mb-3 orangeBorder">
              <h5 className="ft">Industry</h5>
              <p>Telecom.</p>
            </div>
            <div className="column w-100 px-3 px-md-5 mb-3 blueBorder">
              <h5 className="ft"> Business Objective</h5>
              <p>
                Transformation towards becoming hardware / Os / Vender /
                Operation agnostic. Make everything software defined.
              </p>
            </div>
            <div className="column w-100 px-3 px-md-5 mb-3 redBorder">
              <h5 className="ft">Technologies</h5>
              <p>AWS, Infrastructure as a code, microservices, DevOps.</p>
            </div>
          </div>
          <div>
            <h5 className="ft mb-2">Overview</h5>
            <p className="mb-3">
              Reliance Jio Infocom Limited is a leading mobile network operator
              in India. We all know that their network is enormous and immense
              and too often the operations team has to handle colossal workflows
              at all times of the day, the workloads become very intense and
              affect the performance of the data. Reliance Jio operations get
              piled up with tedious tasks every minute and extensively needs
              real-time business processes to monitor their workloads. From new
              service activations to monitoring tons of data, the telecom
              company had a tough time in doing RCA with its existing licensed
              monitoring applications. While at it, when dealing with a mammoth
              telecom company and assuring them that we can handle and provide a
              solution which is 100% scalable was a tough part for us. Once we
              succeeded in gaining their trust, we moved on to analyze and plan
              a panacea that was expected by the telecom company.
            </p>
            <h5 className="ft mb-2">Challenges</h5>
            <p className="mb-3">
              <b> Licensed Monitoring Software:</b> Reliance Jio was mostly
              using licensed products for more than 30 applications to maintain
              a large amount of data. Most of these applications were service
              based and big data related. They needed a customized open source
              tool to manage and run tons of data via millions of network
              elements.{" "}
            </p>
            <p className="mb-3">
              <b> Customized Tool:</b> The telecom company required a
              personalized tool to monitor and provide an outright solution that
              helps in taking more viable decisions.
            </p>
            <p className="mb-3">
              <b> Massive data:</b> Generating high volumes of data in petabytes
              and processing it in real rear time with more profound insights
              was another challenge to the telecom company.
            </p>
          </div>
          <div>
            <h5 className="ft mb-2">Solutions</h5>
            <ul>
              <li>
                We designed and developed a real-time monitoring framework for
                business use case implementations.
              </li>
              <li>
                The solution is customized and scalable using sophisticated
                analytic tools.
              </li>
              <li>
                Visibility on certain key metrics is the prime factor that
                reliance Jio achieved through our real-time monitoring services.
              </li>
              <li>
                Knowing the workflow orchestration of their applications widened
                their business payoffs in a short span of time.
              </li>
            </ul>
          </div>
          <div>
            <h5 className="ft mb-2">
              How did we handle the problem and customized a tool for better
              visibility?
            </h5>
            <p className="mb-3">
              We used Prometheus a powerful systems & service monitoring tool
              and Influxdb as a time series database, with Grafana metric
              analysis for visualizing time series data. We hosted the entire
              technology stack in Kubernetes platform so that it can scale
              elastically with minimal operations. Intelligent plugin scripts
              were embedded to work with Prometheus data collection engine and
              extract intuitive data from the large dataset. Smart analytics
              were built on intelligent data stored in time series database and
              this resulted in important business monitoring views.
            </p>
            <h5 className="ft mb-2">
              How did Synectiks Consolidate, Validate and Outline the issues of
              Large Motor Systems?
            </h5>
            <p className="mb-3">
              We believe in harvesting information as much as possible that will
              yield a better solution. That is exactly what we did with Large
              Motor Company. Upon analyzing their queries on a broader spectrum,
              we did a quick 360° audit on their existing infrastructure and
              harvested some vital insights on key improvement areas and a plan
              for any migration path and risks involved in the following
              process. We conducted multiple PoC’S with Large Motor Company to
              channel a solid understanding of the technologies and modernize
              their IT infrastructure. By translating the entire hardware
              infrastructure into a few lines of software code, we crafted a
              backbone infrastructure effortlessly. Also, we refactored monolith
              applications to multiple microservices and established a complete
              application lifecycle management and operation support system to
              maintain their business operations. Ultimately, by achieving the
              required data security, governance and compliance requirements in
              the cloud.
            </p>

            <h5 className="ft mb-2">OUTCOME</h5>
            <p className="mb-3">
              The telecom company was able to achieve a 100% open and highly
              scalable monitoring platform. We helped them in harvesting right
              business insights in real time that responds to their business
              needs. Finally, Reliance Jio got the flexibility to have complete
              visibility on the valuable business information instead of being
              flooded with clear data. The telecom company now can rapidly
              develop any business monitoring capability as needed. A highly
              cost-effective scalable monitoring platform.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Realtime;
