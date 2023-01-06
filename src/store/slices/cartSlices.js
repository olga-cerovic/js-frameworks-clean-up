import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

const favoriteSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    addToFavorites(state, action) {
      const newItemId = action.payload;
      console.log(newItemId)
      const existingItem = state.favorites.find(
        (item) => item === newItemId
      );
      if (existingItem != newItemId) {
        state.favorites.push(action.payload);
        console.log(state.favorites);
      }
    },

    removeItem(state, action) {
        state.favorites = state.favorites.filter(item => item!== action.payload);
    }
  },
});

export const{addToFavorites,removeItem}=favoriteSlice.actions;
export default favoriteSlice.reducer;
