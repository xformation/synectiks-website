import * as React from "react";
import { Right } from "react-bootstrap/lib/Media";
import { LinearProgress } from "material-ui";

const btn = {
    borderRadius: '6px',
    width: '110px',
    height: '36px',
    background: 'linear-gradient(to bottom, #9a56ff, #d78afc)',
};

const italic = {
    fontStyle: 'italic',
};
const inputBox = {
    border: 'none',
    backgroundColor: '#f2f2f2',
    width: '150%', 
};
const textArea = {
    border: 'none',
    backgroundColor: '#f2f2f2',
    width: '150%', 
    height: '110px', 
};
const borderRadius_6 = {
    borderRadius: '6px', 
};
const inline = {
    display:'inline-flex',  
};

export const Forms: React.StatelessComponent<{}> = () => {
    return (
        <div>        
            <div>
                <img
                    className="card-img-Foundation text-center"
                    src="img/NiceToMeet.png" width="100%"
                    alt="Card image Foundation"
                />
            </div>
            <div className="d-flex justify-content-around py-5  border-success ">
            <div>
            <h2 className='text-left'>CONTACT US</h2>
            <h5>USA</h5>
                    <small style={italic} className="text-left">
                        300 Alexander Park Drive, Suite 215,<br />
                        Princeton, NJ 08540<br />
                        Sales: +1 (609) 608-0429 X 112<br />
                        Office: +1 (609) 608-0429<br />
                    </small>
                    <h1></h1>
                    <h5>INDIA</h5>
                    <small style={italic} className="text-left">
                        3rd Floor, Plot# 25 & 26,<br />
                        Survey # 71, Madhapur,<br />
                        Hyderabad, IN 500 081<br />
                        Office: +91 (40) 4857 4411<br />
                    </small>
                    <h1></h1>
                    <h5>SINGAPORE</h5>
                    <small style={italic} className="text-left">
                        1 Sophia Road, #05-23,<br />
                        Peace Center,<br />
                        Singapore 228149<br />
                    </small>
                    <h1></h1>
                    <h5>SOCIALS</h5>
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                    <small style={italic}>Twitter</small>&emsp;
                    <i className="fa fa-facebook-square" aria-hidden="true"></i>
                    <small style={italic}>Facebook</small>&emsp;
                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                    <small style={italic}>Linkedin</small>

                </div>
            <div>
            <h2 className='text-center'>CONTACT FORM</h2>
            <form >
            
            <div className='form-group'>
            <label>Name *</label>
                <input style={inputBox} />
            </div>
            <div className='form-group'>
                <p>E-Mail *</p>
                <input style={inputBox} />
            </div>
            <div className='form-group'>
                <p>Phone *</p>
                <input style={inputBox} />
            </div>
            <div className='form-group'>
                <p>Subject *</p>
                <input style={inputBox} />
            </div>
            <div className='form-group'>
                <p>Services *</p>
                <input style={inputBox} className='dropdown' />
            </div>
            <div className='form-group'>
                <p>Comment *</p>
                {/* <input style={inputBox} className='comment' /> */}
                <textarea style={textArea}>
                </textarea>
            </div>
            <div className="text-left pt-3" >
                    <button style={btn} className='btn menu-bg'>Send</button>
                </div>
            </form>
            </div>
            </div>
            <div>
                <img
                    className="card-img-Foundation text-img mx-auto"  style={borderRadius_6}
                    src="img/location.png" width="90%" 
                    alt="Card image Foundation"
                />
            </div>

           
        </div>

    );
};

export default Forms;
