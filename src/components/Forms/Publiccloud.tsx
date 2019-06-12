import * as React from "react";
// import { Right } from "react-bootstrap/lib/Media";
import { LinearProgress } from "material-ui";
import { LARGE } from "material-ui/utils/withWidth";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Input,Label,Form,FormGroup } from 'reactstrap';

const wid = {
    width: '91%',
  };

// export const Publiccloud: React.StatelessComponent<{}> = () => {
    export class Publiccloud extends React.Component<any,any,any>{
        constructor(props:any) {
          super(props); 

          this.state = {
            modal: false,
            fields: {},
            errors: {}
          };
          
          this.toggle = this.toggle.bind(this);
          
        }
        toggle() {
            this.setState(prevState => ({
              modal: !prevState.modal
            }));
          }
        componentDidMount() {
            window.scrollTo(0,30)
          }

          handleValidation(){
            let fields = this.state.fields;
            let errors = {};
            let formIsValid = true;
        
            if(!fields["email"]){
              formIsValid = false;
              errors["email"] = "Cannot be empty";
            }
        
            if(typeof fields["email"] !== "undefined"){
              let lastAtPos = fields["email"].lastIndexOf('@');
              let lastDotPos = fields["email"].lastIndexOf('.');
        
              if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
                formIsValid = false;
                errors["email"] = "Email is not valid";
              }
            }
        
            this.setState({errors: errors});
            return formIsValid;
          }
        
          contactSubmit(e){
            e.preventDefault();
            if(this.handleValidation()){
              alert("Form submitted");
            }else{
              alert("Form has errors.")
            }
        
          }
        
          handleChange(field, e){    		
            let fields = this.state.fields;
            fields[field] = e.target.value;        
            this.setState({fields});
          }

        render() {
    return (
        <div  className='bg-lightgrey'>

            <div className=' text-black w-100 mt-3 text-white px-5 pt-5 mt-5 flex-col d-flex text-justify' >

            <div className="mt-2 pt-3 text-black">
  <div className="d-flex">
    <h1 className=" hfont">CLOUD&nbsp; &#8208;</h1>
    <p className="rfont">
    <b><i>&nbsp;Cloud Your Way!</i></b>
    </p>
    </div>
    <p className="lineHeight-24">
    Drive innovation and accelerate your cloud initiatives with our full spectrum of digital, analytics and enterprise cloud services.
    <br />
    </p>
    <p className="lineHeight-24">
    We’ll listen to You! Your business objectives and growth strategy. SYNECTIKS provides industry-leading 
    expertise, services, and solutions that allow you to address your specific needs and execute on the best-agreed 
    approach to build and manage a cloud-enabled enterprise, that aligns with your transformation goals.  
    <br />
    </p>
    <p className="lineHeight-24">
    Whether you are yet to explore or have already started your cloud journey, SYNECTIKS can accelerate 
    your company’s digital transformation and empower your business to stay ahead of the game.
    <br />
    </p>
    <p className="lineHeight-24">
    SYNECTIKS is the leader in Cloud Solutions and can deliver it the way you need it – on-premise or 
    private, public or hybrid cloud.
    Get no-cost expert guidance.<br/>
    We're here to help! Schedule a 30-minute consultation to get your expedition to cloud started.
    </p> 
 
    </div>

                <div className="w-100 pl-5 py-3 mt-5">
                    <img height="auto" width="100%"
                        className=""
                        src="img/CloudCommon.png"
                        alt="Cloud"
                    />
                </div>
            </div>

            <div className=" bg-white d-flex justify-content-around align-items-center px-2 flex-col text-center col-lg-12">
           <div className="py-3 col-md-2 nav-item dropdown" >
                    <Link to="/HostedInfrastructure"  className='text-black bg-white noLine'>                                           
                        {/* <div className="collapse navbar-collapse nav-item dropdown pr-3 py-3 col-md-2"
                        id="navbarSupportedContent">  */}
                        <a className="noLine" href="#" id="cloudnav"  data-toggle="dropdown">
                                <b>Cloud&nbsp;Hosted&nbsp;Services&nbsp;&#9660;</b>
                        </a>
                        <div className="dropdown-menu w17em">
                                    <NavLink className="dropdown-item"  to="/HostedInfrastructure">
                                        {" "}
                                        Hosted Infrastructure{" "}
                                    </NavLink>  
                                    <NavLink className="dropdown-item" to="/CloudManagedBackup">
                                        {" "}
                                       Cloud Managed Backup{" "}
                                    </NavLink>
                                    <NavLink className="dropdown-item"  to="/CloudDisasterRecovery">
                                        {" "}
                                        Cloud Disaster Recovery{" "}
                                    </NavLink>
                                                                      
                                </div>                                                   
                        {/* </div> */}
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
                    <Link to="/publiccloud" id="public" className='text-black bg-white noLine'>
                        <b>Public Cloud</b>
                    </Link>
                </div> 
                <div className="py-3 col-md-2" >
                    <Link to="/colocation" className='text-black bg-white noLine'>
                        <b>Colocation</b>
                    </Link>
                </div>

                
            </div>
              
                <div className="text-black w-100 mt-3 px-5 py-3 flex-col d-flex text-justify" >
                <div className="w-100">
                    <img height="auto" width="100%"
                        className=""
                        src="img/Publiccloud.jpg"
                        alt="Public Cloud"
                    />
                </div>
                <div className="w-100 px-5 text-black">                
                <h2>Public Cloud</h2>
                <p className="lineHeight-24">
                Our focus is on serving our customers, leverage the ability of the cloud within the ways 
                in which are most impactful to their business. Whether or not you’re wanting to maneuver 
                existing workloads to the cloud, modernize workloads to run cloud-native, or optimize existing 
                cloud workloads, we can facilitate.
                <br />{" "}
                </p>
               </div>
               </div>
           
            <div data-aos="fade-up" data-aos-duration="2000">
                <h2 className='text-center mt-3'>Cloud Services for AWS</h2>
            </div>

            <div className=' text-black w-100 mt-3 px-5 py-2 flex-col d-flex text-justify' data-aos="fade-up" data-aos-duration="2000">

                <div className="w-100  text-black">
                    <p className="lineHeight-24">
                    As a lot of enterprises move to AWS, organizations are challenged to provide corporate 
                    oversight, security and price controls across the cloud estate. Poor oversight usually 
                    results in overprovisioning of cloud services, wasteful and unplanned disbursement, and 
                    instances with open, unsecured ports.
                    <br />{" "}
                    </p>
                    <p className="lineHeight-24">
                    SYNECTIKS Cloud Services for AWS provides design, delivery and daily operational support 
                    of compute, storage and virtual network infrastructure among the AWS cloud. We tend to monitor 
                    and manage system code and infrastructure configurations, and our financial and governance services 
                    facilitate scale back uncontrolled consumption. You'll be able to rescale and down to frequently 
                    meet your dynamical business requirements, guaranteeing that your IT charges and services can frequently 
                    align to business demand.
                    <br />{" "}
                    </p>
                </div>
                <div className="px-5">
                    <img height="auto" width="100%"
                        className=""
                        src="img/CloudAWS.png"
                        alt="Cloud AWS"
                    />
                </div>
            </div>
            <div className="w-100 px-5 text-black text-justify" data-aos="fade-up" data-aos-duration="2000">
                <p className="lineHeight-24">
                We offer managed service bundles suited to your IT and financial objectives. Whether or not 
                you've got critical workloads that demand a full suite of services or you’re merely searching 
                for a light-touch service to manage charges, we can scale and align to satisfy your requests.
                    <br />{" "}
                </p>
                <p className="lineHeight-24">
                We mix the advanced watching tools within the industry with our Center of Excellence, giving 
                your organization management of, and more significant visibility into, your AWS surroundings.
                <br />{" "}
                </p>
                {/* <p className="lineHeight-24">
                <NavLink className="navlink navfont noLine" to="/contactus"><small>Contact&nbsp;Us&nbsp;</small>
                </NavLink>to learn more about SYNECTIKS Cloud Services for AWS.
                <br />{" "}
                </p> */}

                <p>
            <a className="navlink navfont noLine text-logoblue"  onClick={this.toggle}>
              <small>Contact&nbsp;Us&nbsp;</small>
            </a>
            to learn more about SYNECTIKS Cloud Services for AWS.
          </p>
            </div>
            {/* <div className="d-flex justify-content-around align-items-center p-5 flex-col ">
          <p>
            <a className="navlink navfont noLine text-logoblue"  onClick={this.toggle}>
              <small>Contact&nbsp;Us&nbsp;</small>
            </a>
            to learn more about SYNECTIKS DevOps Transformation Service.
          </p>
        </div> */}

            <div className=" p-5" >
                <p className="seperator-grey"></p>
            </div>

            <div data-aos="fade-up" data-aos-duration="2000">
                <h2 className='text-center'>Cloud Services for Microsoft Azure</h2>
            </div>

            <div className=' text-black w-100 mt-3 text-white px-5 py-2 flex-col d-flex text-justify' data-aos="fade-up" data-aos-duration="2000">

                <div className="w-100  text-black">
                    <p className="lineHeight-24">
                    We provide solution stack for Azure to support your digital transformation. We tend to set 
                    up your path to the cloud. We tend to rework and migrate your applications, and facilitate 
                    your manage and optimize your hybrid IT atmosphere.
                    <br />{" "}
                    </p>
                    <p className="lineHeight-24">
                    Solutions embrace Managed Services for Azure for design, delivery, and 24x7 support and 
                    daily operational support of compute, network, and storage, and Services for Azure Stack 
                    to bring the agility of Azure to your knowledge center. Build, modernize, rework and migrate 
                    your applications with Application Services for Azure.
                    <br />{" "}
                    </p>
                    <p className="lineHeight-24">
                    SYNECTIKS end-to-end services for hybrid IT begins with planning and migration - knowing 
                    what to move and how to move it. Next, we transform your applications, optimize for the 
                    cloud, and provide ongoing services to help manage the new environment - to make sure you’re 
                    secure and paying only for what you need. We plan, move and manage your workloads efficiently 
                    with our end-to-end services.
                    <br />{" "}
                    </p>
                    <p>
            <a className="navlink navfont noLine text-logoblue"  onClick={this.toggle}>
              <small>Contact&nbsp;Us&nbsp;</small>
            </a>
            to learn more about SYNECTIKS Cloud Services for Microsoft Azure.
          </p>
                </div>
                <div className=" px-5">
                    <img height="auto" width="100%"
                        className=""
                        src="img/CloudAzure.png"
                        alt="Cloud Azure"
                    />
                </div>
            </div>

            {/* <div className="w-100 px-5 text-black text-justify" > */}
            
              {/* <p className="lineHeight-24">
                <NavLink className="navlink navfont noLine" to="/contactus"  onClick={this.toggle} ><small>Contact&nbsp;Us&nbsp;</small></NavLink>to learn more about SYNECTIKS Cloud Services for Microsoft Azure.
                </p> */}
                {/* <div className="d-flex flex-col ">
                 <p>
            <a className="navlink navfont noLine text-logoblue"  onClick={this.toggle}>
              <small>Contact&nbsp;Us&nbsp;</small>
            </a>
            to learn more about SYNECTIKS Cloud Services for Microsoft Azure.
          </p>
        </div> */}
        {/* </div> */}

{/* <Button color="primary" onClick={this.toggle}>
Contact&nbsp;Us&nbsp;
</Button> */}
                <div className="">
<Modal isOpen={this.state.modal} toggle={this.toggle} >
  <ModalHeader className="bg-lightgrey" toggle={this.toggle}>Contact Us</ModalHeader>
  <ModalBody className="bg-lightgrey">
 
    <div className="px-5 py-3">
      <div className="text-center col-md-12  p-2 d-flex flex-col">
        <div className="p-2 col-sm-6">
         <input  type="text"  placeholder="&nbsp;&nbsp;First Name" className="inputBoxFlex" width="90%"/>
        </div>
        <div className="p-2 col-sm-6">
          <input className="inputBoxFlex" placeholder="&nbsp;&nbsp;Last Name" width="90%"/>
        </div>
        </div>
        <div className="text-center col-sm-12  p-2 d-flex flex-col">
        <div className="p-2 col-sm-12">
        <input className="inputBoxFlex"   style={wid} placeholder="&nbsp;&nbsp;Business Email Address" width="91%"
        onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]}/>
        </div>
        </div>
        <div className="text-center col-md-12  p-2 d-flex flex-col">
        <div className="p-2 col-sm-6">
          <input className="inputBoxFlex" placeholder="&nbsp;&nbsp;Company" width="90%"/>
        </div>
        <div className="p-2 col-sm-6">
          <input className="inputBoxFlex" placeholder="&nbsp;&nbsp;Job Title" width="90%"/>
        </div>
        </div>
        <div className="text-center col-md-12  p-2 d-flex flex-col">
        <div className="p-2 col-sm-6">
          <input className="inputBoxFlex" placeholder="&nbsp;&nbsp;Country/Region" width="90%"/>
        </div>
        <div className="p-2 col-sm-6">
          <input className="inputBoxFlex" placeholder="&nbsp;&nbsp;Telephone" width="90%"/>
        </div>
        </div>
        <div className="text-center col-md-12  p-2 d-flex flex-col">
        <div className="p-2 col-sm-6">
          <select className="inputBoxFlex">
            <option value="enterprise">
              &nbsp;Contact&nbsp;Source
            </option>
            <option value="enterprise">&nbsp;Advertisement</option>
            <option value="foundation">
              &nbsp;Customer&nbsp;Event
            </option>
            <option value="migration">
              &nbsp;Employee&nbsp;Referral
            </option>
            <option value="operations">
              &nbsp;Google&nbsp;Adwords
            </option>
            <option value="others">&nbsp;Other</option>
            <option value="optimization">&nbsp;Partner</option>
            <option value="optimization">
              &nbsp;Purchased&nbsp;List
            </option>
            <option value="optimization">
              &nbsp;Trade&nbsp;Show
            </option>
            <option value="optimization">&nbsp;Webinar</option>
            <option value="optimization">&nbsp;Website</option>
          </select>
        </div>
        <div className="p-2 col-sm-6">
          <select className="inputBoxFlex">
            <option value="enterprise">
              &nbsp;Select&nbsp;Service
            </option>
            <option value="enterprise">&nbsp;Cloud</option>
            <option value="enterprise">
              &nbsp;Enterprise&nbsp;Transformation
            </option>
            <option value="foundation">&nbsp;Foundation</option>
            <option value="migration">
              &nbsp;Migration&nbsp;&amp;&nbsp;Deployment
            </option>
            <option value="operations">&nbsp;Operations</option>
            <option value="optimization">&nbsp;Optimization</option>
            <option value="others">&nbsp;Others</option>
          </select>
        </div>
      </div>
    </div>

  </ModalBody>
  <ModalFooter className="bg-lightgrey">
    <div className="text-center p-2" onClick={this.toggle}>
      <button className="btn bg-logoblue text-white btnSend" id="submit" value="Submit">Submit</button>
    </div>{" "}
  </ModalFooter>
</Modal>
</div>  
                <div className="container">
        <div className="d-flex justify-content-around align-items-center mt-5 flex-col" />
      </div>

                {/* <p className="lineHeight-24">
                    <b>Advisory Services:</b>&nbsp; Assess your needs, design your hybrid IT roadmap and develop a
                    digital transformation strategy
            <br />{" "}
                </p>
                <p className="lineHeight-24">
                    <b>Cloud and Workload Migration Services:</b>&nbsp; Migrate to your hybrid platforms of choice with our industry-leading tools and practices.
            <br />{" "}
                </p>
                <p className="lineHeight-24">
                    <b>Cloud and Application Transformation Services:</b>&nbsp; Follow our factory approach to quickly transform applications. Get full support for monitoring and managing cloud environments,
                      system software, infrastructure configurations and costs.
            <br />{" "}
                </p>
                 */}
           

        </div>

    );
};
    }
export default Publiccloud;
