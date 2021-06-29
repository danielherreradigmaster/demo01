import { createSlice } from '@reduxjs/toolkit'

import { apiGetUser, apiSendUser } from '../api/user';


const slice = createSlice({
  name: 'cotizar',
  initialState: {
    user: {},
  },
  reducers: {
    userSuccess: (state, action) => {
      const user = action.payload.shift();
      state.user = {...user, ...state.user};
      console.log(state.user);
      console.log('superchuspito');
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export default slice.reducer


const { userSuccess, setUser } = slice.actions

export const getUser = () => async dispatch => {
  try {
    const response = await apiGetUser();
    dispatch(userSuccess(response));
  } catch (e) {
    return console.error(e.message);
  }
}

export const sendUser = (data) => async dispatch => {
  try {
    const response = await apiSendUser(data);
    dispatch(setUser(response));
  } catch (e) {
    return console.error(e.message);
  }
}