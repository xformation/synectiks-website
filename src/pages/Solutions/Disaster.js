import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Layout from "../../components/layout";
import self from "../../images/ManagedBackup/Self Service Portal.png";
import efficientStorage from "../../images/ManagedBackup/EfficientBackupStorageUsage.png";
import protection from "../../images/ManagedBackup/ProtectionforAnyworkload.png";
import WO from "../../images/Hybrid/Optimization Service.png";
import EA from "../../images/Hybrid/Extreme Automation.png";
import HW from "../../images/ManagedBackup/Hostanyworkload.png";
import AP from "../../images/ManagedBackup/AffordablePricing.png";
import agent from "../../images/oneAgentForall.svg";
import support from "../../images/synectiks-secure/support.svg";
import vdi from "../../images/ManagedBackup/disaster.png";
import SEO from "../../components/seo.js";
import BusinessCrumbs from "../../components/Home/BusinessCrumbs.js";

const DisasterRecovery = () => {
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
      <SEO title="Cloud Disaster Recovery as a Service" />
      <div className="bg-lightgrey">
        <div className="d-block w-100 py-3 px-md-5">
          <div className="container-fluid">
            <BusinessCrumbs
              title="Home"
              subtitle="Business Continuity & Cyber Security"
              pageTitle="Cloud Disaster Recovery as a Service"
            />

            <div className="row d-flex text-black align-items-center my-5">
              <div className="col-lg-6 col-12">
                <div className="w-100 ml-md-auto" data-aos="fade-up">
                  <img
                    class="w-75 m-auto d-block"
                    src={vdi}
                    alt="Hosted Infrastructure"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-12 text-black">
                <h1 className="text-uppercase main-heading">Cloud</h1>
                <h2 className="sub-heading">Disaster Recovery as a Service</h2>
                <p className="lineHeight-24 ptext mt-md-4 mt-1">
                  Protection for on-premises and cloud workloads with a turn-key
                  Disaster Recovery solution. Disaster recovery with the flip of
                  a switch. Protect your workloads when disaster strikes, by
                  instantly spinning up systems in our Disaster Recovery Cloud.
                  Adding this service ensures the data is immediately available
                  – and with Synectiks, it’s as easy as flipping a switch. With
                  an easy-to-use user interface, you can effortlessly automate
                  runbooks, testing, and failover to the Disaster Recovery Cloud
                  during a DR event.
                </p>
              </div>
            </div>
            <div className="row align-items-center mb-5">
              <div className="col-md-2 col-12 d-flex justify-content-center">
                <img src={agent} alt="Security" className="w-md-75" />
              </div>
              <div className="col-md-10 col-12">
                <h5 className="mt-3 text-md-start text-center text-md-start text-center">
                  All-in-one Backup, Disaster Recovery and Protection Services
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
            <div className="row align-items-center  mb-5">
              <div className="col-md-2 col-12 d-flex justify-content-center">
                <img src={AP} alt="Affordable Pricing" className="w-md-75" />
              </div>
              <div className="col-md-10 col-12">
                <h5 className="mt-3 text-md-start text-center text-md-start text-center">
                  No-Disaster Recovery Cloud Compute Reservation Cost
                </h5>
                <p className="mt-2 pcenter">
                  Pay only when you use the compute resources in the disaster
                  recovery cloud, billed in hourly increments.
                </p>
              </div>
            </div>
            <div className="row align-items-center mb-5">
              <div className="col-md-2 col-12 d-flex justify-content-center">
                <img src={HW} alt="Self-service portal" className="w-md-75" />
              </div>
              <div className="col-md-10 col-12">
                <h5 className="mt-3 text-md-start text-center text-md-start text-center">
                  Disaster recovery for virtual and physical workloads
                </h5>
                <p className="mt-2 pcenter">
                  Support all popular workloads including Windows and Linux
                  physical servers and VMs, major hypervisors, and Microsoft
                  business applications.
                </p>
              </div>
            </div>
            <div className="row align-items-center mb-5">
              <div className="col-md-2 col-12 d-flex justify-content-center">
                <img src={self} alt="Support" className="w-md-75" />
              </div>
              <div className="col-md-10 col-12">
                <h5 className="mt-3 text-md-start text-center text-md-start text-center">
                  Off-site failover to the Disaster Recovery cloud site
                </h5>
                <p className="mt-2 pcenter">
                  Get back to business in mere minutes no matter how severe the
                  incident is – from a single server failure to a full site
                  outage or loss – by switching your production workloads to
                  machines in a disaster recovery site. Achieve both RPOs and
                  RTOs shorter than 15 minutes.
                </p>
              </div>
            </div>
            <div className="row align-items-center mb-5">
              <div className="col-md-2 col-12 d-flex justify-content-center">
                <img src={efficientStorage} alt="Support" className="w-md-75" />
              </div>
              <div className="col-md-10 col-12">
                <h5 className="mt-3 text-md-start text-center text-md-start text-center">
                  Seamless extension of local networks to the cloud recovery
                  site
                </h5>
                <p className="mt-2 pcenter">
                  Extend up to five local networks to the Synectiks cloud
                  recovery site to provide transparent remote access to recovery
                  servers in failover mode. Our VPN virtual appliance makes it
                  simple.
                </p>
              </div>
            </div>
            <div className="row align-items-center mb-5">
              <div className="col-md-2 col-12 d-flex justify-content-center">
                <img src={WO} alt="Support" className="w-md-75" />
              </div>
              <div className="col-md-10 col-12">
                <h5 className="mt-3 text-md-start text-center text-md-start text-center">
                  Disaster recovery orchestration with runbooks
                </h5>
                <p className="mt-2 pcenter">
                  Automate key disaster recovery scenarios and ensure your
                  systems will be recovered in the correct order to address
                  interdependencies between applications.
                </p>
              </div>
            </div>
            <div className="row align-items-center mb-5">
              <div className="col-md-2 col-12 d-flex justify-content-center">
                <img src={EA} alt="Support" className="w-md-75" />
              </div>
              <div className="col-md-10 col-12">
                <h5 className="mt-3 text-md-start text-center text-md-start text-center">
                  Automated testing of all key disaster recovery scenarios
                </h5>
                <p className="mt-2 pcenter">
                  Verify the integrity of your disaster recovery plans by
                  executing runbooks in test-mode via the web console and
                  isolating testing from the production network.
                </p>
              </div>
            </div>
            <div className="row align-items-center mb-5">
              <div className="col-md-2 col-12 d-flex justify-content-center">
                <img src={protection} alt="Support" className="w-md-75" />
              </div>
              <div className="col-md-10 col-12">
                <h5 className="mt-3">
                  Dissimilar hardware recovery with Universal Restore
                </h5>
                <p className="mt-2 pcenter">
                  Restore Windows and Linux systems to the same, similar, or
                  dissimilar hardware during a failback procedure, including
                  bare-metal, physical, virtual, or cloud.
                </p>
              </div>
            </div>
            <div className="row align-items-center mb-5">
              <div className="col-md-2 col-12 d-flex justify-content-center">
                <img src={support} alt="Support" className="w-md-75" />
              </div>
              <div className="col-md-10 col-12">
                <h5 className="mt-3">Support</h5>
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

export default DisasterRecovery;
