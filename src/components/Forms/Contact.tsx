import * as React from "react";

    export class Contact extends React.Component<any,any,any> {
        constructor(props:any) {
          super(props);  
          this.state = {
            modal: false,
            fields: {},
            errors: {}
          };
        }
        componentDidMount() {
            window.scrollTo(0, 0)
          }

          handleValidation(){
            let fields = this.state.fields;
            let errors = {};
            let formIsValid = true;

            if(!fields.fname){
                formIsValid = false;
                // errors.fname = "Cannot be empty";
                errors["fname"] = "Cannot be empty";
              }
        
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
            // if(this.handleValidation()){
            //   alert("Form submitted");
            // }else{
            //   alert("Form has errors.")
            // }
          }
        
          handleChange(field, e){    		
            let fields = this.state.fields;
            fields[field] = e.target.value;        
            this.setState({fields});
          }


        render() { 
    return (
        <div className="bg-lightgrey">

            <div>
                <img
                    className="  text-center pt-5 pb-3 mt-5"
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
                <h2 className='text-center '>CONTACT FORM</h2>
            </div>
   <form name="contactform" className="contactform" onSubmit= {this.contactSubmit.bind(this)}>
             {/* Contact Starts */}
            <div className="px-5" >

                <div className="d-flex text-center col-md-12 p-2 flex-col">
                    <div className="col-sm-4 p-2" >
                    {/* <p className="error err">{this.state.errors.fname}</p> */}
                        <input className="inputBoxFlex" placeholder="&nbsp;&nbsp;First Name" width="90%" 
                         onChange={this.handleChange.bind(this, "fname")} value={this.state.fields.fname}/>
                    </div>
                    <div className="col-sm-4 p-2" >
                    {/* <p className="error err">{this.state.errors.lname}</p> */}
                        <input className="inputBoxFlex" placeholder="&nbsp;&nbsp;Last Name" width="90%"
                         onChange={this.handleChange.bind(this, "lname")} value={this.state.fields.lname}/>
                    </div>
                    <div className="col-sm-4 p-2" >
                    {/* <p className="error err">{this.state.errors.email}</p> */}
                        <input className="inputBoxFlex" placeholder="&nbsp;&nbsp;Email" width="90%" 
                         onChange={this.handleChange.bind(this, "email")} value={this.state.fields.email}/>
                    </div>
                </div>
                {/* <div className="text-center col-sm-12  p-2 d-flex flex-col">
        <div className="p-2 col-sm-12">
        <p className="error err">{this.state.errors["email"]}</p>
        <input className="inputBoxFlex"  placeholder="&nbsp;&nbsp;Business Email Address" width="91%"
        onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]}/>
        </div>
        </div> */}

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

            <div className='text-center px-5 pt-3 pb-5'>
                <button className='btn bg-logoblue text-white btnSend'id="submit" value="Submit">Submit</button>
            </div>
            </form>
            {/* Contact Ends */}
            <div  className="map mx-auto">
                <iframe width="100%" height="350px"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3042.0341342304914!2d-74.63367698460706!3d40.31939997937661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3e0d086f7514f%3A0x8f04ec41f160a353!2s300+Alexander+Park+Dr+%23215%2C+Princeton%2C+NJ+08540%2C+USA!5e0!3m2!1sen!2sin!4v1526621065289"
                    frameBorder='0'
                ></iframe>
            </div>

        </div>

    );
};
    }
export default Contact;
