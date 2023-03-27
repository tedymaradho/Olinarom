import axios from 'axios';

import { updateStart, updateSuccess, updateError } from './userSlice';

export const updateCurrentUser = async (username, token, dispatch) => {
  dispatch(updateStart());

  try {
    if (token) {
      const resUsers = await axios.get('https://fakestoreapi.com/users');
      const resFind = resUsers.data.filter(
        (user) => user.username === username
      );

      localStorage.setItem(
        'userData',
        JSON.stringify({
          username: username,
          firstname: resFind[0].name.firstname,
          token,
        })
      );

      dispatch(updateSuccess(resFind[0]));
    }
  } catch (error) {
    dispatch(updateError());
  }
};
