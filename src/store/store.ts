import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { launchApi } from "../feather/launchApi";

export const store = configureStore({
  reducer: {
    [launchApi.reducerPath]: launchApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(launchApi.middleware),
});

setupListeners(store.dispatch);
