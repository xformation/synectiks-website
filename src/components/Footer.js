import React from "react";
import UsChamber from "../images/uschamber.png";
import logo from "../images/Synectiks Logo/synectiks-text-logo.png";

import "../css/footer.css";

export class Footer extends React.Component {
  render() {
    return (
      <div className="FooterWrapper">
        <div className="text-center fixed-bottom Footerbg prvtpolicy">
          <p className="mb-1 pt-1 px-3 fsize08">
            We use cookies to make sure you have better experience on our
            website. Read about how we use cookies in our
            <a className="navfont Footerbg" href="/privacy-policy/index.html">
              &nbsp;<u>Privacy&nbsp;Policy.</u>
            </a>
          </p>
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
                    className="drata mt-3 w-40"
                    href="https://drata.com/product/iso-27001"
                    target="_blank"
                  >
                    <img src="https://cdn.drata.com/badge/hipaa-light.png" />
                  </a>
                  <a
                    className="drata mt-3 w-40"
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
                <p style={{ color: "#fff" }} className="mt-1">
                  Privacy &copy; 2020
                </p>
              </div>
              <div className="col-md-6 col-12">
                <div className="text-light text-capitalize text-md-end d-block w-100">
                  <a
                    href="https://synectiks.com/privacy-policy/index.html"
                    className="text-light"
                    style={{ fontSize: "12px", fontWeight: "normal" }}
                  >
                    Privacy Policy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
