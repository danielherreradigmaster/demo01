import { createSlice } from '@reduxjs/toolkit'

import { apiGetUser } from '../api/user';


const slice = createSlice({
  name: 'cotizar',
  initialState: {
    user: [],
  },
  reducers: {
    userSuccess: (state, action) => {
      console.log(action);
      state.user = action.payload;
    },
  },
});

export default slice.reducer


const { userSuccess } = slice.actions

export const getUser = (data) => async dispatch => {
  try {
    const response = await apiGetUser(data);
    dispatch(userSuccess(response));
  } catch (e) {
    return console.error(e.message);
  }
}