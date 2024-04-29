import React from "react";
import Layout from "../../components/layout";
import BreadCrumbs from "../../components/Home/Breadcrumbs.js";
import SEO from "../../components/seo.js";
import syn from "../../images/secure-hosted.svg";

const SecureBusiness = () => {
  return (
    <Layout>
      <div className="d-block w-100 py-3 px-md-5">
        <div className="container-fluid">
          <div className="text-justify">
            <BreadCrumbs
              title="Home"
              subtitle="Cloud Services"
              pageTitle="Synectiks Hosted Infrastructure & Business Continuity"
            />
            <SEO title="Synectiks Hosted Infrastructure & Business Continuity" />
            <h1>Synectiks Hosted Infrastructure & Business Continuity</h1>
          </div>
          <div className="d-block w-100">
            <div className="pt-2">
              <p>
                Capture true value of cloud with highly secured, scalable, and
                customizable SYNECT<span className="text-danger">I</span>KS
                Hosted Cloud Solutions at an affordable pricing. Modern,
                Innovative cloud solutions for wide range of Server workloads,
                Cloud-Hosted Desktops/Workspaces, and Containers along with
                highly Secure Backup & Disaster Recovery options meeting SOC2 &
                HIPPA compliance standards.
              </p>
            </div>
          </div>
          <div className="d-block w-100 mt-4 mb-4">
            <div className="row justify-content-center align-items-center">
              <div className="col-md-6">
                <div className="excerpt">
                  <a href="/business-continuity-cyber-security/index.html">
                    Business Continuity & Cyber Security
                  </a>
                  <p>
                    Build Business Resiliency with modern Synectiks-Business
                    Continuity solutions. Synectiks Protect Cloud changes the
                    game by integrating Data protection with Cybersecurity.
                  </p>
                </div>
                <div className="excerpt mt-3">
                  <a href="/secure-custom-hosted-infrastructure/index.html">
                    Secure & Custom Hosted Infrastructure
                  </a>
                  <p>
                    Meet modern IT demands with a scalable, cost-efficient, and
                    multi-purpose cloud solution. Synectiks Secure Cloud Hosted
                    Services supports a wide variety of workloads with a high
                    degree of control, security, and simplicity.
                  </p>
                </div>
                <div className="excerpt mt-3">
                  <a href="/digital-workspace/index.html">
                    Cloud-Hosted Virtual Desktop
                  </a>
                  <p>
                    Synectiks is an efficient Desktop as a Service provider that
                    scales your workspace to the cloud, driving the highest
                    performance in speed, uptime and scalability at an
                    affordable price.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-block w-100 text-center">
                  <img src={syn} alt="" className="w-75" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SecureBusiness;
