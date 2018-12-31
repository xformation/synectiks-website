import * as React from "react";
import { Right } from "react-bootstrap/lib/Media";
import { LinearProgress } from "material-ui";

const btn = {
    width: '110px',
    height: '35px',
    color: '#ffffff',    
    background: 'linear-gradient(to bottom, #9a56ff, #d78afc)',
};

export const Careers: React.StatelessComponent<{}> = () => {
    return (
        <div>

            <div>
                <img
                    className="card-img-Foundation text-center py-5 mt-5"
                    src="img/Careers.png" width="100%"
                    alt="Card image Careers"
                />
            </div>

            <div>
                <h2 className='text-center'>We are Hiring!</h2>
            </div>

            <div className="d-flex justify-content-around p-5">
                <div className='text-left'>
                    <h5>Account Manager</h5>
                    <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
                     Quisque dolor elit, rutrum venenatis libero in, vulputate tortor.<br/>                      
                     Aenean mollis nibh ut consectetur eleifend.<br/>
                     Nam fringilla et massa a euismod.
                    </small>
                    <div className="pt-3" >
                        <button style={btn} className='btn menu-bg'>Apply Now</button>
                    </div>
                </div>

                <div className='text-left'>
                    <h5>Programmer</h5>
                    <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
                     Quisque dolor elit, rutrum venenatis libero in, vulputate tortor.<br/>                      
                     Aenean mollis nibh ut consectetur eleifend.<br/>
                     Nam fringilla et massa a euismod.
                    </small>
                    <div className="pt-3" >
                        <button style={btn} className='btn menu-bg'>Apply Now</button>
                    </div>
                </div>

                <div className='text-left'>
                    <h5>Web Developer</h5>
                    <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
                     Quisque dolor elit, rutrum venenatis libero in, vulputate tortor.<br/>                      
                     Aenean mollis nibh ut consectetur eleifend.<br/>
                     Nam fringilla et massa a euismod.
                    </small>
                    <div className="pt-3" >
                        <button style={btn} className='btn menu-bg'>Apply Now</button>
                    </div>
                </div>

            </div>

            <div className="d-flex justify-content-around px-5">
                <div className='text-left'>
                    <h5>Technical Support</h5>
                    <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
                     Quisque dolor elit, rutrum venenatis libero in, vulputate tortor.<br/>                      
                     Aenean mollis nibh ut consectetur eleifend.<br/>
                     Nam fringilla et massa a euismod.
                    </small>
                    <div className="pt-3" >
                        <button style={btn} className='btn menu-bg'>Apply Now</button>
                    </div>
                </div>
        
                <div className='text-left'>
                    <h5>UI Designer</h5>
                    <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
                     Quisque dolor elit, rutrum venenatis libero in, vulputate tortor.<br/>                      
                     Aenean mollis nibh ut consectetur eleifend.<br/>
                     Nam fringilla et massa a euismod.
                    </small>
                    <div className="text-left pt-3" >
                        <button style={btn} className='btn menu-bg'>Apply Now</button>
                    </div>
                </div>    

                     <div className='text-left'>
                    <h5>Design Engineer</h5>
                    <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
                     Quisque dolor elit, rutrum venenatis libero in, vulputate tortor.<br/>                      
                     Aenean mollis nibh ut consectetur eleifend.<br/>
                     Nam fringilla et massa a euismod.
                    </small>
                    <div className="text-left pt-3" >
                        <button style={btn} className='btn menu-bg'>Apply Now</button>
                    </div>
                </div>           

            </div>

        </div>

    );
};

export default Careers;
