import React from "react";
import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";

const BusinessCrumbs = ({ title, subtitle, pageTitle }) => {
  return (
    <BreadCrumbsWrapper>
      <a href="/">{title}</a>
      <IoIosArrowForward className="mx-2 rotateIcon" />
      <a href="/business-continuity-cyber-security/index.html">{subtitle}</a>
      <IoIosArrowForward className="mx-2 rotateIcon" />
      <p className="active">{pageTitle}</p>
    </BreadCrumbsWrapper>
  );
};
export default BusinessCrumbs;

const BreadCrumbsWrapper = styled.div`
  a {
    width: auto;
  }
  a,
  p,
  .rotateIcon {
    font-size: 12px;
    text-align: left;
  }
  .rotateIcon {
    transform: rotate(0deg);
  }
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  a {
    margin-top: 0;
  }
  p.active {
    color: var(--synectiksOrange);
  }
  @media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: landscape) {
    a {
      width: 10%;
    }
    .rotateIcon,
    a,
    p {
      font-size: 12px;
    }
    .rotateIcon {
      transform: rotate(0deg);
    }
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
  }

  @media screen and (min-width: 576px) {
    a {
      width: auto;
    }
    .rotateIcon,
    a,
    p {
      font-size: 12px;
    }
    .rotateIcon {
      transform: rotate(0deg);
    }
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
  }
  @media screen and (min-width: 768px) {
    a {
      width: auto;
    }
    .rotateIcon,
    a,
    p {
      font-size: 12px;
    }
    .rotateIcon {
      transform: rotate(0deg);
    }
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
  }
`;
