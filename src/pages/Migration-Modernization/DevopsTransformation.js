import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Layout from "../../components/layout";
import { AiOutlineMenu } from "react-icons/ai";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Collapse,
  Navbar,
} from "reactstrap";
import classnames from "classnames";
import one from "../../images/Devops/Technology Shift.jpg";
import two from "../../images/Devops/Technology Transformation.svg";
import speed from "../../images/Devops/speed.svg";
import scale from "../../images/Devops/scale.svg";
import security from "../../images/Devops/Security.png";
import four from "../../images/Devops/Discovery & Assessment.png";
import five from "../../images/Devops/Transformation Services.png";
import six from "../../images/Devops/6.png";
import Expertise from "../../images/Devops/Expertise.png";
import Experience from "../../images/Devops/Experience.png";
import Contribution from "../../images/Devops/Contribution.png";
import Engagement from "../../images/Devops/Engagement Model.png";
import pcpartner from "../../images/Devops/Public Cloud Partnership.png";
import ltretention from "../../images/Devops/Long Term Retention.png";
import E2E from "../../images/Devops/E2E Solution.png";
import Extreme from "../../images/Devops/Extreme Automation.png";
import maxFac from "../../images/Devops/Maximum Flexibility.png";
import fastDeliv from "../../images/Devops/Faster Delivery.png";
import betterQual from "../../images/Devops/Better Quality.png";
import lowCost from "../../images/Devops/Lower Cost.png";
import SEO from "../../components/seo.js";
import BreadCrumbs from "../../components/Home/Breadcrumbs.js";

const DevopsTransformation = () => {
  const [activeTab, setActiveTab] = useState("1");
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

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
          content="DevOps is the combination of cultural philosophies, practices, and tools that increases an organization’s ability to deliver applications and services at high velocity: evolving and improving products at a faster pace than organizations using traditional software development and infrastructure management processes. This speed enables organizations to better serve their customers and compete more effectively in the market."
        />
        <link
          rel="canonical"
          href="https://synectiks.com/devops-transformation/index.html"
        />
      </Helmet>
      <SEO title="DevOps Transformation" />
      <div className="bg-lightgrey">
        <div className="d-block w-100 py-3 px-md-5">
          <div className="container-fluid">
            <BreadCrumbs
              title="Home"
              subtitle="Migration & Modernization"
              pageTitle="Devops Transformation"
            />
            <h1>DevOps Transformation</h1>
            <div className="solutions-tabs position-relative">
              <Navbar
                color="light"
                light
                expand="lg"
                className="topNav"
                id="devopsTabs"
              >
                <AiOutlineMenu
                  onClick={toggleNavbar}
                  className="toggle-navbar"
                />
                <Collapse isOpen={!collapsed} navbar>
                  <Nav className="bgWhite d-flex w-100">
                    <NavItem className="one">
                      <NavLink
                        id="bgL"
                        className={classnames({
                          active: activeTab === "1",
                        })}
                        onClick={() => {
                          toggle("1");
                          toggleTab();
                          onTop();
                        }}
                      >
                        BRIEF
                      </NavLink>
                    </NavItem>
                    <NavItem className="one">
                      <NavLink
                        id="bgLL"
                        className={classnames({
                          active: activeTab === "2",
                        })}
                        onClick={() => {
                          toggle("2");
                          toggleTab();
                          onTop();
                        }}
                      >
                        GETTING STARTED
                      </NavLink>
                    </NavItem>
                    <NavItem className="one">
                      <NavLink
                        id="bgLLL"
                        className={classnames({
                          active: activeTab === "3",
                        })}
                        onClick={() => {
                          toggle("3");
                          toggleTab();
                          onTop();
                        }}
                      >
                        HOW SYNECTIKS CAN HELP YOU?
                      </NavLink>
                    </NavItem>
                    <NavItem className="one">
                      <NavLink
                        id="bgLLL"
                        className={classnames({
                          active: activeTab === "4",
                        })}
                        onClick={() => {
                          toggle("4");
                          toggleTab();
                          onTop();
                        }}
                      >
                        SYNECTIKS DIFFERENTIATOR
                      </NavLink>
                    </NavItem>
                    <NavItem className="one">
                      <NavLink
                        id="bgLLL"
                        className={classnames({
                          active: activeTab === "5",
                        })}
                        onClick={() => {
                          toggle("5");
                          toggleTab();
                          onTop();
                        }}
                      >
                        KEY BENEFITS
                      </NavLink>
                    </NavItem>
                  </Nav>
                </Collapse>
              </Navbar>
              <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                  <div className="d-block mt-4">
                    <h5 className="text-left ft">
                      Understanding the DevOps Transformation
                    </h5>
                    <p className="ptext mb-3">
                      DevOps is the combination of cultural philosophies,
                      practices, and tools that increases an organization’s
                      ability to deliver applications and services at high
                      velocity: evolving and improving products at a faster pace
                      than organizations using traditional software development
                      and infrastructure management processes. This speed
                      enables organizations to better serve their customers and
                      compete more effectively in the market.
                    </p>
                    <h5 className="ft">
                      Why DevOps Transformation matter in Today’s Business?
                    </h5>
                    <p className="ptext mb-3">
                      Competition, new products and continuing pressure to
                      monetize older services severely taxing many businesses
                      driven by legacy applications and infrastructure. To
                      maintain the competitive edge in a highly dynamic market,
                      business need to re-imagine the customer experience in
                      lower economics. Enterprises looking for modernization of
                      their legacy stack and operate in more fast and
                      competitive way taking DevOps as key strategic drivers. As
                      companies embrace DevOps, they must address both
                      technology and the human side of change. The most
                      important need for technology and the human side are as
                      follows:
                    </p>
                    <h5 className="ft">Technology Shift</h5>
                    <p className="ptext mb-3">
                      Small services delivered in an extreme agile manner and
                      run in multi cloud hybrid ecosystem in lowest Capex & Opex
                      with the highest security.
                    </p>
                    <div className="d-block w-100">
                      <img
                        src={one}
                        alt="Technology Shift"
                        className="w-75 mx-auto my-2 my-md-5 box-shadow"
                      />
                    </div>
                    <h5 className="ft">Cultural Shift</h5>
                    <p className="ptext mb-3">
                      A culture with less roles, much E2E responsibilities,
                      which innovates fast accepting high speed feedback and
                      respond with super-fast delivery coupled with stringent
                      security and lower economics.
                    </p>
                    <div className="d-block w-100">
                      <img
                        src={two}
                        alt="Cultural Shift"
                        className="w-75 mx-auto my-2 my-md-5 box-shadow"
                      />
                    </div>
                  </div>
                </TabPane>
                <TabPane tabId="2">
                  <div className="d-block mt-4">
                    <h3 className="ft">Getting Started To DevOps</h3>
                    <p className="ptext mb-3">
                      The first step is for CIOs to connect with the business to
                      establish clear lines of communication and to set common
                      goals. Within the IT organization, CIOs must set policies
                      that identify the need to prepare for DevOps as a priority
                      for overall IT strategies. Courageous leadership is key
                      for success in adopting an enterprise wide DevOps culture.
                      <br />
                      <br />
                      Then we recommend assessing the company’s People, Process
                      and Technology estate using some standard maturity model.
                      The Synectiks maturity model for a quick DevOps assessment
                      is as follows:
                    </p>
                    <div className="text-center ">
                      <h5 className="my-5 ft">
                        Where do you find your current DevOps Maturity?
                      </h5>
                      <div className="w-100 mx-auto mobile-show">
                        <img
                          src={six}
                          alt="Devops Maturity"
                          className="boxshdd w-100 mobile-show"
                        />
                      </div>
                      <div className="d-flex justify-content-start flex-column flex-md-row my-2 my-md-4 mobile-hide devops-maturity">
                        <div className="w-11">
                          <h4 className="py-3"></h4>
                          <div className="Dulture ulht d-flex align-items-center border-ra mb-2">
                            <h5 className="py-5 px-2 text-center w-11">
                              Culture <br />
                              Skill
                            </h5>
                          </div>
                          <div className="DesignArc ulht d-flex align-items-center border-ra mt-3">
                            <h5 className="py-5 px-2 text-center w-11">
                              Design <br />
                              Architecture
                            </h5>
                          </div>
                          <div className="Duild ulht d-flex align-items-center border-ra mt-3">
                            <h5 className="py-5 px-2 text-center w-11">
                              Build <br />
                              Deploy
                            </h5>
                          </div>
                          <div className="Dest ulht38 d-flex align-items-center border-ra my-3">
                            <h5 className="py-5 px-2 text-center w-11">Test</h5>
                          </div>
                          <div className="Doperate ulht38 d-flex align-items-center border-ra mt-2">
                            <h5 className="py-5 px-2 text-center w-11">
                              Operate
                            </h5>
                          </div>
                        </div>
                        <div className="Durple w-50 py-2 me-2">
                          <h4 className="text-light">Basic</h4>
                          <div className="Durple d-flex align-items-center">
                            <ul className="pt-3 DurpleLight ulfont ulht w-100">
                              <li>Prioritized work</li>
                              <li>Large team</li>
                              <li>
                                Multiple Roles(Architect, Developer,Tester,...)
                              </li>
                              <li>Defined & documented process</li>
                              <li>Quarterly release</li>
                            </ul>
                          </div>
                          <div className="Durple d-flex align-items-center">
                            <ul className="pt-3 DurpleLight ulfont ulht w-100">
                              <li>Monolith product</li>
                              <li>Consolidate platform</li>
                              <li>System into Modules</li>
                              <li>Library management</li>
                              <li>Api management</li>
                              <li>Basic Automations</li>
                            </ul>
                          </div>
                          <div className="Durple d-flex align-items-center">
                            <ul className="pt-3 DurpleLight ulfont ulht w-100">
                              <li>Scripted Build</li>
                              <li>Continuous Integration</li>
                              <li>Dedicated build & release server</li>
                              <li>Multiplatform packages</li>
                              <li>Basic test automation</li>
                              <li>
                                Manual staging environments(dev, stage,test,
                                prod) promotion
                              </li>
                            </ul>
                          </div>
                          <div className="Durple d-flex align-items-center">
                            <ul className="pt-3 DurpleLight ulfont ulht38	 w-100">
                              <li>Basic test automation</li>
                              <li>Continuous tests integration</li>
                              <li>Risk based manual tests</li>
                            </ul>
                          </div>
                          <div className="Durple d-flex align-items-center">
                            <ul className="pt-3 DurpleLight ulfont ulht38 w-100">
                              <li>ITSM tools & Operating SLA's</li>
                              <li>Performance monitoring</li>
                              <li>Log monitoring</li>
                              <li>Alerts monitoring</li>
                              <li>Manual resource provisioning</li>
                              <li>Security audit</li>
                            </ul>
                          </div>
                        </div>
                        <div className="Dred w-50 py-2 me-2">
                          <h4 className="text-light">Intermediate</h4>
                          <div className="Dulture">
                            <ul className="pt-3 DredLight ulfont ulht w-100">
                              <li>Stable teams</li>
                              <li>Share pain</li>
                              <li>Remove boundary(Dev & Test)</li>
                              <li>Agile process</li>
                              <li>Monthly release</li>
                              <li>Act on metrics</li>
                            </ul>
                          </div>
                          <div className="DesignArc">
                            <ul className="pt-3 DredLight ulfont ulht w-100">
                              <li>Component engineering</li>
                              <li>Config as code</li>
                              <li>Event architecture</li>
                              <li>service api interaction</li>
                              <li>Api management</li>
                              <li>Test / release automation</li>
                            </ul>
                          </div>
                          <div className="Duild">
                            <ul className="pt-3 DredLight ulfont ulht w-100">
                              <li>Pollen build </li>
                              <li>Manual version & tagging</li>
                              <li>Automated Staging</li>
                              <li>
                                Automated unit / Integration / UI / Regression
                                /Performance / Code / Security / Code Quality /
                                Coverage /Acceptance tests
                              </li>
                            </ul>
                          </div>
                          <div className="Dest">
                            <ul className="pt-3 DredLight ulfont ulht38 w-100">
                              <li>
                                Automated unit / Integration / UI / Regression
                                /Performance / Code / Security / Code Quality /
                                Coverage /Acceptance tests
                              </li>
                              <li>Test results Consolidate</li>
                              <li>Component wise tests</li>
                            </ul>
                          </div>
                          <div className="Doperate">
                            <ul className="pt-3 DredLight ulfont ulht38 w-100">
                              <li>Diagnostics</li>
                              <li>Advanced monitoring through scripts</li>
                              <li>Log Analysis</li>
                              <li>
                                Automated ticket recommendation and workflows
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="Dellow w-50 py-2 me-2">
                          <h4 className="text-light">Standard</h4>
                          <div className="Dulture">
                            <ul className="pt-3 DellowLight ulfont ulht w-100">
                              <li>Team responsible all the way prod</li>
                              <li>Dedicated tools team</li>
                              <li>Remove boundary(Dev & Ops)</li>
                              <li>Deploy disconnected from release</li>
                              <li>Continuous improvement</li>
                              <li>Component ownership</li>
                              <li>Decentralized decisions</li>
                            </ul>
                          </div>
                          <div className="DesignArc">
                            <ul className="pt-3 DellowLight ulfont ulht w-100">
                              <li>Distributed Architecture</li>
                              <li>Horizontal scalability</li>
                              <li>Cloud centric, SASS model</li>
                              <li>Deployment automation</li>
                              <li>Framework</li>
                              <li>Operation automation framework</li>
                            </ul>
                          </div>
                          <div className="Duild">
                            <ul className="pt-3 DellowLight ulfont ulht w-100">
                              <li>Quality gates</li>
                              <li>Realtime build metrics</li>
                              <li>Deployment & compliance trend</li>
                              <li>Test results consolidation</li>
                              <li>TDD framework integration</li>
                              <li>Dynamic environment provisioning</li>
                            </ul>
                          </div>
                          <div className="Dest">
                            <ul className="pt-3 DellowLight ulfont ulht38 w-100">
                              <li>well defined TDD and BDD framework</li>
                              <li>BDD tests written in DSL</li>
                              <li>Test rule based stage Automation</li>
                              <li>Test case tool to automation</li>
                              <li>Tests integration</li>
                            </ul>
                          </div>
                          <div className="Doperate">
                            <ul className="pt-3 DellowLight ulfont ulht38 w-100">
                              <li>
                                Automated hyperscale cluster & cloud
                                provisioning
                              </li>
                              <li>Elastic auto provisioning</li>
                              <li>Resilience scripts</li>
                              <li>Dynamic vdms/ VDss provisioning</li>
                            </ul>
                          </div>
                        </div>
                        <div className="Dreen w-50 py-2">
                          <h4 className="text-light">Advanced</h4>
                          <div className="Dulture">
                            <ul className="pt-3 DreenLight ulfont ulht w-100">
                              <li>All full stacks experts</li>
                              <li>Cross functional small teams</li>
                              <li>Speedy feedback</li>
                              <li>Advanced frameworks driven</li>
                              <li>RAD</li>
                              <li>Excellent training framework</li>
                            </ul>
                          </div>
                          <div className="DesignArc">
                            <ul className="pt-3 DreenLight ulfont ulht w-100">
                              <li>Hybrid cloud, cloud agnostics, elastics</li>
                              <li>Complete software defined(IAAC)</li>
                              <li>Multi cloud compete SOA</li>
                              <li>Simplified automated framework</li>
                              <li>Aggregated hardware</li>
                              <li>Container / Services</li>
                              <li>Optimized pooling</li>
                            </ul>
                          </div>
                          <div className="Duild">
                            <ul className="pt-3 DreenLight ulfont ulht w-100">
                              <li>Zero touch deployment</li>
                              <li>Elastic automation cluster</li>
                              <li>Parallel continuous delivery</li>
                              <li>
                                Containerized build environments for different
                                language
                              </li>
                              <li>Simplified build Orchestration framework</li>
                            </ul>
                          </div>
                          <div className="Dest">
                            <ul className="pt-3 DreenLight ulfont ulht38 w-100">
                              <li>Service wise test results consolidation</li>
                              <li>Tests Trend analytics</li>
                              <li>Continuous tests in production</li>
                            </ul>
                          </div>
                          <div className="Doperate">
                            <ul className="pt-3 DreenLight ulfont ulht38 w-100">
                              <li>
                                Hardware / Os / App server / license agnostics
                              </li>
                              <li>Continuous security / Audit / Billing</li>
                              <li>
                                Centralized tools for monitoring different
                                environments, products, services, clouds
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h5 className="text-center mt-3 mt-md-5 ft">
                          Our DevOps Gap analysis process briefly as follows:
                        </h5>
                        <h5 className="fw6 text-center">Gap Analysis</h5>
                        <h6 className="text-center">4 Phased - 5 days</h6>
                        <div className="row py-4">
                          <div className="col-lg-3 col-md-6 col-12 my-3">
                            <div className="boxshd h-100">
                              <div className="count bgOrange py-2 py-md-2">
                                <div className="counters brclr">1</div>
                                <h6 className="text-center mt-2">
                                  Day 1 <br /> Project kick-off
                                </h6>
                              </div>
                              <h6 className="mt-4">Initial Meetings</h6>
                              <ul className="pt-3 text-start f14 pe-2">
                                <li>
                                  Meeting with decision makers to get an insight
                                  on client pain-points and desired future-state
                                </li>
                                <li>
                                  Kick-Off meeting with DevOps assessment
                                  stakeholders
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-6 col-12 my-3">
                            <div className="boxshd h-100">
                              <div className="count bgRed text-light py-2 py-md-2">
                                <div className="counters">2</div>
                                <h6 className="text-center mt-2">
                                  Day 2 <br />
                                  Assessment
                                </h6>
                              </div>
                              <h6 className="mt-4">Questions Based Audit</h6>
                              <ul className="pt-3 text-start f14 pe-2">
                                <li>A DevOps briefing for all interviews</li>
                                <li>Audit on following key focus areas</li>

                                <li>Organization</li>
                                <li>Automation</li>
                                <li>
                                  As-Is Analyzer people process Tools,
                                  Technology
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-6 col-12 my-3">
                            <div className="boxshd h-100">
                              <div className="count hx3 text-light py-2 py-md-2">
                                <div className="counters">3</div>
                                <h6 className="text-center mt-2">
                                  Day 3 <br />
                                  Report preparation
                                </h6>
                              </div>
                              <h6 className="mt-4">Report Generation</h6>
                              <ul className="pt-3 text-start f14 pe-2">
                                <li>
                                  Preparation of findings report DevOps
                                  transformation plan and Roadmap
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-6 col-12 my-3">
                            <div className="boxshd h-100">
                              <div className="count bgBlue text-light py-2 py-md-2">
                                <div className="counters">4</div>
                                <h6 className="text-center mt-2">
                                  Day 4 <br />
                                  Presentation
                                </h6>
                              </div>
                              <h6 className="mt-1 mt-md-4">Presentation</h6>
                              <ul className="pt-3 text-start f14 pe-2">
                                <li>
                                  Presentation of the report and plans to
                                  stakeholders, following plans are delivered.
                                </li>
                                <li>Phase wise maturity development</li>
                                <li>Tools & Technology Adoption</li>
                                <li>Skill Development</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="ptext mb-3">
                        The standard maturity model-based assessment will
                        clearly give you insights on the current and future
                        capability to create a business case for improvement in
                        each capability and thereby helping you to create a
                        roadmap to guide the journey to DevOps centric
                        organization. This roadmap should map people, process,
                        technology change requirement, consider IT policy and
                        operating model factors; and ultimately produce clear,
                        data-based recommendations with a proposed execution
                        plan to enable DevOps transformation to happen. Getting
                        there will require significant upliftment of people
                        skills, impart modern tools and technologies,
                        transforming and migrating applications, integrating and
                        orchestrating environments, automating and monitoring
                        business services, enabling digital processes, and
                        integrating data and security.
                      </p>
                    </div>
                  </div>
                </TabPane>
                <TabPane tabId="3">
                  <div className="d-block mt-4">
                    <h5 className="ft"> How Synectiks can help?</h5>
                    <p className="ptext mb-3">
                      Enterprises looking for modernization of their legacy
                      stack and operate in more fast and competitive way, can
                      use the Synectiks open platform and specialized resources
                      to bring the cultural transformation and agility needed
                      for today’s business. Whether it is a new business
                      application or transformation of legacy applications, our
                      open platform coupled with our experience and expertise
                      accelerate the project execution @50% time & cost.
                    </p>
                    <h5 className="ft">Technology Transformation</h5>
                    <p className="ptext mb-3">
                      “Over 85% of enterprise IT organizations will commit to
                      multi-cloud architectures by 2018, IDC. End User
                      experience, Security, Agility, Flexibility, Consumption
                      Based pricing are most important five priorities for CIO’s
                      today. Synectiks is one of very few technology companies,
                      who delivers professional services on advanced
                      technologies backed by an open xformation platform that
                      accelerates your DevOps transformation journey @50% time &
                      cost.”
                    </p>
                    <p className="ptext mb-3">
                      Synectiks build the most powerful open product that helps
                      customers to provision resources across clouds in complete
                      software defined way and deliver modern container and FAAS
                      driven workloads on it. The platform takes care of
                      Continuous delivery, Continuous Deployment, Continuous
                      security and continuous compliance continuous automation
                      to make sure the workload runs seamlessly with highest
                      security, performance, scalability and availability.
                    </p>
                    <h5 className="ft">Cultural Transformation </h5>
                    <p className="ptext mb-3">
                      Need? A culture with less Roles , much E2E
                      responsibilities Innovate / Deliver Fast High Speed
                      Feedback and Superfast Delivery Lower Capex, Opex
                      <br />
                      <br />
                      Why Us? Experience in addressing Technology & Cultural
                      Changes Accelerate DevOps adoption with Open Platform &
                      Skilled resources. Assess DevOps maturity and address
                      Gaps.
                    </p>
                    <p className="ptext mb-3">
                      Ensuring that you stay ahead of race and keep disrupting
                      by adopting most modern technologies intelligently and
                      effectively, requires an Open Product Based Professional
                      Services partner who understand your requirements for:
                    </p>
                    <div className="my-1 my-md-3">
                      <div className="row flex-column align-items-center">
                        <div className="d-flex flex-column flex-md-row align-items-center">
                          <img
                            src={speed}
                            alt="speed"
                            className="w-10 me-md-4 me-auto mb-md-0 mb-2"
                          />
                          <div className="px-2 px-md-0">
                            <h4 className="my-1 my-md-3">Speed</h4>
                            <p>
                              Introduction of New products or transforming your
                              existing legacy monolith application to
                              microservices faster While Maintaining Operational
                              Control and Customer Visibility.
                            </p>
                          </div>
                        </div>
                        <div className="d-flex flex-column flex-md-row align-items-center my-3">
                          <img
                            src={scale}
                            alt="scale"
                            className="w-10 me-md-4 me-auto mb-md-0 mb-2"
                          />
                          <div className="px-2 px-md-0">
                            <h4 className="my-1 my-md-3">Scale</h4>
                            <p>
                              Grow cost-effectively to meet new organizational
                              and business requirements across the enterprise
                              using a highly scalable architecture that can
                              distribute the workloads across clouds, enables
                              hybrid cloud adoption with maximum security and
                              highest flexibility.
                            </p>
                          </div>
                        </div>
                        <div className="d-flex flex-column flex-md-row align-items-center my-3">
                          <img
                            src={security}
                            alt="security"
                            className="w-10 me-md-4 me-auto mb-md-0 mb-2"
                          />
                          <div className="px-2 px-md-0">
                            <h4 className="my-1 my-md-3">Security</h4>
                            <p>
                              Provision and Manage infrastructure, application
                              services in complete software defined way with
                              maximum automation so that you never fall into
                              security loopholes. Enables continuous Audit,
                              Continuous Security/- Compliance to have real time
                              checks and visibility on security guidelines.
                            </p>
                          </div>
                        </div>
                      </div>
                      <h5 className="py-3">
                        Synectiks can enable your enterprise journey to DevOps,
                        regardless of your starting point.
                      </h5>
                      <div className="row flex-column align-items-center">
                        <div className="d-flex flex-column flex-md-row align-items-center my-3">
                          <img
                            src={four}
                            alt="Discover and Assessment"
                            className="w-10 me-md-4 me-auto mb-md-0 mb-2"
                          />
                          <div className="px-2 px-md-0">
                            <h4 className="my-1 my-md-3">
                              Discover & Assessment
                            </h4>
                            <p>
                              Our discovery and assessment services can help you
                              draft a DevOps roadmap with a clearly defined
                              business case and mapping of peoples / process /
                              technologies along with prioritized
                              recommendations. Our recommendations reflect deep
                              industry knowledge and contextual knowledge about
                              your business.
                            </p>
                          </div>
                        </div>
                        <div className="d-flex flex-column flex-md-row align-items-center my-3">
                          <img
                            src={five}
                            alt="Transformation Services"
                            className="w-10 me-md-4 me-auto mb-md-0 mb-2"
                          />
                          <div className="px-2 px-md-0">
                            <h4 className="my-1 my-md-3">
                              Transformation Services
                            </h4>
                            <p>
                              You can access our open Xformation platform
                              products and resource teams to adopt technology
                              and cultural changes quickly from Application
                              modernization, people skill and process
                              transformation and integration to cloud-native
                              apps development, containerization, platform
                              services and microservices to enable your
                              enterprise to thrive in Hybrid IT environments.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPane>
                <TabPane tabId="4">
                  <div className="d-block mt-4">
                    <p>
                      We go beyond creating a strategy: Synectiks helps you plan
                      it, do it, run it and manage it.
                    </p>
                    <h4 className="text-center my-5">
                      Top 8 Reasons to select Synectiks as your DevOps Partner:
                    </h4>
                    <div className="row">
                      <div className="col-sm-4 col-md-4 col-12 text-center mb-3 flex-column">
                        <div className="d-flex align-items-center flex-column">
                          <img
                            src={Expertise}
                            alt="Expertise"
                            className="tw m-0"
                            // className="tw m-0 h-75"
                          />
                          <h5 className="mb-4">Expertise</h5>
                        </div>
                        <p className="text-left">
                          Experience Team with a proven track record of CloudOps
                          delivery enabled with DevSecOps Capabilities.
                        </p>
                      </div>
                      <div className="col-sm-4 col-md-4 col-12 text-center mb-3 flex-column">
                        <div className="d-flex align-items-center flex-column">
                          <img
                            src={Experience}
                            alt="Experience"
                            className="tw m-0"
                          />
                          <h5 className="mt-3">Experience</h5>
                        </div>
                        <p className="text-left">
                          We have done large Transformation projects with
                          Toyota, Reliance and cultural challenges effectively
                          and brought the changes, resulting significant
                          improvement and savings.
                        </p>
                      </div>

                      <div className="col-sm-4 col-md-4 col-12 text-center mb-3 flex-column">
                        <div className="d-flex align-items-center flex-column">
                          <img
                            src={Contribution}
                            alt="Contribution"
                            className="tw m-0"
                          />
                          <h5 className="mt-3">Contribution</h5>
                        </div>
                        <p className="text-left">
                          We are continuously contributing an open XFormation
                          platform that is accelerating the transformation @50%
                          Time & Cost.
                        </p>
                      </div>
                      <div className="col-sm-4 col-md-4 col-12 text-center mb-3 flex-column">
                        <div className="d-flex align-items-center flex-column">
                          <img
                            src={Engagement}
                            alt="Engagement Model"
                            className="tw m-0"
                          />
                          <h5 className="mt-3">Engagement Model</h5>
                        </div>
                        <p className="text-left">
                          Our every engagement focused on empowerment, not
                          dependency.
                        </p>
                      </div>
                      <div className="col-sm-4 col-md-4 col-12 text-center mb-3 flex-column">
                        <div className="d-flex align-items-center flex-column">
                          <img
                            src={pcpartner}
                            alt="Public Cloud Partnership"
                            className="tw m-0"
                          />
                          <h5 className="">Public Cloud Partnership</h5>
                        </div>
                        <p className="text-left">
                          Our advanced partnership with major public cloud
                          providers help you to get support at every stage.
                        </p>
                      </div>
                      <div className="col-sm-4 col-md-4 col-12 text-center mb-3 flex-column">
                        <div className="d-flex align-items-center flex-column">
                          <img
                            src={ltretention}
                            alt="Long Term Retention"
                            className="tw m-0"
                          />
                          <h5 className="mt-2">Long Term Retention</h5>
                        </div>
                        <p className="text-left">
                          100% Customer Retention Rate.
                        </p>
                      </div>
                      <div className="col-sm-4 col-md-4 col-12 text-center mb-3 flex-column">
                        <div className="d-flex align-items-center flex-column">
                          <img
                            src={E2E}
                            alt="E2E Solution"
                            className="tw m-0"
                          />
                          <h5 className="mt-3">E2E Solution</h5>
                        </div>
                        <p className="text-left">
                          Single point of contact for Application Migration,
                          Transformation and Integration to cloud-native Apps
                          services.
                        </p>
                      </div>
                      <div className="col-sm-4 col-md-4 col-12 text-center mb-3 flex-column">
                        <div className="d-flex align-items-center flex-column">
                          <img
                            src={Extreme}
                            alt="Extreme Automation"
                            className="tw m-0"
                          />
                          <h5 className="">Extreme Automation</h5>
                        </div>
                        <p className="text-left">
                          Use our existing automation capabilities to automate
                          infrastructure , operations, security in hybrid IT
                          environment.
                        </p>
                      </div>
                    </div>
                    <div className="py-3">
                      <p className="text-left">
                        Finally, we help you to do people / process / technology
                        transformation it all at a lower cost using CloudOps
                        delivery enabled with DevSecOps capabilities and extreme
                        automation from our Synectiks Xformation platform driven
                        solutions delivery model. Xformation Platform allows to
                        quickly build and deliver and orchestrate cross cloud
                        services , at-scale, repeatable offerings and solutions
                        that help to drive your DevOps journey @50% time & cost.
                      </p>
                    </div>
                  </div>
                </TabPane>
                <TabPane tabId="5">
                  <div className="d-block mt-4">
                    <h5 className="ft">
                      Key benefits you get by choosing Synectiks as DevOps
                      partner
                    </h5>
                    <h5 className="pt-0 pt-md-0 pb-2 pb-md-3 ft">
                      Synectiks can enable your enterprise journey to DevOps,
                      regardless of your starting point.
                    </h5>
                    <div className="row">
                      <div className="d-flex flex-column flex-md-row align-items-center">
                        <img
                          src={maxFac}
                          alt="Maximum Flexibility"
                          className="w-10 me-md-4 me-auto mb-md-0 mb-2"
                        />
                        <div className="px-2 px-md-0">
                          <h5>Maximum Flexibility</h5>
                          <p className="mb-1 mb-md-4">
                            Synectiks xformation platform coupled with its
                            Hybrid cross cloud infrastructure delivers you the
                            maximum flexibility to run/move your high performant
                            workloads across clouds and manage them through a
                            single pane of glass.
                          </p>
                        </div>
                      </div>
                      <div className="d-flex flex-column flex-md-row align-items-center mt-4">
                        <img
                          src={fastDeliv}
                          alt="Faster Delivery"
                          className="w-10 me-md-4 me-auto mb-md-0 mb-2"
                        />
                        <div className="ml-2">
                          <h5>Faster Delivery</h5>
                          <p className="mb-1 mb-4">
                            Synectiks xformation platform enabled infrastructure
                            and application provisioning in complete software
                            defined manner with regulatory compliant
                            architectures. The existing assets and best
                            practices enable project delivery in weeks than
                            months.
                          </p>
                        </div>
                      </div>
                      <div className="d-flex flex-column flex-md-row align-items-center mt-4">
                        <img
                          src={betterQual}
                          alt="Better Quality"
                          className="w-10 me-md-4 me-auto mb-md-0 mb-2"
                        />
                        <div className="ml-4">
                          <h5>Better Quality</h5>
                          <p className=" mb-1 mb-4 ptext">
                            Through Synectiks Xformation platform, you can
                            continuously deliver containerized and serverless
                            microservices verified through stringent quality
                            gates that run across clouds and geographies
                            ensuring 100% availability and maximum performance.
                          </p>
                        </div>
                      </div>
                      <div className="d-flex flex-column flex-md-row align-items-center mt-4">
                        <img
                          src={lowCost}
                          alt="Lower Costs"
                          className="w-10 me-md-4 me-auto mb-md-0 mb-2"
                        />
                        <div className="ml-2">
                          <h5>Lower Costs</h5>
                          <p className="ptext">
                            Everything software defined and maximum automation
                            ensure lowest TCO. A successful Digital
                            Modernization project delivers 10X agility, 30X
                            reliability and 10X operational efficiency. At least
                            50% TCO is reduced because of 80% operation, 50%
                            hardware and 100% license cost savings.
                          </p>
                        </div>
                      </div>
                    </div>
                    <p className="ptext py-3">
                      Now is the time to act. Don’t be disrupted be the
                      disruptor. Let us help you innovate and transform to
                      differentiate with speed and quality. That’s Synectiks.
                      That’s transformation Delivered in open product based
                      solutioning model.
                    </p>
                  </div>
                </TabPane>
              </TabContent>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DevopsTransformation;
