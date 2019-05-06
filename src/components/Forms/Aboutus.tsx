import * as React from "react";
<<<<<<< HEAD
// // import { Right } from "react-bootstrap/lib/Media";
=======
import { Right } from "react-bootstrap/lib/Media";
>>>>>>> 967866ad488f3fb8a92c0a0379416efc44500691
import { LinearProgress } from "material-ui";

const blue = {
    color: "#007CC2"
};
const red = {
<<<<<<< HEAD
    color: "red"
}
const lineHeight = {
    lineHeight: "35px"
}
export const Aboutus: React.StatelessComponent<{}> = () => {
    return (
        <div className='bg-lightgrey'>

            <div>
                <img
                    className="  text-center py-5 mt-5"
                    src="img/AboutUs.png" width="100%"
                    alt="AboutUs"
                />
                <div className="text-center centered ">
                    <div className="text-white">
                        <h3>About&nbsp;SYNECTIKS</h3>
                    </div>
                </div>
            </div>

            <div className="px-5 pt-3 text-justify" data-aos="fade-up" data-aos-duration="2000">
                <p style={lineHeight}>
                    &quot;<span style={blue}>syn</span>-<span style={blue}>ec</span>-tics – [si-nek-<span style={blue}>t</span><span style={red}>i</span><span style={blue}>ks</span>] –
             the study of creative processes, esp. as applied to the solution of problems by a group of diverse individuals.&quot; <br />
                    SYNECTIKS enables organizations to realize their business ambitions through an array of services from strategy to operations.<br />
                    We harness the power of computing, automation, cloud, analytics and evolving technologies to
             help our customers adapt to the digital transformation and make them agile. <br />
                    Solves challenges by providing unmatched services in consulting, technology and operations. A global technology firm who specializes in
                    helping highly-regulated enterprises transform faster, modernizing their way of working, helping optimize
             your resources and lower your costs. <br />
             Combined with Synectiks’ full vary of advanced technology solutions, managed and skilled services, 
             we provide the leading portfolios within the technology services.
            </p><br />
            </div>

            <div className="d-flex text-justify justify-content-around p-3 px-5 flex-col" data-aos="fade-up" data-aos-duration="2000">
                <div>
                    <img
                        className="  text-center px-3"
=======
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
>>>>>>> 967866ad488f3fb8a92c0a0379416efc44500691
                        src="img/Consulting.png"
                        alt="Consulting"
                    />
                </div>
<<<<<<< HEAD
                <p style={lineHeight} className="pt-4">
                    <strong>Consulting</strong> - transforms businesses through industry expertise and insights<br />
                    To modernize your business, you need a partner - who brings you new and innovative ideas - a partner with in-depth knowledge, 
                    meaningful insights and the broadest range of capabilities. A partner who works with you to 
                    help reach the next level of performance. Building the future means taking tough decisions, 
                    making bold moves that will lay a path to modernize your business; we’re proud to help shape 
                    the way the companies’ manage and transform their business. And we are dependent on harnessing 
                    innovation to tackle even the complicated problems.
            </p><br />
            </div>

            <div className="d-flex flex-row-rev text-justify justify-content-around p-3 px-5 flex-col" data-aos="fade-up" data-aos-duration="2000">
                <div>
                    <img
                        className="  text-center px-3"
=======
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
>>>>>>> 967866ad488f3fb8a92c0a0379416efc44500691
                        src="img/Technology.png"
                        alt="Technology"
                    />
                </div>
                <p style={lineHeight}>
                    <strong>Technology</strong> - powers businesses with cutting-edge solutions using established and emerging technologies<br />
<<<<<<< HEAD
                    The businesses that compete successfully are those that have undertaken a transformation 
                    of the IT function to become genuinely agile and proactive. We help C-Level Executives and 
                    IT leaders achieve greater business agility by modernizing their IT infrastructure and applications 
                    at lower costs. Our technology services span automation, infrastructure, application development &amp; refactoring, 
                    and monolith to microservices transformation.<br/>
                    Our investment in proprietary tools, a comprehensive partner ecosystem, skills in emerging 
                    technologies like Software-Defined, Open-source, DevOps, Cloud Infrastructure, etc. ensures that we are a one-stop shop for all Application/Digital Transformation, Cloud and IT infrastructure needs.

            </p><br />
            </div>

            <div className="d-flex text-justify justify-content-around p-3 px-5 flex-col" data-aos="fade-up" data-aos-duration="2000">
                <div>
                    <img
                        className="  text-center px-3"
=======
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
>>>>>>> 967866ad488f3fb8a92c0a0379416efc44500691
                        src="img/Operations.png"
                        alt="Operations"
                    />
                </div>
<<<<<<< HEAD
                <p style={lineHeight} className="pt-4">
                    <strong>Operations</strong> - delivers outcomes through infrastructure, security and cloud services<br />
                    Synectiks Operations is a leader in providing next-generation technology to global enterprises. We combine 
                    our core business knowledge with leading technologies such as digital transformation, automation, cognitive 
                    techniques, and analytics to offer compelling business intelligence that helps in improving visibility, 
                    allowing business leaders to respond quickly to changing trends.<br />
                    We help customers to transform their operations - harness talent, data, and intelligence - deliver 
                    information when it's needed.
            </p><br />
            </div>

            <div className="d-flex justify-content-around col-lg-12 py-5 text-center" data-aos="fade-up" data-aos-duration="2000">
                <div className='col-md-2'>
                    <img
                        className="   py-3"
                        src="img/vmware.svg" width="75%"
                        alt="VMware"
                    />
                </div>
                <div className='col-md-2'>
                    <img
                        className="   py-3"
                        src="img/dell.svg" width="75%"
                        alt="Dell"
                    />
                </div>
                <div className='col-md-2'>
                    <img
                        className="   py-3"
                        src="img/equinix.svg" width="75%"
                        alt="Equinix"
                    />
                </div>
                <div className='col-md-2'>
                    <img
                        className="   py-3 "
                        src="img/microsoft.svg" width="75%"
                        alt="Microsoft"
                    />
                </div>
                <div className='col-md-2'>
                    <img
                        className="   py-3"
                        src="img/nutanix.svg" width="75%"
                        alt="Nutanix"
                    />
                </div>
                <div className='col-md-2'>
                    <img
                        className="   py-3"
                        src="img/simplivity.svg" width="75%"
                        alt="Simplivity"
                    />
                </div>

=======
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
>>>>>>> 967866ad488f3fb8a92c0a0379416efc44500691

            </div>

        </div>

    );
};

export default Aboutus;
