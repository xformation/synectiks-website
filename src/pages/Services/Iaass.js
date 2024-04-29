import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Layout from "../../components/layout";
import host from "../../images/synectiks-secure/host.svg";
import migration from "../../images/synectiks-secure/migration.svg";
import multiple from "../../images/synectiks-secure/multiple.svg";
import single from "../../images/synectiks-secure/single.svg";
import storage from "../../images/synectiks-secure/storage.svg";
import support from "../../images/synectiks-secure/support.svg";
import HW from "../../images/ManagedBackup/Hostanyworkload.png";
import MSGL from "../../images/ManagedBackup/MultiSecureGeoLocations.png";
import ST from "../../images/ManagedBackup/StorageTypesavailable.png";
import AP from "../../images/ManagedBackup/AffordablePricing.png";
import SCHI from "../../images/chi.png";
import SEO from "../../components/seo.js";
import BreadCrumbs from "../../components/Home/Breadcrumbs.js";
const Iaas = () => {
  const [activeTab, setActiveTab] = useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  const [isOpen, setNav] = useState(true);
  const toggleTab = () => {
    setNav((isOpen) => !isOpen);
  };
  const onTop = () => {
    window.scroll(0, 0);
  };
  return (
    <Layout>
      <Helmet>
        <meta
          name="description"
          content="Synectiks Secure Cloud Hosted Services supports a variety of workloads & Disaster Recovery with a high degree of control, security and simplicity. Support your mission-critical applications and workloads with instant and scalable infrastructure. With Synectiks Cloud Hosted Services, you can focus on your business needs instead of spending the time and money it takes to plan, procure, secure and manage the right infrastructure to meet your application demands."
        />
        <link
          rel="canonical"
          href="https://synectiks.com/private-cloud-hosting-services/index.html"
        />
      </Helmet>
      <SEO title="Secure & Custom Hosted Infrastructure Solutions" />
      <div className="bg-lightgrey">
        <div className="d-block w-100 py-3 px-md-5">
          <div className="container-fluid">
            <BreadCrumbs
              title="Home"
              subtitle="Synectiks Hosted Infrastructure & Business Continuity"
              pageTitle="Secure & Custom Hosted Infrastructure"
            />
            <div className="text-black w-100 py-5 flex-column flex-lg-row  d-flex align-items-lg-center">
              <div
                className="w-lg-50  ml-md-auto d-flex justify-content-center"
                data-aos="fade-up"
              >
                <img
                  className="ml-md-5"
                  src={SCHI}
                  alt="Hosted Infrastructure"
                />
              </div>
              <div className="w-lg-50 text-black">
                <h1 className="text-uppercase main-heading">Secure</h1>
                <h2 className="sub-heading">Custom Hosted Infrastructure</h2>
                <h5 className="my-1 my-md-3 ft pt-0 pt-md-3">
                  Secure, Reliable & Very Affordable Cloud Backup Solution.
                </h5>
                <p className="lineHeight-24 ptext mt-md-2 mt-1">
                  Synectiks Secure Cloud Hosted Services support a wide variety
                  of workloads & Disaster Recovery with a high degree of
                  control, security, and simplicity. Support your
                  mission-critical applications and workloads with instant and
                  scalable infrastructure, meeting business compliance
                  standards. With Synectiks Cloud Hosted Services, you can focus
                  on your business needs instead of spending the time and money
                  it takes to plan, procure, secure, and manage the right
                  infrastructure that meets your business demands.
                </p>
              </div>
            </div>
            <div className="row align-items-center mb-5 justify-content-center">
              <div className="col-md-2 col-12 d-flex justify-content-center">
                <img src={multiple} alt="Security" className="w-md-75" />
              </div>
              <div className="col-md-10 col-12">
                <h5 className="mt-3 text-md-start text-center text-md-start text-center">
                  Multi-Layered Security
                </h5>
                <p className="mt-2 pcenter">
                  "Never trade-off security when moving to cloud”. Synectiks
                  Secure Cloud incorporates Multi-factor Authentication,
                  SSL-VPN, Data-At-Rest Encryption, Anti-Virus, Anti-Malware,
                  Vulnerability Scans, Intrusion Prevention System (IPS), Denial
                  of Service (DoS), IOC Detection with Traffic Segmentation,
                  AI-based Ransomware Protection.
                </p>
              </div>
            </div>
            <div className="row align-items-center mb-5">
              <div className="col-md-2 col-12 d-flex justify-content-center">
                <img
                  src={single}
                  alt="Availability & Reliable Performance"
                  className="w-md-75"
                />
              </div>
              <div className="col-md-10 col-12">
                <h5 className="mt-3 text-md-start text-center">
                  Self-Service Portal
                </h5>
                <p className="mt-2 pcenter">
                  Manage and control all your company Hosted infrastructure,
                  Backup, DR, Anti-Virus, Patch Management with an easy
                  self-service portal.
                </p>
              </div>
            </div>
            <div className="row align-items-center mb-5">
              <div className="col-md-2 col-12 d-flex justify-content-center">
                <img src={AP} alt="Affordable Pricing" className="w-md-75" />
              </div>
              <div className="col-md-10 col-12">
                <h5 className="mt-3 text-md-start text-center">
                  Affordable Pricing
                </h5>
                <p className="mt-2 pcenter">
                  Our customized secure Hosted solutions Pricing is very
                  aggressive and affordable when compared with any Cloud Service
                  Provider available in the Market. Contact us at &nbsp;
                  <a href="mailto:info@synectiks.com" target="_top">
                    info@synectiks.com
                  </a>
                  &nbsp; for a quick affordable customized quote.
                </p>
              </div>
            </div>
            <div className="row align-items-center mb-5">
              <div className="col-md-2 col-12 d-flex justify-content-center">
                <img src={host} alt="Self-service portal" className="w-md-75" />
              </div>
              <div className="col-md-10 col-12">
                <h5 className="mt-3 text-md-start text-center">
                  Host wide variety of workloads
                </h5>
                <p className="mt-2 pcenter">
                  Your mission-critical applications powered by Linux,
                  Windows, major Applications and Databases, Synectiks offers
                  support for these and other workloads, including your favorite
                  Open Source Technologies. Choose from a wide variety of
                  Virtual Machine Configuration and Storage Performance classes
                  configured for specific types of workloads.
                </p>
              </div>
            </div>
            <div className="row align-items-center mb-5">
              <div className="col-md-2 col-12 d-flex justify-content-center">
                <img
                  src={storage}
                  alt="Multi Secure Geo Locations"
                  className="w-md-75"
                />
              </div>
              <div className="col-md-10 col-12">
                <h5 className="mt-3 text-md-start text-center">Storage</h5>
                <p className="mt-2 pcenter">
                  Safeguard data at rest with AES-256 encryption. Scale from
                  terabytes to tens of petabytes for seamless business growth.
                  No CapEx. We offer a wide variety of Storage Solutions at an
                  Aggressive and Affordable Monthly Pricing.
                </p>
                <small>
                  S3 Storage as low as $0.015 per GB with no Ingress & Egress
                  Charges (only charged for the Storage Consumed).
                  <br />
                  Backup Storage as low as $0.015 per GB with no Ingress &
                  Egress charges (only charged for the Storage Consumed after
                  deep compression).
                  <br />
                  High Performance SSD block Storage for Server or VDI’s - as
                  low as $0.06 per GB.
                </small>
              </div>
            </div>
            <div className="row align-items-center mb-5">
              <div className="col-md-2 col-12 d-flex justify-content-center">
                <img
                  src={MSGL}
                  alt="Multi Secure Geo Locations"
                  className="w-md-75"
                />
              </div>
              <div className="col-md-10 col-12">
                <h5 className="mt-3 text-md-start text-center">
                  Multi-Secure Geo Locations
                </h5>
                <p className="mt-2 pcenter">
                  Multiple Secure Geo Locations for Customers to choose from.
                  Each location separated by Seismic Zone, Power Grid to make
                  sure your Infrastructure is always available when disaster
                  strikes at one location.
                </p>
              </div>
            </div>
            <div className="row align-items-center mb-5">
              <div className="col-md-2 col-12 d-flex justify-content-center">
                <img src={HW} alt="Host any workload" className="w-md-75" />
              </div>
              <div className="col-md-10 col-12">
                <h5 className="mt-3 text-md-start text-center">
                  Availability & Reliable Performance
                </h5>
                <p className="mt-2 pcenter">
                  Built with best of the bread technologies, our infrastructure
                  can support any workload with reliable and consistent
                  performance.
                </p>
              </div>
            </div>
            <div className="row align-items-center mb-5">
              <div className="col-md-2 col-12 d-flex justify-content-center">
                <img
                  src={ST}
                  alt="Storage Types available:"
                  className="w-md-75"
                />
              </div>
              <div className="col-md-10 col-12">
                <h5 className="mt-3 text-md-start text-center">
                  Secure Backup & Disaster Recovery Options
                </h5>
                <p className="mt-2 pcenter">
                  Business Continuity is one of our important core values in the
                  Hosted Cloud Solution, whether it is a mission critical server
                  or any end point device. Choose from the wide variety of Cloud
                  Backup & Disaster Recovery Options available with an in-built
                  Cyber Protection feature.
                </p>
              </div>
            </div>
            <div className="row align-items-center mb-5">
              <div className="col-md-2 col-12 d-flex justify-content-center">
                <img
                  src={migration}
                  alt="Migration Services"
                  className="w-md-75"
                />
              </div>
              <div className="col-md-10 col-12">
                <h5 className="mt-3 text-md-start text-center">
                  Cloud Migration & Modernization
                </h5>
                <p className="mt-2 pcenter">
                  Our Expert Migration & Application Development Teams can
                  Modernize your Legacy/Current Infrastructure & Applications
                  using cloud-native technologies and deliver predictive and
                  deterministic business outcome.
                </p>
              </div>
            </div>
            <div className="row align-items-center mb-5">
              <div className="col-md-2 col-12 d-flex justify-content-center">
                <img src={support} alt="Support" className="w-md-75" />
              </div>
              <div className="col-md-10 col-12">
                <h5 className="mt-3 text-md-start text-center">Support</h5>
                <p className="mt-2 pcenter">
                  Follow the Sun-Model - 24 / 7 / 365 Support from On-shore and
                  Off-shore Teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Iaas;
