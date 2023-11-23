import { configureStore } from "@reduxjs/toolkit";
import combinedApi from "./apiCombined";
import { peoplePaginationReducer, planetsPaginationReducer, starshipsPaginationReducer } from "../redux/paginationSlice.js";

export const store = configureStore({
  reducer: {
    [combinedApi.reducerPath]: combinedApi.reducer,
    peoplePagination: peoplePaginationReducer,
    planetsPagination: planetsPaginationReducer,
    starshipsPagination: starshipsPaginationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(combinedApi.middleware),
});