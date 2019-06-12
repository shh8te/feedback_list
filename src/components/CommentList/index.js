import React, { Component } from "react";
import { connect } from "react-redux";
import Comment from "./Comment";
import styled from "styled-components";
import { loadComments } from "../../actions";

class CommentList extends Component {
  render() {
    return (
      <>
        <CommentsListWrapper>
          {this.props.isDataFetched
            ? this.props.filter.map(comment => (
                <Comment key={comment.uuid} data={comment} />
              ))
            : "loading"}
        </CommentsListWrapper>
        {this.props.isDataFetched ? (
          <Button
            onClick={this.props.loadComments}
            disabled={this.props.data.length === this.props.filter.length}
          >
            Load more
          </Button>
        ) : (
          ""
        )}
      </>
    );
  }
}

export default connect(
  state => ({
    data: state.data,
    isFetching: state.isFetching,
    isDataFetched: state.isDataFetched,
    filter: state.filter,
    lastFilterItem: state.lastFilterItem,
    filterStep: state.filterStep
  }),
  { loadComments }
)(CommentList);

const CommentsListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  background-color: #fafaf9;

  @media (min-width: 320px) {
    width: 100%;
    padding: 0 20px;
    margin: 30px 0;
  }

  @media (min-width: 1024px) {
    width: 775px;
    padding: 0 10px;
    margin: 50px 0;
  }
`;

const Button = styled.button`
  width: 70px;
  height: 70px;
  border: 1px solid;
  border-color: ${props => (props.disabled ? "#cbcbcb" : " #63d99c")};
  box-sizing: border-box;
  border-radius: 50%;
  color: ${props => (props.disabled ? "#cbcbcb" : " #63d99c")};
  background-color: #fff;
  margin-bottom: 50px;
  outline: none;
  cursor: ${props => (props.disabled ? "default" : "pointer")};
`;
