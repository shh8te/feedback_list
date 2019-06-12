import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Title = props => {
	const getRating = rating => {
		switch (rating) {
			case 0:
				return "";
			case 1:
				return Array.from(Array(1), (val, index) => index).map(item => (
					<FontAwesomeIcon icon={faStar} color="#63d99c" />
				));
			case 2:
				return Array.from(Array(2), (val, index) => index).map(item => (
					<FontAwesomeIcon icon={faStar} color="#63d99c" />
				));
			case 3:
				return Array.from(Array(3), (val, index) => index).map(item => (
					<FontAwesomeIcon icon={faStar} color="#63d99c" />
				));
			case 4:
				return Array.from(Array(4), (val, index) => index).map(item => (
					<FontAwesomeIcon icon={faStar} color="#63d99c" />
				));
			case 5:
				return Array.from(Array(5), (val, index) => index).map(item => (
					<FontAwesomeIcon icon={faStar} color="#63d99c" />
				));
			default:
				return "";
		}
	};

	return (
		<Wrapper>
			{
				<>
					<Text>{props.data.title}</Text>
					<Rating>{getRating(props.data.rating)}</Rating>
				</>
			}
		</Wrapper>
	);
};

export default Title;

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 10px;
	color: #1e384e;

	@media (min-width: 320px) {
		flex-wrap: wrap;
	}

	@media (min-width: 1024px) {
		flex-wrap: nowrap;
	}
`;

const Text = styled.span`
	margin-right: 20px;
	font-size: 24px;
	line-height: 31px;
	font-weight: 500;
	color: #1e384e;
`;

const Rating = styled.div`
	display: flex;
	align-items: center;
`;
