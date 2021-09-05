import {SAVE_USER_INFO} from '../constants';

const saveUser = user => ({
  type: SAVE_USER_INFO,
  user,
});

export const saveUserInfo = user => dispatch => {
  dispatch(saveUser(user));
};
