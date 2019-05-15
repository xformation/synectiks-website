import * as React from "react";
// import { Right } from "react-bootstrap/lib/Media";
import { LinearProgress } from "material-ui";

const btn = {
    width: '110px',
    height: '35px',
    color: '#ffffff',
    background: 'linear-gradient(to bottom, #9a56ff, #d78afc)',
};

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
