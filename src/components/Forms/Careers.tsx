import * as React from "react";
// import { Right } from "react-bootstrap/lib/Media";
import { LinearProgress } from "material-ui";
import { NavLink } from "react-router-dom";


const btn = {
    // width: '110px',
    height: '35px',
    color: '#ffffff',
    background: 'linear-gradient(to bottom, #9a56ff, #d78afc)',
};

// export const Careers: React.StatelessComponent<{}> = () => {
    export class Careers extends React.Component<{},{}> {
        constructor(props:any) {
          super(props);  
        }
        componentDidMount() {
            window.scrollTo(0, 0)
          }
    
        render() { 
return (
        <div className='bg-lightgrey'>

            <div>
                <img
                    className="  text-center py-5 mt-5"
                    src="img/CareersNew.jpg" width="100%"
                    alt="Card image Careers"
                />
                {/* <div className="text-center centered ">
                    <div className="text-white">
                        <h3>Careers</h3>
                    </div>
                </div> */}
            </div>

            {/* <div className="px-5 pt-3 text-center" data-aos="fade-up" data-aos-duration="2000">
                <h4><i>
                    “Talented, hardworking, and passionate personalities. We love what we do.<br />
                    Together as a Team, We work for the success of Our Customer.”
                </i></h4>
                <p>Our motto<br />
                    Work Hard, Be Kind, Stay Humble
                </p>
            </div> */}

            <div className='text-center pb-3 lineHeight-24' data-aos="fade-up" data-aos-duration="2000">
                <h2>Careers - Opportunity is infinite!</h2>
            </div>

            <div className="w-100 px-5 text-black text-justify" data-aos="fade-up" data-aos-duration="2000">
                <p className="lineHeight-24">
                    <h4>Changing the game takes talent - Yours!</h4><br />{" "}
                    Work where you’re encouraged to explore your passions, where your skills are nurtured and respected. Introduce
                    with leading-edge technologies on absolutely the coolest undertakings you'll be able to envision. What's more, get
                    the tools you have to continue learning and developing, so you remain consistently on top of things while making a difference in the world.
                <br />{" "}
                    What’s your passion?<br />
                    <div className="col-lg-12 d-flex flex-col">
                        <div className="pt-3 col-sm-4 px-4" >
                            <NavLink className="navlink navfont noLine" to="/contactus">Data &amp; Analytics</NavLink>
                            {/* <button style={btn} className='btn menu-bg'>Data &amp; Analytics</button> */}
                        </div>
                        <div className="pt-3 col-sm-4 px-4" >
                            <NavLink className="navlink navfont noLine" to="/contactus">Design &amp; UX</NavLink>
                        </div>
                        <div className="pt-3 col-sm-4 px-4" >
                            <NavLink className="navlink navfont noLine" to="/contactus">Engineering&amp;Technology</NavLink>
                        </div>
                    </div>

                    <div className="col-lg-12 d-flex flex-col">
                        <div className="pt-3 col-sm-4 px-4" >
                            <NavLink className="navlink navfont noLine" to="/contactus">Internships</NavLink>
                        </div>
                        <div className="pt-3 col-sm-4 px-4" >
                            <NavLink className="navlink navfont noLine" to="/contactus">Sales&amp;Marketing</NavLink>
                        </div>
                        <div className="pt-3 col-sm-4 px-4" >
                            <NavLink className="navlink navfont noLine" to="/contactus">Software Development</NavLink>
                        </div>
                    </div>

                </p>
                <p className="lineHeight-24">
                    <h4>Life at SYNECTIKS!</h4><br />{" "}
                    <i>Be Happy, Healthy, and Inspired!</i><br />{" "}
                    To start with, We provide a competitive salary and employer-paid health benefits. We offer
                    a flexible vacation plan, paid maternal and parental leave, tuition assistance, learning development
                    opportunities, sports events, team lunches, pot-lucks, team outings, and annual office celebrations – all for
                    you to connect, refresh and thrive.
                <br />{" "}
                </p>
                <p className="lineHeight-24">
                    <h4>SYNECTIKS for All!</h4><br />{" "}
                    SYNECTIKS is proud to be an equal opportunity workplace. We take great care to evaluate all employees
                    and job applicants equally, based on competence and qualifications. We will not discriminate by
                    age, race, gender, color, religion, national origin, sexual orientation, veteran status, marital status, disability status, or any other protected
                    category. For assistance or reasonable accommodation during the interview process, please contact us
                by sending an e-mail to <NavLink className="navlink navfont noLine" to="/contactus">hr@synectiks.com</NavLink>
                    <br />{" "}
                </p>

            </div>
            <div className="container">
        <div className="d-flex justify-content-around align-items-center mt-5 flex-col" />
      </div>


        </div>

    );
}}

export default Careers;
