import * as React from "react";
import { Link } from "react-router-dom";

    export class Transformation extends React.Component<{},{}> {
        constructor(props:any) {
          super(props);  
        }
        componentDidMount() {
            window.scrollTo(0, 0)
          }
    
        render() {
    return (
        <div className='bg-lightgrey'>        

<div className="container pb-5">
        <div className="row main-card pb-5">
          <div className="col-md-12   card-deck">
            <div className="card btn card-shadow mx-3 pt-3">
            <Link to="/foundation" className="noLine">
              <img
                className="card-img-top"
                src="img/Foundation.png"
                alt="Foundation"
              />
              <div className="card-body">
                <h2 className="text-center text-uppercase">Foundation</h2>
              </div>
              </Link>
            </div>

            <div className="card btn card-shadow mx-3 pt-3">
            <Link to="/transformation" className="noLine">
              <img
                className="card-img-top"
                src="img/Transformation.png"
                alt="Transformation"
              />
              <div className="card-body">
                <h2 className="text-center text-uppercase">Transformation</h2>
                <h1 className="pointer text-center">&#187;</h1>
              </div>
              </Link>
            </div>

            <div className="card btn card-shadow mx-3 pt-3">
            <Link to="/operations" className="noLine">
              <img
                className="card-img-top"
                src="img/Operation.png"
                alt="Operation"
              />
              <div className="card-body">
                <h2 className="text-center text-uppercase">Operation</h2>
              </div>
              </Link>
            </div> 
          </div>
        </div>
        </div>

        
            <div className="text-center p-5">
                <div  className="my-5">
            <img 
                   
                    src="img/Refactor.png" width="75%"
                    alt="Refactor"
                />
                </div>
                <div  className="my-5">
            <img data-aos="fade-up" data-aos-duration="2000"
                    className="  mx-auto"
                    src="img/transformation_2.png" width="75%"
                    alt="Transformation"
                />
                </div>
                 <div  className="my-5">
            <img data-aos="fade-up" data-aos-duration="2000"
                    className=" mx-auto"
                    src="img/Enterprise-Platform.png" width="75%"
                    alt="Redevelopment Microservice"
                />
                </div>
                 <div  className="my-5">
            <img data-aos="fade-up" data-aos-duration="2000"
                    className="   mx-auto"
                    src="img/Redevelopment.png" width="75%"
                    alt="Redevelopment Analytics"
                />
                </div>
                 <div  className="my-5">
                 <img data-aos="fade-up" data-aos-duration="2000"
                    className="mx-auto"
                    src="img/Rehost.png" width="75%"
                    alt="Rehost"
                />
                </div>
            </div>
        </div>

    );
};
    }
export default Transformation;
