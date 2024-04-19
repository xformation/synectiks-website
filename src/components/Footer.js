import React from "react";
import styled from "styled-components";
import Social from "./social-icons";
import UsChamber from "../images/uschamber.png";
import logo from "../images/Synectiks Logo/synectiks-text-logo.png";
import { MdArrowForward, MdArrowBack, MdClose } from "react-icons/md";
import "./layout.css";
export class Footer extends React.Component {
  render() {
    return (
      <FooterWrapper>
        {/* <div className='text-center text-light fixed-bottom bgBlue content'>
					<button className='bgBlue text-light fa fa-times float-right' type='submit' id='hide' />
					<p className='mb-1 pt-2 px-3 fsize08'>
						We use cookies to make sure you have better experience on our website. Read about how we use
						cookies in our Privacy Policy
						<a className=' navfont  text-light' href='/privacy-policy/index.html'>
							<small className='fsize08'>
								&nbsp;<u>Privacy&nbsp;Policy.</u>&nbsp;
							</small>
						</a>
						If you continue to use this site, you consent to our use of cookies and our
						<a className=' navfont  text-light' href='/privacy-policy/index.html'>
							<small className='fsize08'>
								&nbsp;<u>Privacy&nbsp;Policy.</u>&nbsp;
							</small>
						</a>
					</p>
				</div> */}
        <div className="text-center fixed-bottom Footerbg prvtpolicy">
          <p className="mb-1 pt-1 px-3 fsize08">
            We use cookies to make sure you have better experience on our
            website. Read about how we use cookies in our
            <a className="navfont Footerbg" href="/privacy-policy/index.html">
              &nbsp;<u>Privacy&nbsp;Policy.</u>&nbsp;
            </a>
          </p>
          {/* <MdClose className='closeBtn' type='submit' id='hide' /> */}
          <button className="closeBtn" type="submit" id="hide">
            X
          </button>
        </div>

        <div className="d-flex w-100 bgFooter px-md-5 py-4">
          <div className="container-fluid">
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-4">
              <div className="col">
                <div className="d-block w-100">
                  <a href="/">
                    <img src={logo} alt="" className="w-65 mt-3" />
                  </a>
                  <p className="text-light mt-3 text-left lht">
                    As an Open Product based Cloud Solution provider, we help
                    enterprises take advantage of public & private cloud and its
                    infinite resources to migrate and modernize their business
                    so that they outperform their peers by becoming truly
                    disruptive.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="d-block w-100 mt-md-0 mt-4">
                  <h3 className="text-light text-capitalize">USA</h3>
                  <p className="text-light mt-0 mt-md-2">
                    300 Alexander Park Drive,
                  </p>
                  <p className="text-light">Suite 215,</p>
                  <p className="text-light">Princeton, NJ 08540 </p>
                  <p className="text-light">Sales: +1 (609) 608 0388 X 1 </p>
                  <p className="text-light">Office: +1 (609) 608 0388</p>
                </div>
              </div>
              <div className="col">
                <div className="d-block w-100 mt-md-0 mt-4">
                  <h3 className="text-light text-capitalize">INDIA</h3>
                  <p className="text-light mt-0 mt-md-2 footaddleft">
                    Synectiks,
                  </p>
                  <p className="text-light footaddleft">Level 6,</p>
                  <p className="text-light footaddleft">
                    NHeights, Phase 2, Hi-Tech City,
                  </p>
                  <p className="text-light footaddleft">Hyderabad, 500081</p>
                  <p className="text-light webText">
                    Office: +91 (40) 4857 4411
                  </p>
                </div>
              </div>

              <div className="col">
                <div className="d-flex flex-wrap w-100 mt-md-0 mt-4">
                  <a href="http://www.uschamber.com" className="w-100">
                    <img
                      alt="U.S. Chamber of Commerce Member 2021"
                      title="U.S. Chamber of Commerce Member 2021"
                      src={UsChamber}
                    />
                  </a>
                  <a
                    class="drata mt-3 w-40"
                    href="https://drata.com/product/iso-27001"
                    target="_blank"
                  >
                    <img src="https://cdn.drata.com/badge/hipaa-light.png" />
                  </a>
                  <a
                    class="drata mt-3 w-40"
                    href=" https://drata.com/product"
                    target="_blank"
                  >
                    <img src="https://cdn.drata.com/badge/soc2-dark.png" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex w-100 bottombgFooter px-md-5 py-2">
          <div className="container-fluid">
            <div className="row ">
              <div className="col-md-6 col-12">
                <p style={{ color: '#fff'}} className="mt-1">Privacy &copy; 2020</p>
              </div>
              <div className="col-md-6 col-12">
                <div className="text-light text-capitalize text-md-right d-block w-100">
                  <a
                    href="https://synectiks.com/privacy-policy/index.html"
                    className="text-light"
                    style={{ fontSize: '12px', fontWeight: 'normal' }}
                  >
                    Privacy Policy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FooterWrapper>
    );
  }
}

export default Footer;

const FooterWrapper = styled.div`
   {
    .bottombgFooter {
      background-color: var(--gray-dark);
    }
    .drata {
      width: 80px;
    }
    .footaddleft {
      text-align: left;
    }
    .webText {
      webkit-text-fill-color: white;
      font-size: 12px !important;
    }
    .ptext {
      text-align: left;
    }
    .lht {
      line-height: 1.5;
    }
    .w-65 {
      width: 50%;
    }
    background: var(--textColor);
    p {
      font-size: 12px !important;
      line-height: 24px;
      margin-bottom: 0px;
      font-style: normal;
      font-weight: 200;
    }
    ul {
      line-height: 24px;
      list-style: none;
      font-size: 12px !important;
    }
    a {
      font-weight: 300;
    }
    .m5t {
      margin-top: 5px;
    }

    .prvtpolicy {
      height: 60px;
      line-height: 10px;
      margin-top: 0px;
      padding: 0px 30px;
      display: none;
      #hide {
        position: absolute;
        top: 8%;
        right: 2%;
        padding: 10px;
        font-size: 1.1rem;
        margin-top: 5px;
      }
    }
    .navfont {
      position: relative;
      top: 0px;
      font-size: 8px;
    }

    .fsize08 {
      font-size: 8px !important;
      position: relative;
      top: 0px;
      line-height: 18px;
    }
  }
  @media (min-width: 576px) {
    .navfont,
    .fsize08 {
      font-size: 16px;
      position: relative;
      top: 0%;
    }
    /* .drata {
      width: 100%;
    } */
    .fsize08 {
      font-size: 14px !important;
      position: relative;
      top: 0%;
      line-height: 24px;
    }
    .prvtpolicy {
      height: 40px;
      padding: 0;
      display: none;
      #hide {
        position: absolute;
        top: 0;
        right: 2%;
        font-size: 1.3rem;
        font-weight: 500;
      }
    }
    .ptext {
      text-align: justify;
    }
    .fsize08 {
      font-size: 10px;
    }
    .w-65 {
      width: 55%;
    }
    .w-35vw {
      width: 40vw;
    }
    .w-30vw {
      width: 35vw;
    }
    .w-32vw {
      width: 30vw;
    }
    background: var(--textColor);
    a {
      font-weight: 300;
    }
    .webText {
      webkit-text-fill-color: white;
      font-size: 14px !important;
    }
    p {
      font-size: 14px !important;
      line-height: 1.5;
      margin-bottom: 0px;
      font-style: normal;
      font-weight: 200;
    }
    ul {
      line-height: 2.3;
      list-style: none;
      font-size: 14px !important;
    }
  }

  @media (min-width: 1280px) {
    .w-32vw {
      width: 28%;
    }
  }
`;
