import * as React from "react";

const blue = {
    color: "#007CC2"
};
const red = {
    color: "red"
}
const lineHeight = {
    lineHeight: "35px"
}
export class Aboutus extends React.Component<{}, {}> {
    constructor(props: any) {
        super(props);
    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div className='bg-lightgrey'>

                <div>
                    <img
                        className="  text-center pt-5 mt-5"
                        src="img/AboutUs.jpg" width="100%"
                        alt="AboutUs"
                    />
                </div>

                <div className="px-5 pt-3 text-justify">
                    <div className="text-center"><h2>About Synectiks</h2></div>
                    <p style={lineHeight}>
                        &quot;<span style={blue}>syn</span>-<span style={blue}>ec</span>-tics – [si-nek-<span style={blue}>t</span><span style={red}>i</span><span style={blue}>ks</span>] –
             the study of creative processes, esp. as applied to the solution of problems by a group of diverse individuals.&quot; <br />
                        SYNECTIKS enables organizations to realize their business ambitions through an array of services from strategy to operations.
                        We harness the power of computing, automation, cloud, analytics and evolving technologies to
                 help our customers adapt to the digital transformation and make them agile.
                        Solves challenges by providing unmatched services in consulting, technology and operations. A global technology firm who specializes in
                        helping highly-regulated enterprises transform faster, modernizing their way of working, helping optimize
                 your resources and lower your costs.
                 Combined with Synectiks’ full vary of advanced technology solutions, managed and skilled services,
                 we provide the leading portfolios within the technology services.
            </p>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-5">
                            <img
                                className="  text-center px-3 img-fluid"
                                src="img/Consulting.jpg"
                                alt="Consulting"
                            />
                            </div>
                                <div className="col-md-7">
                                    <p style={lineHeight} className="pt-4">
                                        <strong>Consulting</strong> - transforms businesses through industry expertise and insights<br />
                                        To modernize your business, you need a partner - who brings you new and innovative ideas - a partner with in-depth knowledge,
                                        meaningful insights and the broadest range of capabilities. A partner who works with you to
                                        help reach the next level of performance. Building the future means taking tough decisions,
                                        making bold moves that will lay a path to modernize your business; we’re proud to help shape
                                        the way the companies manage and transform their business. And we are dependent on harnessing
                                        innovation to tackle even the complicated problems.
            </p>
                                </div>
                        </div>
                    </div>
                    <div className="d-flex text-justify justify-content-around p-3 px-5 flex-col" data-aos="fade-up" data-aos-duration="2000">

                        <br />
                    </div>

                    <div className="d-flex flex-row-rev text-justify justify-content-around p-3 px-5 flex-col" data-aos="fade-up" data-aos-duration="2000">
                        <div>
                            <img
                                className="  text-center px-3"
                                src="img/Technology.png"
                                alt="Technology"
                            />
                        </div>
                        <p style={lineHeight}>
                            <strong>Technology</strong> - powers businesses with cutting-edge solutions using established and emerging technologies<br />
                            The businesses that compete successfully are those that have undertaken a transformation
                            of the IT function to become genuinely agile and proactive. We help C-Level Executives and
                            IT leaders achieve greater business agility by modernizing their IT infrastructure and applications
                            at lower costs. Our technology services span automation, infrastructure, application development &amp; refactoring
                            and monolith to microservices transformation.<br />
                            Our investment in proprietary tools, a comprehensive partner ecosystem, skills in emerging
                            technologies like Software-Defined, Open-source, DevOps, Cloud Infrastructure, etc. ensures that we are a one-stop shop for all Application/Digital Transformation, Cloud and IT infrastructure needs.

            </p><br />
                    </div>

                    <div className="d-flex text-justify justify-content-around p-3 px-5 flex-col" data-aos="fade-up" data-aos-duration="2000">
                        <div>
                            <img
                                className="  text-center px-3"
                                src="img/Operations.png"
                                alt="Operations"
                            />
                        </div>
                        <p style={lineHeight} className="pt-4">
                            <strong>Operations</strong> - delivers outcomes through infrastructure, security and cloud services<br />
                            Synectiks Operations is a leader in providing next-generation technology to global enterprises. We combine
                            our core business knowledge with leading technologies such as digital transformation, automation, cognitive
                            techniques and analytics to offer compelling business intelligence that helps in improving visibility,
                    allowing business leaders to respond quickly to changing trends.<br />
                            We help customers to transform their operations - harness talent, data and intelligence - deliver
                            information when it's needed.
            </p><br />
                    </div>

                    <div className="d-flex justify-content-around col-lg-12 py-5 text-center flex-col" data-aos="fade-up" data-aos-duration="2000">
                        <div className='col-md-2'>
                            <img
                                className="py-3"
                                src="img/vmware.svg" width="75%"
                                alt="VMware"
                            />
                        </div>
                        <div className='col-md-2'>
                            <img
                                className="w-50 py-3"
                                src="img/dell.svg"
                                alt="Dell"
                            />
                        </div>
                        <div className='col-md-2'>
                            <img
                                className="py-3"
                                src="img/equinix.svg" width="75%"
                                alt="Equinix"
                            />
                        </div>
                        <div className='col-md-2'>
                            <img
                                className="py-3 "
                                src="img/microsoft.svg" width="75%"
                                alt="Microsoft"
                            />
                        </div>
                        <div className='col-md-2'>
                            <img
                                className="py-3"
                                src="img/nutanix.svg" width="75%"
                                alt="Nutanix"
                            />
                        </div>
                        <div className='col-md-2'>
                            <img
                                className="py-3"
                                src="img/simplivity.svg" width="75%"
                                alt="Simplivity"
                            />
                        </div>


                    </div>

                </div>

                );
            }
        }

        export default Aboutus;
