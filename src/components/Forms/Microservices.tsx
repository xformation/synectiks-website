import * as React from "react";
import { Link } from "react-router-dom";
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ModalContact from './ModalContact';

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
          <img height="auto" width="100%" className="" src="img/Microservicesmain.jpg" alt="Microservices" />

          {/*     <button className='btn text-white bg-primary btnLearn'>
   <button className='btn text-white bg-primary btnLearn'>
   <button className='btn text-white bg-primary btnLearn'>
   <button className='btn text-white bg-primary btnLearn'> */}
          <div className="sidenav mt-5">
            <Link to="/microserviceexample" className="text-white">
              Example&nbsp;of&nbsp;Microservices
              </Link>
            <Link to="/microservicebenefit" className="text-white">
              Benefits&nbsp;of&nbsp;Microservices
                  </Link>
            <Link to="/microservicechallenge" className="text-white">
              Challenges&nbsp;of&nbsp;Microservices
                  </Link>
            <Link to="/microservicehelp" className="text-white">
              How&nbsp;we&nbsp;can help you?
                  </Link>
          </div>

          <div className="main pr-5">
            <div className="container pt-5 lineHeight-24">
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
                   innovation and ownership and improve the ability to maintain and
                   scale applications.
             <br />{" "}
                </i>
              </p>
              <p>
                Despite technological advancements, 90 percent of business IT
                applications are legacy and what are known as “monolithic”. These
                range from mainframe apps where UI, business logic and data storage
                reside on machines, to client-server applications where layered
                technologies that support UI, business functionality and data are
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
              <h2 className="container text-center px-5 py-3">Monolith Vs Microservices</h2>
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
                <a className="navlink navfont noLine text-logoblue cursPoint" onClick={this.toggle}>
                  <small>Contact&nbsp;Us&nbsp;</small>
                </a>
                to learn more about SYNECTIKS MicroServices.
          </p>
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






          </div>

        </div>

      </div>
      //     <div className="w-100 py-5 mt-5">
      //       <img
      //         height="auto"
      //         width="100%"
      //         className=""
      //         src="img/Microservicesmain.jpg"
      //         alt="Microservices"
      //       />
      //     </div>

      // <div className="container-fluid">
      // <div className="row" >
      // <div className="col-md-2 "></div>

      //     <div className="col-md-10 ">
      //     {/* <div className="conatiner-fluid pl-4 col-md-1">
      //       <div className="row">
      //         <div className="w-100 btn-groups pFxd">
      //           <div className="showhim w-13">
      //             <div className="showhim  py-2 text-white">
      //               <Link to="/microserviceexample">
      //                 <button className='btn text-white bg-primary btnLearn'>Example of Microservices</button>
      //               </Link>
      //             </div>
      //           </div>
      //           <div className="showhim w-13">
      //             <div className="showhim  py-2 text-white">
      //               <Link to="/microservicebenefit">
      //                 <button className='btn text-white bg-primary btnLearn'>Benefits of Microservices</button>
      //               </Link>
      //             </div>
      //           </div>
      //           <div className="showhim w-13">
      //             <div className="showhim  py-2 text-white">
      //               <Link to="/microservicechallenge">
      //                 <button className='btn text-white bg-primary btnLearn'>Challenges of Microservices</button>
      //               </Link>
      //             </div>
      //           </div>
      //           <div className="showhim w-13">
      //             <div className="showhim  py-2 text-white">
      //               <Link to="/microservicehelp">
      //                 <button className='btn text-white bg-primary btnLearn'>How&nbsp;we&nbsp;can help you?</button>
      //               </Link>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //     </div> */}


      //     <div className="container pt-3 lineHeight-24">
      //       <p className="">
      //         To accommodate the increasing complexity of functional requirements,
      //         IT applications have embraced a variety of architectural patterns.
      //         Organizations must meet ever-changing business demands — from
      //         mainframe applications and client-server to service oriented
      //         architecture (SOA) and microservices.
      //         <br />{" "}
      //       </p>
      //       <p>
      //         <i>
      //           Microservices architecture is a combination of successful and
      //           proven concepts of software engineering such as agile software
      //           development, SOA, API-first design and continuous delivery (CD).
      //           This architecture and organizational approach to software
      //           development is designed to accelerate development cycles, foster
      //           innovation and ownership and improve the ability to maintain and
      //           scale applications.
      //           <br />{" "}
      //         </i>
      //       </p>
      //       <p>
      //         Despite technological advancements, 90 percent of business IT
      //         applications are legacy and what are known as “monolithic”. These
      //         range from mainframe apps where UI, business logic and data storage
      //         reside on machines, to client-server applications where layered
      //         technologies that support UI, business functionality and data are
      //         stored horizontally. Microservices architecture, on the other hand,
      //         divides the functionality into cohesive verticals by implementing a
      //         specific domain.
      //       </p>
      //     </div>

      //     <div
      //       className="pt-3 text-center"
      //       data-aos="fade-up"
      //       data-aos-duration="2000"
      //     >
      //       <img
      //         src="img/Microservice_1.png"
      //         width="60%"
      //         alt="Microservices Migration"
      //       />{" "}
      //     </div>
      //     <div className="pt-3 px-5" data-aos="fade-up" data-aos-duration="2000">
      //       <h2 className="container px-5 py-3">Monolith Vs Microservices</h2>
      //       <div className="text-center">
      //         <img
      //           src="img/monovsmicro.png"
      //           width="75%"
      //           alt="Monolith Vs Microservices"
      //         />{" "}
      //       </div>
      //     </div>
      //     <div className="container d-flex  px-5 py-4 flex-col ">
      //       <p>
      //         <a className="navlink navfont noLine text-logoblue" onClick={this.toggle}>
      //           <small>Contact&nbsp;Us&nbsp;</small>
      //         </a>
      //         to learn more about SYNECTIKS MicroServices.
      //       </p>
      //     </div>

      //     <div className="">
      //       <Modal isOpen={this.state.modal} toggle={this.toggle} >
      //         <ModalHeader className="bg-lightgrey" toggle={this.toggle}>Contact Us</ModalHeader>
      //         <ModalBody className="bg-lightgrey">

      //           <div className="px-5 py-3">
      //             <div className="text-center col-md-12  p-2 d-flex flex-col">
      //               <div className="p-2 col-sm-6">
      //                 <input type="text" placeholder="&nbsp;&nbsp;First Name" className="inputBoxFlex" width="90%" />
      //               </div>
      //               <div className="p-2 col-sm-6">
      //                 <input className="inputBoxFlex" placeholder="&nbsp;&nbsp;Last Name" width="90%" />
      //               </div>
      //             </div>
      //             <div className="text-center col-sm-12  p-2 d-flex flex-col">
      //               <div className="p-2 col-sm-12">
      //                 <input className="inputBoxFlex" style={wid} placeholder="&nbsp;&nbsp;Business Email Address" width="91%"
      //                   onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]} />
      //               </div>
      //             </div>
      //             <div className="text-center col-md-12  p-2 d-flex flex-col">
      //               <div className="p-2 col-sm-6">
      //                 <input className="inputBoxFlex" placeholder="&nbsp;&nbsp;Company" width="90%" />
      //               </div>
      //               <div className="p-2 col-sm-6">
      //                 <input className="inputBoxFlex" placeholder="&nbsp;&nbsp;Job Title" width="90%" />
      //               </div>
      //             </div>
      //             <div className="text-center col-md-12  p-2 d-flex flex-col">
      //               <div className="p-2 col-sm-6">
      //                 <input className="inputBoxFlex" placeholder="&nbsp;&nbsp;Country/Region" width="90%" />
      //               </div>
      //               <div className="p-2 col-sm-6">
      //                 <input className="inputBoxFlex" placeholder="&nbsp;&nbsp;Telephone" width="90%" />
      //               </div>
      //             </div>
      //             <div className="text-center col-md-12  p-2 d-flex flex-col">
      //               <div className="p-2 col-sm-6">
      //                 <select className="inputBoxFlex">
      //                   <option value="enterprise">
      //                     &nbsp;Contact&nbsp;Source
      //         </option>
      //                   <option value="enterprise">&nbsp;Advertisement</option>
      //                   <option value="foundation">
      //                     &nbsp;Customer&nbsp;Event
      //         </option>
      //                   <option value="migration">
      //                     &nbsp;Employee&nbsp;Referral
      //         </option>
      //                   <option value="operations">
      //                     &nbsp;Google&nbsp;Adwords
      //         </option>
      //                   <option value="others">&nbsp;Other</option>
      //                   <option value="optimization">&nbsp;Partner</option>
      //                   <option value="optimization">
      //                     &nbsp;Purchased&nbsp;List
      //         </option>
      //                   <option value="optimization">
      //                     &nbsp;Trade&nbsp;Show
      //         </option>
      //                   <option value="optimization">&nbsp;Webinar</option>
      //                   <option value="optimization">&nbsp;Website</option>
      //                 </select>
      //               </div>
      //               <div className="p-2 col-sm-6">
      //                 <select className="inputBoxFlex">
      //                   <option value="enterprise">
      //                     &nbsp;Select&nbsp;Service
      //         </option>
      //                   <option value="enterprise">&nbsp;Cloud</option>
      //                   <option value="enterprise">
      //                     &nbsp;Enterprise&nbsp;Transformation
      //         </option>
      //                   <option value="foundation">&nbsp;Foundation</option>
      //                   <option value="migration">
      //                     &nbsp;Migration&nbsp;&amp;&nbsp;Deployment
      //         </option>
      //                   <option value="operations">&nbsp;Operations</option>
      //                   <option value="optimization">&nbsp;Optimization</option>
      //                   <option value="others">&nbsp;Others</option>
      //                 </select>
      //               </div>
      //             </div>
      //           </div>

      //         </ModalBody>
      //         <ModalFooter className="bg-lightgrey">
      //           <div className="text-center p-2" onClick={this.toggle}>
      //             <button className="btn bg-logoblue text-white btnSend" id="submit" value="Submit">Submit</button>
      //           </div>{" "}
      //         </ModalFooter>
      //       </Modal>
      //     </div>

      //     <div className="  justify-content-around align-items-center px-5 pb-3 flex-col text-center col-md-12 d-none">
      //       <div className="pb-3 col-sm-3" >
      //         <Link to="/microserviceexample">
      //           <button className='btn text-white bg-logoblue  btnLearn  '>Example of Microservices</button>
      //         </Link>
      //       </div>
      //       <div className="pb-3 col-sm-3" >
      //         <Link to="/microservicebenefit">
      //           <button className='btn text-white bg-logoblue  btnLearn   '>Benefits of Microservices</button>
      //         </Link>
      //       </div>
      //       <div className="pb-3 col-sm-3" >
      //         <Link to="/microservicechallenge">
      //           <button className='btn text-white bg-logoblue  btnLearn '>Challenges of Microservices</button>
      //         </Link>
      //       </div>
      //       <div className="pb-3 col-sm-3" >
      //         <Link to="/microservicehelp">
      //           <button className='btn text-white bg-logoblue  btnLearn '>How we can help you?</button>
      //         </Link>
      //       </div>
      //     </div>

      //     </div>
      //     </div>


      //   </div>

      //   <div className=" px-5  text-center col-md-2 sticky">
      //         <div className="pb-3 col-sm-3" >
      //         <Link to="/microserviceexample">
      //                     <button className='btn text-white bg-logoblue     btnLearn'>Example of Microservices</button>
      //                     </Link>
      //                 </div>
      //                 <div className="pb-3 col-sm-3" >
      //                 <Link to="/microservicebenefit">
      //                     <button className='btn text-white bg-logoblue     btnLearn'>Benefits of Microservices</button>
      //                     </Link>
      //                 </div>
      //                 <div className="pb-3 col-sm-3" >
      //                 <Link to="/microservicechallenge">
      //                     <button className='btn text-white bg-logoblue     btnLearn'>Challenges of Microservices</button>
      //                     </Link>
      //                 </div>
      //                 <div className="pb-3 col-sm-3" >
      //                 <Link to="/microservicehelp">
      //                     <button className='btn text-white bg-logoblue     btnLearn '>How&nbsp;we&nbsp;can help you?</button>
      //                     </Link>
      //                 </div>
      //                 </div>



      //   </div>
    );
  }
}

export default Microservices;

var vv_base_id = 'q00IB13hyn';
var vv_ext_id = '5d53ed9a';
var __ibaseUrl = (("https:" == document.location.protocol) ? "https://frontend.id-visitors.com" : "http://frontend.id-visitors.com");
(function () {
var va = document.createElement('script'); va.type = 'text/javascript'; va.async = true;
va.src = __ibaseUrl + '/cscripts/' + vv_base_id + '-' + vv_ext_id + '.js';
var sv = document.getElementsByTagName('script')[0]; sv.parentNode.insertBefore(va, sv);
})(); 
