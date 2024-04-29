import React from "react";
import Layout from "../../components/layout";
import styled from "styled-components";
// import syn from '../../images/secure-cyber.svg';
import BreadCrumbs from "../../components/Home/Breadcrumbs.js";
import SEO from "../../components/seo.js";
import syns from "../../images/BCCS.png";
const SecureBusiness = () => {
  return (
    <Layout>
      <div className="d-block w-100 py-3 px-md-5">
        <div className="container-fluid">
          <div className="text-justify">
            <BreadCrumbs
              title="Home"
              subtitle="Cloud Services"
              pageTitle="Business Continuity & Cyber Security"
            />
            <SEO title="Business Continuity & Cyber Security" />
            <h1>Business Continuity & Cyber Security</h1>
            <p className="mb-5">
              Build Business Resilience with modern Synectiks-Business
              Continuity solutions. Synectiks -Protect Cloud changes the game by
              integrating Data protection with high security. This synergy
              eliminates the complexity and makes security a center point of
              your solutions, keeping your Business protected and within your
              budget with no compromise on quality. With its full-stack
              anti-malware protection and comprehensive endpoint management,
              Synectiks -Protect Cloud combats advanced cyberattacks with a
              unique integration of protection technologies while simplifying
              daily IT operations, endpoint deployments, management, and
              reporting.
            </p>
            <div className="row justify-content-center align-items-center mb-4">
              <div className="col-md-6 col-12">
                <div className="excerpt">
                  <a href="/protect-cloud/index.html">Protect Cloud</a>
                  <p>
                    Innovative and powerful web-based ALL-IN-ONE solution with
                    one-agent on any given Server/End-point device to serve all
                    Backup & Disaster Recovery needs along with basic necessary
                    features like Anti-Virus, Anti-Malware, Vulnerability
                    Assessment, Windows- Patch management, Remote Diagnostic
                    assistance, and URL-filtering.
                  </p>
                </div>
                <div className="excerpt mt-4">
                  <a href="/cloud-backup-service/index.html">
                    Backup as a Service
                  </a>
                  <p>
                    Reliable, Secure & Affordable Cloud Backup Solution with
                    AI-based Ransomware protection. Synectiks backup solutions
                    provide exceptional, customizable backup and storage
                    management for any system setup: physical servers, virtual
                    machines, PCs, business-critical applications, Databases and
                    more.
                  </p>
                </div>
                <div className="excerpt mt-4">
                  <a href="/cloud-disaster-recovery-service/index.html">
                    Disaster Recovery as a Service
                  </a>
                  <p>
                    Protection for on-premises and cloud workloads with a
                    turn-key disaster recovery solution. Protect your workloads
                    when disaster strikes, by instantly spinning up systems in
                    our Disaster Recovery Cloud. Adding this service ensures the
                    data is immediately available – and with Synectiks, it’s as
                    easy as flipping a switch. With an easy-to-use user
                    interface, you can effortlessly automate runbooks, testing,
                    and failover to the Disaster Recovery Cloud during a DR
                    event.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <img src={syns} alt="" className="w-60" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SecureBusiness;
