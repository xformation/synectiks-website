import * as React from "react";

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
                <div className=''>
                    <h2 className='text-center text-black'>Contact Us</h2>
                    {/* <h5 className='text-center text-black'>Straight talk on your challenges.</h5> */}
                </div>

                <form>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 field-group">
                                <label>First Name</label>
                                <input
                                    className={firstName.isTouched && !firstName.isValid ? 'has-error' : ''}
                                    name="firstName"
                                    value={firstName.value}
                                    onChange={this.handleFieldChange}
                                    onBlur={this.handleSetTouched}
                                />
                                {firstName.isTouched && firstName.errors.length > 0 && firstName.errors.map((err, i) => (<span key={i} className="error-message">{err}</span>))}
                            </div>
                            <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 field-group">
                                <label>Last Name</label>
                                <input
                                    className={lastName.isTouched && !lastName.isValid ? 'has-error' : ''}
                                    name="lastName"
                                    value={this.state.lastName.value}
                                    onChange={this.handleFieldChange}
                                    onBlur={this.handleSetTouched}
                                />
                                {lastName.isTouched && lastName.errors.length > 0 && lastName.errors.map((err, i) => (<span key={i} className="error-message">{err}</span>))}
                            </div>
                            <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 field-group">
                                <label>Email</label>
                                <input
                                    className={email.isTouched && !email.isValid ? 'has-error' : ''}
                                    name="email"
                                    value={this.state.email.value}
                                    onChange={this.handleFieldChange}
                                    onBlur={this.handleSetTouched}
                                />
                                {email.isTouched && email.errors.length > 0 && email.errors.map((err, i) => (<span key={i} className="error-message">{err}</span>))}
                            </div>
                            <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 field-group">
                                <label>Company</label>
                                <input
                                    className={company.isTouched && !company.isValid ? 'has-error' : ''}
                                    name="company"
                                    value={this.state.company.value}
                                    onChange={this.handleFieldChange}
                                    onBlur={this.handleSetTouched}
                                />
                                {company.isTouched && company.errors.length > 0 && company.errors.map((err, i) => (<span key={i} className="error-message">{err}</span>))}
                            </div>
                            <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 field-group">
                                <label>City</label>
                                <input
                                    className={city.isTouched && !city.isValid ? 'has-error' : ''}
                                    name="city"
                                    value={this.state.city.value}
                                    onChange={this.handleFieldChange}
                                    onBlur={this.handleSetTouched}
                                />
                                {city.isTouched && city.errors.length > 0 && city.errors.map((err, i) => (<span key={i} className="error-message">{err}</span>))}
                            </div>
                            <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 field-group">
                                <label>Mobile</label>
                                <input
                                    className={mobile.isTouched && !mobile.isValid ? 'has-error' : ''}
                                    name="mobile"
                                    value={this.state.mobile.value}
                                    onChange={this.handleFieldChange}
                                    placeholder=""
                                    onBlur={this.handleSetTouched}
                                />
                                {mobile.isTouched && mobile.errors.length > 0 && mobile.errors.map((err, i) => (<span key={i} className="error-message">{err}</span>))}
                            </div>
                            <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 field-group">
                                <label>Phone</label>
                                <input
                                    className={phone.isTouched && !phone.isValid ? 'has-error' : ''}
                                    name="phone"
                                    value={this.state.phone.value}
                                    onChange={this.handleFieldChange}
                                    placeholder=""
                                    onBlur={this.handleSetTouched}
                                />
                                {phone.isTouched && phone.errors.length > 0 && phone.errors.map((err, i) => (<span key={i} className="error-message">{err}</span>))}
                            </div>
                            <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 field-group">
                                <label>Contact&nbsp;Source</label>
                                <select className="ContactinputBoxFlex">
                                    {/* <option value="enterprise" className="bg-logoblue text-white">&nbsp;Contact&nbsp;Source</option> */}
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
                            <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 field-group">
                                <label>Select&nbsp;Service</label>
                                <select className="ContactinputBoxFlex">
                                    {/* <option value="enterprise" className="bg-logoblue text-white">&nbsp;Select&nbsp;Service</option> */}
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

                        <div className='text-center px-5 pt-3 pb-5'>
                            <button className='btn bg-logoblue text-white btnSend' id="submit"
                                // value="Submit" disabled={!this.state.formValid}>Submit</button>
                                value="Submit">Submit</button>
                        </div>

                    </div>
                </form>
                {/* Contact Ends */}
                <div className="map mx-auto">
                    <iframe width="100%" height="350px"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3042.0341342304914!2d-74.63367698460706!3d40.31939997937661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3e0d086f7514f%3A0x8f04ec41f160a353!2s300+Alexander+Park+Dr+%23215%2C+Princeton%2C+NJ+08540%2C+USA!5e0!3m2!1sen!2sin!4v1526621065289"
                        frameBorder='0'
                    ></iframe>
                </div>
            </div>
        );
    };
};

export default Contact;
