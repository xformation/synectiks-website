import * as React from "react";
import { Helmet } from "react-helmet";
import ApplicationServices from "../../images/ApplicationServices.jpg";
import optamizecloud from "../../images/Synectiks Logo/optamizecloud.jpg";
import SEO from "../../components/seo.js";
import Layout from "../../components/layout";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";
import BreadCrumbs from "../../components/Home/Breadcrumbs.js";
import devops from "../../images/Hybrid/DevOps.svg";
import cost from "../../images/Hybrid/Cost.svg";
import security from "../../images/Hybrid/Compliance&Security.png";
import migration from "../../images/Hybrid/Workload Migration.png";
import bullet from "../../images/Hybrid/Bullet.svg";
import scms from "../../images/Hybrid/scms.jpg";
import awsM from "../../images/aws-managed.png";

export class AwsManaged extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Layout>
        <Helmet>
          <meta
            name="description"
            content="Microsoft is the recognized leader in cloud productivity solutions for business with Office 365 transforming the workplace experience. With a certified team of Microsoft Partner Professionals, SYNECTIKS delivers on all Microsoft Cloud Solutions, including Office 365, SharePoint, Skype for Business, Teams, Power BI, Microsoft 365 (Office 365 + Enterprise Mobility + Security) and Azure."
          />
          <link
            rel="canonical"
            href="https://synectiks.com/office-migration/index.html"
          />
        </Helmet>
        <SEO title="Aws Manged Services" />
        <div className="d-block w-100 py-3 px-5">
          <div className="container-fluid">
            <BreadCrumbs
              title="Home"
              className="psl psr"
              subtitle="Cloud Services"
              pageTitle="AWS Manged Services"
            />
          </div>
        </div>
        <div className="bk-managed d-block w-100 py-3 px-md-5">
          <div className="container-fluid">
            <div className="row">
              <div className="col col-md-6 p-2 p-md-0">
                <h1 className="my-1 my-md-3">Optimize your Cloud!</h1>
                <p className="lineHeight-24 ptext mt-md-4 mt-1">
                  SYNECTIKS aws Managed Services enable companies to accelerate
                  the adoption of the cloud, lower operating costs, and mitigate
                  security and compliance risks in a cost-effective monthly
                  consumption model. As an aws Consulting Services Partner, our
                  experts ensure that your workloads meet the requirements of
                  the AWS Well-Architected Framework for efficient migration and
                  operation in the AWS secured landing zones.
                </p>
                <p className="lineHeight-24 ptext mt-md-4 mt-1 mb-4">
                  We help companies improve efficiency and security by
                  automating over 80% of common operational tasks with a service
                  that is supported by our sophisticated customer management
                  process. Our Managed Services considerably reduce the time
                  frame for cloud adoption and relieve your team of critical
                  migration and operational loads so You can focus on strategic
                  initiatives and innovation.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="d-block w-100 py-3 px-lg-5 ">
          <div className="container-fluid">
            <div className="row mx-1">
              <div className="col-lg-3 col-12 border-aws-1 p-3 text-center justify-content-center">
                <img class="w-50 m-auto" src={security} alt="Security" />
                <div className="d-block w-100">
                  <h5 className="mt-4 text-center">Security and Compliance</h5>
                  <p className="mt-4 text-left">
                    SYNECTIKS Managed Services offer a step-by-step extension of
                    your security and identity perimeter in the cloud, while at
                    the same time providing functions that support you in
                    meeting various compliance program requirements (HIPAA,
                    HITRUST, GDPR, SOC, ISO, PCI). Our diligence and control
                    enable your corporate and security infrastructure policies
                    to be enforced so that you can develop solutions and
                    applications using your preferred development approach.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-12 border-aws-1 p-3 text-center justify-content-center">
                <img
                  class="w-50 m-auto"
                  src={migration}
                  alt="Affordable Pricing"
                />
                <div className="d-block w-100">
                  <h5 className="mt-4 text-center">
                    Accelerate Migration <br /> to Cloud
                  </h5>
                  <p className="mt-2 text-left">
                    SYNECTIKS Managed Services provide an enterprise-grade,
                    proven operating environment that enables you to migrate
                    production workloads in days instead of months. Our Managed
                    Services team uses the minimally feasible refactoring
                    approach, in which only necessary changes are made to your
                    applications to meet security and compliance requirements.
                    AMS then takes responsibility for the operation of your
                    cloud environment after the migration.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-12 border-aws-1 p-3 text-center justify-content-center">
                <img
                  class="w-50 m-auto"
                  src={devops}
                  alt="Self-service portal"
                />
                <div className="d-block w-100">
                  <h5 className="mt-4 text-center">Improve Innovation</h5>
                  <p className="mt-4 text-left">
                    Enterprise DevOps is the convergence of modern best
                    practices for development and existing ITIL process
                    frameworks to give you speed and flexibility while
                    controlling governance, security, and compliance. Our
                    Managed Services enable Enterprise DevOps by bringing AWS
                    IaaS services together into a secure, compatible development
                    platform that is compatible with most enterprise workloads.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-12 border-aws-1 p-3 text-center justify-content-center">
                <img
                  class="w-50 m-auto"
                  src={cost}
                  alt="Multi Secure Geo Locations"
                />
                <div className="d-block w-100">
                  <h5 className="mt-4 text-center">Cloud Cost Management</h5>
                  <p className="mt-4 text-left">
                    Optimizing cloud operations for your specific business
                    outcomes eliminates waste and keeps costs low. Our
                    data-centric approach to infrastructure development will
                    ensure all critical applications are effortlessly optimized
                    towards performance, scale, and efficiency. So, you can
                    focus less time on maintaining your infrastructure and more
                    on innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-block w-100 pt-3 px-lg-5 ">
          <div className="container-fluid px-lg-0 ">
            <h3>AWS Managed Services Features</h3>
            <div className="row g-3 pt-3">
              <div className="col-lg-4 col-md-6 col-12 d-flex align-items-center">
                <img src={bullet} alt="" className="w-aws-8" />
                <a className="aws-services-features">Provisioning</a>
              </div>
              <div className="col-lg-4 col-md-6 col-12 d-flex align-items-center">
                <img src={bullet} alt="" className="w-aws-8" />
                <a className="aws-services-features">
                  Security and Access Management
                </a>
              </div>
              <div className="col-lg-4 col-md-6 col-12 d-flex align-items-center">
                <img src={bullet} alt="" className="w-aws-8" />
                <a className="aws-services-features">Cost</a>
              </div>
              <div className="col-lg-4 col-md-6 col-12 d-flex align-items-center">
                <img src={bullet} alt="" className="w-aws-8" />
                <a className="aws-services-features">
                  Monitoring and Event Management
                </a>
              </div>
              <div className="col-lg-4 col-md-6 col-12 d-flex align-items-center">
                <img src={bullet} alt="" className="w-aws-8" />
                <a className="aws-services-features">Compliance</a>
              </div>
              <div className="col-lg-4 col-md-6 col-12 d-flex align-items-center">
                <img src={bullet} alt="" className="w-aws-8" />
                <a className="aws-services-features">24 x 7 Service Desk</a>
              </div>
              <div className="col-lg-4 col-md-6 col-12 d-flex align-items-center">
                <img src={bullet} alt="" className="w-aws-8" />
                <a className="aws-services-features">
                  Patch and Continuity Management
                </a>
              </div>
              <div className="col-lg-4 col-md-6 col-12 d-flex align-items-center">
                <img src={bullet} alt="" className="w-aws-8" />
                <a className="aws-services-features">Change Management</a>
              </div>
              <div className="col-lg-4 col-md-6 col-12 d-flex align-items-center">
                <img src={bullet} alt="" className="w-aws-8" />
                <a className="aws-services-features">Enterprise Support</a>
              </div>
              <div className="col-lg-4 col-md-6 col-12 d-flex align-items-center">
                <img src={bullet} alt="" className="w-aws-8" />
                <a className="aws-services-features">Availability</a>
              </div>
              <div className="col-lg-4 col-md-6 col-12 d-flex align-items-center">
                <img src={bullet} alt="" className="w-aws-8" />
                <a className="aws-services-features">Incident Management</a>
              </div>
              <div className="col-lg-4 col-md-6 col-12 d-flex align-items-center">
                <img src={bullet} alt="" className="w-aws-8" />
                <a className="aws-services-features">Firewall Management</a>
              </div>
            </div>
            
          </div>
        </div>

        <div className="d-block w-100 py-5 px-md-5">
          <div className="container-fluid px-lg-0">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <h3 className="my-1 my-md-3">Optimize Your Cloud Management</h3>
                <p className="lineHeight-24 ptext mt-md-4 mt-1 mb-3">
                  The way you manage, monitor, and adapt your cloud operations
                  for your specific business outcomes determines your ability to
                  innovate.
                  <br />
                  <br />
                  SYNECTIKS Managed Services take care of what matters the most:
                  Cost, Performance, and Most importantly Security. The result
                  is simple yet incredibly powerful – the freedom to make
                  choices, take actions to enhance your business and innovate
                  within your cloud environment.
                  <br />
                  <br />
                  We can help!
                </p>
                <a
                  className="btn btn-primary mb-3"
                  href="https://synectiks.com/Contact-us.html"
                >
                  Let's Talk
                </a>
              </div>
              <div className="col-lg-6 col-md-6 col-12" data-aos="fade-up">
                <img
                  class="w90 ml-md-5 box-shadow"
                  src={scms}
                  width="100%"
                  alt="Hosted Infrastructure"
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default AwsManaged;
