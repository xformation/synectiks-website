import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
// import { Modal, ModalHeader, ModalBody } from "reactstrap"
// import ModalContact from "../../components/ModalContact"
import { FaBars } from 'react-icons/fa';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Layout from '../../components/layout';
import HybridCloud from '../../images/Hybrid/Hybrid Cloud.jpg';
import hybridIma from '../../images/Hybrid/HybridCloud.jpg';
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
  Navbar
} from 'reactstrap';
import classnames from 'classnames';
import AI from '../../images/Hybrid/AccelerateInnovation.png';
import RC from '../../images/Hybrid/Right Cloud.png';
import BCC from '../../images/Hybrid/BalanceCost&Control.png';
import EVL from '../../images/Hybrid/Eliminate Vendor Lock In.png';
import WM from '../../images/Hybrid/Workload Migration.png';
import IC from '../../images/Hybrid/Integrating Clouds.png';
import WC from '../../images/Hybrid/Workload Fragmentation.png';
import SPRT from '../../images/Hybrid/Support & Assistance.png';
import DRB from '../../images/Hybrid/Discovery&Assessment.png';
import DSCR from '../../images/Hybrid/DisasterRecoveryBackup.png';
import scr from '../../images/Hybrid/AWSBackup.png';
// import scrs from "../../images/Screenshot_4.png"
import WS from '../../images/Hybrid/Web Servers.png';
import ETL from '../../images/Hybrid/DataExtract.png';
import HRP from '../../images/Hybrid/HR Payroll.png';
import SLDR from '../../images/Hybrid/Supporting Local Data Regulations.png';
import GGEC from '../../images/Hybrid/Go Global and edge computing.png';
// import SCR5 from '../../images/Screenshot_5.png';
import SCR5 from '../../images/Hybrid/web-servers-hybrid-cloud.jpeg';
import ADT from '../../images/Hybrid/ApplicationDevelopmentandTesting.png';
// import HC from '../../images/Hybridcloud.png';
import ECC from '../../images/Hybrid/Embrace Cultural Changes.png';
import RCM from '../../images/Hybrid/Revamp change management.png';
import ICO from '../../images/Hybrid/Integrate cloud operations.png';
import AS from '../../images/Hybrid/Automatesupport.png';
import ST from '../../images/Hybrid/Shadow IT.png';
import TS from '../../images/Hybrid/Transformation Services.png';
import EM from '../../images/Hybrid/Engagement Model.png';
import LTR from '../../images/Hybrid/Long Term Retention.png';
import WO from '../../images/Hybrid/Optimization Service.png';
import DE from '../../images/Hybrid/DemoEnvironment.png';
import EA from '../../images/Hybrid/Extreme Automation.png';
import PCP from '../../images/Hybrid/Public Cloud Partnership.png';
import SCP from '../../images/Hybrid/Single Control plane.png';
import CS from '../../images/Hybrid/Compliance&Security.png';
import TM from '../../images/Hybrid/Time & Money.png';
import EE from '../../images/Hybrid/E2E Solution.png';
import EX from '../../images/Hybrid/Experience.png';
import EXP from '../../images/Hybrid/Expertise.png';
// import GSHC from '../../images/GettingStartedwithHybridCloud.png';
import styled from 'styled-components';
import SEO from '../../components/seo.js';
import BreadCrumbs from '../../components/Home/Breadcrumbs.js';

const Iaas = () => {
  const [activeTab, setActiveTab] = useState('1');
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const [isOpen, setNav] = useState(true);
  const toggleTab = () => {
    setNav(isOpen => !isOpen);
  };

  const onTop = () => {
    window.scroll(0, 0);
  };

  return (
    <Layout>
      <Helmet>
        <meta
          name="description"
          content="Synectiks can enable your enterprise journey to hybrid IT, regardless of your starting point."
        />
        <link
          rel="canonical"
          href="https://synectiks.com/hybrid-cloud/index.html"
        />
      </Helmet>
      <SEO title="Hybrid Cloud" />
      <IaasWrapper>
        <div className="container-fluid ">
          <div className="px-1 px-md-5 py-2 pt-md-5 text-justify">
            <BreadCrumbs
              title="Home"
              subtitle="Solutions"
              pageTitle="Hybrid Cloud"
            />
            <h1>Hybrid Cloud</h1>
          </div>
          <div className="">
            <Row className="position-relative">
              <div className="col-sm-12 col-md-12">
                <Navbar color="light" light expand="xl" className="topNav">
                  <NavbarToggler onClick={toggleNavbar} className="mr-2">
                    {/* <FaBars className='navbar-toggler-icon' /> */}
                    <AiOutlineMenu
                      onClick={toggleNavbar}
                      className="mr-2 svgcolor mobile-show mb-n4 navbar-toggler-icon"
                    />
                    <span className="my-1 mx-2 close">X</span>
                  </NavbarToggler>
                  <Collapse isOpen={!collapsed} navbar>
                    <Nav className="bgWhite d-flex my-2 my-md-4 w-85">
                      <NavItem className="one">
                        <NavLink
                          id="bgL"
                          className={classnames({ active: activeTab === '1' })}
                          onClick={() => {
                            toggle('1');
                            toggleTab();
                            onTop();
                          }}
                        >
                          UNDERSTANDING
                        </NavLink>
                      </NavItem>

                      <NavItem className="one">
                        <NavLink
                          id="bgLL"
                          className={classnames({ active: activeTab === '2' })}
                          onClick={() => {
                            toggle('2');
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
                          className={classnames({ active: activeTab === '3' })}
                          onClick={() => {
                            toggle('3');
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
                          className={classnames({ active: activeTab === '4' })}
                          onClick={() => {
                            toggle('4');
                            toggleTab();
                            onTop();
                          }}
                        >
                          SYNECTIKS DIFFERENTIATOR
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </Collapse>
                </Navbar>
                <TabContent activeTab={activeTab}>
                  <TabPane tabId="1">
                    <div>
                      <div className="">
                        <div className="w-100 hybJumbo">
                          <img
                            className="himage "
                            height="auto"
                            src={hybridIma}
                            alt="Hybrid Cloud"
                          />

                          <h3 className="">Why Hybrid Cloud?</h3>
                          <h4 className="py-1 py-md-3">
                            Public, Private, and Hybrid Clouds
                          </h4>
                          <p className="ptext">
                            Public cloud is what people think of when they hear
                            the word “cloud.” It’s ideal for application
                            development, scientific data processing, and
                            web-scale applications. On the downside, SLAs can be
                            weak and security can be limited. Exclusive use of
                            the public cloud becomes less economically feasible
                            as usage scales.
                          </p>
                          <p className="ptext">
                            Once applications hit a certain usage/cost
                            threshold, or have strict requirements, such as
                            security or data protection, that cannot be met by
                            the public cloud, organizations often consider a
                            private cloud. IT favors the private cloud for core
                            enterprise security; applications run on
                            infrastructure that is solely assigned to your
                            company and that facilitates auditing and
                            compliance. The reality is that most organizations
                            will need a blend of these options for different
                            purposes.
                          </p>
                          <p className="ptext">
                            This is referred to as a hybrid cloud. It allows
                            organizations to use the public cloud where it makes
                            sense, to create private clouds to support certain
                            application types, and to use advanced techniques
                            such as cloud hubbing situating critical hardware in
                            network data centers in close proximity to telecom
                            providers, content distribution networks, and
                            application component providers to place their
                            applications optimally to ensure rapid response
                            time. Hybrid cloud automates and modernizes the
                            applications estate, places workloads in their
                            optimal location, embeds security, enables an IT
                            brokerage model and creates a simple, agile,
                            on-demand environment. Hybrid Cloud also lays the
                            foundation for embracing new technologies such as
                            containerization, serverless, platform as a service
                            (PaaS), IoT and edge computing all with an eye
                            toward improving business outcomes.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="shadow p-4 p-md-4 bgWhite">
                      <h3>Key Drivers for Hybrid cloud adoption is:</h3>
                      <div className="">
                        <div className="my-1 my-md-3 d-flex flex-column flex-md-row justify-content-around align-items-center">
                          <img
                            src={AI}
                            alt="Hybrid cloud adoption"
                            className="w15 mr-0 mr-md-3"
                          />
                          <p className="marHybrid ptext">
                            Experiment with new ideas on the cloud. Build once
                            and run anywhere. With secure, easily managed,
                            low-cost cloud resources, companies can finally
                            break the 6-to-18-month application development
                            cycle. Many businesses take advantage of the initial
                            low cost and speed of provisioning servers in the
                            cloud to test new applications, then move production
                            apps to a private or hybrid cloud for better
                            performance and cost savings.
                          </p>
                        </div>
                        <div className="my-2 my-md-3 d-flex flex-column flex-md-row justify-content-around align-items-center">
                          <img
                            src={RC}
                            alt="virtual servers in the cloud"
                            className="w15 mr-0 mr-md-3"
                          />
                          <p className="marHybrid ptext">
                            Choose the best cloud to meet cost, performance,
                            regulatory, or data governance requirements.
                            Organizations that demand greater operational
                            flexibility and scalability, data that needs to stay
                            on-premises for compliance reasons can remain in
                            your data center, while application development and
                            testing, HPC, and capacity can take place in the
                            cloud. Also, a hybrid cloud environment allows for
                            “bursting,” or the temporary allocation of cloud
                            capacity for short periods, at a lower cost than
                            using physical and owned IT resources. This helps
                            prevent over-provisioning and resource abandonment
                            when the instances (virtual servers in the cloud)
                            are no longer needed.
                          </p>
                        </div>
                        <div className="my-2 my-md-3 d-flex flex-column flex-md-row justify-content-around align-items-center">
                          <img
                            src={BCC}
                            alt="operational flexibility and scalability"
                            className="w15 mr-0 mr-md-3"
                          />
                          <p className="marHybrid ptext">
                            Choose the best cloud to meet cost, performance,
                            regulatory, or data governance requirements.
                            Organizations that demand greater operational
                            flexibility and scalability, data that needs to stay
                            on-premises for compliance reasons can remain in
                            your data center, while application development and
                            testing, HPC, and capacity can take place in the
                            cloud. Also, a hybrid cloud environment allows for
                            “bursting,” or the temporary allocation of cloud
                            capacity for short periods, at a lower cost than
                            using physical and owned IT resources. This helps
                            prevent over-provisioning and resource abandonment
                            when the instances (virtual servers in the cloud)
                            are no longer needed.
                          </p>
                        </div>
                        <div className="my-2 my-md-3 d-flex flex-column flex-md-row justify-content-around align-items-center">
                          <img
                            src={EVL}
                            alt="global delivery"
                            className="w15 mr-0 mr-md-3"
                          />
                          <p className="marHybrid ptext">
                            Reduce dependency on proprietary services,
                            application tools, and cloud providers. To support
                            global delivery, companies are paying increasing
                            attention to the network performance from their end
                            users back to the applications being consumed.
                            Placing application servers close to the customer
                            and directly connecting with relevant networks helps
                            to ensure an optimal end-user experience.
                          </p>
                        </div>
                        <p className="ptext">
                          Ultimately, a hybrid IT environment enables a whole
                          new style of execution characterized by collaborative
                          development environments, consumer-controlled
                          personalized experiences, a cloud-first strategy, and
                          data-driven decisions arrived at with the help of
                          machine learning & AI.
                          <br /> <br /> For example, in a manufacturing
                          scenario, data from IoT sensors monitoring the
                          performance of machines on the factory floor can be
                          ingested using an edge computing infrastructure. Data
                          analytics is first performed locally; then the data is
                          transferred to a data lake in a cloud environment
                          where advanced analytics, AI and machine learning are
                          applied to larger data sets to gain critical insights.
                          These insights can be used to automatically initiate
                          actions in production & supply chain systems that
                          execute in a traditional infrastructure environment.
                          The hybrid IT components are managed in an integrated
                          fashion to deliver the end-to-end business processes.
                          <br /> <br /> As these examples demonstrate, the
                          potential benefits of hybrid IT are compelling, yet
                          there are notable challenges facing CIOs as they work
                          to embrace or accelerate hybrid cloud.
                        </p>
                      </div>
                    </div>
                    <div className="textColor text-center p-2 p-md-5">
                      <h3>Hybrid Cloud Challenges</h3>
                      <p className="ptext">
                        Migration of workloads and integration between the
                        private and public clouds are primary challenges.
                        Ensuring that applications and data do not become
                        fragmented between clouds is a key issue as well. The
                        challenge is how to accelerate the pace of change by
                        stitching together legacy environments — which aren’t
                        going away anytime soon for a variety of business,
                        security, compliance or technical reasons — with
                        emerging capabilities, creating a seamless hybrid IT
                        environment. Some of the key challenges are:
                      </p>
                      <div>
                        <div className="row">
                          <div className="col-sm-6 col-md-6 text-center">
                            <div className="d-flex flex-column align-items-center">
                              <img
                                src={WM}
                                alt="Workload Migration"
                                className="w20 m-0"
                              />
                              <h5 className="my-3">Workload Migration</h5>
                            </div>
                            <p>
                              Choosing when to use what cloud provider is a
                              daunting task as well as shifting legacy
                              applications present challenges.
                            </p>
                          </div>
                          <div className="col-sm-6 col-md-6 text-center">
                            <div className="d-flex flex-column align-items-center">
                              <img
                                src={IC}
                                alt="Integrating Clouds"
                                className="w20 m-0"
                              />
                              <h5 className="my-4">Integrating Clouds</h5>
                            </div>
                            <p>
                              Manage the public and private clouds together that
                              administration tasks become more difficult.
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-6 col-md-6 text-center">
                            <div className="d-flex flex-column align-items-center">
                              <img
                                src={WC}
                                alt="Workload Fragmentation"
                                className="w20 m-0"
                              />
                              <h5 className="my-3">Workload Fragmentation</h5>
                            </div>
                            <p>
                              Tracking resources and decommissioning them in a
                              timely manner when they are migrated.
                            </p>
                          </div>
                          <div className="col-sm-6 col-md-6 text-center">
                            <div className="d-flex flex-column align-items-center">
                              <img
                                src={SPRT}
                                alt="Support & Assistance"
                                className="w20 m-0"
                              />
                              <h5 className="my-3">Support & Assistance</h5>
                            </div>
                            <p>
                              Obtaining a unified support experience across
                              cloud providers during the outage and anomalies.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <h3> How Can I Use a Hybrid Cloud?</h3>
                        <p className="ptext">
                          From being able to migrate between clouds to
                          supporting local data regulations, hybrid cloud
                          enables the advanced level of management of computing
                          resources that is necessary to gain competitive
                          advantage in today’s business climate. However, simple
                          migration isn’t enough. It takes the ability to
                          seamlessly manage and move workloads and jobs between
                          clouds that provides the next level. Some of the
                          entry-level use cases for a hybrid cloud include:
                        </p>
                        <ul>
                          <li>Disaster Recovery/Backup</li>
                          <li>Application Development and Testing</li>
                          <li>Web Servers</li>
                          <li>
                            Data Extract, Transform, and Load (ETL) processes
                          </li>
                          <li>Machine learning and other analysis tasks</li>
                          <li>HR, Payroll, Productivity Applications</li>
                          <li>Supporting Local Data Regulations</li>
                          <li>Go Global and edge computing</li>
                        </ul>
                      </div>

                      <div className="row">
                        <div className="col-md-12">
                          <div className="d-flex align-items-center my-2 my-md-3">
                            <img
                              src={DSCR}
                              alt="Disaster Recovery / Backup"
                              className="w8 mr-2 mr-md-3 my-3 my-md-3"
                            />
                            <h5>Disaster Recovery/Backup</h5>
                          </div>
                          <div>
                            <p className="ptext">
                              Backup and disaster recovery is the most common
                              use case as it serves two primary benefits. First,
                              it allows you to use a non-production workload as
                              a proof-of-concept for your initial entry into a
                              cloud environment. Second, it allows you to create
                              immediate value for your organization by elevating
                              and testing your business continuity strategy.
                            </p>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <img
                            src={scr}
                            className="imgBx wimg wb-sm-100 my-3 my-md-2 mx-auto"
                            alt="Backup and disaster recovery"
                          />
                        </div>
                      </div>

                      <div>
                        <div className="d-flex align-items-center">
                          <img
                            src={ADT}
                            alt="Application Development and Testing"
                            className="w15 mr-2 mr-md-3 my-2 my-md-3"
                          />
                          <h5>Application Development and Testing</h5>
                        </div>
                        <p className="ptext">
                          Application development and testing or “DevTest” is
                          another popular use case, particularly in
                          organizations focused on innovation. Many customers
                          move their dev/test environments to the cloud to gain
                          access to elastic and on-demand IT resources, while
                          leaving their production application and database on
                          premises.
                        </p>
                      </div>
                      <div>
                        <div className="d-flex align-items-center">
                          <img
                            src={WS}
                            alt="Web Servers"
                            className="whbd9 mr-2 mr-md-3 my-2 my-md-3"
                          />
                          <h4>Web Servers</h4>
                        </div>
                        <p className="ptext">
                          Third, customers move web servers to the cloud to take
                          advantage of the elastic compute resources. This
                          allows a customer to leverage auto-scaling to
                          right-size, compute resources as demand spikes or
                          declines. Organizations can also use the cloud for
                          content delivery, placing their content closer to
                          their end-users to reduce latency. This also adds
                          another layer of business continuity as these,
                          customer-facing applications can be dispersed and
                          stored across multiple locations to prevent a single
                          point of failure.
                        </p>
                      </div>
                      <div className="text-center">
                        <img
                          src={SCR5}
                          className="imgBx wimg w-sm-100 mx-auto my-3 my-md-4"
                          alt="Data Extract, Transform,"
                        />
                      </div>
                      <div>
                        <div className="d-flex align-items-center">
                          <img
                            src={ETL}
                            alt="Data Extract, Transform, and Load (ETL) processes"
                            className="whbd7 mr-2 mr-md-3 my-2 my-md-3"
                          />
                          <h5>
                            Data Extract, Transform, and Load (ETL) processes
                          </h5>
                        </div>
                        <p className="ptext">
                          Data Extract, Transform, and Load (ETL) processes can
                          be quite resource-intensive and thus overwhelm the
                          capabilities of an internal cloud and datacenter.
                          Machine learning and other analysis tasks can also be
                          moved based on lowest cost and availability.
                        </p>
                      </div>
                      <div>
                        <div className="d-flex align-items-center">
                          <img
                            src={HRP}
                            alt="HR, Payroll, Productivity Applications"
                            className="whbd9  mr-2 mr-md-3 my-2 my-md-3"
                          />
                          <h5>HR, Payroll, Productivity Applications</h5>
                        </div>
                        <p className="ptext">
                          Many customers are moving first-workload applications
                          to the cloud as their entry point. These entry-point
                          applications include Microsoft Active Directory,
                          Microsoft SharePoint, Microsoft Exchange, and
                          collaboration tools. Customers may also choose to move
                          front-office workloads, such as CRM, or operational
                          applications, such as HR and payroll. Moving these to
                          the cloud will provide:
                        </p>
                        <ul>
                          <li>
                            Scalable resources for applications and ever-growing
                            data consumption
                          </li>
                          <li>
                            Improved accessibility – access data anywhere and
                            from any device
                          </li>
                          <li>Improved business productivity</li>
                          <li>Easier to address compliance</li>
                          <li>
                            Common compute architecture built on Intel
                            delivering industry leading performance, security,
                            and support for the widest set of Enterprise
                            applications.
                          </li>
                        </ul>
                      </div>
                      <div>
                        <div className="d-flex align-items-center">
                          <img
                            src={SLDR}
                            alt="Supporting Local Data Regulations"
                            className="whbd7 mr-2 mr-md-3 my-2 my-md-3"
                          />
                          <h5>Supporting Local Data Regulations</h5>
                        </div>
                        <p className="ptext">
                          There are increasing legal and regulatory requirements
                          for data storage and processing. For example, European
                          data protection laws require protections for personal
                          information that are significantly different from
                          regulations in the United States and other regions. In
                          the United States, medical privacy laws such as HIPAA
                          and others create strict requirements on storage and
                          use of medical data. Utilizing a hybrid cloud is a
                          step in the right direction because you can use public
                          cloud providers in specific regions to support the
                          regulations for processing and storage.{' '}
                        </p>
                      </div>
                      <div>
                        <div className="d-flex align-items-center">
                          <img
                            src={GGEC}
                            alt="Go Global and edge computing"
                            className="whbd9  mr-2 mr-md-3 my-2 my-md-3"
                          />
                          <h5>Go Global and edge computing </h5>
                        </div>
                        <p className="ptext">
                          To deliver a good experience, enterprises need to be
                          as close to customers as possible, and they need to
                          understand how customers consume applications, as well
                          as what components (payments, ads, videos) are
                          required from outside sources. Using a hybrid cloud,
                          enterprises can set up multiple availability zones
                          under their control, connect with cloud service
                          providers in regional markets, and use edge computing
                          techniques to forge a direct connection to public
                          cloud resources.
                        </p>
                      </div>
                    </div>
                  </TabPane>
                  <TabPane tabId="2">
                    <div className="">
                      <div className="row">
                        <div className="col-md-6">
                          {/* <h2 className=''>GETTING STARTED TO HYBRID CLOUD</h2> */}
                          <p className="ptext">
                            The first step is for CIOs to connect with the
                            business to establish clear lines of communication
                            and to set common goals. Within the IT organization,
                            CIOs must set policies that identify the need to
                            prepare for hybrid cloud as a priority for overall
                            IT strategies. Then we recommend assessing the
                            company’s applications and IT estate and creating a
                            roadmap to guide the journey to optimal hybrid
                            cloud. This roadmap should compare current and
                            future run costs to create a business case for
                            change; assess application and workload placement
                            and data locality options; recommend application
                            transformation requirements; consider IT policy and
                            operating model factors; and ultimately produce
                            clear, data-based recommendations with a proposed
                            execution plan to enable hybrid IT transformation to
                            happen. Getting there will require transforming and
                            migrating applications, integrating and
                            orchestrating environments, automating and
                            monitoring business services, enabling digital
                            processes, and integrating data and security.{' '}
                          </p>
                        </div>
                        <div className="col-md-6">
                          <img
                            src={HybridCloud}
                            alt="Key Strategic Drivers"
                            className="w-75"
                          />
                        </div>
                      </div>
                      <div>
                        <h4>Key Strategic Drivers</h4>
                        <p className="ptext">
                          As companies embrace hybrid Cloud, they must address
                          both technology and the human side of change. There
                          are several key actions to take:
                        </p>
                      </div>
                      <div className="row">
                        <div className="d-flex flex-column flex-md-row align-items-center">
                          <img
                            src={ECC}
                            alt="Embrace Cultural Changes"
                            className="w15 mr-5"
                          />
                          <div>
                            <h5>Embrace Cultural Changes</h5>
                            <p className="ptext">
                              As the organization start embracing hybrid cloud
                              and take benefits of Serverless, PaaS, IoT and
                              edge computing, so the workforce should become
                              more integrated, multifunctional, flexible and
                              agile. Existing and new IT stuffs must adept cloud
                              technologies, agile methodologies so that they can
                              build, deploy and scale applications across
                              multiple infrastructure environments using Agile
                              and DevOps processes. Most importantly companies
                              need to foster a culture of learning at scale.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="d-flex flex-column flex-md-row align-items-center mt-0 mt-md-3">
                          <img
                            src={RCM}
                            alt="Revamp Change Management"
                            className="w15 mr-5"
                          />
                          <div>
                            <h5>Revamp Change Management</h5>
                            <p className="ptext">
                              The existing governance processes, gates and
                              approval procedures designed for traditional
                              legacy IT environments are no longer appropriate
                              in a cloud environment. Companies should revamp
                              their change management systems to allow changes
                              to happen quickly and, using automated workflows,
                              to reduce manual intervention.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="d-flex flex-column flex-md-row align-items-center mt-0 mt-md-3">
                          <img
                            src={ICO}
                            alt="Integrate Cloud Operations"
                            className="w15 mr-5"
                          />
                          <div>
                            <h5>Integrate Cloud Operations</h5>
                            <p className="ptext">
                              As organizations move workloads to the cloud, the
                              IT operations function should adapt to manage both
                              on-premises and cloud-based applications. This new
                              model, called CloudOps, can provide continuous
                              integrated operations in a multi-cloud environment
                              to enable rapid response to events, incidents and
                              requests. Adding DevOps to the mix then utilizes
                              automation, integration and organizational change
                              to enable more frequent enhancements that result
                              in higher quality software.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="d-flex flex-column flex-md-row align-items-center mt-0 mt-md-3">
                          <img
                            src={AS}
                            alt="Automate support"
                            className="w15 mr-5"
                          />
                          <div>
                            <h5>Automate support</h5>
                            <p className="ptext">
                              To the extent possible, automate IT support
                              functions. For example, the traditional trouble
                              ticket system can be manually intensive and
                              inefficient. Automation can improve service and
                              free up IT personnel for higher-level activities.
                              Longer term, companies will be able to deploy
                              machine learning and AI to take log data from
                              cloud-based systems and automatically take actions
                              to resolve or even prevent incidents. The idea is
                              to learn once, fix with code and share learnings
                              to improve code over time and scale knowledge.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="row mlr ">
                        <div className="d-flex flex-column flex-md-row align-items-center mt-0 mt-md-3">
                          <img
                            src={ST}
                            alt="Manage “Shadow IT”"
                            className="w15 mr-5"
                          />
                          <div>
                            <h5>Manage “Shadow IT”</h5>
                            <p className="ptext">
                              Business units are often acquiring the cloud
                              services they need because IT moves too slowly. At
                              some point, those services must be integrated back
                              into the traditional IT environment for
                              operational and security reasons through a
                              services governance model that encompasses hybrid
                              IT elements. In addition, it’s important for CIOs
                              to have a handle on what the enterprise is
                              spending on IT services. The only way to
                              accomplish this is to adopt hybrid IT and
                              demonstrate to business units that IT can support
                              the pace and scale that the business requires.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabPane>
                  <TabPane tabId="3">
                    <div>
                      {/* <h2 className=''>HOW SYNECTIKS CAN HELP</h2> */}
                      <p className="">
                        Synectiks can enable your enterprise journey to hybrid
                        IT, regardless of your starting point.
                      </p>
                      <div className="row my-2 my-md-5">
                        <div className="d-flex flex-column flex-md-row align-items-center">
                          <img
                            src={DRB}
                            alt="Discovery & Assessment"
                            className="w10 mr-0 mr-md-5 mt-n3"
                          />
                          <div>
                            <h5>Discovery & Assessment</h5>
                            <p className="ptext">
                              Our discovery and assessment services can help you
                              draft a hybrid IT roadmap with a clearly defined
                              business case and prioritized recommendations by
                              workload or accelerate efforts already underway.
                              Our recommendations reflect deep industry
                              knowledge and contextual knowledge about your
                              business.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="d-flex flex-column flex-md-row align-items-center">
                          <img
                            src={TS}
                            alt="Transformation Services"
                            className="w15 mr-md-5 mr-0 mt-n3"
                          />
                          <div className="ml-0 ml-md-4">
                            <h5>Transformation Services</h5>
                            <p className="ptext">
                              You can access our open Xformation platform
                              products and resource teams to adopt change
                              quickly — from application migration,
                              transformation and integration to cloud-native
                              apps development, containerization, platform
                              services and microservices — to enable your
                              enterprise to thrive in public and virtual private
                              environments. Synectiks xformation platform
                              coupled with its Hybrid cross cloud infrastructure
                              delivers you the maximum flexibility to run/move
                              your high performant workloads across clouds and
                              manage them through a single pane of glass
                            </p>
                          </div>
                        </div>
                      </div>
                      <blockquote className="blockquote blockquote-custom bg-white p-5 shadow rounded my-2 my-md-5">
                        <div className="blockquote-custom-icon bg-info shadow-sm">
                          <i className="fa fa-quote-left text-white" />
                        </div>
                        <p className="mb-0 mt-1 mt-md-2 font-italic">
                          "Synectiks managed services helped us to consolidate
                          our entire business from 4 different DC’s to a hybrid
                          cloud that is fully software defined and microservices
                          based ensuring our scalability and performance SLA."
                        </p>
                        <footer className="blockquote-footer pt-2 mt-2 pt-md-4 mt-md-4 border-top">
                          Top 2 Motor Industry
                          <br />
                          <cite title="Source Title">
                            (Did complete software defined transformation
                            Modernization)
                          </cite>
                        </footer>
                      </blockquote>
                    </div>
                  </TabPane>
                  <TabPane tabId="4">
                    <div className="">
                      <div className="">
                        {/* <h3>
													<b>Synectiks</b> Differentiator
												</h3> */}
                        <p className="ptext">
                          We go beyond creating a strategy: Synectiks helps you
                          plan it, do it, run it and manage it.
                        </p>

                        <h5 className="text-center mt-md-4">
                          Top 12 Reasons to select Synectiks as your Hybrid
                          Cloud Partner:
                        </h5>
                      </div>

                      <div className="my-2 my-md-4">
                        <div className="row">
                          <div className="col-sm-4 col-md-4 text-center d-flex align-items-center flex-column">
                            <div className="d-flex align-items-center flex-column">
                              <img
                                src={EX}
                                alt="Experience"
                                className="tw m-0"
                              />
                              <h5 className="my-2 my-md-3">Experience</h5>
                            </div>
                            <p className="text-center">
                              10+ Large Scale Hybrid Cloud Transformation
                            </p>
                          </div>
                          <div className="col-sm-4 col-md-4 text-center d-flex align-items-center flex-column">
                            <div className="d-flex align-items-center flex-column">
                              <img
                                src={EXP}
                                alt="Expertise"
                                className="tw m-0"
                              />
                              <h5 className="my-2 my-md-4">Expertise</h5>
                            </div>
                            <p>
                              Experience Team with proven track record of
                              CloudOps delivery enabled with DevSecOps
                              Capabilities
                            </p>
                          </div>
                          <div className="col-sm-4 col-md-4 text-center d-flex align-items-center flex-column">
                            <div className="d-flex align-items-center flex-column">
                              <img
                                src={TM}
                                alt="Time & Money"
                                className="tw m-0"
                              />
                              <h5 className="my-2 my-md-3">Time & Money</h5>
                            </div>
                            <p>
                              Our open Product Driven Delivery Model allows
                              customers to quickly build, deliver and
                              orchestrate cross cloud services @50% time & cost.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="row">
                          <div className="col-sm-4 col-md-4 text-center d-flex align-items-center flex-column">
                            <div className="d-flex align-items-center flex-column">
                              <img
                                src={EE}
                                alt="E2E Solution"
                                className="tw m-0"
                              />
                              <h5 className="my-4">E2E Solution</h5>
                            </div>
                            <p>
                              Single point of contact for Application Migration,
                              Transformation and Integration to cloud-native
                              Apps services.
                            </p>
                          </div>
                          <div className="col-sm-4 col-md-4 text-center d-flex align-items-center flex-column">
                            <div className="d-flex align-items-center flex-column">
                              <img
                                src={SCP}
                                alt="Single Control plane"
                                className="tw m-0"
                              />
                              <h5 className="my-3">Single Control plane</h5>
                            </div>
                            <p>
                              Xformation is a single interface and platform to
                              manage all your workloads distributed across
                              multiple clouds and boundaries within a single
                              control plane.
                            </p>
                          </div>
                          <div
                            className="co
                          l-sm-4 col-md-4 text-center"
                          >
                            <div className="d-flex align-items-center flex-column">
                              <img
                                src={CS}
                                alt="Compliance & Security"
                                className="tw m-0"
                              />
                              <h5 className="my-2 my-md-4">
                                Compliance & Security
                              </h5>
                            </div>
                            <p>
                              Our compliance and security assessment tools makes
                              sure your hybrid cloud journey meet your business
                              compliance.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="row">
                          <div className="col-sm-4 col-md-4 text-center">
                            <div className="d-flex align-items-center flex-column">
                              <img
                                src={EA}
                                alt="Extreme Automation"
                                className="tw m-0"
                              />
                              <h5 className="my-2 my-md-3">
                                Extreme Automation
                              </h5>
                            </div>
                            <p>
                              Use our existing automation capabilities to
                              automate infrastructure, operations, security in
                              hybrid IT environment.
                            </p>
                          </div>
                          <div className="col-sm-4 col-md-4 text-center">
                            <div className="d-flex align-items-center flex-column">
                              <img
                                src={PCP}
                                alt="Public Cloud Partnership"
                                className="tw m-0"
                              />
                              <h5 className="my-2 my-md-4">
                                Public Cloud Partnership
                              </h5>
                            </div>
                            <p>
                              Our advanced partnership with major public cloud
                              providers help you to get support at every stage.
                            </p>
                          </div>
                          <div className="col-sm-4 col-md-4 text-center">
                            <div className="d-flex text-center px-5">
                              <div>
                                <div className="d-flex align-items-center flex-column">
                                  <img
                                    src={DE}
                                    alt="Demo Environment"
                                    className="tw m-0"
                                  />
                                  <h5 className="my-2 my-md-3">
                                    Demo Environment
                                  </h5>
                                </div>
                                <p>
                                  Avail the opportunity to quickly create demo
                                  hybrid cloud setup in our existing hybrid IT
                                  environment and testify you key business use
                                  cases.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mb-4">
                        <div className="row">
                          <div className="col-sm-4 col-md-4 text-center">
                            <div className="d-flex align-items-center flex-column">
                              <img
                                src={WO}
                                alt="Optimization Service"
                                className="tw m-0"
                              />
                              <h5 className="my-2 my-md-4">
                                Optimization Service
                              </h5>
                            </div>
                            <p>
                              We do optimal resource pooling from multiple
                              clouds.
                            </p>
                          </div>
                          <div className="col-sm-4 col-md-4 text-center">
                            <div className="d-flex align-items-center flex-column">
                              <img
                                src={EM}
                                alt="Engagement Model"
                                className="tw m-0"
                              />
                              <h5 className="my-2 my-md-3">Engagement Model</h5>
                            </div>
                            <p>
                              Our every engagement focused on empowerment – not
                              dependency
                            </p>
                          </div>
                          <div className="col-sm-4 col-md-4 text-center">
                            <div className="d-flex align-items-center flex-column">
                              <img
                                src={LTR}
                                alt="Long Term Retention"
                                className="tw m-0"
                              />
                              <h5 className="my-2 my-md-4">
                                Long Term Retention
                              </h5>
                            </div>
                            <p>100% Customer Retention Rate.</p>
                          </div>
                        </div>
                        <p className="ptext">
                          Finally, we help you run it all at a lower cost using
                          CloudOps delivery enabled with DevSecOps capabilities
                          and extreme automation from our Synectiks Xformation
                          platform driven services delivery model. Xformation
                          Platform allows to quickly build and deliver and
                          orchestrate cross cloud services, at-scale, repeatable
                          offerings and solutions that help to drive your Hybrid
                          Cloud journey @50% time & cost. Xformation is a single
                          interface and platform to manage all your workloads
                          distributed across multiple clouds and boundaries
                          within a single control plane. <br />
                          Now is the time to act. Don’t be disrupted — be the
                          disruptor. Let us help you innovate and transform to
                          differentiate with speed and quality. That’s
                          Synectiks. That’s transformation Delivered in open
                          product based solutioning model.
                        </p>
                      </div>
                    </div>
                  </TabPane>
                </TabContent>
              </div>
            </Row>
          </div>
        </div>
      </IaasWrapper>
      {/* <script
        dangerouslySetInnerHTML={{
          __html: `
            var vv_base_id = 'q00IB13hyn';
var vv_ext_id = '5d53ed9a';
var __ibaseUrl = (("https:" == document.location.protocol) ? "https://frontend.id-visitors.com" : "http://frontend.id-visitors.com");
(function () {
var va = document.createElement('script'); va.type = 'text/javascript'; va.async = true; va.src = __ibaseUrl + '/cscripts/' + vv_base_id + '-' + vv_ext_id + '.js'; var sv = document.getElementsByTagName('script')[0]; sv.parentNode.insertBefore(va, sv); })();
`
        }}
      /> */}
    </Layout>
  );
};

export default Iaas;

const IaasWrapper = styled.div`
.bshadow {
	    border: 5px solid white;
    box-shadow: 0px 0px 9px 0px black;
}
.ptext{
	text-align: left;
}
.w-85{
  /* width: 87vw; */
	position: relative;
	top: 20px;
	left:0px;
    border: 1px solid var(--textColor);
    background: var(--synectiksWhite);
    justify-content: flex-start;
}
padding:5rem 1rem;
.topNav{
	position: fixed;
	z-index: 9999;
	top: 97px;
  background: white;
  z-index: 9999;
  width: 100%;
  height: 60px;
  padding: 0 0 20px 0;
  left: 0px;
}
.navbar-light .navbar-toggler {
		color: rgba(0, 0, 0, .3);
		border-color: rgba(0, 0, 0, 0);
  }
  .navbar-toggler > .close {
		display: inline;
	}
	.navbar-toggler > .navbar-toggler-icon {
		display: none;
	}
	.navbar-toggler:not(.collapsed) > .close {
		display: none;
	}
	.navbar-toggler:not(.collapsed) > .navbar-toggler-icon {
		display: inline;
	}
h1,h2,h3,h4,h5,h5,p,ul{
  text-align: left;
}
.hybJumbo{
  display:flex;
  flex-direction: column;
  align-items: center;
  .himage {
		width: 100%;
    height: auto;
    float: none;
		box-shadow: 5px 5px 5px #789;
		margin-bottom: 10px;
    margin-left:0rem;
  }
}
.marHybrid ptext{
  margin-left: 0rem;
}
.w-sm-100{
  width: 100%;
}
.wb-sm-100{
	width: 100%;
	background: white;
}
.hybridFixed{
  position: fixed;
  top:6rem;
  left:0;
  z-index: 99;
}
a#bgL,
a#bgLL,
a#bgLLL {
    padding: 0.5rem 1.5rem;
    font-size: 12px;
    height: auto;
    /* background: white !important; */
    text-align: left;
    /* display:flex;
    justify-content: space-between; */
}
a#bgL.active,
a#bgLL.active,
a#bgLLL.active  {
    border-bottom: 5px solid #007cc2;
    background: bgBlue !important;
    text-align: left;
    color: var(--synectiksWhite);
    border-radius: 0px;
    /* padding: 0.5rem 1.5rem; */
    font-size: 12px;
    height: auto;
    width:100%;
}
.imgHyb {
	margin-right: 25px !important;
  width: 55px !important;
  z-index: 999;
  position: relative;
}
.one {
	z-index: 99999;
	background: white;
	width: 100%;
}
.one:hover {
	z-index: 99999;
	background: rgb(0,124,194);
	color: var(--synectiksWhite);
}
ul.tabList.nav.flex-column {
		position: relative;
		z-index: 99999;
		width: 100%;
		left: 0rem;
	}
	.tabList {
    display:block;
  }
  .tabsHide {
    display: none;
  }
h1{
  font-size:32px;
}
h2{
 font-size: 26px;
}
h3{
  font-size:22px;
}
h4{
  font-size:18px;
}
p{
  font-size:18px;
}
.hybmt{
  margin-top: 2.5rem;
}
.nav-link.active{
  background: var(--synectiksBlue);
  color: var(--synectiksWhite);
}
.logo-btn {
    font-size:2rem;
    background: white;
    border: none;
    outline: none;
    width: 100vw;
    padding: 0.6rem;
    text-align: left;
    box-shadow: 2px 1px 10px rgba(0,0,0,0.3);
    color: rgba(0,0,0,0.5);
}

    .logo-btn:hover {
      cursor: pointer;
    }
      .tab-content>.active{
        padding:0rem 0.5rem;
      }
      	.whbd9 {
		width: 25%;
  }
  	.whbd7 {
		width:25%;
  }
	.navbar-light .navbar-toggler-icon{
		display: none;
	}
 .w20{
		width:25%;
	}
	.w8{
		width: 25%;
	}
  .w15,.w10 {
	width: 25%;
}


@media (min-width: 576px){
	.ptext{
		text-align: justify;
	}
	padding: 0rem 1rem;
	.topNav{
	position: relative;
	top: 0px;
	z-index: 999;
}
	.one {
	z-index: 99999;
	background: white;
	width: auto;
}
  .hybJumbo{
    display:block;
    	.himage {
		width: 50%;
		height: auto;
		box-shadow: 5px 5px 5px #789;
		float: right;
		margin-left: 2rem;
		margin-bottom: 10px;
  }
  }
  .w15 {
	width: 8%;
}
.w10{
	width: 10%;
}
  	.whbd7 {
		width: 7%;
	}
  	.whbd9 {
		width: 8%;
  }
  .w18{
    width:
  }
  .w20{
    width: 16%;
	}
	.w8{
		width: 8%;
	}
.w-85{
  /* width: 87vw; */
	position: relative;
	top: 0px;
	left: 3%;
    border: 1px solid var(--textColor);
    background: var(--synectiksWhite);
    justify-content: flex-start;
}
  ul.nav.flex-column {
		position: relative;
		z-index: 99999;
		width: 100%;
		/* width: 25vw; */
		left: 0rem;
  }

	ul.nav.flex-column > li > a {
		width: 100%;
		color: rgba(0, 0, 0, 0.8);
		height: 10vh;
		font-size:14px;
		cursor: pointer;
		/* padding-left: 3.2rem; */
  }
  ul.nav.flex-column > li > a {
    width: 100%;
    color: rgba(0,0,0,0.8);
    height: 10vh;
    font-size: 15px;
    cursor: pointer;
  }
 .tab-content>.active{
        padding:0rem 4rem;
      }
	}
  a#bgL,a#bgLL,a#bgLLL{
    background: bgBlue !important;
    text-align: left;
     font-size: 14px;
     cursor: pointer;
  }

a#bgL.active {
  border-bottom: 5px solid #007cc2;
  position: relative;
	/* padding-left: 1rem !important; */
	background: bgBlue !important;
  font-size: 14px;
}
a#bgLL.active {
  border-bottom: 5px solid #007cc2;
  position: relative;
	/* padding-left: 1rem !important; */
	background: bgBlue !important;
   font-size: 14px;
}
a#bgLLL.active {
  position: relative;
	border-bottom: 5px solid #007cc2;
	/* padding-left: 1rem !important; */
	background: bgBlue !important;
   font-size: 14px;
}

   .logo-btn {
    display: none;
  }

  .bxshd{
    box-shadow: 0px 0px 0px 0px lightgray;
  }
.nav-link.active{
  background: var(--synectiksBlue);
  color: var(--synectiksWhite);
}
.hbh1 {
    font-size: 2.5rem;
}
.hybridFixed{
       display: block;
    height: auto;
    position: sticky;
    top: 16%;
    padding-bottom: 21.4rem;
    padding-top: 2.4rem;
}
.nav-item > a.active, .nav-item > a:active{
  height: auto;
}
h2{
  font-size: 2rem;
}
h3{
  font-size:1.75rem;
}
h4{
   font-size: 1.5rem;
}
}
@media(min-width:768px){
	a#bgLLL.active:after{
    top: 100%;
	left: 50%;
	border: solid transparent;
	content: " ";
	height: 0;
	width: 0;
	position: absolute;
	pointer-events: none;
	border-color: rgba(136, 183, 213, 0);
	border-top-color: var(--synectiksBlue);
	border-width: 20px;
	margin-left: -20px;
  }
	a#bgL.active:after{
 top: 100%;
	left: 50%;
	border: solid transparent;
	content: " ";
	height: 0;
	width: 0;
	position: absolute;
	pointer-events: none;
	border-color: rgba(136, 183, 213, 0);
	border-top-color: var(--synectiksBlue);
	border-width: 20px;
	margin-left: -20px;
  }
a#bgLL.active:after{
    top: 100%;
	left: 50%;
	border: solid transparent;
	content: " ";
	height: 0;
	width: 0;
	position: absolute;
	pointer-events: none;
	border-color: rgba(136, 183, 213, 0);
	border-top-color: var(--synectiksBlue);
	border-width: 20px;
	margin-left: -20px;
  }
  .w-sm-100{
  width: 75%;
}
.wb-sm-100{
	width: 50%;
	background: white;
}
  	.himage {
		width: 100%;
		height: auto;
		box-shadow: 5px 5px 5px #789;
		margin-right: 2rem;
		margin-bottom: 10px;
  }
  .bxshd{
    box-shadow: 0px 0px 0px 0px lightgray;
  }
}
@media(min-width:1024px){
 	.himage {
		width: 50%;
		height: auto;
		box-shadow: 5px 5px 5px #789;
		margin-left: 2rem;
		margin-bottom: 10px;
  }
  .bxshd{
    box-shadow: 0px 0px 0px 0px lightgray;
  }
}
`;
