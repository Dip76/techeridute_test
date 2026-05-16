import { createSlice } from '@reduxjs/toolkit';
import { getFavoriteId } from '../../utills/helper';

const initialState = {
  items: [],
};

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const event = action.payload;
      const id = getFavoriteId(event);
      const index = state.items.findIndex(
        item => getFavoriteId(item) === id,
      );

      if (index >= 0) {
        state.items.splice(index, 1);
      } else {
        state.items.push(event);
      }
    },
    clearFavorites: state => {
      state.items = [];
    },
  },
});

export const { toggleFavorite, clearFavorites } = favoriteSlice.actions;

export const selectIsFavorite = (state, event) => {
  const id = getFavoriteId(event);
  return state.favorites.items.some(item => getFavoriteId(item) === id);
};

export const selectFavorites = state => state.favorites.items;

export default favoriteSlice.reducer;
