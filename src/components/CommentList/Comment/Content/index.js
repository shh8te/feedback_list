import React from "react";
import styled from "styled-components";
import Title from "./Title";

const Content = props => {
	return (
		<Wrapper>
			{handleAttachments(props.data.attachments)}
			<Text>
				<Title data={props.data} />
				{props.data && (
					<div dangerouslySetInnerHTML={{ __html: props.data.body }} />
				)}
			</Text>
		</Wrapper>
	);
};

const handleAttachments = attachments => {
	if (attachments && attachments.length) {
		return (
			<ImagesWrapper>
				{attachments.map(image => (
					<Image src={image.variants.attachment.url} key={image.id} />
				))}
			</ImagesWrapper>
		);
	}

	return;
};

export default Content;

const Wrapper = styled.div`
	display: flex;
	margin-bottom: 10px;
`;

const ImagesWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-right: 20px;
`;

const Image = styled.img`
	width: auto;
	height: auto;
	margin-bottom: 10px;
	cursor: pointer;

	@media (min-width: 320px) {
		max-width: 100px;
		max-height: 100px;
	}

	@media (min-width: 1024px) {
		max-width: 200px;
		max-height: 200px;
	}
`;

const Text = styled.div`
	display: flex;
	flex-direction: column;
	font-size: 16px;
	line-height: 21px;
`;
