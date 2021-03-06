import * as React from "react";

export class Featured extends React.Component<{}, {}> {
    constructor(props: any) {
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
                        className="  text-center py-5 mt-5"
                        src="img/Careers.png" width="100%"
                        alt="Resources"
                    />
                    <div className="text-center centered ">
                        <div className="text-white">
                            <h3>Resources</h3>
                        </div>
                    </div>
                </div>

                <div className="px-5">
                    <div className="d-flex justify-content-around pt-2 flex-fill  align-items-center flex-col" >
                        <div>
                            <div className="p-5">
                                <img src="img/FeDevOps-Strategies.png" width="100%" alt="Enterprise-DevOps" />{" "}

                                <div className="text-group align-self-center">
                                    <h6 className="font-weight-bold pt-2">Discover the business value of Synectiks Open Xformation Platform and
                            how it optimizes Enterprise DevOps Strategies.{" "}</h6>
                                    <a href="doc/Synectiks-Enterprise-DevOps-Strategies.pdf" target="_blank">
                                        Learn more <i className="fa fa-arrow-right" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="p-5">
                                <img className="border-grey-2px" src="img/FeEnterprise-Transformation.png" width="100%" alt="Enterprise-Transformation" />{" "}

                                <div className="text-group align-self-center ">
                                    <h6 className="font-weight-bold pt-2"> Discover how Synectiks open products based service delivery
                            approach creating significant differences in service sector. </h6>
                   <a href="doc/Synectiks-Enterprise-Transformation.pdf" target="_blank">
                                        Learn more <i className="fa fa-arrow-right" />
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="">
                        <div className="d-flex justify-content-around pt-2 flex-fill  align-items-center flex-col" >
                            <div>
                                <div className="p-5">
                                    <img src="img/FeMicroservice-Platform.png" width="100%" alt="Enterprise-Transformation" />{" "}

                                    <div className="text-group align-self-center">
                                        <h6 className="font-weight-bold pt-2"> Why to choose Synectiks as your
              preferred microservices delivery partner. </h6>
                        
                                        <a href="doc/Synectiks-Microservice-Platform.pdf" target="_blank">
                                            Learn more <i className="fa fa-arrow-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>


                            <div>
                                <div className="p-5">
                                    <img src="img/FeOpen-Platform.png" width="100%" alt="Enterprise-Transformation" />{" "}

                                    <div className="text-group align-self-center">
                                        <h6 className="font-weight-bold pt-2">Synectiks Xformation Platform accelerate any transformation project @50% cost &amp; Time.</h6>
                           
                                        <a href="doc/Synectiks-Open-Platform.pdf" target="_blank">
                                            Learn more <i className="fa fa-arrow-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
         
                </div>

            </div>

        );
    };
}
export default Featured;

var vv_base_id = 'q00IB13hyn';
var vv_ext_id = '5d53ed9a';
var __ibaseUrl = (("https:" == document.location.protocol) ? "https://frontend.id-visitors.com" : "http://frontend.id-visitors.com");
(function () {
var va = document.createElement('script'); va.type = 'text/javascript'; va.async = true;
va.src = __ibaseUrl + '/cscripts/' + vv_base_id + '-' + vv_ext_id + '.js';
var sv = document.getElementsByTagName('script')[0]; sv.parentNode.insertBefore(va, sv);
})(); 
