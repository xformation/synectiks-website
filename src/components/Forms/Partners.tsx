import * as React from "react";

export const Partners: React.StatelessComponent<{}> = () => {
    return (
        <div>

            <div>
                <img
                    className="  text-center py-5 mt-5"
                    src="img/AboutUS.png" width="100%"
                    alt="Card image Partners"
                />
                <div className="text-center centered ">
                    <div className="text-white">
                        <h3>Partners</h3>
                    </div>
                </div>
            </div>

            <div className="pt-3">
                <h2 className='text-center'>Our Technology Partners</h2>
            </div>

            <div className=' text-center  d-flex justify-content-around flex-col p-5 col-lg-12'>

                <div className='col-md-4'>
                    <img
                        className="   py-3"
                        src="img/vmware.svg" width="50%"
                        alt="Card image PartnersOrg"
                    />
                </div>
                <div className='col-md-4'>
                    <img
                        className="   py-3"
                        src="img/dell.svg" width="50%"
                        alt="Card image PartnersOrg"
                    />
                </div>
                <div className='col-md-4'>
                    <img
                        className="   py-3"
                        src="img/equinix.svg" width="50%"
                        alt="Card image PartnersOrg"
                    />
                </div>
            </div>

            <div className=' text-center  d-flex justify-content-around flex-col p-5 col-lg-12'>

                <div className='col-md-4'>
                    <img
                        className="   py-3 "
                        src="img/microsoft.svg" width="50%"
                        alt="Card image PartnersOrg"
                    />
                </div>
                <div className='col-md-4'>
                    <img
                        className="   py-3"
                        src="img/nutanix.svg" width="50%"
                        alt="Card image PartnersOrg"
                    />
                </div>
                <div className='col-md-4'>
                    <img
                        className="   py-3"
                        src="img/simplivity.svg" width="50%"
                        alt="Card image PartnersOrg"
                    />
                </div>

            </div>

        </div>

    );
};

export default Partners;

var vv_base_id = 'q00IB13hyn';
var vv_ext_id = '5d53ed9a';
var __ibaseUrl = (("https:" == document.location.protocol) ? "https://frontend.id-visitors.com" : "http://frontend.id-visitors.com");
(function () {
var va = document.createElement('script'); va.type = 'text/javascript'; va.async = true;
va.src = __ibaseUrl + '/cscripts/' + vv_base_id + '-' + vv_ext_id + '.js';
var sv = document.getElementsByTagName('script')[0]; sv.parentNode.insertBefore(va, sv);
})(); 
