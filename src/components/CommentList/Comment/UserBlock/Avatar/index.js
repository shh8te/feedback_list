import React, { Component } from "react";
import styled from "styled-components";

class Avatar extends Component {
	state = {
		imageStatus: "loading"
	};

	handleImageLoaded = () => {
		this.setState({
			imageStatus: "loaded"
		});
	};

	handleImageError = () => {
		this.setState({
			imageStatus: "failed"
		});
	};

	getImage = () => {
		if (this.props.data.author.avatar) {
			switch (this.state.imageStatus) {
				case "failed":
					return (
						<Img
							src={require("../../../../../assets/img/avatarErrorStub.jpg")}
						/>
					);
				default:
					return (
						<Img
							src={this.props.data.author.avatar.variants.small.url}
							onLoad={this.handleImageLoaded}
							onError={this.handleImageError}
						/>
					);
			}
		}

		return <Img src={require("../../../../../assets/img/avatarStub.png")} />;
	};

	render() {
		return this.getImage();
	}
}

export default Avatar;

const Img = styled.img`
	max-width: 36px;
	max-height: 36px;
	width: auto;
	height: auto;
	border-radius: 50%;
	margin-right: 10px;
	cursor: pointer;
`;
