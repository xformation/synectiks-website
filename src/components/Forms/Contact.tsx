import * as React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
const validationRules = {
    required: (val) => val !== null && val !== undefined && val !== '',
    phone: (phone) => {
        const re = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
        return re.test(String(phone));
    },
    mobile: (mobile) => {
        const re = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
        return re.test(String(mobile));
    },
    email: (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
}


export class Contact extends React.Component<any, any, any> {
    constructor(props: any) {
        super(props);

    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    formValidationRules = {
        'firstName': [{ rule: validationRules.required, message: 'First name is required' }],
        'lastName': [{ rule: validationRules.required, message: 'Last name is required' }],
        'company': [{ rule: validationRules.required, message: 'Company is required' }],
        'city': [{ rule: validationRules.required, message: 'City is required' }],
        'phone': [{ rule: validationRules.phone, message: 'Phone number is invalid' }],
        'mobile': [{ rule: validationRules.mobile, message: 'mobile number is invalid' }],
        'email': [{ rule: validationRules.required, message: 'Email is required' }, { rule: validationRules.email, message: 'Email is invalid' }],
        'select': [{ rule: validationRules.phone, message: 'Select an option' }],
    }

    fields = ['firstName', 'lastName', 'phone', 'mobile', 'email', 'company', 'city'];

    state = {
        signupForm: { isValid: false },
        firstName: { value: '', isTouched: false, isValid: false, errors: [] },
        lastName: { value: '', isTouched: false, isValid: false, errors: [] },
        company: { value: '', isTouched: false, isValid: false, errors: [] },
        city: { value: '', isTouched: false, isValid: false, errors: [] },
        phone: { value: '', isTouched: false, isValid: false, errors: [] },
        mobile: { value: '', isTouched: false, isValid: false, errors: [] },
        email: { value: '', isTouched: false, isValid: false, errors: [] },
        select: { value: '', isTouched: false, isValid: false, errors: [] },
    }

    handleFieldChange = e => {
        let newState = { ...this.state };
        newState[e.target.name].value = e.target.value;
        this.validateForm(newState);
    }

    handleSetTouched = e => {
        let field = { ...this.state[e.target.name], isTouched: true };
        this.setState({ [e.target.name]: { ...field } });
    }

    getClassName = fieldName => {
        const field = this.state[fieldName];
        return field.isTouched && !field.isValid ? 'has-error' : '';
    }
    // validateForm() {
    //     this.setState({ formValid: this.state.emailValid && this.state.passwordValid });
    // }
    validateForm = (newState) => {
        newState = newState || { ...this.state };
        this.fields.map(fieldName => {
            let newField = newState[fieldName];
            newField.errors = [];
            newField.isValid = true;
            this.formValidationRules[fieldName].map(vRule => {
                if (!vRule.rule(this.state[fieldName].value)) {
                    newField.errors.push(vRule.message);
                    newField.isValid = false;
                }
                newState[fieldName] = newField;
            })
        })
        this.setState(newState);
    };

    componentWillMount() {
        let newState = { ...this.state }
        this.validateForm(newState);
    };

    render() {
        const { firstName, lastName, company, city, phone, mobile, email } = this.state;
        return (
            <Formik
                initialValues={{
                    firstname: '', lastname: '', email: '', company: '',
                    city: '', mobile: '', phone: '', source: '', service: ''
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
                        .required("Email Id is Required")
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
                    city: Yup.string()
                        .required("No City Name provided.")
                        .matches(/^[a-zA-Z0-9]+[a-zA-Z0-9]*$/, "Enter your City"),
                    mobile: Yup.string()
                        .required("No Mobile Number  provided.")
                        .min(10, "Mobile number should be 10 chars minimum.")
                        .matches(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, "Enter your Mobile Number"),
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
                    return (<section>
                        <div><img className="text-center pt-5 mt-5" src="img/NiceToMeet.png" width="100%" alt="Card image Foundation" /><div className="text-center centered "><div className="text-white"><h3>Nice&nbsp;To&nbsp;Meet&nbsp;You!</h3></div></div></div>
                        <form onSubmit={handleSubmit}>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className='col-sm-4 col-md-4 col-lg-4 col-xl-4 field-group'>
                                        <label>First&nbsp;Name</label>
                                        <input
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
                                    <div className='col-sm-4 col-md-4 col-lg-4 col-xl-4 field-group'>
                                        <label>Last&nbsp;Name</label>
                                        <input
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
                                    <div className='col-sm-4 col-md-4 col-lg-4 col-xl-4 field-group'>
                                        <label htmlFor="email">Email</label>
                                        <input
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
                                    <div className='col-sm-4 col-md-4 col-lg-4 col-xl-4 field-group'>
                                        <label>Company</label>
                                        <input
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
                                    <div className='col-sm-4 col-md-4 col-lg-4 col-xl-4 field-group'>
                                        <label>City</label>
                                        <input
                                            name="city"
                                            type="text"
                                            placeholder="Enter Your Country/Region"
                                            value={values.city}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={errors.city && touched.city && "error"}
                                        />
                                        {errors.city && touched.city && (
                                            <div className="input-feedback">{errors.city}</div>
                                        )}
                                    </div>
                                    <div className='col-sm-4 col-md-4 col-lg-4 col-xl-4 field-group'>
                                        <label>Mobile</label>
                                        <input
                                            name="mobile"
                                            type="tel"
                                            placeholder="Enter Your Mobile Number"
                                            value={values.mobile}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={errors.mobile && touched.mobile && "error"}
                                        />
                                        {errors.mobile && touched.mobile && (
                                            <div className="input-feedback">{errors.mobile}</div>
                                        )}
                                    </div>
                                    <div className='col-sm-4 col-md-4 col-lg-4 col-xl-4 field-group'>
                                        <label htmlFor="email">Telephone</label>
                                        <input
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
                                    <div className='col-sm-4 col-md-4 col-lg-4 col-xl-4 field-group'>
                                        <label>Contact&nbsp;Source</label>
                                        <select name="source" id="" value={values.source}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
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
                                    <div className='col-sm-4 col-md-4 col-lg-4 col-xl-4 field-group'>
                                        <label>Select&nbsp;Service</label>
                                        <select name="service" value={values.service}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
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
                            <button type="submit" className="btn bg-logoblue text-white btnSend my-3 mx-auto" disabled={isSubmitting}>
                                Submit
          </button>
                        </form>
                    </section>
                    );
                }}
            </Formik>
        )
    };
};

export default Contact;
