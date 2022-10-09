import * as types from "../actions/actionTypes";

export const initialState = {
  user: undefined,
};

export default function usersReducer(state = initialState, action) {
  const { user, error } = action;
  switch (action.type) {
    case types.SET_USER_SUCCESS:
      return { ...state, user };
    case types.SET_USER_FAILURE:
      return { ...state, error: error };
    default:
      return state;
  }
}
