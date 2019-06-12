import {
  GET_DATA,
  REQUEST_DATA,
  RECEIVE_DATA,
  LOAD_COMMENTS
} from "../constants";
import axios from "axios";
import store from "../store";

const getData = data => {
  return {
    type: GET_DATA,
    payload: {
      data
    }
  };
};

export const loadData = (lastFilterItem, filterStep) => {
  return async dispatch => {
    try {
      dispatch(requestData());

      const data = await axios.get("http://localhost:3004/list");

      dispatch(getData(data.data));
      dispatch(receiveData(data.data, lastFilterItem, filterStep));
    } catch (error) {
      throw new Error("Unable to get data");
    }
  };
};

const requestData = () => {
  return {
    type: REQUEST_DATA
  };
};

const receiveData = (data, lastFilterItem, filterStep) => {
  const filter = data.slice(lastFilterItem, filterStep);
  const nextFilterItem = lastFilterItem + filterStep;

  return {
    type: RECEIVE_DATA,
    payload: {
      filter,
      lastFilterItem: nextFilterItem
    }
  };
};

const getNewFilter = () => {
  const fromIndex = store.getState().lastFilterItem;

  if (store.getState().data.length - fromIndex < store.getState().filterStep) {
    const newFilter = [
      ...store.getState().filter,
      ...store.getState().data.slice(fromIndex)
    ];

    return newFilter;
  }

  const toIndex = fromIndex + store.getState().filterStep;
  const newFilter = [
    ...store.getState().filter,
    ...store.getState().data.slice(fromIndex, toIndex)
  ];

  return newFilter;
};

const getNextFilterItem = () => {
  const fromIndex = store.getState().lastFilterItem;

  if (store.getState().data.length - fromIndex < store.getState().filterStep) {
    const newFilterStep = store.getState().data.length - fromIndex;
    const nextFilterItem = fromIndex + newFilterStep;

    return nextFilterItem;
  }

  const nextFilterItem = fromIndex + store.getState().filterStep;

  return nextFilterItem;
};

export const loadComments = () => {
  const newFilter = getNewFilter();
  const nextFilterItem = getNextFilterItem();

  return {
    type: LOAD_COMMENTS,
    payload: {
      filter: newFilter,
      lastFilterItem: nextFilterItem
    }
  };
};
