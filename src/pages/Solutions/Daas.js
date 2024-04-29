import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Layout from "../../components/layout";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";
import self from "../../images/ManagedBackup/Self Service Portal.png";
import cloudImaged from "../../images/synectiks-secure/baas.jpg";
import security from "../../images/ManagedBackup/Security.png";
import geolocation from "../../images/ManagedBackup/MultipleSecureGeoLocations.png";
import backupStorage from "../../images/ManagedBackup/BackupStorage.png";
import efficientStorage from "../../images/ManagedBackup/EfficientBackupStorageUsage.png";
import protection from "../../images/ManagedBackup/ProtectionforAnyworkload.png";
import restore from "../../images/ManagedBackup/Restore.png";
// import support from '../../images/ManagedBackup/Support.png';
import price from "../../images/ManagedBackup/affordableprice.png";
import ARP from "../../images/ManagedBackup/Availability&ReliablePerformance.png";
import MS from "../../images/ManagedBackup/MigrationServices.png";
import SCR from "../../images/ManagedBackup/HSecurity.png";
import SPT from "../../images/ManagedBackup/HSupport.png";
import CS from "../../images/Hybrid/Compliance&Security.png";
import WO from "../../images/Hybrid/Optimization Service.png";
import EA from "../../images/Hybrid/Extreme Automation.png";
import HostedInfra from "../../images/ManagedBackup/HostedInfra.png";
import HW from "../../images/ManagedBackup/Hostanyworkload.png";
import MSGL from "../../images/ManagedBackup/MultiSecureGeoLocations.png";
import ST from "../../images/ManagedBackup/StorageTypesavailable.png";
import AP from "../../images/ManagedBackup/AffordablePricing.png";
import ADT from "../../images/Hybrid/ApplicationDevelopmentandTesting.png";
import agent from "../../images/oneAgentForall.svg";
import complete from "../../images/CompleteProtection.svg";
import support from "../../images/synectiks-secure/support.svg";
import EndComputing from "../../images/EndComputing.svg";
import EndSecurity from "../../images/EndSecurity.svg";
import DigitalWorkspace from "../../images/DigitalWorkspace.svg";
import vdi from "../../images/virtual-desktop.jpg";
import vdisvg from "../../images/img1.png";
// import vdisvg from '../../images/VDI_Updated.jpg';
import CHVD from "../../images/MicrosoftTeams-image.png";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
  Collapse,
  NavbarToggler,
  Navbar,
} from "reactstrap";
import classnames from "classnames";
import SEO from "../../components/seo.js";
import BreadCrumbs from "../../components/Home/Breadcrumbs.js";

const Daas = () => {
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
      <SEO title="Cloud-Hosted Virtual Desktop" />
      <div className="bg-lightgrey">
        <div className="d-block w-100 py-3 px-md-5">
          <div className="container-fluid">
            <BreadCrumbs
              title="Home"
              subtitle="Synectiks Hosted Infrastructure & Business Continuity"
              pageTitle="Cloud-Hosted Virtual Desktop"
            />
            <div className="row d-flex align-items-lg-center text-black ">
              <div className="col-lg-6 col-12">
                <div
                  className="d-flex justify-content-center"
                  data-aos="fade-up"
                >
                  <img
                    class="ml-md-5"
                    src={vdisvg}
                    alt="Hosted Infrastructure"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="text-black">
                  <h1 className="text-uppercase main-heading">Cloud</h1>
                  <h2 className="sub-heading">Hosted Virtual Desktop</h2>
                  <h5 className="my-1 my-md-3 ft pt-0 pt-md-3">
                    Secure, Reliable & Very Affordable Cloud Backup Solution.
                  </h5>
                  <p className="lineHeight-24 ptext mt-md-2 mt-1">
                    Synectiks Cloud-Hosted Virtual Desktop Service is a modern
                    platform for secure delivery of virtual desktops and apps.
                    Our best-in-class virtualization technologies enable
                    scalability, uptime at an affordable price. Powered by
                    VMware Blast Extreme protocol, delivers an immersive,
                    feature-rich user experience for end users across devices,
                    locations, media and network connections. Enabled by
                    enterprise-grade management capabilities and a deep
                    technology ecosystem, it extends the digital workspace to
                    all apps and secure productivity use cases.
                  </p>
                </div>
              </div>
            </div>
            <div className="text-black w-100 py-5 flex-column flex-lg-row  d-flex align-items-lg-center"></div>
            <div className="row align-items-center mb-5">
              <div className="col-md-2 col-12 d-flex justify-content-center">
                <img src={EndComputing} alt="Security" className="w-md-75" />
              </div>
              <div className="col-md-10 col-12">
                <h5 className="mt-3 text-md-start text-center">
                  End-User Computing
                </h5>
                <p className="mt-2 pcenter">
                  Easy access to corporate apps and data from any device
                  increases end-user productivity and engagement, but it also
                  requires the highest level of security. Our best-in-class
                  Virtual desktop technologies provide IT with a modern,
                  streamlined approach to deliver, protect and manage Windows
                  and Linux desktops, and applications while containing costs
                  and ensuring that end users can work anytime, anywhere, on any
                  device.
                </p>
              </div>
            </div>
            <div className="row align-items-center mb-5">
              <div className="col-md-2 col-12 d-flex justify-content-center">
                <img
                  src={EndSecurity}
                  alt="Affordable Pricing"
                  className="w-md-75"
                />
              </div>
              <div className="col-md-10 col-12">
                <h5 className="mt-3 text-md-start text-center">
                  End-to-end security
                </h5>
                <p className="mt-2 pcenter">
                  With Multi-Factor Authentication and Active Directory
                  integration, Synectiks digital workspace delivers secure
                  remote access to corporate resources and helps provide
                  complete security from the device, across the network, and
                  into the data center and cloud.
                </p>
              </div>
            </div>
            <div className="row align-items-center mb-5">
              <div className="col-md-2 col-12 d-flex justify-content-center">
                <img
                  src={DigitalWorkspace}
                  alt="Self-service portal"
                  className="w-md-75"
                />
              </div>
              <div className="col-md-10 col-12">
                <h5 className="mt-3 text-md-start text-center">
                  Best Digital Workspace Experience
                </h5>
                <p className="mt-2 pcenter">
                  Personalized desktops deliver optimal performance and an
                  immersive, feature-rich user experience across devices,
                  locations, media and network connections. Remote and mobile
                  workers enjoy workstation-class performance and rich graphics
                  with the Blast Extreme protocol, which offers dynamic
                  optimization even in non-ideal, high-latency, low-bandwidth
                  network conditions.
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

export default Daas;
