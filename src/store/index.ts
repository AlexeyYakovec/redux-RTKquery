import { configureStore } from "@reduxjs/toolkit";
import { githubApi } from "./github/github.api";
import { setupListeners } from "@reduxjs/toolkit/query";
import { githubReducer } from "./github/github.slice";

export const store = configureStore({
   reducer: {
      [githubApi.reducerPath]: githubApi.reducer,
      github: githubReducer,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(githubApi.middleware), // middleware позволяет работать с кэшем, с автоматическими рефрешерами и т.д
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
