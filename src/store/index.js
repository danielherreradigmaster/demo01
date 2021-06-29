import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import cotizar from './cotizar';


const reducer = combineReducers({
  cotizar,
})

const store = configureStore({
  reducer,
})

export default store;