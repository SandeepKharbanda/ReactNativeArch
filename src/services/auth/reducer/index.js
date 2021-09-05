import {SAVE_USER_INFO} from '../constants';

const initialState = {
  user: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_USER_INFO:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};
