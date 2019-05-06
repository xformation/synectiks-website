import * as React from "react";
// import { Right } from "react-bootstrap/lib/Media";
import { LinearProgress } from "material-ui";
import { LARGE } from "material-ui/utils/withWidth";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const Applicationservices: React.StatelessComponent<{}> = () => {
    return (
        <div className='bg-lightgrey'>

            <div className="w-100 py-5 mt-5" data-aos="fade-up" data-aos-duration="2000">
                <img height="auto" width="100%"
                    className=""
                    src="img/ApplicationServices.png"
                    alt="Application Services"
                />
            </div>

            <div className=' text-black w-100  text-white px-5  flex-col d-flex text-justify'
            data-aos="fade-up" data-aos-duration="2000">
                <div className="w-100  text-black">
<p className="w-100  text-black"><h2 className='mt-3'>Application Services - Overview</h2></p>
                    <p className="lineHeight-24">
                    Applications are the lifeline of your organization. Our innovation-led approach to Application 
                    Services helps you to reinvent your enterprise application portfolio, making use of emerging 
                    technology and building with speed and agility to enable you to meet business needs, now and in the future.
                    <br />{" "}
                    </p>
                    <p className="lineHeight-24">
                    SYNECTIKS delivers integrated Application Development and Maintenance services across the full 
                    range of your business and technical requirements. We serve as your trusted partner throughout 
                    your journey to continuous evolution - delivering flexible service options tailored to your business priorities.
                    <br />{" "}
                    </p>

                </div>
            </div>

            <div className=' text-black w-100 mt-3 text-white px-5 py-2 flex-col d-flex text-justify'
            data-aos="fade-up" data-aos-duration="2000">
            
                <div className="w-100 pr-5 text-black">
                <p className="w-100  text-black"><h2 className='mt-3'>Application Services</h2></p>
                    <p className="lineHeight-24">
                    Our application managed services allow you rethink your portfolio and achieve a simplified, standardized, 
                    future-ready enterprise application environment. We help address critical questions, such as whether 
                    to migrate, re-platform or remediate legacy applications.
                    <br />{" "}
                    </p>
                    <p className="lineHeight-24">
                    Ultimately, we add value from existing applications while reducing costs, limiting disruptions 
                    and decreasing risk. The outcome transforms legacy applications to achieve high performance.
                    <br />{" "}
                    </p>
                    <p className="lineHeight-24 list-tick">
                    <p>We help you tomorrow-proof your existing IT systems while cutting 
                        costs and maintaining smooth operations.</p>                
                    <ul className="lineHeight-34">
                        <li>&nbsp;With business-driven IT and application development using Agile and DevOps.</li>
                        <li>&nbsp;Through automation, continuous delivery, application modernization, and leveraging next-generation technologies.</li>
                        <li>&nbsp;Enhanced cost optimization through cost-efficient ways to host applications and adapt platforms.</li>
                    </ul>
                    </p>
                </div>
                <div className=" ">
                    <img height="auto" width="100%"
                        className=""
                        src="img/Growth.png"
                        alt="Growth"
                    />
                </div>
            </div>
            <div className="w-100 px-5 pt-3 text-black text-justify"
            data-aos="fade-up" data-aos-duration="2000">
                <p className="lineHeight-24">
                    <h4>We offer a range of services to help companies get the most value from their existing applications:</h4>
                    <br />{" "}
                </p>

                {/* <p className="lineHeight-24">
                    <NavLink className="navlink navfont noLine" to="/contactus"><small>Contact&nbsp;Us&nbsp;</small></NavLink>to learn more about SYNECTIKS Cloud Services for AWS.
                <br />{" "}
                </p> */}
            </div>

            <div className="d-flex justify-content-around align-items-center p-2 flex-col text-center col-lg-12"
            data-aos="fade-up" data-aos-duration="2000">
                <div className="pb-3 col-sm-3" >
                    <div className="w-100 p-5">
                        <img height="auto" width="100%"
                            className="w-75"
                            src="img/Discovery.png"
                            alt="First slide"
                        />
                        <p  className="pt-2"><b>Discovery and Assessment</b></p>
                        <p className="text-center">
                        Provides an accurate understanding of your legacy systems, enabling us to develop 
                        the business case around renewing existing applications.
                    </p>
                    </div>
                </div>

                <div className="pb-3 col-sm-3" >
                    <div className="w-100 p-5">
                        <img height="auto" width="100%"
                            className="w-75"
                            src="img/Remedition.png"
                            alt="First slide"
                        />
                        <p  className="pt-2"><b>Remediation</b></p>
                        <p className="text-center">Enhances your applications’ functionality, which 
                        makes them easier to maintain and part of a highly-scalable framework.
                    </p>
                    </div>
                </div>

                <div className="pb-3 col-sm-3" >
                    <div className="w-100 p-5">
                        <img height="auto" width="100%"
                            className="w-75"
                            src="img/Replatform.png"
                            alt="First slide"
                        />
                        <p  className="pt-2"><b>Re-Platform</b></p>
                        <p className="text-center">Enhances your applications’ functionality, which makes them easier to maintain and part of a highly-scalable framework.
                        </p>
                    </div>
                </div>

                {/* <div className="pb-3 col-sm-3" >
                    <div className="w-100 p-5">
                        <img height="auto" width="100%"
                            className=""
                            src="img/Replatform.png"
                            alt="First slide"
                        />
                        <p  className="pt-4"><b>Re-Platform</b></p>
                        <p className="text-center">
                        Enhances your applications’ functionality, which makes them easier to maintain and 
                        part of a highly-scalable framework.
                    </p>
                    </div>
                </div> */}

                <div className="pb-3 col-sm-3" >
                    <div className="w-100 p-5">
                        <img height="auto" width="100%"
                            className="w-75"
                            src="img/Migration.png"
                            alt="First slide"
                        />
                        <p  className="pt-2"><b>Migration</b></p>
                        <p className="text-center">Migrates you to a standards-based environment while minimizing disruption to the business.
                    </p>
                    </div>
                </div>

                </div>

            <div className=" p-5" >
                <p className="seperator-grey"></p>
            </div>

            <div className="px-5" data-aos="fade-up" data-aos-duration="2000">
            <div className="text-center">
                    <div className="w-40 ">
                        <img src="img/ERP.png" width="75%" alt="DevOps Transformation" />{" "}
                    </div>
                </div>
                </div>

                <div className="px-5 pt-4 text-center"  data-aos="fade-up" data-aos-duration="2000">
                <h4><i>
                We Focus on What Matters!
                </i></h4>
            </div>
            <div className="px-5 pt-3"  data-aos="fade-up" data-aos-duration="2000">
            <p className="lineHeight-24">
            Enterprise Resource Planning (ERP) applications are essential to running your business, but they 
            can be time consuming and expensive to create, customize, and maintain. We offer ERP Solutions for 
            businesses of all sizes - small, midsize, and large. We also provide industry and company-specific 
            functionality to meet unique business needs. 
            </p>
            </div>
        
                <div className=' text-black w-100 mt-3 text-white px-5 py-2 flex-col d-flex text-justify'
                data-aos="fade-up" data-aos-duration="2000">
                <div className="w-100  text-black">
                <p className="w-100  text-black"><h2 className='mt-3'>Education Management System</h2></p>
                    <p className="lineHeight-24">
                    Easy-to-use All-in-One College and School Management Software, to help your school or college save time!
                    <br />{" "}
                    </p>
                    <p className="lineHeight-24">
                    SYNECTIKS EMS is a cloud-based education management solution designed for individual instructors, schools 
                    and colleges. Key features include Student and Class Management, Grade Management, Attendance and Timetable, Communication tool and more...
                    <br />{" "}
                    </p>
                    <p className="lineHeight-24">
                    Simple, Powerful and Cost-Effective Education Management System.
                    <br />{" "}
                    </p>

                </div>
            </div>

            <div className="d-flex justify-content-around align-items-center p-2 flex-col text-center col-lg-12">
                <div className="pb-3 col-sm-4" >
                    <div className="w-100 ">
                        <img height="auto" width="100%"
                            className="w-25"
                            src="img/CheckMark.png"
                            alt="Simple"
                        />
                        <p><b>Simple</b></p>
                        <p className="text-center">
                        Designed to engage Teachers, Parents and Students. No expertise required.
                    </p>
                    </div>
                </div>
                <div className="pb-3 col-sm-4" >
                    <div className="w-100 ">
                        <img height="auto" width="100%"
                            className="w-25"
                            src="img/CheckMark.png"
                            alt="Powerful"
                        />
                        <p><b>Powerful</b></p>
                        <p className="text-center">
                        With efficient operations and ready access to real-time data, you 
                        can streamline and automate your core business processes.
                    </p>
                    </div>
                </div>
                <div className="pb-3 col-sm-4" >
                    <div className="w-100 ">
                        <img height="auto" width="100%"
                            className="w-25"
                            src="img/CheckMark.png"
                            alt="Cost-Effective"
                        />
                        <p><b>Cost-Effective</b></p>
                        <p className="text-center">
                        Our plans are affordable. We have no hidden fees, no catches, and no fine prints.
                    </p>
                    </div>
                </div>

                </div>

            <div className=" p-5" >
                <p className="seperator-grey"></p>
            </div>

            {/* <div className="px-5" data-aos="fade-up" data-aos-duration="2000">
            <div className="">
                    <div className="w-40 ">
                        <img src="img/HR.png" width="100%" alt="DevOps Transformation" />{" "}
                    </div>
                </div>
                </div>
                
            <div className=' text-black w-100 mt-3 text-white px-5 py-2 flex-col d-flex text-justify'>
                <div className="w-100  text-black">
<p className="w-100  text-black"><b className='mt-3'>
An All-in-One HR and Payroll solution built to meet the demands of today’s world!
</b></p>
                    <p className="lineHeight-24">
                    SYNECTIKS WorkForce Suite is an integrated cloud-based platform designed to make You and 
                    Your employee’s lives easier. SYNECTIKS WorkForce, helps streamline hiring, onboarding, and employee 
                    records management through a single online dashboard, so you can take care of what matters.
                    <br />{" "}
                    </p>                    
                    <p className="lineHeight-24"><b>
                    Next Generation HR priced right for You.
                    <br />{" "}
                    </b></p>

                </div>
            </div>

            <div className="d-flex justify-content-around align-items-center p-2 flex-col text-center col-lg-12">
                <div className="pb-3 col-sm-3" >
                    <div className="w-75 p-5">
                        <img height="auto" width="100%"
                            className=""
                            src="img/FindEmployee.png"
                            alt="First slide"
                        />
                        <p><b>People</b></p>                       
                    </div>
                </div>
                <div className="pb-3 col-sm-3" >
                    <div className="w-75 p-5">
                        <img height="auto" width="100%"
                            className=""
                            src="img/PerformanceAppraisal.png"
                            alt="First slide"
                        />
                        <p><b>Appraisals</b></p>                        
                    </div>
                </div>
                <div className="pb-3 col-sm-3" >
                    <div className="w-75 p-5">
                        <img height="auto" width="100%"
                            className=""
                            src="img/PayrollAdministration.png"
                            alt="First slide"
                        />
                        <p><b>Payroll Management</b></p>
                    </div>
                </div>

                <div className="pb-3 col-sm-3" >
                    <div className="w-75 p-5">
                        <img height="auto" width="100%"
                            className=""
                            src="img/JobRotation.png"
                            alt="First slide"
                        />
                        <p><b>Employee Self-Service</b></p>                   
                    </div>
                </div>

                </div>

                <div className="d-flex justify-content-around align-items-center p-2 flex-col text-center col-lg-12">
                <div className="pb-3 col-sm-3" >
                    <div className="w-75 p-5">
                        <img height="auto" width="100%"
                            className=""
                            src="img/TimeTracking.png"
                            alt="First slide"
                        />
                        <p><b>Timesheets</b></p>                       
                    </div>
                </div>
                <div className="pb-3 col-sm-3" >
                    <div className="w-75 p-5">
                        <img height="auto" width="100%"
                            className=""
                            src="img/LeaveApplication.png"
                            alt="First slide"
                        />
                        <p><b>Leaves &amp; Shift Schedules</b></p>                        
                    </div>
                </div>
                <div className="pb-3 col-sm-3" >
                    <div className="w-75 p-5">
                        <img height="auto" width="100%"
                            className=""
                            src="img/EmployeeTurnover.png"
                            alt="First slide"
                        />
                        <p><b>Mobile Support</b></p>
                    </div>
                </div>

                <div className="pb-3 col-sm-3" >
                    <div className="w-75 p-5">
                        <img height="auto" width="100%"
                            className=""
                            src="img/EmploymentPerformance.png"
                            alt="First slide"
                        />
                        <p><b>Reports &amp; Analytics</b></p>                   
                    </div>
                </div>
                
                </div>

                <div className=" p-5" >
                <p className="seperator-grey"></p>
            </div> */}

            <div className="px-5" data-aos="fade-up" data-aos-duration="2000">
            <div className="">
                    <div className="w-40 text-center">
                        <img src="img/Office365.png" width="75%" alt="Office365" />{" "}
                    </div>
                </div>
                </div>

                <div className=' text-black w-100 mt-3 text-white px-5 py-2 flex-col d-flex text-justify'
                data-aos="fade-up" data-aos-duration="2000">
                <div className="w-100  text-black">
                    <p className="lineHeight-24">
                        Microsoft is the recognized leader in cloud productivity solutions for business with Office 365 - transforming the workplace experience.
                    </p> <br />{" "}
                    <p className="lineHeight-24">
                    With a certified team of Microsoft Partner Professionals, SYNECTIKS delivers on all Microsoft Cloud Solutions, including 
                    Office 365, SharePoint, Skype for Business, Teams, Power BI, Microsoft 365 (Office 365 + Enterprise Mobility + Security), and Azure.
                    <br />{" "}
                    </p>                    
                    <p className="lineHeight-24">
                    Imagine what we can do for you!
                    <br />{" "}
                    </p>
                    <p className="lineHeight-24">
                    We don’t just move you to Office 365. We help you create and sustain a cost-efficient, highly responsive and 
                    secure evergreen workplace platform. We provide a holistic set of transformational and managed services to modernize your workplace.
                    <br />{" "}
                    </p>
                    <p className="lineHeight-24 list-tick">
                    <p><b>We can help accelerate your move to a digital workplace through our:</b>                        
                    </p>                  
                    <ul className="lineHeight-34">
                        <li>&nbsp;Experience in unlocking the full productivity potential of Office 365</li>
                        <li>&nbsp;Giving you cost-effective and collaborative tools, including Microsoft Teams, Skype for Business and SharePoint Online.</li>
                        <li>&nbsp;Insights from self-service and data discovery with Microsoft Power BI for Office 365.</li>
                        <li>&nbsp;Ability to extend standard Office 365 service offerings with managed services</li>
                    </ul>
                    </p>
                  
                </div>
            </div>

            <div className="w-100 px-5  text-black" data-aos="fade-up" data-aos-duration="2000">
            <p className="lineHeight-24">
                    <b>Find Out Why Users Are Choosing Office 365</b>                                            
                    </p>
                    </div>
            <div className="d-flex px-5 py-3 flex-col text-center col-lg-12" data-aos="fade-up" data-aos-duration="2000">
          
                <div className="p-3 m-1 col-sm-3 border-grey-2px text-center" >
                    <div className="w-100 ">                       
                        <p><b>Work Better Together</b></p>       
                        <p>
                        Work Anywhere, Anytime, on Any Device with Office 365. Empower your employees the tools they need.
                    </p>                
                    </div>
                </div>

                <div className="p-3 m-1 col-sm-3 border-grey-2px text-center" >
                    <div className="w-100 ">                       
                        <p><b>Get More Done</b></p>       
                        <p >
                        Enjoy access to the latest versions, security updates, and feature releases.
                    </p>                
                    </div>
                </div>
                
                <div className="p-3 m-1 col-sm-3 border-grey-2px text-center" >
                    <div className="w-100 ">                       
                        <p><b>Work Securely</b></p>       
                        <p>
                        Work and Share files confidently with built-in security and privacy controls that help keep your data safe and secure.
                    </p>                
                    </div>
                </div>
                <div className="p-3 m-1 col-sm-3 border-grey-2px text-center" >
                    <div className="w-100 ">                       
                        <p><b>Simplified for You</b></p>       
                        <p >
                        Choose solutions that are right for your business. Get more value for your money.
                    </p>                
                    </div>
                </div>                
                </div>

                <div className=' text-black w-100 mt-3 text-white px-5 py-2 flex-col d-flex text-justify'
                data-aos="fade-up" data-aos-duration="2000">
                <div className="w-100  text-black">
                <p className="lineHeight-24 list-tick">
                    <p><b>Built by Microsoft, Made Easy by SYNECTIKS</b>                        
                    </p>                  
                    <ul className="lineHeight-34">
                        <li>&nbsp;<b>Reliable Support:</b> 24x7x365 support via phone or ticket. 15-minute response time 
                            on Sev-1 tickets. SLA based proactive support with Microsoft support escalations.</li>
                        <li>&nbsp;<b>Migration Assistance:</b> Let our dedicated team of specialists help you plan and perform your email data migration.</li>
                        <li>&nbsp;<b>Dedicated to Your Success:</b> It’s our mission to enable your continued success by advising you and your team on the right technologies &amp; tools to deliver the desired results.</li>
                        <li>&nbsp;<b>Licensing Management:</b> We can provide all required Office 365 licensing for your organization on one consolidated invoice</li>
                    </ul>
                    </p>
                </div>
                </div>

           
            {/* Contact Starts */}
            {/* <div className='py-3 '>
                <h2 className='text-center text-black'>Ask for Demo</h2>
                <h5 className='text-center text-black'>Straight talk on your challenges.</h5>
            </div>

            <div className="px-5 py-3 ">

                <div className="d-flex text-center col-md-12 p-2 flex-col">
                    <div className="col-sm-4 p-2" >
                        <input className="inputBoxFlex" placeholder="&nbsp;&nbsp;First Name" width="90%" />
                    </div>
                    <div className="col-sm-4 p-2" >
                        <input className="inputBoxFlex" placeholder="&nbsp;&nbsp;Last Name" width="90%" />
                    </div>
                    <div className="col-sm-4 p-2" >
                        <input className="inputBoxFlex" placeholder="&nbsp;&nbsp;Email" width="90%" />
                    </div>
                </div>

                <div className="d-flex text-center col-md-12 p-2 flex-col">
                    <div className="col-sm-4 p-2" >
                        <input className="inputBoxFlex" placeholder="&nbsp;&nbsp;Company" width="90%" />
                    </div>
                    <div className="col-sm-4 p-2" >
                        <input className="inputBoxFlex" placeholder="&nbsp;&nbsp;City" width="90%" />
                    </div>
                    <div className="col-sm-4 p-2" >
                        <input className="inputBoxFlex" placeholder="&nbsp;&nbsp;Mobile" width="90%" />
                    </div>
                </div>

                <div className="d-flex text-center col-md-12 p-2 flex-col">
                    <div className="col-sm-4 p-2" >
                        <input className="inputBoxFlex" placeholder="&nbsp;&nbsp;Phone" width="90%" />
                    </div>
                    <div className="col-sm-4 p-2 " >
                     
                        <select className="inputBoxFlex">
                            <option value="enterprise">&nbsp;Contact&nbsp;Source</option>
                            <option value="enterprise">&nbsp;Advertisement</option>
                            <option value="foundation">&nbsp;Customer&nbsp;Event</option>
                            <option value="migration">&nbsp;Employee&nbsp;Referral</option>
                            <option value="operations">&nbsp;Google&nbsp;Adwords</option>
                            <option value="others">&nbsp;Other</option>
                            <option value="optimization">&nbsp;Partner</option>
                            <option value="optimization">&nbsp;Purchased&nbsp;List</option>
                            <option value="optimization">&nbsp;Trade&nbsp;Show</option>
                            <option value="optimization">&nbsp;Webinar</option>
                            <option value="optimization">&nbsp;Website</option>
                        </select>
                    </div>
                    <div className="col-sm-4 p-2" >
                        
                        <select className="inputBoxFlex">
                            <option value="enterprise">&nbsp;Select&nbsp;Service</option>
                            <option value="enterprise">&nbsp;Enterprise&nbsp;Transformation</option>
                            <option value="foundation">&nbsp;Foundation</option>
                            <option value="migration">&nbsp;Migration&nbsp;&amp;&nbsp;Deployment</option>
                            <option value="operations">&nbsp;Operations</option>
                            <option value="optimization">&nbsp;Optimization</option>
                            <option value="others">&nbsp;Others</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className='text-center p-5'>
                <button className='btn menu-bg btnSend'>Submit</button>
            </div> */}
            {/* Contact Ends */}

        </div>

    );
};

export default Applicationservices;