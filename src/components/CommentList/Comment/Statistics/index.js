import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment } from "@fortawesome/free-solid-svg-icons";
import dayjs from "dayjs";

const Statistics = props => {
	return (
		<Wrapper>
			<Vote>
				<IconWrapper>
					<FontAwesomeIcon icon={faHeart} color="#cbcbcb" />
					{props.data.statistics.vote_count}
				</IconWrapper>
			</Vote>
			<Answer>
				<IconWrapper>
					<FontAwesomeIcon icon={faComment} color="#cbcbcb" />
					{props.data.statistics.answer_count}
				</IconWrapper>
			</Answer>
			<Activity>
				{dayjs(props.data.last_activity_at).format("DD/MM/YYYY")}
			</Activity>
			<Comment>Comment</Comment>
		</Wrapper>
	);
};

export default Statistics;

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	color: #cbcbcb;
`;

const Vote = styled.div`
	margin-right: 10px;
	cursor: pointer;
`;

const Answer = styled.div`
	margin-right: 10px;
`;

const Activity = styled.div`
	margin-right: 10px;
`;

const Comment = styled.div`
	margin-right: 10px;
	cursor: pointer;
`;

const IconWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	min-width: 30px;
`;
