import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Layout from "../../components/layout";
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
import { AiOutlineMenu } from "react-icons/ai";
import "../../css/fonts.css";
import "../../css/tabs.css";
import ms1 from "../../images/syn.jpg";
import ms2 from "../../images/Microservices/Monolith to Microservices.jpg";
import ms4 from "../../images/Microservices/Microservice_7.png";
import ms6 from "../../images/Microservices/Microservice_9.png";
import ms7 from "../../images/Microservices/Microservice_10.png";
import ms8 from "../../images/Microservices/Microservice_11.png";
import ms9 from "../../images/Microservices/infrastructure.svg";
import SEO from ".././../components/seo.js";
import BreadCrumbs from "../../components/Home/Breadcrumbs.js";

const Microservice = () => {
  const [activeTab, setActiveTab] = useState("1");
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const [isOpen, setNav] = useState(true);
  const toggleTab = () => {
    setNav((isOpen) => !isOpen);
    setCollapsed((collapsed) => !collapsed);
  };
  const toggleTabDesktop = () => {
    setNav((isOpen) => !isOpen);
  };
  const toggleTabMobile = () => {
    setNav((isOpen) => !isOpen);
    setCollapsed((collapsed) => !collapsed);
  };
  const onTop = () => {
    window.scroll(0, 0);
  };
  return (
    <Layout>
      <Helmet>
        <meta
          name="description"
          content="SYNECTIKS, a trusted partner with experience migrating monolithic applications to cloud and microservices architecture, can help make the process seamless. Let us help you make the shift so you can capitalize on business opportunities faster."
        />
        <link
          rel="canonical"
          href="https://synectiks.com/microservices/index.html"
        />
      </Helmet>
      <SEO title="Microservices" />
      <div className="bg-lightgrey">
        <div className="d-block w-100 py-3 px-md-5">
          <div className="container-fluid">
            <BreadCrumbs
              title="Home"
              subtitle="Solutions"
              pageTitle="Micro services"
            />
            <div className="solutions-tabs position-relative">
              <Navbar
                color="light"
                light="light"
                expand="xl"
                className="topNav"
              >
                <AiOutlineMenu
                  onClick={toggleNavbar}
                  className="toggle-navbar"
                />
                <Collapse isOpen={!collapsed} navbar="navbar">
                  <Nav className="bgWhite d-flex w-100">
                    <NavItem>
                      <NavLink
                        id="bgL"
                        className={classnames({
                          active: activeTab === "1",
                        })}
                        onClick={() => {
                          toggle("1");
                          toggleTabMobile();
                          onTop();
                        }}
                      >
                        BRIEF
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        id="bgLL"
                        className={classnames({
                          active: activeTab === "2",
                        })}
                        onClick={() => {
                          toggle("2");
                          toggleTabMobile();
                          onTop();
                        }}
                      >
                        BENEFITS
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        id="bgLLL"
                        className={classnames({
                          active: activeTab === "3",
                        })}
                        onClick={() => {
                          toggle("3");
                          toggleTabMobile();
                          onTop();
                        }}
                      >
                        CHALLENGES
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        id="bgLLL"
                        className={classnames({
                          active: activeTab === "4",
                        })}
                        onClick={() => {
                          toggle("4");
                          toggleTabMobile();
                          onTop();
                        }}
                      >
                        HOW SYNECTIKS CAN HELP YOU?
                      </NavLink>
                    </NavItem>
                  </Nav>
                </Collapse>
                <Nav className="bgWhite d-flex w-100">
                  <NavItem>
                    <NavLink
                      id="bgL"
                      className={classnames({
                        active: activeTab === "1",
                      })}
                      onClick={() => {
                        toggle("1");
                        toggleTabDesktop();
                        onTop();
                      }}
                    >
                      BRIEF
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      id="bgLL"
                      className={classnames({
                        active: activeTab === "2",
                      })}
                      onClick={() => {
                        toggle("2");
                        toggleTabDesktop();
                        onTop();
                      }}
                    >
                      BENEFITS
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      id="bgLLL"
                      className={classnames({
                        active: activeTab === "3",
                      })}
                      onClick={() => {
                        toggle("3");
                        toggleTabDesktop();
                        onTop();
                      }}
                    >
                      CHALLENGES
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      id="bgLLL"
                      className={classnames({
                        active: activeTab === "4",
                      })}
                      onClick={() => {
                        toggle("4");
                        toggleTabDesktop();
                        onTop();
                      }}
                    >
                      HOW SYNECTIKS CAN HELP YOU?
                    </NavLink>
                  </NavItem>
                </Nav>
              </Navbar>
              <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                  <div className="row mt-4">
                    <div className="col-md-12 col-12">
                      <h1 className="text-uppercase main-heading">
                        Microservices
                      </h1>
                      <h2 className="sub-heading">Microservices Migration</h2>
                      <p className="ptext mb-3">
                        To accommodate the increasing complexity of functional
                        requirements, IT applications have embraced a variety of
                        architectural patterns. Organizations must meet
                        ever-changing business demands — from mainframe
                        applications and client-server to service oriented
                        architecture (SOA) and microservices.
                      </p>
                      <p className="ptext mb-3">
                        Microservices architecture is a combination of
                        successful and proven concepts of software engineering
                        such as agile software development, SOA, API-first
                        design and continuous delivery (CD). This architecture
                        and organizational approach to software development is
                        designed to accelerate development cycles, foster
                        innovation and ownership and improve the ability to
                        maintain and scale applications.
                      </p>
                    </div>
                    <div className="col-md-12 col-12">
                      <img
                        className="imgshadow microser mx-auto"
                        src={ms1}
                        alt="Microservices"
                      />
                    </div>
                  </div>
                  <div className="row mt-4 mb-4">
                    <div className="col-md-12 col-12">
                      <p className="ptext mb-4">
                        Despite technological advancements, 90 percent of
                        business IT applications are legacy and what are known
                        as “monolithic”. These range from mainframe apps where
                        UI, business logic and data storage reside on machines,
                        to client-server applications where layered technologies
                        that support UI, business functionality and data are
                        stored horizontally. Microservices architecture, on the
                        other hand, divides the functionality into cohesive
                        verticals by implementing a specific domain.
                      </p>
                    </div>
                    <div className="col-md-12 col-12">
                      <img
                        src={ms2}
                        alt="monolllith microservice"
                        className="imgshadow microser mx-auto"
                      />
                    </div>
                  </div>
                </TabPane>
                <TabPane tabId="2">
                  <div className="d-block mt-4">
                    <h5 className="ft">Product Quality.</h5>
                    <ul>
                      <li>
                        Optimize Scalability: React fluidly with smaller,
                        self-contained components
                      </li>
                      <li>
                        Achieve High Quality: Continuously and confidently
                        develop and test
                      </li>
                      <li>
                        Maximize Resource Utilization: Utilize containers for
                        efficient infrastructure consumption
                      </li>
                      <li>Minimize Downtime: Perform isolated maintenance</li>
                      <li>
                        Increase Reuse and Decrease Overhead: Encourage sharing
                        on API driven architecture
                      </li>
                    </ul>
                    <h5 className="mt-2 mt-md-4 ft">Process & Culture.</h5>
                    <ul>
                      <li>
                        Streamline Feature Development: Sprint faster to keep up
                        with changing needs
                      </li>
                      <li>
                        Increase Innovation: Reorganize into domain specific,
                        end-to-end service teams
                      </li>
                      <li>
                        Avoid Tool/Expertise Lock-in: Choose the best
                        technique/technology for the specific problem
                      </li>
                      <li>
                        Adopt Existing Third-party Tools: Integrate easily into
                        API driven ecosystems
                      </li>
                      <li>
                        Grow User Base/Expand Market: Extend capabilities to
                        external parties
                      </li>
                      <li>
                        Enable Business Consumption: Solve small problems with
                        measurable outcomes
                      </li>
                    </ul>
                  </div>
                  <div className="my-2 my-md-3">
                    <p className="ptext">
                      Maintaining monolithic applications often proves
                      challenging because it’s difficult to test and release
                      millions of lines of code for tiny changes (in most cases
                      only a few lines). But migrating to microservices is not
                      as simple as it sounds. It requires a big change
                      management process that often includes new team structures
                      (to say nothing of altering the mindset of the
                      organization!). To support the approach, technology stack
                      must also be upgraded. In the microservices scheme, an
                      application is built with a modular approach, making it
                      scalable and easier to deploy. With the right tools,
                      governance and automation in place, updates come much
                      easier.
                      <br />
                      <br />
                      While Monolith has complexity in codebase, microservices
                      poses the complexity of interaction between many services.
                    </p>
                    <div className="my-2 my-md-4 d-flex flex-column flex-md-row">
                      <div className="bgBlueLight col-md-6 pt-2">
                        <h4 className="btn bgOrange py-0 text-light">
                          Pain Points
                        </h4>
                        <ul>
                          <li>Code complexity & Maintainability</li>
                          <li>
                            Deployment becomes the bottleneck, fear to change,
                            lack of ownership
                          </li>
                          <li>Failure dependencies</li>
                          <li>One size doesn't fit all, hard to scale out</li>
                          <li>
                            Discrete hardware, 10% Utilization across servers
                          </li>
                          <li>Hardware centric culture</li>
                          <li>Operations - infinite mails and tickets</li>
                        </ul>
                      </div>
                      <div className="bgRedLight text-light col-md-6 pt-2">
                        <h4 className="btn bgOrange py-0  text-light ">
                          Benefits / ROI
                        </h4>
                        <ul>
                          <li>
                            Composability / Reusability / Ease of maintenance
                          </li>
                          <li>
                            Autonomy of teams, culture of change, deploy more,
                            deploy faster, deploy better. Ownership and DevOps
                            culture.
                          </li>
                          <li>Failure isolation and resiliency</li>
                          <li>Better scaling (out) and optimizations</li>
                          <li>
                            Hardware aggregated, assign resource to service
                            elastically
                          </li>
                          <li>Software centric culture</li>
                          <li>Complete automated, run in pilot mode</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </TabPane>
                <TabPane tabId="3">
                  <div className="d-flex flex-column flex-md-row justify-content-between text-light mt-4">
                    <div className="bgOrange w-100 p-3 p-md-3 my-2">
                      <ul>
                        <h3>Cultural Challenges</h3>
                        <li>You built, you run it</li>
                      </ul>
                    </div>
                    <div className="bgRed w-100 p-3 p-md-3 mx-0 mx-md-3 my-2">
                      <ul>
                        <h3>Architectural Challenges</h3>
                        <li>Dealing with asynchronicity</li>
                        <li>Cascading Failures</li>
                        <li>Discovery and Authentication of Services</li>
                        <li>Integration Tests</li>
                      </ul>
                    </div>
                    <div className="bgBlue w-100 p-3 p-md-3 my-2">
                      <ul>
                        <h3>Operational Challenges</h3>
                        <li>Duplication of processes and tools</li>
                        <li>
                          Complexity moves from components to interactions
                        </li>
                        <li>Debugging across components</li>
                        <li>Deployment</li>
                      </ul>
                    </div>
                  </div>
                  <p className="my-3 mt-md-4 pt-md-2">
                    Thankfully, current cloud-based distributed technologies
                    alleviate the burden of managing monolithic applications by
                    providing a platform to develop and deploy on a dime.
                  </p>
                  <div className="my-0 my-md-4">
                    <h5 className="ft mb-3">
                      Three key Technology Drivers to Address Microservices
                      Challenges.
                    </h5>
                    <h5 className="my-0 mb-3 mb-md-2	ft">
                      Hardware Aggregation.
                    </h5>
                    <p className="ptext">
                      As you refactor one large monolith application into
                      multiple independent services with their own services and
                      data layer, you probably would end up having 25+ services,
                      50+ databases (Cache, Relational, NoSQL, Graph, Bigtable,
                      Bigdata). Having them to deploy in Discrete Hardware
                      (server by server), the deployment complexity itself will
                      multiply to 50X at least. So, you essentially need to
                      aggregate the hardware, say you aggregate your
                      Compute/Network/Storage so that it looks like ONE big unit
                      with combined capacity and you keep deploying your
                      services & databases inside that aggregated cluster
                      transparent of underlying Compute/Network/Storage.
                      Thankfully, current cloud-based distributed technologies
                      offer many avenues to aggregate hardware across data
                      centers and geographies.
                    </p>
                    <div className="mt-2 mt-md-4">
                      <h5 className="my-0 mb-3 mb-md-2 ft">
                        Containerization & Continuous Delivery.
                      </h5>
                      <p className="ptext">
                        As you transform monolith to microservices, your big X
                        becomes 100 small x. If you deploy that 100 x as a
                        layered stack in discrete servers in a different way,
                        your deployment complexity would multiply to 1000X. To
                        address this challenge, you definitely need to unify the
                        delivery of services, make sure your services are
                        delivered in the same way and they are staged to the
                        production environment through some stringent quality
                        gates. To unify the delivery of multiple services in the
                        same way, Containerization play a big role and
                        Containers along with the Continuous Delivery channel
                        brings down your 1000X complexity to a factor of X.
                      </p>
                    </div>
                    <div className="d-flex flex-column align-items-start flex-md-row justify-md-between mt-2 mt-md-5">
                      <div className="row">
                        <div className="pr-0 pr-md-5">
                          <h5 className="my-0 mb-3 mb-md-2	mt-md-n3 ft">
                            Operation Automation.
                          </h5>
                          <p className="ptext">
                            An ideal microservices hosting platform is based on
                            geographically spanned cluster and hardware
                            agnostic. While this platform alleviates the burden
                            of managing many servers, operating systems etc., it
                            brings a new set of operational challenges like
                            debugging, logs tracing, many processes and tools
                            running in a single application. The operation
                            management paradigm is shifted from managing
                            Compute/Network/Storage and operating system to
                            managing geographically distributed clusters and
                            services management, their interaction. Thankfully,
                            current cloud-based service discovery and cluster
                            wide operation management technologies offer avenues
                            to aggregate those operational challenges.
                          </p>
                          <p className="ptext">
                            Essentially in a microservices ecosystem, you will
                            aggregate, extent & automate. You will aggregate
                            your hardware across DC’s and geographies, develop
                            microservices, bigdata, IOT applications based on
                            libraries and reusable services and continue to do
                            cluster and services automation toward running
                            everything in auto pilot mode.
                          </p>
                        </div>
                        <div className="w-75 mx-auto my-4">
                          <img
                            src={ms4}
                            alt="Operation Automation"
                            className="my-2 my-md-0 w-100 imgshadow"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="my-0 my-md-4">
                      <div className="my-2 my-md-4">
                        <div className="d-flex w-100 flex-wrap">
                          <div className="d-flex flex-column justify-content-around bgOrange">
                            <div className="rotate bgOrange vert-text">
                              <h6>Activites</h6>
                            </div>
                          </div>
                          <div className="d-flex w-100 bgBlueLight">
                            <div className="row justify-content-md-around py-md-3 px-md-5">
                              <div className="aggregate col-lg-3 col-md-6 col-12">
                                <h4 className="bgOrange text-light">
                                  Aggregate
                                </h4>
                                <div className="d-flex">
                                  <div>
                                    <ul className="p-3">
                                      <li>
                                        Aggregate computing, storage, network
                                        @software layer from any plublic/private
                                        cloud
                                      </li>
                                      <li>Scale in/out as per need</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="extend col-lg-3 col-md-6 col-12">
                                <h4 className="bgOrange py-0 text-light">
                                  Extend
                                </h4>
                                <div className="d-flex">
                                  <div>
                                    <ul className="p-3">
                                      <li>
                                        Develop micro service, <br /> IOT, big
                                        data quickly
                                        <br />
                                      </li>
                                      <li>Extend full proof frameworks</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="devops col-lg-3 col-md-6 col-12">
                                <h4 className="bgOrange py-0 text-light">
                                  DevOps
                                </h4>
                                <div className="d-flex">
                                  <div>
                                    <ul className="p-3">
                                      <li>
                                        Establish build/deployment pipeline
                                      </li>
                                      <li>Establish service orchestration</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="Operate col-lg-3 col-md-6 col-12">
                                <h4 className="bgOrange py-0 text-light">
                                  Operate
                                </h4>
                                <div className="d-flex">
                                  <div>
                                    <ul className="p-3">
                                      <li>Establish ALM</li>
                                      <li>
                                        Setup operational tools and frameworks
                                        to put your business in autopilot mode
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex">
                          <div className="d-flex flex-column justify-content-around bgOrange">
                            <div className="rotate bgOrange vert-text">
                              <h6>Output</h6>
                            </div>
                          </div>
                          <div className="d-flex w-100 bgRedLight">
                            <div className="row justify-content-md-around py-md-3 px-md-5 text-light">
                              <div className="aggregate col-lg-3 col-md-6 col-12">
                                <div className="d-flex">
                                  <div>
                                    <ul className="p-3">
                                      <li>
                                        Automated scripts to do end to end
                                        provisioning of entire platform in
                                        minutes
                                      </li>
                                      <li>
                                        Aggregated cluster capable of deploying
                                        microservice/IOT/Big Data Application
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="extend col-lg-3 col-md-6 col-12">
                                <div className="d-flex">
                                  <div>
                                    <ul className="p-3">
                                      <li>
                                        Develop micro service, <br /> IOT, big
                                        data quickly
                                        <br />
                                      </li>
                                      <li>Extend full proof frameworks</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="devops col-lg-3 col-md-6 col-12">
                                <div className="d-flex">
                                  <div>
                                    <ul className="p-3">
                                      <li>
                                        Establish build/deployment pipeline
                                      </li>
                                      <li>Establish service orchestration</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="Operate col-lg-3 col-md-6 col-12">
                                <div className="d-flex">
                                  <div>
                                    <ul className="p-3">
                                      <li>Establish ALM</li>
                                      <li>
                                        Setup operational tools and frameworks
                                        to put your business in autopilot mode
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <h5 className="ft mt-3">One Key Cultural Driver.</h5>
                      <p className="ptext">
                        Simply speaking the microservice world is “Solve small
                        problems, with small teams with measurable outcomes vs
                        solving 1 big problem with 1 large team.”
                        <br />
                        Since its small teams being responsible for end to end
                        success, it’s much essential to establish a culture that
                        “You built it, you run it”. Dev & Ops married, become
                        DevOps. It means each employee are skilled to Develop
                        small services and able to maintain its complete
                        lifecycle. That involves a big change in structure &
                        skills of the organization. Most of the microservices
                        adoption will be successful if this cultural
                        transformation is done right, we opine that it
                        contributes 90% towards your success. A typical
                        culturally changed organization will look like as below:
                      </p>
                      <div className="d-block my-4">
                        <img
                          src={ms6}
                          alt="One Key Cultural Driver"
                          className="microser imgshadow mx-auto w-75"
                        />
                      </div>
                    </div>
                  </div>
                </TabPane>
                <TabPane tabId="4">
                  <div className="d-block mt-4">
                    <p className="ptext mb-3">
                      SYNECTIKS, a trusted partner with experience migrating
                      monolithic applications to cloud and microservices
                      architecture, can help make the process seamless. Let us
                      help you make the shift so you can capitalize on business
                      opportunities faster.
                    </p>
                    <p>
                      SYNECTIKS has a flexible and effective way of migrating
                      monolithic applications to microservices, which includes
                      the following steps:
                    </p>
                    <div className="mx-auto w-75">
                      <img
                        src={ms7}
                        alt="migrating monolithic "
                        className="my-2 mt-md-4 microIm imgshadow"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="d-flex flex-column flex-md-row justify-content-between my-0 my-md-5">
                      <div className="bgOrange text-light w-100 p-2 p-md-3">
                        <h3>Discovery and Assessment.</h3>
                        <ul>
                          <li>
                            Meet with the Stakeholders, Infrastructure and
                            Application SME’s to gather detailed information
                            about the applications and databases.
                          </li>
                        </ul>
                      </div>
                      <div className="bgRed text-light w-100 mx-0 mx-md-3 p-2 p-md-3">
                        <h3>Business Readiness.</h3>
                        <ul>
                          <li>Business Transformation Challenges</li>
                          <li>Cultural Readiness</li>
                        </ul>
                      </div>
                      <div className="bgBlue text-light w-100 p-2 p-md-3">
                        <h3>
                          Existing Infrastructure and Applications Review.
                        </h3>
                        <ul>
                          <li>Application Functionality</li>
                          <li>Infrastructure & Deployment</li>
                          <li>Technology Stack</li>
                          <li>Data Structure</li>
                          <li>Interfaces</li>
                          <li>Security & Governance</li>
                          <li>Existing Pain Points</li>
                        </ul>
                      </div>
                    </div>
                    <p className="ptext mb-3">
                      Provide modernization options, along with Demo / POC how
                      the transition would look like.
                    </p>
                    <p className="ptext mb-3">
                      Based on the SYNECTIKS recommendations, provide proposed
                      LOE (Level of Effort) After mutual agreement, SYNECTIKS
                      begins with agile methodology, including:
                    </p>
                    <ul>
                      <li>
                        Get a deep understanding of the functionality of the
                        existing application.
                      </li>
                      <li>Create Migration RoadMap.</li>
                      <li>Create Risk Plan.</li>
                      <li>Create Target Architectures</li>
                      <li>
                        Create a project plan and share with all the
                        stakeholders.
                      </li>
                      <li>Split the application into smaller domains.</li>
                      <li>
                        Define the boundaries of the domains and microservices.
                      </li>
                      <li>Finalize the technology stack.</li>
                      <li>Generate infrastructure blueprints.</li>
                      <li>
                        Set up the foundation environment Put Continuous
                        Integration/Continuous Delivery (CI/CD) pipelines in
                        place.
                      </li>
                      <li>
                        Begin development sprints (SYNECTIKS prefers test-driven
                        development to minimize manual testing).
                      </li>
                      <li>
                        Help to use SYNECTIKS Application blocks / libraries to
                        do rapid transformation.
                      </li>
                    </ul>
                    <div>
                      <p className="ptext mb-3">
                        SYNECTIKS is committed to working with its customers to
                        meet almost any need.
                      </p>
                      <ul>
                        <li>
                          Adapt DevOps culture across organization, essential
                          for developing microservices, foster small,
                          independent teams within the organization to take over
                          ownership of the services.
                        </li>
                        <li>
                          Transform your hardware driven infrastructure to a
                          complete multi-cloud hybrid software driven system
                        </li>
                        <li>Streamline communications to ensure success</li>
                        <li>
                          Embrace CI best practices and automate CI/CD processes
                        </li>
                        <li>
                          Embrace operation automations to manage distributed
                          cluster and services With SYNECTIKS Xformation
                          platform, companies can take advantage of an API
                          driven cloud architecture and get going faster.
                        </li>
                      </ul>
                      <div className="mx-auto w-75">
                        <img
                          src={ms9}
                          alt="SYNECTIKS Xformation platform"
                          className="my-2 my-md-5 microser imgshadow mx-auto"
                        />
                      </div>
                      <div>
                        <p className="ptext mb-3">
                          How much effort it takes to perform a Monolith to
                          Microservices transformation?
                        </p>
                        <p className="ptext mb-3">
                          Though it depends on complexity & sizing of the
                          existing applications, you could accelerate the
                          transformation process by engaging a microservices
                          SYNECTIKS who can help you as follows:
                        </p>
                        <ul>
                          <li>
                            Accelerate the transformation by using open
                            application and automation blocks and frameworks
                            built by SYNECTIKS team, so that you can leverage
                            lot of existing code and reuse your maximum existing
                            codebase. A typical large transformation project can
                            take a year long effort and often don’t yield
                            results. We recommend taking bottom - up approach,
                            take a small piece of functionality, and develop the
                            services and foundation for it rapidly by using
                            existing application blocks and automation
                            framework. You would minimize your risks by
                            investing a small time & money and continue to do so
                            when you see a significant ROI. The key aspect is
                            time. The advantage of making us your microservices
                            partner is, our open source contribution helps us to
                            deliver values that vary rapidly.
                          </li>
                          <li>
                            Embrace DevOps centric culture by delivering you
                            skilled DevOps resources.
                          </li>
                        </ul>
                        <div className="my-0 my-md-5">
                          <h5 className="ft">
                            Why SYNECTIKS should be your trusted microservice
                            partner?
                          </h5>
                          <div className="mx-auto w-75">
                            <img
                              src={ms8}
                              alt="microservice partner"
                              className="my-2 mt-md-4 microser70 imgshadow mx-auto"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
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

export default Microservice;
