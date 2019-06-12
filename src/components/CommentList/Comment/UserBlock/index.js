import React from "react";
import styled from "styled-components";
import Avatar from "./Avatar";
import dayjs from "dayjs";

const UserBlock = props => {
  const getPostTime = () => {
    return props.data.updated_at
      ? dayjs(props.data.updated_at).format("DD/MM/YYYY")
      : dayjs(props.data.created_at).format("DD/MM/YYYY");
  };

  return (
    <Wrapper>
      {
        <>
          <Avatar data={props.data} />
          <Text>
            <UserName>{props.data.author.name}</UserName>
            <PostTime>{getPostTime()}</PostTime>
          </Text>
        </>
      }
    </Wrapper>
  );
};

export default UserBlock;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  max-height: 36px;
  margin: 0 10px 10px 0;
`;

const UserName = styled.span`
  width: 100%;
  font-size: 14px;
  line-height: 18px;
  font-weight: 500;
  color: #637889;
`;

const PostTime = styled.span`
  width: 100%;
  font-size: 14px;
  line-height: 18px;
  font-weight: 500;
  color: #637889;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
`;
