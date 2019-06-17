import * as React from "react";
// // import { Right } from "react-bootstrap/lib/Media";
import { LinearProgress } from "material-ui";
import { LARGE } from "material-ui/utils/withWidth";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';

// export const Microservices: React.StatelessComponent<{}> = () => {
const wid = {
  width: '91%',
};

export class Microservices extends React.Component<any, any, any> {
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
      <div className="bg-lightgrey text-justify ">
        <div className="w-100 py-5 mt-5">
          <img
            height="auto"
            width="100%"
            className=""
            src="img/Microservicesmain.jpg"
            alt="Microservices"
          />
        </div>
        {/* Floating Img */}
        <div className="conatiner-fluid px-5">
          <div className="row">
            <div className="w-100 btn-groups pFxd">
              <div className="showhim w-32">
                <img src="img/examples.png" className="border w-100 h-70" />
                <div className="showme bg-primary px-3 py-2 text-white"><Link className="text-white" to="/microserviceexample">Example of Microservices</Link></div>
              </div>
              <div className="showhim w-32 my-4">
                <img src="img/msbenefits.png" className="w-100 h-70" /> <div className="showme bg-primary px-3 py-2 text-white"><Link className="text-white" to="/microservicebenefit">Benefits of Microservices</Link></div></div>
              <div className="showhim w-32 mb-4">
                <img src="img/challenge.jpg" className="w-100 h-70" /> <div className="showme bg-primary px-3 py-2 text-white"><Link className="text-white" to="/microservicechallenge">
                  Challenges of Microservices </Link></div></div>
              <div className="showhim w-32">
                <img src="img/help.jpg" className="w-100 h-70" /><div className="showme bg-primary px-3 py-2 text-white"> <Link className="text-white" to="/microservicehelp">How we can help you?</Link></div></div>
            </div>
          </div>
        </div>

        <div
          className="container px-5 pt-3 lineHeight-24"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <p className="">
            To accommodate the increasing complexity of functional requirements,
            IT applications have embraced a variety of architectural patterns.
            Organizations must meet ever-changing business demands — from
            mainframe applications and client-server to service oriented
            architecture (SOA) and microservices.
            <br />{" "}
          </p>
          <p>
            <i>
              Microservices architecture is a combination of successful and
              proven concepts of software engineering such as agile software
              development, SOA, API-first design and continuous delivery (CD).
              This architecture and organizational approach to software
              development is designed to accelerate development cycles, foster
              innovation and ownership, and improve the ability to maintain and
              scale applications.
              <br />{" "}
            </i>
          </p>
          <p>
            Despite technological advancements, 90 percent of business IT
            applications are legacy and what are known as “monolithic”. These
            range from mainframe apps where UI, business logic and data storage
            reside on machines, to client-server applications where layered
            technologies that support UI, business functionality, and data are
            stored horizontally. Microservices architecture, on the other hand,
            divides the functionality into cohesive verticals by implementing a
            specific domain.
          </p>
        </div>

        <div
          className="pt-3 text-center"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <img
            src="img/Microservice_1.png"
            width="60%"
            alt="Microservices Migration"
          />{" "}
        </div>
        <div className="pt-3 px-5" data-aos="fade-up" data-aos-duration="2000">
          <h2 className="container px-5 py-3">Monolith Vs Microservices</h2>
          <div className="text-center">
            <img
              src="img/monovsmicro.png"
              width="75%"
              alt="Monolith Vs Microservices"
            />{" "}
          </div>
        </div>
        <div className="container d-flex  px-5 py-4 flex-col ">
          <p>
            <a className="navlink navfont noLine text-logoblue" onClick={this.toggle}>
              <small>Contact&nbsp;Us&nbsp;</small>
            </a>
            to learn more about SYNECTIKS MicroServices.
          </p>
        </div>

        {/*  */}
        <div className="">
          <Modal isOpen={this.state.modal} toggle={this.toggle} >
            <ModalHeader className="bg-lightgrey" toggle={this.toggle}>Contact Us</ModalHeader>
            <ModalBody className="bg-lightgrey">

              <div className="px-5 py-3">
                <div className="text-center col-md-12  p-2 d-flex flex-col">
                  <div className="p-2 col-sm-6">
                    <input type="text" placeholder="&nbsp;&nbsp;First Name" className="inputBoxFlex" width="90%" />
                  </div>
                  <div className="p-2 col-sm-6">
                    <input className="inputBoxFlex" placeholder="&nbsp;&nbsp;Last Name" width="90%" />
                  </div>
                </div>
                <div className="text-center col-sm-12  p-2 d-flex flex-col">
                  <div className="p-2 col-sm-12">
                    <input className="inputBoxFlex" style={wid} placeholder="&nbsp;&nbsp;Business Email Address" width="91%"
                      onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]} />
                  </div>
                </div>
                <div className="text-center col-md-12  p-2 d-flex flex-col">
                  <div className="p-2 col-sm-6">
                    <input className="inputBoxFlex" placeholder="&nbsp;&nbsp;Company" width="90%" />
                  </div>
                  <div className="p-2 col-sm-6">
                    <input className="inputBoxFlex" placeholder="&nbsp;&nbsp;Job Title" width="90%" />
                  </div>
                </div>
                <div className="text-center col-md-12  p-2 d-flex flex-col">
                  <div className="p-2 col-sm-6">
                    <input className="inputBoxFlex" placeholder="&nbsp;&nbsp;Country/Region" width="90%" />
                  </div>
                  <div className="p-2 col-sm-6">
                    <input className="inputBoxFlex" placeholder="&nbsp;&nbsp;Telephone" width="90%" />
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

        <div className="  justify-content-around align-items-center px-5 pb-3 flex-col text-center col-md-12 d-none">
          <div className="pb-3 col-sm-3" >
            <Link to="/microserviceexample">
              <button className='btn text-white bg-logoblue  btnLearn  '>Example of Microservices</button>
            </Link>
          </div>
          <div className="pb-3 col-sm-3" >
            <Link to="/microservicebenefit">
              <button className='btn text-white bg-logoblue  btnLearn   '>Benefits of Microservices</button>
            </Link>
          </div>
          <div className="pb-3 col-sm-3" >
            <Link to="/microservicechallenge">
              <button className='btn text-white bg-logoblue  btnLearn '>Challenges of Microservices</button>
            </Link>
          </div>
          <div className="pb-3 col-sm-3" >
            <Link to="/microservicehelp">
              <button className='btn text-white bg-logoblue  btnLearn '>How we can help you?</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Microservices;
