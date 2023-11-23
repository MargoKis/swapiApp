import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: 1,
};

const peoplePaginationSlice = createSlice({
  name: "peoplePagination",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

const planetsPaginationSlice = createSlice({
  name: "planetsPagination",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

const starshipsPaginationSlice = createSlice({
  name: "starshipsPagination",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setCurrentPage: setPeopleCurrentPage } = peoplePaginationSlice.actions;
export const { setCurrentPage: setPlanetsCurrentPage } = planetsPaginationSlice.actions;
export const { setCurrentPage: setStarshipsCurrentPage } = starshipsPaginationSlice.actions;

export const peoplePaginationReducer = peoplePaginationSlice.reducer;
export const planetsPaginationReducer = planetsPaginationSlice.reducer;
export const starshipsPaginationReducer = starshipsPaginationSlice.reducer;
