import * as React from "react";

    export class Askfordemo extends React.Component<{},{}> {
        constructor(props:any) {
          super(props);
        }
        componentDidMount() {
            window.scrollTo(0, 0)
          }

        render() {
    return (
        <div className="bg-lightgrey">
            <div>
                <img
                    className="  text-center pt-5 mt-5"
                    src="img/NiceToMeet.png" width="100%"
                    alt="Card image Foundation"
                />
                <div className="text-center centered ">
                <div className="text-white">
                 <h3>Nice&nbsp;To&nbsp;Meet&nbsp;You!</h3>
                 </div>
                </div>
            </div>

       {/* Contact Starts */}
       <div className=''>
       <h2 className='text-center text-black'>Ask for Demo</h2>
       <h5 className='text-center text-black'>Straight talk on your challenges.</h5>
   </div>

   <div className="px-5 py-2">

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
                   <option value="enterprise">&nbsp;Cloud</option>
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

   <div className='text-center px-5 pt-1 pb-5'>
       <button className='btn bg-logoblue text-white btnSend'>Submit</button>
   </div>
   {/* Contact Ends */}


        </div>

    );
}}

export default Askfordemo;
