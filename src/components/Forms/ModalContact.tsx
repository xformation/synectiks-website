import * as React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

const mcontact = {
 width: '100%'
};

function validate(firstname, lastname, email, company, jobtitle, country, phone, source, service) {
 // we are going to store errors for all fields
 // in a signle array
 const errors = [];

 if (firstname.length === 0) {
  errors.push("First Name can't be empty");
 }
 if (lastname.length === 0) {
  errors.push("Last Name can't be empty");
 }
 if (jobtitle.length === 0) {
  errors.push("Job Title can't be empty");
 }
 if (country.length === 0) {
  errors.push("Country can't be empty");
 }
 if (phone.length === 0) {
  errors.push("Phone number can't be empty");
 }

 if (email.length < 5) {
  errors.push("Email should be at least 5 charcters long");
 }
 if (email.split("").filter(x => x === "@").length !== 1) {
  errors.push("Email should contain a @");
 }
 if (email.indexOf(".") === -1) {
  errors.push("Email should contain at least one dot");
 }

 if (company.length < 6) {
  errors.push("company name should be mentioned");
 }
 if (source.length < 6) {
  errors.push("Select following option");
 }
 if (service.length < 6) {
  errors.push("Select following option");
 }

 return errors;
}

const ModalContact = () => (
 <Formik
  initialValues={{
   firstname: '', lastname: '', email: '', company: '',
   jobtitle: '', country: '', phone: '', source: '', service: ''
  }}
  onSubmit={(values, { setSubmitting }) => {
   setTimeout(() => {
    console.log("Logging in", values);
    setSubmitting(false);
   }, 500);
  }}

  //********Using Yum for validation********/

  validationSchema={Yup.object().shape({
   email: Yup.string()
    .email()
    .required("Required")
    .matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Enter valid Email address"),
   phone: Yup.string()
    .required("No Phone Number  provided.")
    .min(10, "Phone number should be 10 chars minimum.")
    .matches(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, "Enter your Phone Number"),
   firstname: Yup.string()
    .required("No First Name provided.")
    .matches(/^[a-zA-Z0-9]+[a-zA-Z0-9]*$/, "Enter your First Name"),
   lastname: Yup.string()
    .required("No Last Name provided.")
    .matches(/^[a-zA-Z0-9]+[a-zA-Z0-9]*$/, "Enter your Last Name"),
   company: Yup.string()
    .required("No Company Name provided.")
    .matches(/^[a-zA-Z0-9]+[a-zA-Z0-9]*$/, "Enter your Company Name"),
   jobtitle: Yup.string()
    .required("No Job title Name provided.")
    .matches(/^[a-zA-Z0-9]+[a-zA-Z0-9]*$/, "Enter your Job title"),
   country: Yup.string()
    .required("No country Name provided.")
    .matches(/^[a-zA-Z0-9]+[a-zA-Z0-9]*$/, "Enter your Country"),
   source: Yup.string()
    .required("No Option selected.")
    .matches(/^[a-zA-Z0-9]+[a-zA-Z0-9]*$/, "Select your option"),
   service: Yup.string()
    .required("No Option selected.")
    .matches(/^[a-zA-Z0-9]+[a-zA-Z0-9]*$/, "Select your option"),

  })}
 >
  {props => {
   const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit
   } = props;
   return (
    <form onSubmit={handleSubmit}>
     <div className="container-fluid p-1">
      <div className="row">
       <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
        <label>First&nbsp;Name</label>
        <input style={mcontact}
         name="firstname"
         type="text"
         placeholder="Enter Your First Name"
         value={values.firstname}
         onChange={handleChange}
         onBlur={handleBlur}
         className={errors.firstname && touched.firstname && "error"}
        />
        {errors.firstname && touched.firstname && (
         <div className="input-feedback">{errors.firstname}</div>
        )}
       </div>
       <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
        <label>Last&nbsp;Name</label>
        <input style={mcontact}
         name="lastname"
         type="text"
         placeholder="Enter Your Last Name"
         value={values.lastname}
         onChange={handleChange}
         onBlur={handleBlur}
         className={errors.lastname && touched.lastname && "error"}
        />
        {errors.lastname && touched.lastname && (
         <div className="input-feedback">{errors.lastname}</div>
        )}
       </div>
      </div>
      <div className="row">
       <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <label htmlFor="email">Email</label>
        <input style={mcontact}
         name="email"
         type="text"
         placeholder="Enter your Business Email Address"
         value={values.email}
         onChange={handleChange}
         onBlur={handleBlur}
         className={errors.email && touched.email && "error"}
        />
        {errors.email && touched.email && (
         <div className="input-feedback">{errors.email}</div>
        )}
       </div>
      </div>
      <div className="row">
       <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
        <label>Select&nbsp;Company</label>
        <input style={mcontact}
         name="company"
         type="text"
         placeholder="Enter Your Company Name"
         value={values.company}
         onChange={handleChange}
         onBlur={handleBlur}
         className={errors.company && touched.company && "error"}
        />
        {errors.company && touched.company && (
         <div className="input-feedback">{errors.company}</div>
        )}
       </div>
       <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
        <label>Job Title/Region</label>
        <input style={mcontact}
         name="jobtitle"
         type="text"
         placeholder="Enter Your Country/Region"
         value={values.jobtitle}
         onChange={handleChange}
         onBlur={handleBlur}
         className={errors.jobtitle && touched.jobtitle && "error"}
        />
        {errors.jobtitle && touched.jobtitle && (
         <div className="input-feedback">{errors.jobtitle}</div>
        )}
       </div>
      </div>
      <div className="row">
       <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
        <label htmlFor="email">Telephone</label>
        <input style={mcontact}
         name="phone"
         type="tel"
         placeholder="Enter your Phone Number"
         value={values.phone}
         onChange={handleChange}
         onBlur={handleBlur}
         className={errors.phone && touched.phone && "error"}
        />
        {errors.phone && touched.phone && (
         <div className="input-feedback">{errors.phone}</div>
        )}
       </div>
       <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
        <label>Country/Region</label>
        <input style={mcontact}
         name="country"
         type="text"
         placeholder="Enter Your Country/Region"
         value={values.country}
         onChange={handleChange}
         onBlur={handleBlur}
         className={errors.country && touched.country && "error"}
        />
        {errors.country && touched.country && (
         <div className="input-feedback">{errors.country}</div>
        )}
       </div>
      </div>
      <div className="row">
       <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
        <label>Select&nbsp;Source</label>
        <select name="source" id="" value={values.source}
         onChange={handleChange}
         onBlur={handleBlur}
         style={mcontact}
         className={errors.source && touched.source && "error"}>
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
        {errors.source && touched.source && (
         <div className="input-feedback">{errors.source}</div>
        )}
       </div>
       <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
        <label>Select&nbsp;Service</label>
        <select name="service" value={values.service}
         onChange={handleChange}
         onBlur={handleBlur}
         style={mcontact}
         className={errors.service && touched.service && "error"}>>
              {/* <option value="enterprise" className="bg-logoblue text-white">&nbsp;Select&nbsp;Service</option> */}
         <option value="enterprise">&nbsp;Cloud</option>
         <option value="enterprise">&nbsp;Enterprise&nbsp;Transformation</option>
         <option value="foundation">&nbsp;Foundation</option>
         <option value="migration">&nbsp;Migration&nbsp;&amp;&nbsp;Deployment</option>
         <option value="operations">&nbsp;Operations</option>
         <option value="optimization">&nbsp;Optimization</option>
         <option value="others">&nbsp;Others</option>
        </select>
        {errors.service && touched.service && (
         <div className="input-feedback">{errors.service}</div>
        )}
       </div>
      </div>
     </div>
     <button type="submit" className="btn btn-primary fright" disabled={isSubmitting}>
      Submit
          </button>
    </form>
   );
  }}
 </Formik>
);


export default ModalContact;