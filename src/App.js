import React, { Component } from "react";
import { connect } from "react-redux";
import { loadData } from "./actions";
import CommentList from "./components/CommentList";
import "normalize.css";
import styled from "styled-components";

class App extends Component {
	render() {
		return (
			<AppWrapper>
				<CommentList />
			</AppWrapper>
		);
	}

	componentDidMount() {
		this.props.loadData(this.props.lastFilterItem, this.props.filterStep);
	}
}

export default connect(
	state => ({
		lastFilterItem: state.lastFilterItem,
		filterStep: state.filterStep
	}),
	{ loadData }
)(App);

const AppWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #fafaf9;
`;
