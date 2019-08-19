import { SET_USER } from "../constant/action-types";

const initialState = {
  user: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload
      };

    default:
      return state;
  }
};
