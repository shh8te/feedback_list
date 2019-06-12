import React from "react";
import styled from "styled-components";
import UserBlock from "./UserBlock";
import Statistics from "./Statistics";
import Content from "./Content";

const Comment = props => {
  return (
    <CommentWrapper>
      <UserBlock data={props.data} />
      <Content data={props.data} />
      <Statistics data={props.data} />
    </CommentWrapper>
  );
};

export default Comment;

const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  min-height: 160px;
  margin: 8px 0;
  background-color: #fff;
  border-radius: 6px;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 10px 20px;

  @media (min-width: 320px) {
    padding: 10px;
  }

  @media (min-width: 1024px) {
    padding: 20px;
  }
`;
