import * as React from "react";
import { Link } from "react-router-dom";


const wid = {
  width: '91%',
};

export class ByUseCase extends React.Component<any, any, any> {
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
          <img height="auto" width="100%" className="" src="img/NiceToMeet.png" alt="Solutions" />

          <h2 className="container text-logoblue text-center px-5 pt-3">Synectiks Data Lake Platform For Retail / Ecommerce</h2>

          <div className="sidenav mt-5">
            <Link to="byusecase" className="text-white">
              By Use Case
              </Link>
            <Link to="/microservicebenefit" className="text-white">
              By Industry
                  </Link>
            <Link to="/microservicechallenge" className="text-white">
              By Organization Type
                  </Link>

          </div>


          <div className="main pr-5">

          <h2 className="container text-center px-5 py-3">Synectiks Data Lake Solution</h2>
            <div
              className="py-3 text-center"
            >
              <img
                src="img/PPT3.png"
                width="55%"
                alt="Solutions"
              />{" "}
            </div>

           <div className="container pt-5 lineHeight-24 px-5">
           <h4>Synectiks Solution Highlights</h4>
           <ul className="lineHeight-24">
            <li>Provide actionable insights of business processes by providing real time analytics 
            that helps increase performance, manage variations and improve business outcome</li>
            <li>Open platform for beautiful Analytic &amp; Monitoring caters both 
              Big Data &amp; Fast Data Platform</li>
            <li>Single source of truth for Real time, OLAP, Relational Data</li>
            <li>Any data source, any data( structured / semi structured / unstructured )</li>
            <li>Automate Data Management &amp; Query optimization</li>
            <li>Integrated policy based Alert processing &amp; remediation</li>
            <li>Natural Language processing / Deep Learning enabled</li>
            </ul>
            <h4>Synectiks Solution Differentiators</h4>
            <ul className="lineHeight-24">
              <li>Flexibility – Any Data / Any Report</li>
              <li>Changeability – Rapid customization – Build only your business need. Your business is unique</li>
              <li>Wide device / Protocol support</li>
              <li>Advanced technology stack – Got AI / ML / NLP inbuilt</li>
              <li>Cloud &amp; On Prem – Both</li>
              <li>Mobile Friendly</li>
              <li>Risk free pricing – Free Base – Pay As You Use</li>
            </ul>
            <h4>Retail &amp; Ecommerce Use Cases</h4>
            <ul className="lineHeight-24">
              <li>Continuous Monitoring 
                of Orders / Stores / Customers / Products/ Merchandising / Service / Supply Chain / Marketing SLA’s</li>
              <li>Order Volume / Demographics / Contribution Margin</li>
              <li>Revenue Pipeline Monitoring</li>
              <li>Market Basket Analysis</li>
              <li>Recommendation Engine</li>
              <li>Inventory Pipeline</li>
              <li>Supply Chain Pipeline</li>
              <li>Customer sentiment analysis</li>
              <li>Merchandising</li>
              <li>Supplier effectiveness and sourcing optimization</li>
              <li>Trend analysis for pricing and promotion</li>
            </ul>
          </div>


            <div className="pt-3 px-5" >
              <h2 className="container text-center px-5 py-3">Financial Insights</h2>
              <div className="py-3 text-center">
                <img
                  src="img/PPT7.png"
                  width="60%"
                  alt="By Use Case"
                />{" "}
              </div>

              <h2 className="container text-center px-5 py-3">Visibility –Example Heatmap</h2>
              <div
              className="py-3 text-center"
            >
              <img
                src="img/PPT8.png"
                width="60%"
                alt="Solutions"
              />{" "}
            </div>
            <h2 className="container text-center px-5 py-3">Alerting - Email</h2>
            <div
              className="py-3 text-center"
            >
              <img
                src="img/PPT13.png"
                width="60%"
                alt="Solutions"
              />{" "}
            </div>
            <h2 className="container text-center px-5 py-3">Alerting - Mobile</h2>
            <div
              className="py-3 text-center"
            >
              <img
                src="img/PPT14.png"
                width="25%"
                alt="Solutions"
              />{" "}
            </div>

            </div>
  
          </div>

        </div>

      </div>
     
    );
  }
}

export default ByUseCase;
