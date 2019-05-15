import * as React from "react";
// import { Right } from "react-bootstrap/lib/Media";
import { LinearProgress } from "material-ui";
import { LARGE } from "material-ui/utils/withWidth";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const HostedInfrastructure: React.StatelessComponent<{}> = () => {
    return (
        <div  className='bg-lightgrey' data-aos="fade-up" data-aos-duration="2000">

            <div className='bg-lightgrey  text-black w-100 mt-3 text-white p-5 mt-5 flex-col d-flex text-justify'>

            <div className="w-100 mt-5 pt-3 pr-5  text-black">
                    <h1 className=" hfont">
                        CLOUD
                    </h1>
                    <p className="rfont">
                    <b><i>Cloud Your Way!</i></b>
                    </p>
                    <p className="lineHeight-24">
                    Drive innovation and accelerate your cloud initiatives with our full spectrum of digital, analytics and enterprise cloud services.
                    <br />{" "}
                    </p>
                    <p className="lineHeight-24">
                    We’ll listen to You! Your business objectives and growth strategy. SYNECTIKS provides industry-leading 
                    expertise, services, and solutions that allow you to address your specific needs and execute on the best-agreed 
                    approach to build and manage a cloud-enabled enterprise, that aligns with your transformation goals.  
                    <br />{" "}
                    </p>
                    <p className="lineHeight-24">
                    Whether you are yet to explore or have already started your cloud journey, SYNECTIKS can accelerate 
                    your company’s digital transformation and empower your business to stay ahead of the game.
                    <br />{" "}
                    </p>
                    <p className="lineHeight-24">
                    SYNECTIKS is the leader in Cloud Solutions and can deliver it the way you need it – on-premise or 
                    private, public or hybrid cloud.
                    <br />{" "}
                    </p>
                    <p className="lineHeight-24">
                    Get no-cost expert guidance.<br />{" "}
                    </p>
                    <p>
                    We're here to help! Schedule a 30-minute consultation to get your expedition to cloud started.
                    <br />{" "}
                    </p>
                    </div>
                    
                <div className="w-100 pt-5 mt-5">
                    <img height="auto" width="100%"
                        className=""
                        src="img/CloudCommon.png"
                        alt="Cloud"
                    />
                </div>
            </div>

            
 <div className=" bg-white d-flex justify-content-around align-items-center p-2 flex-col text-center col-lg-12" 
 data-aos="fade-up" data-aos-duration="2000">
            <div className="py-3 col-md-2" >
                    <Link to="/publiccloud" className='text-black bg-white noLine'>
                        <b>Public Cloud</b>
                    </Link>
                </div> 
                <div className="py-3 col-md-2" >
                    <Link to="/privatecloud"  className='text-black bg-white noLine'>
                        <b>Private Cloud</b>
                    </Link>
                </div> 
                <div className="py-3 col-md-2" >
                    <Link to="/hybridcloud"  className='text-black bg-white noLine'>
                        <b>Hybrid Cloud</b>
                    </Link>
                </div> 
                <div className="py-3 col-md-2" >
                    <Link to="/colocation" className='text-black bg-white noLine'>
                        <b>Colocation</b>
                    </Link>
                </div>
                
                <div className="py-3 col-md-2 nav-item dropdown" >
                    <Link to="/HostedInfrastructure" id="hosted" className='text-black bg-white noLine'>                                           
                        {/* <div className="collapse navbar-collapse nav-item dropdown pr-3 py-3 col-md-2"
                        id="navbarSupportedContent">  */}
                        <a className="nav-link" href="#" id="cloudnav"  data-toggle="dropdown">
                                <b id="hosted">Cloud&nbsp;Hosted&nbsp;Services</b>
                        </a>
                        <div className="dropdown-menu w17em">
                                    <NavLink className="dropdown-item" to="/CloudManagedBackup">
                                        {" "}
                                       Cloud Managed Backup{" "}
                                    </NavLink>
                                    <NavLink className="dropdown-item"  to="/CloudDisasterRecovery">
                                        {" "}
                                        Cloud Disaster Recovery{" "}
                                    </NavLink>
                                    <NavLink className="dropdown-item"  to="/HostedInfrastructure">
                                        {" "}
                                        Hosted Infrastructure{" "}
                                    </NavLink>                                    
                                </div>                                                   
                        {/* </div> */}
                    </Link>                                                                  
                </div>

            </div>
        
            {/* <div>
                <h2 className='text-center mt-3'>Cloud Hosted Services</h2>
            </div> */}
        
            <div className="text-black w-100 mt-3 px-5 py-2 flex-col d-flex text-justify" data-aos="fade-up" data-aos-duration="2000">
           
                    <div className="w-100">
                        <img src="img/HostedInfra.png" width="100%" alt="Hosted Infrastructure" />{" "}
                    </div>
                
                <div className="w-100 px-5 text-black">
            <h2 className='my-3'>Hosted Infrastructure</h2>
            <p className="lineHeight-24">
            SYNECTIKS Infrastructure as a Service (IaaS) provides computing, networking, and 
            storage services with a high degree of control, security, and simplicity.
            </p><br />{" "}
            <p>
            Support your mission-critical applications and workloads with instant and scalable infrastructure. With 
            SYNECTIKS IaaS, you can focus on your business needs instead of spending the time and money it takes to 
            plan, procure, secure, and manage the right infrastructure to meet your application demands.
            </p>
            </div>
            </div>

            <div className="w-100 px-5  text-black" data-aos="fade-up" data-aos-duration="2000">
            <h4 className='my-3'>Quickly Provision Infrastructure for all Your Workloads</h4>
            <p className="lineHeight-24">
            Whether your mission-critical applications powered by Linux, Windows Server, SAP, or Oracle, SYNECTIKS offers 
            support for these and other workloads, including your favorite Open Source technologies, choose from a wide 
            variety of virtual machine sizes and storage performance classes configured for specific types of workloads.
            </p>
            
            <h4 className='my-3'>Let SYNECTIKS keep Your Data Secure</h4>
            <p className="lineHeight-24">
            SYNECTIKS safeguards data in facilities that are protected by industry-leading physical security systems and 
            are compliant with a comprehensive portfolio of standards and regulations.
            </p>
            <h4 className='my-3'>Reduce and Optimize Infrastructure</h4>
            <p className="lineHeight-24">
            Deliver the availability, security, and performance your workloads require at a fraction of the cost 
            of running them on-premises. Pay for only the infrastructure you use for virtual machines, reduce 
            expenses for predictable workloads with SYNECTIKS Reserved VM Instances.
            </p>
            <p className="lineHeight-24">
                <NavLink className="navlink navfont noLine" to="/contactus"><small>Contact&nbsp;Us&nbsp;</small></NavLink>
                to learn more about SYNECTIKS Infrastructure as a Service.
            <br />{" "}
            </p>

            </div>
            <div className="container">
        <div className="d-flex justify-content-around align-items-center mt-5 flex-col" />
      </div>

             {/* <marquee behavior="alternate" scrollamount="10"> ABC ABC</marquee> */}
          
        </div>

    );
};

export default HostedInfrastructure;
