import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const REACT_FAVORITE_KEY = "rfk";

interface GithubState {
   favorites: string[];
}

const initialState: GithubState = {
   favorites: JSON.parse(localStorage.getItem(REACT_FAVORITE_KEY) ?? "[]"),
};

export const githubSlice = createSlice({
   name: "guthub",
   initialState,
   reducers: {
      addFavorite(state, action: PayloadAction<string>) {
         state.favorites.push(action.payload);
         localStorage.setItem(
            REACT_FAVORITE_KEY,
            JSON.stringify(state.favorites)
         );
      }, // PayloadAction<string> - какие данные принимает
      removeFavorite(state, action: PayloadAction<string>) {
         state.favorites = state.favorites.filter((f) => f !== action.payload);
         localStorage.setItem(
            REACT_FAVORITE_KEY,
            JSON.stringify(state.favorites)
         );
      },
   },
});

export const githubActions = githubSlice.actions;
export const githubReducer = githubSlice.reducer;
