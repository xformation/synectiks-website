import * as React from "react";
// // import { Right } from "react-bootstrap/lib/Media";
import { LinearProgress } from "material-ui";


export const Contact: React.StatelessComponent<{}> = () => {
    return (
        <div className="bg-lightgrey">
            <div>
                <img
                    className="  text-center py-5 mt-5"
                    src="img/NiceToMeet.png" width="100%"
                    alt="Card image Foundation"
                />
                <div className="text-center centered ">
                <div className="text-white">
                 <h3>Nice&nbsp;To&nbsp;Meet&nbsp;You!</h3>
                 </div>
                </div>
            </div>

            <div>
                <h2 className='text-center py-3'>CONTACT FORM</h2>
            </div>

             {/* Contact Starts */}
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
                        {/* <input  className="inputBoxFlex" placeholder="&nbsp;&nbsp;Contact&nbsp;Source"  width="90%"/> */}
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
                        {/* <input  className="inputBoxFlex" placeholder="&nbsp;&nbsp;Select Service"  width="90%"/> */}
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
                <button className='btn bg-logoblue text-white btnSend'>Submit</button>
            </div>
            {/* Contact Ends */}


            {/* <div className="contFields">
            <div className="d-flex justify-content-around text-left mr-5 py-2 flex-col">       
                <div className="d-flex" >
                    <p className="px6 mr-2 inline" >Name&nbsp;*</p>
                    <input  className="inputBoxFlex"/>
                </div>        

                <div className="d-flex">
                    <p className="px6 mr-2 inline" >E&nbsp;Mail&nbsp;*</p>
                    <input className="inputBoxFlex" />
                </div>
            </div>

            <div className="d-flex justify-content-around text-left mr-5 py-2 flex-col">            
                <div className="d-flex">
                    <p className="px6 mr-2 inline">Phone&nbsp;*</p>
                    <input className="inputBoxFlex" />
                </div>
                
                <div className="d-flex">
                    <p className="px6 inline" >Subject&nbsp;*</p>
                    <input className="inputBoxFlex"/>
                </div>               
            </div>

            <div className="d-flex justify-content-around text-left mr-5 py-2 flex-col">
                <div className="d-flex">
                    <p className="px6 inline" >Services&nbsp;*</p>
                    <select className="inputBoxFlex">
                        <option value="enterprise">Enterprise Transformation</option>
                        <option value="foundation">Foundation</option>
                        <option value="migration">Migration &amp; Deployment</option>
                        <option value="operations">Operations</option>
                        <option value="optimization">Optimization</option>
                        <option value="others">Others</option>
                    </select>
                </div>            
                 <div className="d-flex">
                    <p className="px6 inline" >Comment&nbsp;*</p>
                    <textarea className="inputBoxFlex mr05" />
                </div>
            </div>
            </div>
            <div className='text-center p-5'>
                <button  className='btn menu-bg btnSend'>Send</button>
            </div> */}

            <div>
                <h2 className='text-center'>CONTACT US</h2>
            </div>
            {/* className="italic" */}

            <div className="d-flex justify-content-around my-5 flex-col">

                <div className="pb2 pl-5" >
                    <h5>USA</h5>
                    <small  >
                        300 Alexander Park Drive, Suite 215,<br />
                        Princeton, NJ 08540<br />
                        Sales: +1 (609) 608-0429 X 112<br />
                        Office: +1 (609) 608-0429<br />
                    </small>
                </div>
                <div className="pb2">
                    <h5>INDIA</h5>
                    <small  >
                        3rd Floor, Plot# 25 &amp; 26,<br />
                        Survey # 71, Madhapur,<br />
                        Hyderabad, IN 500 081<br />
                        Office: +91 (40) 4857 4411<br />
                    </small>
                </div>
                <div className="pb2">
                    <h5>SINGAPORE</h5>
                    <small  >
                        1 Sophia Road, #05-23,<br />
                        Peace Center,<br />
                        Singapore 228149<br />
                    </small>
                </div>

            </div>

            {/* <div className='text-center p-5 flex-col'>
                <h5>SOCIALS</h5>
                <i className="fa fa-twitter" aria-hidden="true"></i>
                <small className="italic">Twitter</small>&emsp;
                    <i className="fa fa-facebook-square" aria-hidden="true"></i>
                <small className="italic">Facebook</small>&emsp;
                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                <small className="italic">Linkedin</small>
            </div> */}

            {/* <div>
                <img
                    className="  text-img mx-auto" style={borderRadius_6}
                    src="img/location.png" width="90%"
                    alt="Card image Foundation"
                />
            </div> */}

            <div  className="map mx-auto">
                <iframe width="100%" height="350px"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3042.0341342304914!2d-74.63367698460706!3d40.31939997937661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3e0d086f7514f%3A0x8f04ec41f160a353!2s300+Alexander+Park+Dr+%23215%2C+Princeton%2C+NJ+08540%2C+USA!5e0!3m2!1sen!2sin!4v1526621065289"
                    frameBorder='0'
                ></iframe>
            </div>

        </div>

    );
};

export default Contact;
