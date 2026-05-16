import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import favoriteReducer from './favoriteSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  favorites: favoriteReducer,
});

export default rootReducer;
