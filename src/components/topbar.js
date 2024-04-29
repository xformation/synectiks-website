import React from "react";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

const Topbar = () => {
  return (
    <div className="d-flex w-100 py-2 px-5 TopBarWrapper">
      <div className="container-fluid text-right">
        <div className="d-flex w-100 align-items-center justify-content-end">
          <a href="/Contact-us.html" className="border-0">
            CONTACT US
          </a>
          <h6>QUESTIONS? 609 608 0388 X 1</h6>
          <a href="mailto:info@synectiks.com">
            <FaEnvelope className="social me-1" />
            info@synectiks.com
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/company/synectiks/"
          >
            <FaLinkedin className="social" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;

