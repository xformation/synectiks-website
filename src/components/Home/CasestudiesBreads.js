import React from "react";
import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";

const CaseBreadCrumbs = ({ title, subtitle, casetitle, pageTitle }) => {
  return (
    <CaseBreadCrumbsWrapper>
      <a href="/">{title}</a>
      <IoIosArrowForward className="mx-2 rotateIcon" />
      <p className="">{casetitle}</p>
      <IoIosArrowForward className="mx-2 rotateIcon" />
      <a href="/casestudy/index.html">{subtitle}</a>
      <IoIosArrowForward className="mx-2 rotateIcon" />
      <p className="active">{pageTitle}</p>
    </CaseBreadCrumbsWrapper>
  );
};
export default CaseBreadCrumbs;

const CaseBreadCrumbsWrapper = styled.div`
  a {
    width: auto;
    color: #1b1b1b;
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
