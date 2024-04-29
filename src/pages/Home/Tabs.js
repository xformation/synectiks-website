import React, { useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
} from "reactstrap";
import Hexagon from "../Home/Hexagon";
import classnames from "classnames";
import tab1 from "../../images/HomePage/Transformation_Icon.png";
import tab2 from "../../images/HomePage/OpenPlatform.png";
import tab3 from "../../images/HomePage/Solution.png";
import tab4 from "../../images/HomePage/cloud-service_white.svg";
import PoweredBySynectiks from "../../images/HomePage/PoweredBySynectiks.png";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <div className="TabsWrapper">
      <Nav tabs className="tabsFlex">
        <NavItem className="p-0">
          <NavLink
            id="tab1"
            className={classnames({ active: activeTab === "1" })}
            onClick={() => {
              toggle("1");
            }}
          >
            <div className="Homecard-shadow card">
              <div className="bgOrange ct2">
                <img className="card-img-top" src={tab2} alt="Foundation" />
              </div>
              <div className="card-body">
                <h4 className="text-center text-uppercase">Transformation</h4>
                <h6 className="pointerDown arrow-down">&#187;</h6>
              </div>
            </div>
          </NavLink>
        </NavItem>
        <NavItem className="p-0">
          <NavLink
            id="tab2"
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            <div className="Homecard-shadow card">
              <div className="bgRed ct3">
                <img className="card-img-top" src={tab1} alt="Transformation" />
              </div>
              <div className="card-body">
                <h4 className="text-center text-uppercase">Open Platform</h4>
              </div>
              <h6 className="pointerDown arrow-down">&#187;</h6>
            </div>
          </NavLink>
        </NavItem>
        <NavItem className="p-0">
          <NavLink
            id="tab3"
            className={classnames({ active: activeTab === "3" })}
            onClick={() => {
              toggle("3");
            }}
          >
            <div className="Homecard-shadow card">
              <div className="bgBlue ct1">
                <img className="card-img-top" src={tab3} alt="Transformation" />
              </div>
              <div className="card-body">
                <h4 className="text-center text-uppercase">Solutions</h4>
              </div>
              <h6 className="pointerDown arrow-down">&#187;</h6>
            </div>
          </NavLink>
        </NavItem>
        <NavItem className="p-0">
          <NavLink
            id="tab4"
            className={classnames({ active: activeTab === "4" })}
            onClick={() => {
              toggle("4");
            }}
          >
            <div className="Homecard-shadow card">
              <div className="bgGreen ct4">
                <img
                  className="card-img-top textWhite"
                  src={tab4}
                  alt="Cloud Services"
                />
              </div>
              <div className="card-body">
                <h4 className="text-center text-uppercase">Cloud Services</h4>
              </div>
              <h6 className="pointerDown arrow-down">&#187;</h6>
            </div>
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab} className="bgWhite border-three hiding">
        <TabPane tabId="1" className="borderHomePageTab1">
          <Row>
            <Col sm="12">
              <h5 className="text-center ft">Transformation Services </h5>
              <p className="py-1 py-md-3">
                Synectiks Transformation services elevate your business by
                optimizing every aspect of your operations for the public cloud
                or Hybrid cloud – your people, infrastructure, applications and
                data.
              </p>
            </Col>
          </Row>
          <Row>
            <Col sm="12" md="4" className="p-1">
              <div className="py-1 py-md-3 h-100">
                <div className="border-right text-center">
                  <a
                    href="/infrastructure-transformation/index.html"
                    className="text-center heading-h3 h6"
                  >
                    Infrastructure <br />
                    Transformation
                  </a>
                  <p className="f-14 px-2 px-md-4 text-left">
                    Ensure every bit of your hardware environment is directly
                    supporting your business objectives. The transition from a
                    hardware-centric to a software-defined organization makes a
                    huge difference in CapEx and OpEx.
                  </p>
                </div>
              </div>
            </Col>
            <Col sm="12" md="4" className="p-1">
              <div className="py-3 h-100">
                <div className="border-right text-center">
                  <a
                    href="/application-transformation/index.html"
                    className="text-center heading-h3 h6"
                  >
                    Application
                    <br /> Transformation
                  </a>
                  <p className="f-14 px-4 text-left">
                    Applications that power your enterprise are key to
                    generating a strong competitive advantage. Bring innovation,
                    agility and outstanding customer experience through modern
                    architectures and a cloud-first approach.
                  </p>
                </div>
              </div>
            </Col>
            <Col sm="12" md="4" className="p-1">
              <div className="py-1 py-md-3 h-100">
                <div className="text-center">
                  <a
                    href="/devops-transformation/index.html"
                    className="text-center heading-h3 h6"
                  >
                    DevOps <br />
                    Transformation
                  </a>
                  <p className="f-14 px-1 px-md-4 text-left">
                    Adopting a DevOps culture starts by transforming your
                    people, technology and processes. Accelerate your DevOps
                    adaption by using our open Automation platform and skilled
                    resources.
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2" className="borderHomePageTab2">
          <Row>
            <Col sm="12 hiding">
              <div className="p-2 p-md-4">
                <img
                  src={PoweredBySynectiks}
                  width="100%"
                  alt="Xformation"
                  className="w-100"
                />
              </div>
              <h5 className="ft">What is Xformation?</h5>
              <p>
                It's a platform that provides peace of mind, governance,
                efficiency and control of multi-cloud environments. Xformation
                helps you to migrate and modernize your legacy business, take
                advantage of cloud and microservice architecture and thereby
                accelerate your transformation journey @50% time & cost.  <br />
                <span className="h5 ft">Its primary goals are:</span>
              </p>
              <ul className="showul">
                <li>Accelerated Cloud Adoption</li>
                <li>Multi-cloud container orchestration</li>
                <li>App-centric Optimization </li>
                <li>Continuous Delivery / Compliance / Automation.</li>
                <li> Automated Performance Monitoring and Cost Control</li>
              </ul>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3" className="borderHomePageTab3">
          <Row>
            <Col sm="12">
              <Hexagon />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="4" className="borderHomePageTab4">
          <Row className="px-3">
            <p>
              Capture true value of cloud with highly secured, scalable, and
              customizable SYNECTIKS Hosted Cloud Solutions at an affordable
              pricing. Modern, Innovative could solutions for wide range of
              Server workloads, Cloud-Hosted Desktops/Workspaces, and Containers
              along with highly Secure Backup & Disaster Recovery options
              meeting SOC2 & HIPPA compliance standards.
            </p>
          </Row>
          <Row>
            <Col sm="12" md="4" className="p-1">
              <div className="py-1 py-md-3 h-100">
                <div className="border-right text-center">
                  <a
                    href="/synectiks-hosted-infrastructure-business-continuity/index.html"
                    className="text-center heading-h3 h6"
                  >
                    Business Continuity & Cyber Security Services
                  </a>
                  <p className="f-14 px-2 px-md-4 text-left">
                    Build Business Resiliency with modern Synectiks-Business
                    Continuity solutions. Synectiks -Protect Cloud changes the
                    game by integrating Data protection with high security. This
                    synergy eliminates the complexity and makes security a
                    center point of your solutions, keeping your Business
                    protected and within you budget with no compromise on
                    quality.
                  </p>
                </div>
              </div>
            </Col>
            <Col sm="12" md="4" className="p-1">
              <div className="py-3 h-100">
                <div className="border-right text-center">
                  <a
                    href="/secure-custom-hosted-infrastructure/index.html"
                    className="text-center heading-h3 h6"
                  >
                    Secure & Custom Hosted Infrastructure Services
                  </a>
                  <p className="f-14 px-4 text-left">
                    Synectiks Secure Cloud Hosted Services supports a wide
                    variety of workloads & Disaster Recovery with a high degree
                    of control, security, and simplicity. Supports your
                    mission-critical applications and workloads with instant and
                    scalable infrastructure meeting business compliance
                    standards.
                  </p>
                </div>
              </div>
            </Col>
            <Col sm="12" md="4" className="p-1">
              <div className="py-1 py-md-3 h-100">
                <div className="text-center">
                  <a
                    href="/aws-managed-services/index.html"
                    className="text-center heading-h3 h6"
                  >
                    AWS Managed Services
                  </a>
                  <p className="f-14 px-1 px-md-4 text-left">
                    SYNECTIKS aws Managed Services enables companies to
                    accelerate the adoption of the public cloud, lower operating
                    costs, and mitigate security and compliance risks in a
                    cost-effective monthly consumption model. As AWS Consulting
                    Services Partner, our experts ensure that your workloads
                    meet the requirements of the AWS Well-Architected Framework
                    for efficient migration and operation in the AWS secured
                    landing zones
                    <br />
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default Tabs;
