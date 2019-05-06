import * as React from "react";
// import { Right } from "react-bootstrap/lib/Media";
import { LinearProgress } from "material-ui";
import { Link } from "react-router-dom";

export const Operations: React.StatelessComponent<{}> = () => {
    return (
        <div  className='bg-lightgrey'>
            
            {/* <div className='bg-theme mt-3'>
                <h1 className='text-center text-white pt-theme mt-2'>OPERATIONS</h1>
            </div> */}
             <div className="container pb-5">
        <div className="row main-card pb-5">
          <div className="col-md-12 col-12-lg card-deck">
{/* */}
            <div className="card btn card-shadow mx-3 pt-3">
            <Link to="/foundation" className="noLine">
              <img
                className="card-img-top"
                src="img/Foundation.png"
                alt="Foundation"
              />
              <div className="card-body">
                <h2 className="text-center text-uppercase">Foundation</h2>
              </div>
              </Link>
            </div>

            <div className="card btn card-shadow mx-3 pt-3">
            <Link to="/transformation" className="noLine">
              <img
                className="card-img-top"
                src="img/Transformation.png"
                alt="Transformation"
              />
              <div className="card-body">
                <h2 className="text-center text-uppercase">Transformation</h2>
              </div>
              </Link>
            </div>

            <div className="card btn card-shadow mx-3 pt-3">
            <Link to="/operations" className="noLine">
              <img
                className="card-img-top"
                src="img/Operation.png"
                alt="Operation"
              />
              <div className="card-body">
                <h2 className="text-center text-uppercase">Operation</h2>
              </div>
              <div className="pointer text-center">
              <h1>&#187;</h1>
              </div>
              </Link>
            </div> 
            {/*  */}
          </div>
        </div>
        </div>

            <div className='text-center mt-5 px-4'  data-aos="fade-up" data-aos-duration="2000">
                <h3 className='pt-5'>
                    24x7 Operations for enterprise managed services
                </h3>
            </div>
            <div  data-aos="fade-up" data-aos-duration="2000">
                <div className="pb-3">
                    <img src="img/Operations-graph.png" width="100%" alt="Operations for enterprise managed services" />{" "}
                </div>
            </div>

            <div className="container-fluid py-5"  data-aos="fade-up" data-aos-duration="2000">
            <div className="row justify-content-around align-items-center">     
            
                <div className="card card-hd mx-3">
                        <div className="w-100 card-bd bg-maroon"></div>
                        {/* <img className="card-img-top bg-maroon"  alt="Card image cap"></img> */}
                        <div className="card-body">
                            <small className="text-center  ">
We advise on assessment, migration, multi cloud hybrid architecture adoption coupled with our services, 
software, methodologies to accelerate enterprise transformation towards operation excellence.
</small>
                        </div>                    
                
                </div>    
               
                <div className="card card-hd mx-3">
                        <div className="w-100 card-bd bg-teal"></div>
                        <div className="card-body">
                            <small className="text-center">Synectiks xformation platform perform continuous 
                            audits on infrastructure, application, access management and ensure security 
                            compliances (CISP, HIPPA,PCI-DSS, DISA, NIST) across clouds, 
                            products and environment.
                            </small>
                        </div>                    
                </div>
                <div className="card card-hd mx-3">
                        <div className="w-100 card-bd bg-orange"></div>                        
                        <div className="card-body">
                            <small className="text-center">Synectiks xformation platform perform continuous billing 
                            monitoring across the accounts, services, environments, 
                            identifies capex spending and underutilized resources.
                            </small>
                        </div>                    
                </div>
                <div className="card card-hd mx-3">
                        <div className="w-100 card-bd bg-green"></div>                      
                        <div className="card-body">
                            <small className="text-center">Synectiks continuous delivery platform enables you to 
                            continuously release new features and changes with superior quality. 
                            The delivery mechanism includes multiple quality gates and staged deployment, 
                            that ensures rapid releases with less tests efforts.
                            </small>
                        </div>                    
                </div>
                <div className="card card-hd mx-3">
                        <div className="w-100 card-bd bg-pink"></div>
                        <div className="card-body">
                            <small className="text-center">Synectiks automation platform automates 
                            frequently occurring IT tasks, reducing IT tickets 80%. 
                            The intelligent diagnostics platform auto fixes more that 50% general alarms.
                            </small>
                        </div>                    
                </div>
           

                </div>
            </div>
{/* Contact Starts */}
            {/* <div className='py-5'  data-aos="fade-up" data-aos-duration="2000">
                <h2 className='text-center text-black'>Ask for Demo</h2>
                <h5 className='text-center text-black'>Straight talk on your challenges.</h5>
            </div>

            <div className="px-5 py-3 "  data-aos="fade-up" data-aos-duration="2000">

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

export default Operations;
