import * as types from "../actions/actionTypes";

export const initialState = {
  user: undefined,
};

export default function usersReducer(state = initialState, action) {
  const { user } = action;

  switch (action.type) {
    case types.SET_USER:
      return { ...state, user };

    default:
      return state;
  }
}
