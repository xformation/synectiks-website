import * as React from "react";
import { Helmet } from "react-helmet";
import Layout from "../../components/layout";
import Office365 from "../../images/Office365.jpg";
import SEO from "../../components/seo.js";
import BreadCrumbs from "../../components/Home/Breadcrumbs.js";

export class OfficeMigraton extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Layout>
        <Helmet>
          <meta
            name="description"
            content="Microsoft is the recognized leader in cloud productivity solutions for business with Office 365 transforming the workplace experience. With a certified team of Microsoft Partner Professionals, SYNECTIKS delivers on all Microsoft Cloud Solutions, including Office 365, SharePoint, Skype for Business, Teams, Power BI, Microsoft 365 (Office 365 + Enterprise Mobility + Security) and Azure."
          />
          <link
            rel="canonical"
            href="https://synectiks.com/office-migration/index.html"
          />
        </Helmet>
        <SEO title="Microsoft 365 Services" />
        <div className="d-block w-100 py-3 px-md-5">
          <div className="container-fluid">
            <BreadCrumbs
              title="Home"
              subtitle="Cloud Services"
              pageTitle="Microsoft 365 Services"
            />
            <h1>Microsoft 365 Services</h1>
            <div className="d-block w-100 pt-3 text-center">
              <img src={Office365} alt="Office365" className="imgBx" />
            </div>
            <div className="d-block w-100 pt-5 text-black">
              <p className="lineHeight-24 mb-3">
                Microsoft is the recognized leader in cloud productivity
                solutions for business with Office 365 transforming the
                workplace experience.
              </p>
              <p className="lineHeight-24 mb-3">
                With a certified team of Microsoft Partner Professionals,
                SYNECTIKS delivers on all Microsoft Cloud Solutions, including
                Office 365, SharePoint, Skype for Business, Teams, Power BI,
                Microsoft 365 (Windows 10 + Office 365 + Enterprise Mobility +
                Security) and Azure.
              </p>
              <p className="lineHeight-24 mb-3">
                Imagine what we can do for you!
              </p>
              <p className="lineHeight-24 mb-3">
                We don’t just move you to Office 365. We help you create and
                sustain a cost-efficient, highly responsive and secure evergreen
                workplace platform. We provide a holistic set of
                transformational and managed services to modernize your
                workplace.
              </p>
              <h5 className="lineHeight-24">
                We can help accelerate your move to a digital workplace through
                our:
              </h5>
              <ul className="lineHeight-34 text-left">
                <li>
                  Experience in unlocking the full productivity potential of
                  Office 365
                </li>
                <li>
                  Giving you cost-effective and collaborative tools, including
                  Microsoft Teams, Skype for Business and SharePoint Online.
                </li>
                <li>
                  Insights from self-service and data discovery with Microsoft
                  Power BI for Office 365.
                </li>
                <li>
                  Ability to extend standard Office 365 service offerings with
                  managed services
                </li>
              </ul>
              <h5 className="lineHeight-24 mb-4">
                Find Out Why Users Are Choosing Office 365
              </h5>
              <div className="row g-2">
                <div className="col-sm-12 col-md-6 col-lg-3">
                  <div className="d-block w-100 text-light border-grey-2px p-3 h-100 bgOrange">
                    <h6 className="text-center mb-3 text-light">
                      Work Better Together
                    </h6>
                    <p className="text-left">
                      Work Anywhere, Anytime, on Any Device with Office 365.
                      Empower your employees with the tools they need.
                    </p>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3">
                  <div className="d-block w-100 text-light border-grey-2px p-3 h-100 bgRed">
                    <h6 className="text-center mb-3 text-light">
                      Get More Done
                    </h6>
                    <p className="text-left">
                      Enjoy access to the latest versions, security updates and
                      feature releases.
                    </p>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3">
                  <div className="d-block w-100 text-light border-grey-2px p-3 h-100 bgBlue">
                    <h6 className="text-center mb-3 text-light">
                      Work Securely
                    </h6>
                    <p className="text-left">
                      Work and Share files confidently with built-in security
                      and privacy controls that help keep your data safe and
                      secure.
                    </p>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3">
                  <div
                    className="d-block w-100 text-light border-grey-2px p-3 h-100 Dreen"
                    style={{ borderRadius: 0 }}
                  >
                    <h6 className="text-center mb-3 text-light">
                      Simplified for You
                    </h6>
                    <p className="text-left">
                      Choose solutions that are right for your business. Get
                      more value for your money.
                    </p>
                  </div>
                </div>
              </div>
              <h5 className="mt-4">
                Built by Microsoft, Made Easy by SYNECTIKS
              </h5>
              <ul className="lineHeight-34 ptext">
                <li>
                  <b>Reliable Support:</b> 24x7x365 support via phone or ticket.
                  15-minute response time on Sev-1 tickets. SLA based proactive
                  support with Microsoft support escalations.
                </li>
                <li>
                  <b>Migration Assistance:</b> Let our dedicated team of
                  specialists help you plan and perform your office 365 workload
                  migration.
                </li>
                <li>
                  <b>Dedicated to Your Success:</b> It’s our mission to enable
                  your continued success by advising you and your team on the
                  right technologies &amp; tools to deliver the desired results.
                </li>
                <li>
                  <b>License Management:</b> We can provide all required Office
                  365 licensing for your organization on one consolidated
                  invoice.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default OfficeMigraton;
