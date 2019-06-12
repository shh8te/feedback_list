import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Title = props => {
  const getRating = rating => {
    return Array.from(Array(rating), (val, index) => index).map(item => (
      <FontAwesomeIcon key={item} icon={faStar} color="#63d99c" />
    ));
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
