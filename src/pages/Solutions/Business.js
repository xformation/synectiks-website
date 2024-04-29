import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Layout from "../../components/layout";
import hero from "../../images/ManagedBackup/cloud-backup-service.svg";
import efficientStorage from "../../images/ManagedBackup/EfficientBackupStorageUsage.png";
import support from "../../images/synectiks-secure/support.svg";
import SCR from "../../images/ManagedBackup/HSecurity.png";
import MSGL from "../../images/ManagedBackup/MultiSecureGeoLocations.png";
import AP from "../../images/ManagedBackup/AffordablePricing.png";
import agent from "../../images/oneAgentForall.svg";
import complete from "../../images/CompleteProtection.svg";
import SEO from "../../components/seo.js";
import BusinessCrumbs from "../../components/Home/BusinessCrumbs.js";

const Business = () => {
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
      <SEO title="Secure Cloud Backup as a Service" />
      <div className="bg-lightgrey">
        <div className="d-block w-100 py-3 px-md-5">
          <div className="container-fluid">
            <BusinessCrumbs
              title="Home"
              subtitle="Business Continuity & Cyber Security"
              pageTitle="Cloud Backup as a Service"
            />
            <div className="text-black w-100 py-5 flex-column flex-md-row d-flex align-items-lg-center">
              <div className="row align-items-lg-center">
                <div className="col-md-6 ">
                  <div
                    className="ml-md-auto d-flex w-100 justify-content-center justify-content-lg-start"
                    data-aos="fade-up"
                  >
                    <img
                      class="ml-md-5"
                      src={hero}
                      width={"75%"}
                      alt="Hosted Infrastructure"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="w-100 text-black">
                    <h1 className="text-uppercase main-heading">Cloud</h1>
                    <h2 className="sub-heading">Backup as a Service</h2>
                    <h5 className="my-1 my-md-3 ft pt-0 pt-md-3">
                      Secure, Reliable & Very Affordable Cloud Backup Solution.
                    </h5>
                    <p className="lineHeight-24 ptext mt-md-4 mt-1">
                      At Synectiks, Data Protection is the topmost priority and
                      is monitored with utmost vigilance. Synectiks Cloud Backup
                      with front line innovation reinforcement arrangements
                      offer a simple, secure and moderate cloud offsite backup
                      needs. You can have your backup offsite with sureness at
                      Synectiks Cloud establishment at Preferred Geo Locations.
                      Synectiks backup solutions provide exceptional,
                      customizable backup and storage management for any system
                      setup: physical servers, virtual machines, PCs,
                      business-critical applications, Databases and more.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-center mb-5 justify-content-center">
              <div className="col-md-2 col-12 d-flex justify-content-center">
                <img src={SCR} alt="Security" className="w-md-75" />
              </div>
              <div className="col-md-10 col-12">
                <h5 className="mt-3 text-md-start text-center text-md-start text-center">
                  Security
                </h5>
                <p className="mt-2 pcenter">
                  Make sure your cloud backup provider offers strong security,
                  including encryption. It doesn't matter how well you have
                  protected your primary systems, if your backup systems present
                  an easy target for attackers. Any cloud backup service you use
                  needs to have the same level of security that your primary
                  systems have.
                  <br />
                  END to END Encryption: In-Flight and Data-At-Rest Encryption.
                  <br />
                  AI-based Ransomware protection.
                </p>
              </div>
            </div>
            <div className="row align-items-center mb-5">
              <div className="col-md-2 col-12 d-flex justify-content-center">
                <img src={agent} alt="Affordable Pricing" className="w-md-75" />
              </div>
              <div className="col-md-10 col-12">
                <h5 className="mt-3 text-md-start text-center text-md-start text-center">
                  Self-service portal
                </h5>
                <p className="mt-2 pcenter">
                  Manage and control all your company Backups with easy
                  self-service portal. The same self-service portal can be used
                  to manage Server/End-point device Anti-Virus protection, Patch
                  management and disaster recovery.
                </p>
              </div>
            </div>
            <div className="row align-items-center mb-5">
              <div className="col-md-2 col-12 d-flex justify-content-center">
                <img src={AP} alt="Self-service portal" className="w-md-75" />
              </div>
              <div className="col-md-10 col-12">
                <h5 className="mt-3 text-md-start text-center text-md-start text-center">
                  Affordable Cloud Backup Storage Pricing
                </h5>
                <p className="mt-2 pcenter">
                  Cloud Backup Storage as low as $0.025 per GB with no Ingress &
                  Egress charges (only charged for the storage consumed after
                  deep compression).
                </p>
              </div>
            </div>
            <div className="row align-items-center mb-5">
              <div className="col-md-2 col-12 d-flex justify-content-center">
                <img
                  src={efficientStorage}
                  alt="Self-service portal"
                  className="w-md-75"
                />
              </div>
              <div className="col-md-10 col-12">
                <h5 className="mt-3 text-md-start text-center text-md-start text-center">
                  Efficient Backup Storage Usage
                </h5>
                <p className="mt-2 pcenter">
                  Deep Compression technologies used to optimize backup storage
                  capacity.
                </p>
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
                <h5 className="mt-3 text-md-start text-center text-md-start text-center">
                  Multi Secure Geo Locations
                </h5>
                <p className="mt-2 pcenter">
                  We at Synectiks aim for 3-2-1 rule of Thumb to protect the
                  Data, which implies that is should always have three copies of
                  your data, that you keep it backed up on at least two
                  different types of storage media, and with at least one copy
                  of the data offsite.
                  <br />
                  Synectiks has different backup Secure Geo locations with
                  different power grids to make sure your data is available when
                  disaster strike in one location.
                </p>
              </div>
            </div>
            <div className="row align-items-center mb-5">
              <div className="col-md-2 col-12 d-flex justify-content-center">
                <img
                  src={complete}
                  alt="Host any workload"
                  className="w-md-75"
                />
              </div>
              <div className="col-md-10 col-12">
                <h5 className="mt-3 text-md-start text-center text-md-start text-center">
                  Complete protection for 20+ platforms
                </h5>
                <p className="mt-2 pcenter">
                  Streamline your data protection efforts using just one
                  solution with support for Windows and Linux servers and VMs,
                  eight major hypervisors, PCs, Macs, iOS and Android mobile
                  devices, Microsoft on-premises applications, SAP HANA, Oracle
                  Database, Office 365, G Suite, and websites.
                </p>
              </div>
            </div>
            <div className="row align-items-center mb-5">
              <div className="col-md-2 col-12 d-flex justify-content-center">
                <img src={support} alt="Support" className="w-md-75" />
              </div>
              <div className="col-md-10 col-12">
                <h5 className="mt-3 text-md-start text-center text-md-start text-center">
                  Support
                </h5>
                <p className="mt-2 pcenter">
                  Follow the Sun model - 24 / 7 / 365 days support from both
                  onshore and offshore Teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Business;
