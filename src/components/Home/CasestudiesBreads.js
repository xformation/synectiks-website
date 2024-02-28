import React from 'react';
import styled from 'styled-components';
import { IoIosArrowForward } from 'react-icons/io';

const CaseBreadCrumbs = ({ title, subtitle, casetitle, pageTitle }) => {
	return (
		<CaseBreadCrumbsWrapper>
			<a href='/'>{title}</a>
			<IoIosArrowForward className='mx-1 mx-md-3 rotateIcon' />
			<h6 className=''>{casetitle}</h6>
			<IoIosArrowForward className='mx-1 mx-md-3 rotateIcon' />
			<a href='/casestudy/index.html' className='mx-1 mx-md-2'>
				{subtitle}
			</a>
			<IoIosArrowForward className='mx-1 mx-md-3 rotateIcon' />
			<h6 className='active'>{pageTitle}</h6>
		</CaseBreadCrumbsWrapper>
	);
};
export default CaseBreadCrumbs;

const CaseBreadCrumbsWrapper = styled.div`
	 {
		a {
			width: 18%;
		}
		a,
		h6,
		.rotateIcon {
			font-size: 8px;
		}
		.rotateIcon {
			transform: rotate(0deg);
		}
		display: flex;
		justify-content: flex-start;
		align-items: baseline;
		flex-direction: row;
		a {
			margin-top: -0.3rem;
		}
		h6.active {
			color: var(--synectiksOrange);
		}
	}

	@media screen and (min-width: 576px) {
		a {
			width: auto;
		}
		a,
		h6,
		.rotateIcon {
			font-size: 16px;
		}
		display: flex;
		.rotateIcon {
			transform: rotate(0deg);
		}
		justify-content: flex-start;
		align-items: end;
		flex-direction: row;
		a {
			margin-top: -0.3rem;
		}
		h6.active {
			color: var(--synectiksOrange);
		}
	}
`;
