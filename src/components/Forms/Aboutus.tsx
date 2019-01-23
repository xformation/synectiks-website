import * as React from "react";
import { Right } from "react-bootstrap/lib/Media";
import { LinearProgress } from "material-ui";

const blue = {
    color: "#007CC2"
};
const red = {
    color:"red"
}
const lineHeight = {
    lineHeight : "35px"
}
export const Aboutus: React.StatelessComponent<{}> = () => {
    return (
        <div>

            <div>
                <img
                    className="card-img-Foundation text-center py-5 mt-5"
                    src="img/AboutUs.png" width="100%"
                    alt="Card image About"
                />
            </div>
           
            <div className="px-5">
            <p style={lineHeight}>
            &quot;<span style={blue}>syn</span>-<span style={blue}>ec</span>-tics – [si-nek-<span style={blue}>t</span><span style={red}>i</span><span style={blue}>ks</span>] –
             the study of creative processes, esp. as applied to the solution of problems by a group of diverse individuals.&quot; SYNECTIKS enables organizations
             to realize their business ambitions through an array of services from strategy to operations. We
             harness the power of cognitive, hyper-automation, cloud, analytics and emerging technologies to 
             help our clients adapt to the digital world and make them successful. Solves challenges by providing
             unmatched services in consulting, technology and operations. A global technology firm who specialize in
             helping highly-regulated enterprises transform faster, modernizing their way of working, helping optimize
             your resources and lower your costs. Combined with Synectiks full range of advanced technology solutions, 
             managed and professional services, we offer the most comprehensive portfolios in the technology services industry.
            </p><br/>
            </div>

            <div className="d-flex justify-content-around p-3 px-5 flex-col">
                <div>
                    <img
                        className="card-img-Foundation text-center px-3"
                        src="img/Consulting.png"
                        alt="Consulting"
                    />
                </div>
                <p style={lineHeight}>
                    <strong>Consulting</strong> - transforms businesses through industry expertise and insights<br />
                    To transform your business, you need a partner - One who brings you new and innovative ideas. A
                    partner with deep industry knowledge, meaningful insights and the broadest range of capabilities.
                    A partner who works with you to help reach the next level of performance. Building for the future
                    means making bold moves and tough decisions that will transform your business, we're proud to help
                    shape the way the companies structure and manage their business. And we are passionate about harnessing
                    innovation to tackle even the most complex issues.
            </p><br />
            </div>

            <div className="d-flex flex-row-rev justify-content-around p-3 px-5 flex-col">
                <div>
                    <img
                        className="card-img-Foundation text-center px-3"
                        src="img/Technology.png"
                        alt="Technology"
                    />
                </div>
                <p style={lineHeight}>
                    <strong>Technology</strong> - powers businesses with cutting-edge solutions using established and emerging technologies<br />
                    The businesses that evolve and compete most successfully are those that have undertaken a radical transformation of
                    the IT function to become truly agile and proactive. We help CIOs and IT leaders to reduce costs and support
                    greater business agility by modernizing their IT infrastructure and applications. Our technology services
                    span automation, infrastructure, application development &amp; refactoring and monolith to microservices transformation.<br />
                    Our investment in proprietary tools and technologies, a comprehensive partner ecosystem, skills in emerging technologies
                    like Software-Defined Everything, Open-source, DevOps, Cloud Infrastructure etc. ensure that we are a one stop shop for
                    all Cloud and IT infrastructure needs.
            </p><br />
            </div>

            <div className="d-flex justify-content-around p-3 px-5 flex-col">
                <div>
                    <img
                        className="card-img-Foundation text-center px-3"
                        src="img/Operations.png"
                        alt="Operations"
                    />
                </div>
            <p style={lineHeight} >
            <strong>Operations</strong> - delivers outcomes through infrastructure, security and cloud services<br/>
            Synectiks Operations is a leader in providing next generation technology to global enterprises. We combine 
            our core business knowledge with leading technologies such as digital, automation, cognitive technologies and 
            analytics to offer powerful business intelligence that helps in improving business visibility, allowing business 
            leaders to respond quickly to evolving market needs. We help clients to transform their operations - to harness talent, 
            data and intelligence - to deliver the right information where and when its needed, so they can Do More.
            </p><br/>
            </div>

            <div className="d-flex justify-content-around ">

            </div>

        </div>

    );
};

export default Aboutus;
