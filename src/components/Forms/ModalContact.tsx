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


export class ModalContact extends React.Component<any, any, any> {
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
    'country': [{ rule: validationRules.required, message: 'country is required' }],
    'jobtitle': [{ rule: validationRules.required, message: 'Job Title is required' }],
    'phone': [{ rule: validationRules.phone, message: 'Phone number is invalid' }],
    'email': [{ rule: validationRules.required, message: 'Email is required' }, { rule: validationRules.email, message: 'Email is invalid' }],
    'select': [{ rule: validationRules.phone, message: 'Select an option' }],
  }

  fields = ['firstName', 'lastName', 'phone', 'country', 'email', 'company', 'jobtitle'];

  state = {
    signupForm: { isValid: false },
    firstName: { value: '', isTouched: false, isValid: false, errors: [] },
    lastName: { value: '', isTouched: false, isValid: false, errors: [] },
    company: { value: '', isTouched: false, isValid: false, errors: [] },
    jobtitle: { value: '', isTouched: false, isValid: false, errors: [] },
    phone: { value: '', isTouched: false, isValid: false, errors: [] },
    country: { value: '', isTouched: false, isValid: false, errors: [] },
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
    this.validateForm();
  };

  render() {
    const { firstName, lastName, company, country, phone, jobtitle, email } = this.state;
    return (
      <div className="bg-lightgrey">
        <form>
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 field-group">
                {/* <label>First Name</label> */}
                <input
                  className={firstName.isTouched && !firstName.isValid ? 'has-error' : ''}
                  name="firstName"
                  value={firstName.value}
                  onChange={this.handleFieldChange}
                  onBlur={this.handleSetTouched}
                  placeholder="First Name"
                />
                {firstName.isTouched && firstName.errors.length > 0 && firstName.errors.map((err, i) => (<span key={i} className="error-message">{err}</span>))}
              </div>
              <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 field-group">
                {/* <label>Last Name</label> */}
                <input
                  className={lastName.isTouched && !lastName.isValid ? 'has-error' : ''}
                  name="lastName"
                  value={this.state.lastName.value}
                  onChange={this.handleFieldChange}
                  onBlur={this.handleSetTouched}
                  placeholder="Last Name"
                />
                {lastName.isTouched && lastName.errors.length > 0 && lastName.errors.map((err, i) => (<span key={i} className="error-message">{err}</span>))}
              </div>
              <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 field-group">
                {/* <label>Email</label> */}
                <input
                  className={email.isTouched && !email.isValid ? 'has-error' : ''}
                  name="email"
                  value={this.state.email.value}
                  onChange={this.handleFieldChange}
                  onBlur={this.handleSetTouched}
                  placeholder="Business Email Address"
                />
                {email.isTouched && email.errors.length > 0 && email.errors.map((err, i) => (<span key={i} className="error-message">{err}</span>))}
              </div>
              <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 field-group">
                {/* <label>Company</label> */}
                <input
                  className={company.isTouched && !company.isValid ? 'has-error' : ''}
                  name="company"
                  value={this.state.company.value}
                  onChange={this.handleFieldChange}
                  onBlur={this.handleSetTouched}
                  placeholder="Company"
                />
                {company.isTouched && company.errors.length > 0 && company.errors.map((err, i) => (<span key={i} className="error-message">{err}</span>))}
              </div>
              <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 field-group">
                {/* <label>Job Title</label> */}
                <input
                  className={jobtitle.isTouched && !jobtitle.isValid ? 'has-error' : ''}
                  name="jobtitle"
                  value={this.state.jobtitle.value}
                  onChange={this.handleFieldChange}
                  onBlur={this.handleSetTouched}
                  placeholder="Job Title"
                />
                {jobtitle.isTouched && jobtitle.errors.length > 0 && jobtitle.errors.map((err, i) => (<span key={i} className="error-message">{err}</span>))}
              </div>
              <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 field-group">
                {/* <label>Mobile</label> */}
                <input
                  className={country.isTouched && !country.isValid ? 'has-error' : ''}
                  name="country"
                  value={this.state.country.value}
                  onChange={this.handleFieldChange}
                  placeholder="Country"
                  onBlur={this.handleSetTouched}

                />
                {country.isTouched && country.errors.length > 0 && country.errors.map((err, i) => (<span key={i} className="error-message">{err}</span>))}
              </div>
              <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 field-group">
                {/* <label>Phone</label> */}
                <input
                  className={phone.isTouched && !phone.isValid ? 'has-error' : ''}
                  name="phone"
                  value={this.state.phone.value}
                  onChange={this.handleFieldChange}
                  placeholder="1234-456-789"
                  onBlur={this.handleSetTouched}
                />
                {phone.isTouched && phone.errors.length > 0 && phone.errors.map((err, i) => (<span key={i} className="error-message">{err}</span>))}
              </div>
              <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 field-group">
                <select className="ModalContactinputBoxFlex">
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
              <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 field-group">
                <select className="ModalContactinputBoxFlex">
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

            <div className='text-center px-5 pt-3 pb-5'>
              <button className='btn bg-logoblue text-white btnSend' id="submit"
                // value="Submit" disabled={!this.state.formValid}>Submit</button>
                value="Submit">Submit</button>
            </div>

          </div>
        </form>
        {/* Contact Ends */}
      </div>
    );
  };
};

export default ModalContact;