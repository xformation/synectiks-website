import * as React from "react";
import { Right } from "react-bootstrap/lib/Media";
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
                    className="card-img-Foundation text-center py-5 mt-5"
                    src="img/Partners.png" width="100%"
                    alt="Card image Partners"
                />
            </div>

            <div>
                <h2 className='text-center'>Our Technology Partners</h2>
            </div>

            <div>
                <img
                    className="card-img-Foundation text-center py-5 mt-5"
                    src="img/PartnersTemp.png" width="100%"
                    alt="Card image PartnersOrg"
                />
            </div>

         
        </div>

    );
};

export default Partners;
