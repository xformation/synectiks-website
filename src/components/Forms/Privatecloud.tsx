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
// export const Privatecloud = () => {
    export class Privatecloud extends React.Component<any,any,any>{
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
            window.scrollTo(0,0)
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
        <div className='bg-lightgrey'>

<div className=' text-black w-100 mt-3 text-white px-5 pt-5 mt-5 flex-col d-flex text-justify' >
<div className="mt-2 pt-3 text-black">
  <div className="d-flex">
    <h1>CLOUD&nbsp; &#8208;</h1>
    <h1>
    <i>&nbsp;Cloud Your Way!</i>
    </h1>
    </div>
    <p className="pht lineHeight-24">
    SYNECTIKS provides industry-leading expertise, services, and solutions that allow you to address your 
    specific needs and execute on the best-agreed approach to build and manage a cloud-enabled enterprise,that aligns with your transformation goals.
    </p>
    <p className="pht lineHeight-24">
    Whether you are yet to explore or have already started your cloud journey, we help you to accelerate 
    your company’s digital transformation and empower your business to stay ahead of the game. 
    </p>
    <p className="pht lineHeight-24">
    With our expertise on Cloud Solutions we will deliver it the way you need it – on-premise or private, public or hybrid cloud. Get no-cost expert guidance.
    </p>
    <p className="pht lineHeight-24">
    We’ll listen to You! Your business objectives and growth strategy. Schedule a 30-minute consultation to get your expedition to cloud started.
    </p> 
    </div>

<div className=" pl-5 py-3 mt-5 w-65" >
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
                    <Link to="/privatecloud" id="private" className='text-black bg-white noLine'>
                        <b>Private Cloud</b>
                    </Link>
                </div> 
                <div className="py-3 col-md-2" >
                    <Link to="/hybridcloud"  className='text-black bg-white noLine'>
                        <b>Hybrid Cloud</b>
                    </Link>
                </div> 
                <div className="py-3 col-md-2" >
                    <Link to="/publiccloud" className='text-black bg-white noLine'>
                        <b>Public Cloud</b>
                    </Link>
                </div> 
                <div className="py-3 col-md-2" >
                    <Link to="/colocation" className='text-black bg-white noLine'>
                        <b>Colocation</b>
                    </Link>
                </div>

            </div>

            <div className='text-center mt-3 lineHeight-24'>

            </div>

            <div className=' text-black w-100 mt-3 text-white px-5 py-2 flex-col d-flex text-justify'>

                <div className="w-100">
                    <img height="auto" width="100%"
                        className=""
                        src="img/PrivateCloud.jpg"
                        alt="Private Cloud"
                    />
                </div>

                <div className="w-100  px-5 text-black">
                    <h2>Private Cloud</h2>
                    <p><b><i>Power of the cloud while protecting your enterprise!</i></b></p>
                    <p className="lineHeight-24">
                        SYNECTIKS Cloud Private is a reliable and scalable cloud platform that runs your infrastructure - built
                        on open-source frameworks like Containers, Kubernetes, etc.., with standard services for deployment, monitoring, logging, and security.
                    <br />{" "}
                    </p>
                </div>

            </div>
    
            {/*  */}

<p className="px-5 py-3" data-aos="fade-up" data-aos-duration="2000">
    <b>
    How Private Cloud Helps Your Business:
    </b>
</p>
            <div className="container-fluid px-5" data-aos="fade-up" data-aos-duration="2000">
                <div className="row justify-content-around align-items-center">

                    <div className="card card-pvtcld mx-2 mb-3">
                        <div className="w-100 card-bd  py-4 text-white bg-logoblue text-center"><span>Optimize &amp; Secure</span></div>
                        <div className="card-body">
                            <p className="lineHeight-24">
                                Securing data is essential in building mission-critical applications. Connecting that data
                                to modern cloud services is also a priority. SYNECTIKS Cloud Private lets you do both with consistency.
                            <br />{" "}
                            </p>
                        </div>
                    </div>

                    <div className="card card-pvtcld mx-2 mb-3">
                        <div className="w-100 card-bd  py-4 text-white bg-logoblue text-center">Harness Powerful Cloud Services</div>
                        <div className="card-body">
                            <p className="lineHeight-24">
                                For your open-source application runtimes, choose the prescriptive development approach of Cloud
                        Foundry or the more customizable and portable method of Kubernetes Orchestration and Docker Containers.
                <br />{" "}
                            </p>
                        </div>
                    </div>

                    <div className="card card-pvtcld mx-2 mb-3">
                        <div className="w-100 card-bd py-4 text-white bg-logoblue text-center">Modernize Your Existing Applications</div>
                        <div className="card-body">
                            <p className="lineHeight-24">
                                Modernize and migrate your applications, build new cloud-based applications, and transform
                        your architecture and infrastructure while moving to a new technology operating model.
                    <br />{" "}
                            </p>
                        </div>
                    </div>

                    <div className="card card-pvtcld mx-2 mb-3">
                        <div className="w-100 card-bd py-4 text-white bg-logoblue text-center">Customize Your Resources</div>
                        <div className="card-body">
                            <p className="lineHeight-24">
                                Employ cloud bursting, within a private cloud offering, in the event of spikes in demand.
                        Customize the dedicated compute, storage and networking components to best suit your needs.
                <br />{" "}
                            </p>
                        </div>
                    </div>



                </div>
            </div>
            {/*  */}
      
            <div className="w-100 px-5 pt-5 text-black text-justify">
                <p className="lineHeight-24">
                    Begin your journey with SYNECTIKS Cloud Private.
                    <a className="navlink navfont noLine text-logoblue"  onClick={this.toggle}>
              <small> Contact&nbsp;Us&nbsp;</small>
            </a>
                {/* <NavLink className="navlink navfont noLine" to="/contactus"><small>&nbsp;Contact&nbsp;Us&nbsp;</small></NavLink> */}
                to learn more.
                <br />{" "}
                </p>
            </div>

            {/*  */}
        

                {/* <div className="d-flex justify-content-around align-items-center p-5 flex-col ">
          <p>
            <a className="navlink navfont noLine text-logoblue"  onClick={this.toggle}>
              <small>Contact&nbsp;Us&nbsp;</small>
            </a>
            to learn more about SYNECTIKS DevOps Transformation Service.
          </p>
        </div> */}

                <div className="">
{/* <Button color="primary" onClick={this.toggle}>
Contact&nbsp;Us&nbsp;
</Button> */}
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
            {/*  */}
            <div className="container">
        <div className="d-flex justify-content-around align-items-center mt-5 flex-col" />
      </div>

        </div>

    );
};
    }
export default Privatecloud;
