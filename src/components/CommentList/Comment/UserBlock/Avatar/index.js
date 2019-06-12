import React, { Component } from "react";
import styled from "styled-components";
import avatarErrorStub from "../../../../../assets/img/avatarErrorStub.png";
import avatarStub from "../../../../../assets/img/avatarStub.png";
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
          return <Img src={avatarErrorStub} />;
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

    return <Img src={avatarStub} />;
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
