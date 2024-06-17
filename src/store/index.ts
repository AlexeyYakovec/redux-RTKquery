import { configureStore } from "@reduxjs/toolkit";
import { githubApi } from "./github/github.api";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
   reducer: {
      [githubApi.reducerPath]: githubApi.reducer,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(githubApi.middleware), // middleware позволяет работать с кэшем, с автоматическими рефрешерами и т.д
});

setupListeners(store.dispatch);
