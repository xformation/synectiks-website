import * as React from "react";

export const Audit: React.StatelessComponent<{}> = () => {
    return (
        <div>
            <div>
                <img
                    className="  text-center pt-5 mt-5"
                    src="img/Audit_Central.png" width="100%"
                    alt="Card image Resource"
                />
            </div>

            <div className="row col-md-12 mx-auto middleSquare text-center">

                <div className="col-md-4 text-blue p-3">
                    <h3>Security &amp; Best Practices</h3>
                </div>
                <div className="col-md-4 text-center">
                    <div className="diamond my-3 mx-auto text-center">
                        <img className="text-center" src="img/Aws-Standard-Consulting-Partner-logo.png"
                            width="85%" id="AWS"
                            alt="Card image Resource"
                        />
                    </div>
                </div>
                <div className="col-md-4 text-blue p-3">
                    <h3>Cost &amp; Time Optimization</h3>
                </div>
            </div>


            <div className="d-flex col-lg-12 justify-content-around align-items-center flex-col m-3">
                
                <div className="col-md-6 bg-skyblue  h-300 p-5">
                    <h3 className="text-center text-uppercase text-white">
                        Optimize your Cloud Utilization and Billing
                            </h3>
                    <ul className="text-white">
                        <li>Adopt containerization and server less</li>
                        <li>Optimal dynamic instance selection</li>
                        <li>Reclaim under utilized resources</li>
                    </ul>
                </div>

                <div className="col-md-6">
                    <img
                        className="card-img-top"
                        src="img/4-icons.png"
                        alt="Card image cap"
                    />
                </div>
                </div>

                <div className="d-flex col-lg-12 justify-content-around align-items-center flex-col m-3">
                <div className="col-md-6 w-75">
                <img
                        className="card-img-top w-75"
                        src="img/Tick-icon.png"
                        alt="Card image cap"
                    />
                </div>
                <div className="col-md-6 bg-skyblue h-300 p-5">
                <h3 className="text-center text-uppercase text-white">
                            Continuous Security and Governance
                        </h3>
                        <h6 className="text-white">
                            Ensure security and compliance across multiple account / product / environment.
                             Compliance Check for CIS, HIPPA, PCI-DSS.
                             Ensure account wise security role and policies.
                        </h6>
                </div>
            </div>
  
        </div>

    );
};

export default Audit;

var vv_base_id = 'q00IB13hyn';
var vv_ext_id = '5d53ed9a';
var __ibaseUrl = (("https:" == document.location.protocol) ? "https://frontend.id-visitors.com" : "http://frontend.id-visitors.com");
(function () {
var va = document.createElement('script'); va.type = 'text/javascript'; va.async = true;
va.src = __ibaseUrl + '/cscripts/' + vv_base_id + '-' + vv_ext_id + '.js';
var sv = document.getElementsByTagName('script')[0]; sv.parentNode.insertBefore(va, sv);
})(); 