import * as React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ModalContact from "./ModalContact";

const wid = {
  width: '91%',
};

export class Publiccloud extends React.Component<any, any, any>{
  constructor(props: any) {
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
    window.scrollTo(0, 0)
  }

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Cannot be empty";
    }

    if (typeof fields["email"] !== "undefined") {
      let lastAtPos = fields["email"].lastIndexOf('@');
      let lastDotPos = fields["email"].lastIndexOf('.');

      if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  contactSubmit(e) {
    e.preventDefault();
    if (this.handleValidation()) {
      alert("Form submitted");
    } else {
      alert("Form has errors.")
    }

  }

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  render() {
    return (
      <div className='bg-lightgrey'>

        <div className=' text-black w-100 container-fluid mt-3 text-white px-5 pt-5 mt-5 flex-col d-flex text-justify' >
          <div className="mt-2 pt-3 text-black">
            <div className="d-flex">
              <h1>CLOUD&nbsp; &#8208;</h1>
              <h1>
                <i>&nbsp;Cloud Your Way!</i>
              </h1>
            </div>
            <p className="pht lineHeight-24">
              SYNECTIKS provides industry-leading expertise services and solutions that allow you to address your
              specific needs and execute on the best-agreed approach to build and manage a cloud-enabled enterprise, that aligns with your transformation goals.
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

          <div className=" pl-5 py-3 mt-3 w-60" >
            <img height="auto"
              className="img100 img-fluid"
              src="img/CloudCommon.png"
              alt="Cloud"
            />
          </div>
        </div>

        <div className=" bg-white d-flex justify-content-around align-items-center px-2 flex-col text-center col-lg-12">
          <div className="py-3 col-md-2 nav-item dropdown" >
            <Link to="/HostedInfrastructure" className='text-logoblue bg-white noLine'>
              <a className="noLine" href="#" id="" data-toggle="dropdown">
                <b className="text-logoblue">Cloud&nbsp;Hosted&nbsp;Services&nbsp;&#9660;</b>
              </a>
              <div className="dropdown-menu w17em">
                <NavLink className="dropdown-item" to="/HostedInfrastructure">
                  {" "}
                  Hosted Infrastructure{" "}
                </NavLink>
                <NavLink className="dropdown-item" to="/CloudManagedBackup">
                  {" "}
                  Cloud Managed Backup{" "}
                </NavLink>
                <NavLink className="dropdown-item" to="/CloudDisasterRecovery">
                  {" "}
                  Cloud Disaster Recovery{" "}
                </NavLink>
              </div>
            </Link>
          </div>

          <div className="py-3 col-md-2" >
            <Link to="/privatecloud" className='text-logoblue bg-white noLine'>
              <b>Private Cloud</b>
            </Link>
          </div>
          <div className="py-3 col-md-2" >
            <Link to="/hybridcloud" className='text-logoblue bg-white noLine'>
              <b>Hybrid Cloud</b>
            </Link>
          </div>
          <div className="py-3 col-md-2 bg-logoblue brdr025" >
            <Link to="/publiccloud" id="public" className='text-white  noLine'>
              Public Cloud
                    </Link>
          </div>
          <div className="py-3 col-md-2" >
            <Link to="/colocation" className='text-logoblue bg-white noLine'>
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
              existing workloads to the cloud, modernize workloads to run cloud-native or optimize existing
              cloud workloads, we can facilitate.
                <br />{" "}
            </p>
          </div>
        </div>

        <div >
          <h2 className='text-center mt-3'>Cloud Services for AWS</h2>
        </div>

        <div className=' text-black w-100 mt-3 px-5 py-2 flex-col d-flex text-justify' data-aos="fade-up" data-aos-duration="2000">

          <div className="w-100  text-black">
            <p className="lineHeight-24">
              As a lot of enterprises move to AWS, organizations are challenged to provide corporate
              oversight, security and price controls across the cloud estate. Poor oversight usually
              results in over provisioning of cloud services, wasteful and unplanned disbursement and
              instances with open, unsecured ports.
                    <br />{" "}
            </p>
            <p className="lineHeight-24">
              SYNECTIKS Cloud Services for AWS provides design, delivery and daily operational support
              of compute, storage and virtual network infrastructure among the AWS cloud. We tend to monitor
              and manage system code and infrastructure configurations and our financial and governance services
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
            your organization management of and more significant visibility into, your AWS surroundings.
                <br />{" "}
          </p>
          <p>
            <a className="navlink navfont noLine text-logoblue cursPoint" onClick={this.toggle}>
              <small>Contact&nbsp;Us&nbsp;</small>
            </a>
            to learn more about SYNECTIKS Cloud Services for AWS.
          </p>
        </div>
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
              up your path to the cloud. We tend to rework and migrate your applications and facilitate
              your manage and optimize your hybrid IT atmosphere.
                    <br />{" "}
            </p>
            <p className="lineHeight-24">
              Solutions embrace Managed Services for Azure for design, delivery and 24x7 support and
              daily operational support of compute, network and storage and Services for Azure Stack
              to bring the agility of Azure to your knowledge center. Build, modernize, rework and migrate
              your applications with Application Services for Azure.
                    <br />{" "}
            </p>
            <p className="lineHeight-24">
              SYNECTIKS end-to-end services for hybrid IT begins with planning and migration - knowing
              what to move and how to move it. Next, we transform your applications, optimize for the
              cloud and provide ongoing services to help manage the new environment - to make sure you’re
              secure and paying only for what you need. We plan, move and manage your workloads efficiently
              with our end-to-end services.
                    <br />{" "}
            </p>
            <p>
              <a className="navlink navfont noLine text-logoblue cursPoint" onClick={this.toggle}>
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

        <div className="">
          <Modal isOpen={this.state.modal} toggle={this.toggle} >
            <ModalHeader className="bg-lightgrey" toggle={this.toggle}>Contact Us</ModalHeader>
            <ModalBody className="bg-lightgrey brdr-btm-030">
              <ModalContact />
            </ModalBody>
            {/* <ModalFooter className="bg-lightgrey">
    <div className="text-center p-2" onClick={this.toggle}>
      <button className="btn bg-logoblue text-white btnSend" id="submit" value="Submit">Submit</button>
    </div>{" "}
  </ModalFooter> */}
          </Modal>
        </div>
        <div className="container">
          <div className="d-flex justify-content-around align-items-center mt-5 flex-col" />
        </div>

      </div>

    );
  };
}
export default Publiccloud;

var vv_base_id = 'q00IB13hyn';
var vv_ext_id = '5d53ed9a';
var __ibaseUrl = (("https:" == document.location.protocol) ? "https://frontend.id-visitors.com" : "http://frontend.id-visitors.com");
(function () {
var va = document.createElement('script'); va.type = 'text/javascript'; va.async = true;
va.src = __ibaseUrl + '/cscripts/' + vv_base_id + '-' + vv_ext_id + '.js';
var sv = document.getElementsByTagName('script')[0]; sv.parentNode.insertBefore(va, sv);
})(); 
