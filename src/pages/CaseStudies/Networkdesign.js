import * as React from "react";
import { Helmet } from "react-helmet";
import Layout from "../../components/layout";
import nd from "../../images/case/NetworkDesign_CS.jpg";
import SEO from "../../components/seo.js";
import CaseBreadCrumbs from "../../components/Home/CasestudiesBreads.js";

const Networkdesign = () => {
  return (
    <Layout>
      <Helmet>
        <link
          rel="canonical"
          href="https://www.synectiks.com/network-design/index.html"
        />
      </Helmet>
      <SEO title="Network Designing" />
      <div className="d-block w-100 py-3 px-md-5">
        <div className="container-fluid">
          <div className="softwareDefined_wrap">
            <CaseBreadCrumbs
              title="Home"
              casetitle="Resources"
              subtitle="Case Studies"
              pageTitle="Network Design"
            />
            <h1 className="mt-4">Network Design</h1>
            <div className="softwareDefined_image">
              <h5 className="ft mb-3">Cloud Automation For Medfusion Inc</h5>
              <p className="blueBorder ps-2 ps-md-5 py-1 py-3">
                Complete network backbone design with highest security for
                retail.
              </p>
              <img src={nd} alt="Network Design" className="w-100 my-4" />
            </div>
            <div className="softwareDefined_div d-flex flex-column flex-md-row justify-content-around pb-1 pb-md-5">
              <div className="column w-100 px-3 px-md-5 mb-3 mb-md-0 orangeBorder">
                <h5 className="ft mb-2">Industry</h5>
                <p>Medfusion</p>
              </div>
              <div className="column w-100 px-3 px-md-5 mb-3 mb-md-0 blueBorder">
                <h5 className="ft mb-2">Business Objective</h5>
                <p>
                  Transformation towards becoming hardware / Os / Vender /
                  Operation agnostic. Make everything software defined.
                </p>
              </div>
              <div className="column w-100 px-3 px-md-5 mb-3 mb-md-0 redBorder">
                <h5 className="ft mb-2">Technologies</h5>
                <p>AWS, Infrastructure as a code, microservices, DevOps.</p>
              </div>
            </div>
            <div>
              <h5 className="ft mb-2">Overview</h5>
              <p>
                Medfusion is a leading patient-provider communications platform
                and it is used to streamline workflows that enable healthcare
                facilities to function more efficiently. The Medfusion’s
                development and deployment team communicate via an email to the
                data center admin with an attached form that specifies resource
                details. Then the admin takes an approval from the manager by
                email and manually go to vSphere administration console and
                create the resources as per the requirements. The process
                includes creating the virtual machine from existing template,
                and then doing the custom configuration as requested by the user
                and finally allocating and fixing the IP’s in the resources to
                send an email to the customer on completing the necessary tasks.
                However, in case the resources retire, the requestor then emails
                to admin and the admin fulfills the request. Apparently, things
                were quite intense and weren’t going along perfectly fine when
                the resources get retired. They had to face the challenges
                below.
              </p>
              <h5 className="ft mt-4 mb-2">Challenges</h5>
              <p>
                Medfusion wanted a solution based on their existing tools which
                is much easier to build and manage their operations. They need a
                solution to cater any automations that can be hooked with ease.
                The resource provisioning should create virtual machines and
                also the initial bootstrap configuration like the
                IP/DNS/Security configuration. Medfusion’s clientele wanted a
                solution to be intelligent enough to substantiate available
                capacity and create a resource pool accordingly.
              </p>
            </div>
            <div>
              <h5 className="ft mt-4 mb-2">Solutions</h5>
              <ul>
                <li>
                  Medfusion was already using Jira service desk as their
                  ticketing tool and Jenkins for their CI/CD.
                </li>
                <li>
                  We designed a complete business process in Jira in aggregation
                  with some automation task in Jenkin.
                </li>
                <li>
                  When the development team sends an email or raise a service
                  desk request, the service desk tickets gets automatically
                  created.
                </li>
                <li>
                  Then the admin would approve the request and on approval, the
                  Jenkin job engine would trigger a provisioning job.
                </li>
                <li>
                  Once the job is successful, job engine will notify Jira about
                  the completion along with resource details.
                </li>
                <li>
                  Then the ticket status is changed automatically and the
                  customer gets the acknowledgment through email about the
                  completion.
                </li>
              </ul>
            </div>
            <div className="mb-4">
              <h5 className="ft mt-4 mb-2">
                Automating their current resource provisioning process.
              </h5>
              <p>
                When Medfusion approached Synectiks, they were handling most of
                the requests from service desk manually and once approved the
                resources would be provisioned from an automation script, it
                then sends the log to the request ticket, here the process is
                set to closure with notification to the requestor. The heavy
                downpour of requests and tackling it manually to take the
                requests from service desk consumed their time and resources.
                After all the assessment and planning we did come up with a
                solution that caters not only the creations of virtual machines
                but also to bootstrap their current security configurations. We
                implemented a complete business process in Jira in conjunction
                with some automation task in Jenkins. It goes this way, when the
                development team sends an email or a service request, the
                service desk tickets gets automatically created and the admin
                would approve the request. Next, the Jenkin job engine triggers
                a provisioning job and the job engine will notify Jira about the
                completion of the task along with the resource information.
                Voila! the ticket status will be changed automatically, and
                their customer would get an email about the completion of the
                job process.
              </p>
              <h5 className="ft mt-4 mb-2">
                How did Synectiks Consolidate, Validate and Outline the issues
                of Large Motor Systems?
              </h5>
              <p>
                We believe in harvesting information as much as possible that
                will yield a better solution. That is exactly what we did with
                Large Motor Company. Upon analyzing their queries on a broader
                spectrum, we did a quick 360° audit on their existing
                infrastructure and harvested some vital insights on key
                improvement areas and a plan for any migration path and risks
                involved in the following process. We conducted multiple PoC’S
                with Large Motor Company to channel a solid understanding of the
                technologies and modernize their IT infrastructure. By
                translating the entire hardware infrastructure into a few lines
                of software code, we crafted a backbone infrastructure
                effortlessly. Also, we refactored monolith applications to
                multiple microservices and established a complete application
                lifecycle management and operation support system to maintain
                their business operations. Ultimately, by achieving the required
                data security, governance and compliance requirements in the
                cloud.
              </p>
              <h5 className="ft mt-4 mb-2">OUTCOME</h5>
              <p>
                We tailored a complete automation solution with their existing
                tools. On the first note, we saved 60% time and 50% operations
                cost. We improved the resource provisioning SLA time to 80%. A
                smart solution that is intelligent enough to verify the
                available capacity and create a resource pool. With just a few
                added scripts the customized solution merges with their existing
                framework.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Networkdesign;
