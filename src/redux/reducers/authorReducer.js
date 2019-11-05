import * as types from "../actions/actionTypes";
import initialState from './initialState';

export default function actionReducer(state = initialState.authors, action) {
  switch (action.type) {
    case types.CREATE_COURSE:
      return [...state, { ...action.course }];
    case types.LOAD_AUTHORS_SUCCESS:
      return action.authors;
    default:
      return state;
  }
}
