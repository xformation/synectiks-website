import * as React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ModalContact from './ModalContact';

const wid = {
  width: '91%',
};

export class CloudDisasterRecovery extends React.Component<any, any, any>{
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
          <div className="py-3 col-md-2 nav-item dropdown bg-logoblue brdr025" >
            <Link to="/HostedInfrastructure" className='text-white noLine'>
              <a className="noLine" href="#" id="cloudnav" data-toggle="dropdown">
                <span id="hosted">Cloud&nbsp;Hosted&nbsp;Services&nbsp;&#9660;</span>
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
          <div className="py-3 col-md-2" >
            <Link to="/publiccloud" className='text-logoblue bg-white noLine'>
              <b>Public Cloud</b>
            </Link>
          </div>
          <div className="py-3 col-md-2" >
            <Link to="/colocation" className='text-logoblue bg-white noLine'>
              <b>Colocation</b>
            </Link>
          </div>

        </div>

        <div className="text-black w-100 mt-3 px-5 py-2 flex-col d-flex text-justify" data-aos="fade-up" data-aos-duration="2000">
          <div className="w-50 px-3 mt-3">
            <img height="auto" width="100%"
              className=""
              src="img/DisasterRecovery_Subpage.jpg"
              alt="Cloud Disaster Recovery"
            />
          </div>

          <div className="w-100 px-3 pt-2 text-black">
            <h4 className=''>Protect your enterprise data with recovery capabilities that keep the lights on!</h4>
            <p className="lineHeight-34 ">
              <ul >
                <li>Data integrity for large, enterprise-class applications.</li>
                <li>Back to business as per our requirements.</li>
              </ul>
            </p>

            <p className='my-3'><h3>Why choose SYNECTIKS?</h3></p>

            <p className="lineHeight-34">
              We design and build DR solutions according to your unique business needs, offering:
           <br />{" "}
              <ul>
                <li><b>Customization:</b> We build the solution according to your business continuity needs. With
                RPO, RTO, Secondary Site Location, Failover and Failback options, we choose the best solution.
               </li>
                <li><b>Security:</b> Maintain the safety of your data with our state-of-the-art encryption.
               </li>
                <li><b>Tiering:</b> Leverage our solutions for optimizing cost – whether it is active-active, active-passive
               </li>
                <li><b>Technology:</b> We leverage VMware and native device replication capabilities to deliver industry-leading capabilities.
               </li>
              </ul>
            </p>
          </div>
        </div>

        <div className="px-5">
          <p className="lineHeight-24">
            <a className="navlink navfont noLine text-logoblue cursPoint" onClick={this.toggle}>
              <small>Contact&nbsp;Us&nbsp;</small></a>
            to learn more about SYNECTIKS Disaster Recover as a Service.
           <br />{" "}
          </p>
        </div>

        <div className="">
          <Modal isOpen={this.state.modal} toggle={this.toggle} >
            <ModalHeader className="bg-lightgrey" toggle={this.toggle}>Contact Us</ModalHeader>
            <ModalBody className="bg-lightgrey">
              <ModalContact />
            </ModalBody>
            {/* <ModalFooter className="bg-lightgrey">
    <div className="text-center p-2" >
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
export default CloudDisasterRecovery;
