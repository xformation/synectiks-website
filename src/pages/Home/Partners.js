import React from "react";
import styled from "styled-components";
import aws from "../../images/HomePage/aws.png";
import acro from "../../images/HomePage/Acronis Logo.png";
import gle from "../../images/HomePage/google.png";
import msa from "../../images/HomePage/msa.png";

const Partners = () => {
  return (
    <div className="customer-logos">
      <div>
        <div className="w-100 mb-2 mb-md-0 px-4">
          <img src={aws} alt="aws" />
        </div>
      </div>
      <div>
        <div className="w-100 mb-2 mb-md-0 px-4">
          <img src={gle} alt="google cloud" />
        </div>
      </div>
      <div>
        <div className="w-100 mb-2 mb-md-0 px-4">
          <img src={msa} alt="microsoft azure" />
        </div>
      </div>
      <div>
        {" "}
        <div className="w-100 mb-2 mb-md-0 px-4">
          <img src={acro} alt="acronis" />
        </div>
      </div>
    </div>
  );
};

export default Partners;

const PartnerWrapper = styled.section``;
