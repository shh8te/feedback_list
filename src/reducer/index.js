import {
	GET_DATA,
	REQUEST_DATA,
	RECEIVE_DATA,
	LOAD_COMMENTS
} from "../constants";

const initialState = {
	data: [],
	isDataFetched: false,
	isFetching: false,
	filter: [],
	lastFilterItem: 0,
	filterStep: 5
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_DATA: {
			const data = action.payload.data;

			return {
				...state,
				data
			};
		}
		case REQUEST_DATA: {
			return {
				...state,
				isFetching: true
			};
		}
		case RECEIVE_DATA: {
			const { filter, lastFilterItem } = action.payload;

			return {
				...state,
				isFetching: false,
				isDataFetched: true,
				filter,
				lastFilterItem
			};
		}
		case LOAD_COMMENTS: {
			const { filter, lastFilterItem } = action.payload;

			return {
				...state,
				filter,
				lastFilterItem
			};
		}
		default:
			return state;
	}
};

export default reducer;
