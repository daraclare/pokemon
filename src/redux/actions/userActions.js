import { GET_USER, SET_USER_SUCCESS, SET_USER_FAILURE } from "./actionTypes";

export const getUser = () => {
  return {
    type: GET_USER,
  };
};

export const setUserSuccess = (user) => {
  return {
    type: SET_USER_SUCCESS,
    user,
  };
};

export const setUserFailure = (error) => {
  return {
    type: SET_USER_FAILURE,
    error,
  };
};
