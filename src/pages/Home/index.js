import React, { useState } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";
import circle2 from "../../images/HomePage/Transformation.png";
import circle3 from "../../images/HomePage/Solutions.png";
import circle1 from "../../images/HomePage/Open Platform.jpg";
import Slider1 from "../../images/HomePage/Slider1.jpg";
import Slider2 from "../../images/HomePage/Slider2.jpg";
import Slider3 from "../../images/HomePage/Slider3.jpg";
import Tabs from "./Tabs";
import Partners from "./Partners";
import GetInTouch from "./Getintouch";
import MobTabs from "../Company/MobTab";
import SuccessStories from "./SuccessStories";
import "../../css/home.css";

const Home = () => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <HomeWrapper>
      <Helmet>
        <link rel="canonical" href="https://synectiks.com" />
        <meta
          name="keywords"
          content="cloud migration strategy, cloud migration services, aws cloud migration, how will you design a aws cloud migration of a legacy system, legacy application migration to the cloud practicability and methodology, cloud application migration, cloud migration, DevOps best practices, DevOps architecture, DevOps maturity model, DevOps as a service, DevOps culture, DevOps goals, DevOps workflow, cncf, event driven architecture microservices deployment architecture, aws microservices, java microservices, monolithic vs microservices, building microservices: designing fine-grained systems, software platform, cloud infrastructure, cloud infrastructure as a service, orchestration tools, infrastructure automation, legacy application, transformation services, cloud business solutions, serverless deploy, cloud based architecture, public private hybrid cloud, cloud based hosting, cloud server providers, cloud solutions companies, private cloud providers, solution based, cloud computing companies to invest in, cloud infrastructure services, cloud servers providers, infrastructure cloud, microsoft cloud service provider,"
        />
        <meta
          name="description"
          content="As an Open Product based Cloud Solution provider, we help enterprises take advantage of public & private cloud and its infinite resources to migrate and modernize their business so that they outperform their peers by becoming truly disruptive."
        />
      </Helmet>
      <div id="owl-demo" className="owl-carousel owl-theme">
        <div className="item">
          <div className="caption">
            <h3 className="animated delay-1s slow fadeInRight text-white">
              Accelerate your migration <br />& modernization Journey
            </h3>
            <p className="animated delay-2s slow fadeInRight">
              synectiks open xformation Platform and <br />
              deep expertise make your cloud transformation <br />
              safe and agile.
            </p>
            <a
              className="animated delay-3s slow fadeInRight btn btn-primary mt-2"
              href="https://synectiks.com/infrastructure-transformation/index.html"
            >
              Learn More
            </a>
          </div>
          <img
            src={Slider1}
            alt="Accelerate your migration and modernization journey"
          />
        </div>
        <div className="item">
          <div className="caption">
            <h3 className="">
              Optimize <br />
              DevOps transformation
            </h3>
            <p className="">
              we accelerate organization evolution <br />
              through open platform and <br />
              skilled resources.
            </p>
            <a
              href="https://synectiks.com/devops-transformation/index.html"
              className="btn btn-primary mt-2"
            >
              Learn More
            </a>
          </div>

          <img src={Slider2} alt="Optimize Devops Transformation" />
        </div>
        <div className="item">
          <div className="caption">
            <h3 className="">
              modernize your business, <br />
              adopt cloud native <br />
              microservices architecture
            </h3>
            <p className="">
              accelerate high performance reliable <br /> application delivery
              using microservices
              <br />
              across clouds.
            </p>
            <a
              href="https://synectiks.com/microservices/index.html"
              className="btn btn-primary mt-2"
            >
              Learn More
            </a>
          </div>

          <img
            src={Slider3}
            alt="modernize your business, adopt cloud native microservices architecture"
          />
        </div>
      </div>
      <div id="progbar" />
      <div className="d-block w-100 bgBlue px-md-5 py-4">
        <div className="container-fluid">
          <div className="heading1">
            <h2 className="textWhite text-left pb-4">
              We’ve always done things differently
              <span className="fa-3x l-0">...</span>
            </h2>
            <div className="circleFlex">
              <ScrollAnimation animateIn="fadeInUp">
                <div className="circle">
                  <img src={circle1} alt="open platform" />
                </div>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInUp">
                <div className="circlebig">
                  <img src={circle2} alt="transformation" />
                </div>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInUp">
                <div className="circle">
                  <img src={circle3} alt="solutions" />
                </div>
              </ScrollAnimation>
            </div>
            <div className="circletext">
              <p className="text-light">
                As an Open Product based Cloud Solution provider, we help
                enterprises take advantage of public & private cloud and its
                infinite resources to migrate and modernize their business so
                that they outperform their peers by becoming truly disruptive.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bgMain bgWhite w-100 d-block py-5 px-md-5">
        <div className="container-fluid">
          <div className="tabsHeading">
            <h2 className="pb-3">
              Areas of Expertise for Outcome Based Solution Offerings
            </h2>
          </div>
          <MobTabs />
          <Tabs />
        </div>
      </div>
      <div className="bgOrange w-100 d-block py-4 px-md-5">
        <div className="container-fluid">
          <h2 className="text-capitalize textWhite text-center pb-2">
            Our Partners
          </h2>
          <Partners />
        </div>
      </div>
      <SuccessStories />
      <div>
        <GetInTouch />
      </div>
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.section`{

`;
