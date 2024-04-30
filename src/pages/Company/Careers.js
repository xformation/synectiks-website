import * as React from "react";
import { Helmet } from "react-helmet";
import { Collapse, Button, CardBody, Card } from "reactstrap";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Layout from "../../components/layout";
import SEO from "../../components/seo.js";
import BreadCrumbs from "../../components/Home/Breadcrumbs.js";
import "../../css/careers.css";

export class Careers extends React.Component {
  state;
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.toggle2 = this.toggle2.bind(this);
    this.toggle3 = this.toggle3.bind(this);
    this.toggle4 = this.toggle4.bind(this);
    this.toggle5 = this.toggle5.bind(this);
    this.toggle6 = this.toggle6.bind(this);
    this.toggle7 = this.toggle7.bind(this);
    this.state = { collapse: false };
    this.state = { collapse2: false };
    this.state = { collapse3: false };
    this.state = { collapse4: false };
    this.state = { collapse5: false };
    this.state = { collapse6: false };
    this.state = { collapse67: false };
  }
  toggle() {
    this.setState((state) => ({ collapse: !state.collapse }));
  }
  toggle2() {
    this.setState((state) => ({ collapse2: !state.collapse2 }));
  }
  toggle3() {
    this.setState((state) => ({ collapse3: !state.collapse3 }));
  }
  toggle4() {
    this.setState((state) => ({ collapse4: !state.collapse4 }));
  }
  toggle5() {
    this.setState((state) => ({ collapse5: !state.collapse5 }));
  }
  toggle6() {
    this.setState((state) => ({ collapse6: !state.collapse6 }));
  }
  toggle7() {
    this.setState((state) => ({ collapse7: !state.collapse7 }));
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Layout>
        <Helmet>
          <meta
            name="description"
            content="Work where you’re encouraged to explore your passions, where your skills are nurtured and respected. Introduce with leading-edge technologies on absolutely the coolest undertakings you&#39;ll be able to envision. What&#39;s more, get the tools you have to continue learning and developing, so you remain consistently on top of things while making a difference in the world."
          />
          <link
            rel="canonical"
            href="https://synectiks.com/careers/index.html"
          />
        </Helmet>
        <SEO title="Careers" />
        <div className="bg-lightgrey">
          <div className="d-block w-100 py-3 px-md-5">
            <div className="container-fluid">
              <BreadCrumbs
                title="Home"
                subtitle="Company"
                pageTitle="Careers"
              />
              <h1 className="mt-4">Careers</h1>
              <div className="w-100 text-black ptext">
                <h5 className="ft">Changing the game takes talent - Yours!</h5>
                <p className="lineHeight-24 pb-4 ptext">
                  Work where you’re encouraged to explore your passions, where
                  your skills are nurtured and respected. Introduce with
                  leading-edge technologies on absolutely the coolest
                  undertakings you'll be able to envision. What's more, get the
                  tools you have to continue learning and developing, so you
                  remain consistently on top of things while making a difference
                  in the world.
                  <br /> What’s your passion?
                </p>
                <div className="row g-3">
                  <div className="col-md-6 col-lg-4 ">
                    <a className="aws-services-features">
                      Data &amp; Analytics
                    </a>
                  </div>
                  <div className="col-md-6 col-lg-4 ">
                    <a className="aws-services-features">Design &amp; UX</a>
                  </div>
                  <div className="col-md-6 col-lg-4 ">
                    <a className="aws-services-features">
                      Engineering & Technology
                    </a>
                  </div>
                  <div className="col-md-6 col-lg-4 ">
                    <a className="aws-services-features">Internships</a>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <a className="aws-services-features">Sales & Marketing</a>
                  </div>
                  <div className="col-md-6 col-lg-4 ">
                    <a className="aws-services-features">
                      Software Development
                    </a>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="lineHeight-24 borderbtm-grey-1px my-md-3">
                    <h5 className="ft">Open positions in all locations</h5>
                  </div>
                  <div className="career-collapse">
                    <Button className="career-btn" onClick={this.toggle6}>
                      Infrastructure Engineer
                      {this.state.collapse6 === true ? (
                        <IoIosArrowUp className="ms-auto" />
                      ) : (
                        <IoIosArrowDown className="ms-auto" />
                      )}
                    </Button>
                    <Collapse isOpen={this.state.collapse6}>
                      <Card>
                        <CardBody>
                          <p className="ptext">
                            <b>
                              Infrastructure Engineer
                              <br />
                              Bachelor degree with 5 years experience.
                              <br />
                              Major: Computer Engineering, CS, or equivalent.
                            </b>
                            <br />
                            Princeton, NJ. Job entails working with & requires
                            experience including: Managing User ID, resources &
                            groups in an enterprise, delivering solutions using
                            OneDrive, SharePoint, Teams & Office 365
                            collaboration tools, SCCM, MS Outlook. Evaluating
                            existing infrastructure & implementing Office 365
                            solutions with emphasis on security ATP, Policies,
                            Azure AD Identity Protection, CA, & Message
                            Encryption. Relocation & travel to unanticipated
                            locations within USA possible.
                            <br />
                            <b>Send resumes to </b>info@synectiks.com
                            <br />
                            <b>
                              Synectiks Inc., Attn: HR, 300 Alexander Park Dr.,
                              Suite 215, Princeton, NJ 08540.
                            </b>
                          </p>
                        </CardBody>
                      </Card>
                    </Collapse>
                  </div>
                  <div className="career-collapse">
                    <Button className="career-btn" onClick={this.toggle7}>
                      Software Developers II
                      {this.state.collapse7 === true ? (
                        <IoIosArrowUp className="ms-auto" />
                      ) : (
                        <IoIosArrowDown className="ms-auto" />
                      )}
                    </Button>
                    <Collapse isOpen={this.state.collapse7}>
                      <Card>
                        <CardBody>
                          <p className="ptext">
                            <b>
                              Software Developers II
                              <br />
                              Master’s w/ 3 yrs exp or Bach w/ 5 yrs exp.
                              <br />
                              Major: Applied Comp Sci, CS, Electronic Engg, Comp
                              Engg or equiv.
                            </b>
                            <br />
                            Princeton, NJ. Job entails working with &amp;
                            requires NJ. Job entails working with &amp; requires
                            experience including: Managing User ID, : Java, .NET
                            Framework, TypeScript, JavaScript, AJAX, React,
                            Angular, C#.NET, Python, ASP.Net, SQL Server, AWS
                            Services, JIRA, Jenkins, Git, GitLab, DevOps, MVC,
                            Microservices &amp; CI/CD Pipelines. Various
                            worksites: Relocation & travel to a project-based
                            unanticipated location within USA possible.
                            <br />
                            <b>Send resumes to Synectiks, Inc., Attn: HR, 300 Alexander Park Dr.
                              Ste 215, Princeton, NJ 08540.
                            </b>
                          </p>
                        </CardBody>
                      </Card>
                    </Collapse>
                  </div>
                  <div className="career-collapse">
                    <Button className="career-btn" onClick={this.toggle5}>
                      Software Engineer
                      {this.state.collapse5 === true ? (
                        <IoIosArrowUp className="ms-auto" />
                      ) : (
                        <IoIosArrowDown className="ms-auto" />
                      )}
                    </Button>
                    <Collapse isOpen={this.state.collapse5}>
                      <Card>
                        <CardBody>
                          <p>
                            <b>What You'll Be Doing</b>
                          </p>
                          <p className="ptext">
                            As a Software Engineer, you will be a member of one
                            of our central assembly line teams such as a
                            component development and automation test team. You
                            will be part of the weekly product release cycles
                            and thereby ensure that features/plugins
                            development/bug fixing as quickly as possible for
                            our clients and that you are constantly improving
                            the quality of our products. You will have
                            aggressive daily and weekly targets to work against
                            and you can expect to receive daily and weekly
                            feedback about your performance. The regular
                            feedback is used to help you improve immediately and
                            to help you resolve blockers which may be slowing
                            down your performance.
                          </p>
                          <ul>
                            <p>
                              <b>Key Responsibilities</b>
                            </p>
                            <li>
                              Deliver consistently high-quality
                              components/plugins which has a high “First Time
                              Acceptance Rate” from the engineering leadership.
                            </li>
                            <li>
                              Implement Framework and Libraries developed by
                              Architect.
                            </li>
                            <li>Comply with engineering process playbooks.</li>
                            <li>Design APIs and Build RESTful Services.</li>
                            <li>
                              Develop and maintain CI-CD pipeline for our
                              services to rapidly and safely deploy code and
                              configuration.
                            </li>
                            <li>
                              Ensuring that your output meets the teams quality
                              bars before being passed on to further stages
                              within the process.
                            </li>
                            <li>
                              Meeting your goals, which are set by your manager,
                              on a daily and weekly basis.
                            </li>
                            <li>
                              Escalating issues to your manager as soon as a
                              risk is identified or as soon as you are blocked
                              in your work.
                            </li>
                            <li>
                              Private/Public cloud provisioning/troubleshooting.
                            </li>
                            <li>
                              Expertise and hands on experience on Linux/UNIX.
                            </li>
                            <li>
                              Develop comprehensive monitoring solutions to
                              provide full visibility to the different platform
                              components using tools and services like
                              Kubernetes, Prometheus, Grafana, ELK, and other
                              similar tools.
                            </li>
                            <li>
                              Integrate different components and develop new
                              services with a focus on open source to allow a
                              minimal friction developer interaction with the
                              platform and application services.
                            </li>
                            <li>
                              Experience creating automated tests as part of the
                              development lifecycle.
                            </li>
                            <li>
                              Full working knowledge of Git Version Control.
                            </li>
                            <li>
                              Keep up to date with the latest Software
                              Engineering trends.
                            </li>
                          </ul>
                          <ul>
                            <p>
                              <b>Candidate Requirements</b>
                            </p>
                            <li>
                              9+ years of hands-on software engineering
                              experience in the following: Some of the
                              technologies currently used within Engineering
                              include Java, Scala, Kotlin, Python, Javascript,
                              Typescript, React, Angular, SQL, Spring Boot,
                              ElasticSearch, Docker, NoSQL DBs (Cassandra,
                              Couchbase, MongoDB, DynamoDB), RDBMS (MS SQL,
                              MySQL, PostgreSQL, Oracle), HTML, CSS, and a wide
                              array of AWS services (Lambda, ECS, S3, SQS,
                              Kinesis, DynamoDB, Neptune, Poly, etc..).
                            </li>
                            <li>
                              5+ Years in hard core product development,
                              developed features and modules from scratch, have
                              contributed significantly in GitHub and Open
                              Source ecosystem.
                            </li>
                            <li>
                              Proficient leadership and analytical skills.
                            </li>
                            <li>
                              Ability/Passion to learn new languages and
                              technologies as needed.
                            </li>
                            <li>Demonstrate success as a problem solver.</li>
                            <li>Be a result oriented individual.</li>
                            <li>
                              Comfortable “working virtually” with teammates and
                              customers around the world.
                            </li>
                            <li>
                              Please share your GitHub or any open source
                              product contribution link, this is must to have.
                            </li>
                            <li>
                              Bachelor’s Degree in Engineering, Information
                              Systems, Decision Sciences, Mathematics,
                              Statistics or related field, or a combination of
                              education and work experience that provides the
                              necessary skills to perform the essential job
                              functions.
                            </li>
                          </ul>
                        </CardBody>
                      </Card>
                    </Collapse>
                  </div>
                  <div className="career-collapse">
                    <Button className="career-btn" onClick={this.toggle}>
                      Sr. Systems Administrator
                      {this.state.collapse === true ? (
                        <IoIosArrowUp className="ms-auto" />
                      ) : (
                        <IoIosArrowDown className="ms-auto" />
                      )}
                    </Button>
                    <Collapse isOpen={this.state.collapse}>
                      <Card>
                        <CardBody>
                          <p className="ptext">
                            <b>
                              Sr. Systems Administrator
                              <br />
                              Bachelor’s with 5 years experience.
                              <br />
                              Major: CS, Bus Admin or equivalent.
                              <br />
                              Other suitable qualifications acceptable –{" "}
                            </b>
                            <br />
                            In lieu of a four-year US degree, employer will
                            accept one additional year of relevant experience
                            and completion of three years of academic studies
                            towards a relevant Bachelor’s degree at an
                            accredited US college or university or its foreign
                            equivalent (AACRAO EDGE evaluation); Other suitable
                            qualifications acceptable – Princeton, NJ. Job
                            entails working with &amp; requires experience
                            including: KVM, RHEL, VMware, Windows Server OS,
                            Windows Scripting, Perl, Python, UNIX Shell
                            Scripting, Ruby, Puppet, Chef, Ansible, MongoDB,
                            MySQL, OpenStack, vCenter, Docker, OpenShift, AWS
                            and PowerCLI. Relocation and travel to unanticipated
                            locations within USA possible.
                            <br />
                            <b>Send resumes to</b> info@synectiks.com
                            <br />
                            <b>
                              Synectiks Inc., Attn: HR, 300 Alexander Park Dr.,
                              Suite 215, Princeton, NJ 08540.
                            </b>
                          </p>
                        </CardBody>
                      </Card>
                    </Collapse>
                  </div>
                  <div className="career-collapse">
                    <Button className="career-btn" onClick={this.toggle2}>
                      Lead Software Architect
                      {this.state.collapse2 === true ? (
                        <IoIosArrowUp className="ms-auto" />
                      ) : (
                        <IoIosArrowDown className="ms-auto" />
                      )}
                    </Button>
                    <Collapse isOpen={this.state.collapse2}>
                      <Card>
                        <CardBody>
                          <p className="ptext">
                            <b>
                              Lead Software Architect
                              <br />
                              Master’s with 3 years experience.
                              <br />
                              Bachelor’s with 5 years experience.
                              <br />
                              Major: CS, Engg, Math or equivalent.
                              <br />
                              Other suitable qualifications acceptable –{" "}
                            </b>
                            <br />
                            Princeton, NJ. Job entails working with &amp;
                            requires experience including: OBIEE, OBIA, Data
                            Warehousing, BIAPPS, Discoverer, Business Objects,
                            DAC, Informatica, Pentaho Data integration, Pentaho
                            Business Analysis, Hyperion Essbase, Applications,
                            SQL, PL/SQL, BI Publisher, Java, Windows, UNIX,
                            Linux, HTML, Oracle, Postgres, MySQL and Teradata,
                            TOAD, SQL Developer and Siebel Analytics. Must have
                            experience in designing, developing and implementing
                            applications. Relocation and travel to unanticipated
                            locations within USA possible.
                            <br />
                            <b>Send resumes to </b>info@synectiks.com
                            <br />
                            <b>
                              Synectiks Inc., Attn: HR, 300 Alexander Park Dr.,
                              Suite 215, Princeton, NJ 08540.
                            </b>
                          </p>
                        </CardBody>
                      </Card>
                    </Collapse>
                  </div>
                </div>
                <h5 className="ft mt-4">Life at SYNECTIKS!</h5>
                <p className="lineHeight-24 pb-3 ptext">
                  <i>Be Happy, Healthy and Inspired!</i>
                  <br />
                  To start with, We provide a competitive salary and
                  employer-paid health benefits. We offer a flexible vacation
                  plan, paid maternal and parental leave, tuition assistance,
                  learning development opportunities, sports events, team
                  lunches, pot-lucks, team outings and annual office
                  celebrations – all for you to connect, refresh and thrive.
                </p>
                <h5 className="ft">SYNECTIKS for All!</h5>
                <p className="lineHeight-24 ptext pb-3">
                  SYNECTIKS is proud to be an equal opportunity workplace. We
                  take great care to evaluate all employees and job applicants
                  equally, based on competence and qualifications. We will not
                  discriminate by age, race, gender, color, religion, national
                  origin, sexual orientation, veteran status, marital status,
                  disability status, or any other protected category. For
                  assistance or reasonable accommodation during the interview
                  process, please contact us by sending an e-mail to &nbsp;
                  <a
                    className="aws-services-features"
                    href="mailto:info@synectiks.com"
                  >
                    hr@synectiks.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Careers;
