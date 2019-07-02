import * as React from "react";

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
    display: 'inline-flex',
};

export const Forms: React.StatelessComponent<{}> = () => {
    return (
        <div>
            <div>
                <img
                    className="  text-center"
                    src="img/NiceToMeet.png" width="100%"
                    alt="Card image Foundation"
                />
            </div>

            <div>
                <h2 className='text-center mt-5'>CONTACT FORM</h2>
            </div>

            <div className="d-flex justify-content-around ">

                <div >
                    <p>Name *</p>
                    <input style={inputBox} />
                </div>
                <div >
                    <p>E-Mail *</p>
                    <input style={inputBox} />
                </div>
            </div>

            <div className="d-flex justify-content-around ">
                <div >
                    <p>Phone *</p>
                    <input style={inputBox} />
                </div>
                <div >
                    <p>Subject *</p>
                    <input style={inputBox} />
                </div>
            </div>

            <div className="d-flex justify-content-around ">
                <div >
                    <p>Services *</p>
                    <select style={inputBox} >
                        <option value="enterprise">Enterprise Transformation</option>
                        <option value="foundation">Foundation</option>
                        <option value="migration">Migration & Deployment</option>
                        <option value="operations">Operations</option>
                        <option value="optimization">Optimization</option>
                        <option value="others">Others</option>
                    </select>
                </div>
                <div >
                    <p>Comment *</p>
                    <input style={inputBox} />
                </div>
            </div>

            <div className='text-center p-5'>
                <button style={btn} className='btn menu-bg'>Send</button>
            </div>

            <div>
                <h2 className='text-center'>CONTACT US</h2>
            </div>

            <div className="d-flex justify-content-around mt-5">

                <div>
                    <h5>USA</h5>
                    <small style={italic} >
                        300 Alexander Park Drive, Suite 215,<br />
                        Princeton, NJ 08540<br />
                        Sales: +1 (609) 608-0429 X 112<br />
                        Office: +1 (609) 608-0429<br />
                    </small>
                </div>
                <div>
                    <h5>INDIA</h5>
                    <small style={italic} >
                        3rd Floor, Plot# 25 &amp; 26,<br />
                        Survey # 71, Madhapur,<br />
                        Hyderabad, IN 500 081<br />
                        Office: +91 (40) 4857 4411<br />
                    </small>
                </div>
                <div>
                    <h5>SINGAPORE</h5>
                    <small style={italic} >
                        1 Sophia Road, #05-23,<br />
                        Peace Center,<br />
                        Singapore 228149<br />
                    </small>
                </div>

            </div>

            <div className='text-center p-5'>
                <h5>SOCIALS</h5>
                <i className="fa fa-twitter" aria-hidden="true"></i>
                <small style={italic}>Twitter</small>&emsp;
                    <i className="fa fa-facebook-square" aria-hidden="true"></i>
                <small style={italic}>Facebook</small>&emsp;
                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                <small style={italic}>Linkedin</small>
            </div>

            <div>
                <img
                    className="  text-img mx-auto" style={borderRadius_6}
                    src="img/location.png" width="90%"
                    alt="Card image Foundation"
                />
            </div>


        </div>

    );
};

export default Forms;
